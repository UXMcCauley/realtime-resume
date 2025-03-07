import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    image?: string;
    playlists: mongoose.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Playlist" }],
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
