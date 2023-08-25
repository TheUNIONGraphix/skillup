import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {

    interface Session {
        user: {
            address: string,
            token: string,
            uuid: string,
            role: string,
            name: string,
        } & DefaultSession["user"]
    }
}