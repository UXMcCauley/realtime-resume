import { connectToDatabase } from "@/lib/mongodb";
import Playlist from "../../models/Playlist";
import User from "../../models/User";
import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    await connectToDatabase();
    const user = await User.findOne({ email: session.user?.email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const { item } = req.body;

    let playlist = await Playlist.findOne({ user: user._id, name: "Saved Items" });

    if (!playlist) {
        playlist = await Playlist.create({ user: user._id, name: "Saved Items", items: [] });
    }

    playlist.items.push(item);
    await playlist.save();

    return res.status(200).json({ message: "Item saved", playlist });
}
