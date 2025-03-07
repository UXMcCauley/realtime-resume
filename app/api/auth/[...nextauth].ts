import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import { connectToDatabase } from "@/lib/mongodb";
import User from "../../../src/models/User"

export default NextAuth({
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID!,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async session({ session }) {
            await connectToDatabase();
            const user = session.user ? await User.findOne({ email: session.user.email }) : null;
            if (user && session.user) {
                (session.user as { id?: string } & typeof session.user).id = user._id.toString();
            }
            return session;
        },
        async signIn({ user }) {
            await connectToDatabase();
            const existingUser = await User.findOne({ email: user.email });
            if (!existingUser) {
                await User.create({ name: user.name, email: user.email, image: user.image, playlists: [] });
            }
            return true;
        },
    },
});
