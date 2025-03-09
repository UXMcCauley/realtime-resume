import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import talentCardData from "@/lib/talentCardData.json";

function generateProgress(skillData: any[]) {
  return skillData.map(skill => {
    const totalRequired = skill.requirement.reduce((sum: number, req: { amount: number }) => sum + req.amount, 0);
    const hoursPerformed = Math.floor(Math.random() * totalRequired); // Ensure it's less than total required

    return {
      skill: skill.skill,
      hoursPerformed
    };
  });
}

// Generate progress data for each industry
const progress = {
  carpenter: { skills: generateProgress(talentCardData.carpenter) },
  roofing: { skills: generateProgress(talentCardData.roofing) },
  concrete: { skills: generateProgress(talentCardData.concrete) },
};

// Calculate total worked hours per industry
const totalIndustryHours = {
  carpenter: progress.carpenter.skills.reduce((sum, skill) => sum + skill.hoursPerformed, 0),
  roofing: progress.roofing.skills.reduce((sum, skill) => sum + skill.hoursPerformed, 0),
  concrete: progress.concrete.skills.reduce((sum, skill) => sum + skill.hoursPerformed, 0),
};

// Calculate total worked hours across all industries
const totalWorkedHours = totalIndustryHours.carpenter + totalIndustryHours.roofing + totalIndustryHours.concrete;

// Assign industry percentage contribution at the industry level
if (totalWorkedHours > 0) {
  Object.keys(totalIndustryHours).forEach(industry => {
    (progress[industry as keyof typeof progress] as { skills: { skill: any; hoursPerformed: number; }[]; percentageOfTotal?: string }).percentageOfTotal =
        ((totalIndustryHours[industry as keyof typeof totalIndustryHours] / totalWorkedHours) * 100).toFixed(2) + "%";
  });
}

// import { NextResponse } from 'next/server';


export async function GET() {
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
    const employeeCollection = db.collection("employees");
    const employee = await employeeCollection.findOne({}, { projection: { _id: 0 } }); // Exclude _id

    // Fetch all attendance records
    const attendanceCollection = db.collection("attendance");
    const attendanceRecords = await attendanceCollection.find().toArray();

    if (!employee) {
      return NextResponse.json({ error: "No employee records found" }, { status: 404 });
    }

    // Attach attendance data to employee response
    const response = {
      ...employee,
      attendance: attendanceRecords,
      progress,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching employee data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await client.close();
  }
}
