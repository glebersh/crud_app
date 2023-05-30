import NextAuth, { NextAuthOptions, RequestInternal } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToMongoDB } from "@/mongodb/helpers/connectToMongoDB";
import Admins from "@/mongodb/models/admin.model";
import { compare } from "bcryptjs";

const GOOGLE_SECRET = process.env.NEXT_PUBLIC_GOOGLE_SECRET;
const GOOGLE_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

const GITHUB_ID = process.env.NEXT_PUBLIC_GITHUB_ID;
const GITHUB_SECRET = process.env.NEXT_PUBLIC_GITHUB_SECRET;

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: GITHUB_ID ? GITHUB_ID : '',
      clientSecret: GITHUB_SECRET ? GITHUB_SECRET : '',
    }),
    GoogleProvider({
      clientId: GOOGLE_ID ? GOOGLE_ID : '',
      clientSecret: GOOGLE_SECRET ? GOOGLE_SECRET : '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        connectToMongoDB();
        const { email: logInEmail, password: logInPassword } = credentials as {
          email: string,
          password: string,
        };

        const authResult: { _id: string, name: string, email: string, password: string, image: string | null } | null = await Admins.findOne({ email: logInEmail });

        if (!authResult) throw new Error('User not found');

        const checkedPassword = await compare(logInPassword, authResult.password);
        if (authResult.email !== logInEmail) throw new Error('Incorrect email');
        if (!checkedPassword) throw new Error('Incorrect password');

        return {
          id: authResult._id,
          name: authResult.name,
          email: authResult.email,
          image: authResult.image
        };
      },
    })
  ],
  secret: NEXTAUTH_SECRET
};

export default NextAuth(authOptions);