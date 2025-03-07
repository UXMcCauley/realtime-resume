import mongoose, { Schema, Document } from "mongoose";

export interface IPlaylist extends Document {
    user: mongoose.Types.ObjectId;
    name: string;
    items: string[];
}

const PlaylistSchema = new Schema<IPlaylist>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    items: [{ type: String }],
});

export default mongoose.models.Playlist || mongoose.model<IPlaylist>("Playlist", PlaylistSchema);
