import {NextResponse} from "next/server";
import {MongoClient} from "mongodb";

export async function GET(){
// Load environment variables for MongoDB
    const uri = process.env.MONGODB_URI as string;
    const dbName = process.env.MONGODB_DB as string;

    if (!uri || !dbName) {
        return NextResponse.json({ error: "Missing database configuration" }, { status: 500 });
    }

    // Connect to MongoDB
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db(dbName);

        // Fetch the first employee record
        const data = db.collection("treemapData");
        const gotData = data.find({}).toArray(); // Exclude _id

        if (!gotData) {
            return NextResponse.json({ error: "No employee records found" }, { status: 404 });
        }

        return NextResponse.json(gotData);
    } catch (error) {
        console.error("Error fetching employee data:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    } finally {
        await client.close();
    }
}
