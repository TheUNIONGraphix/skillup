import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        loginId: { label: "LoginId", type: "text", placeholder: "SSGPOINT" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        if(!credentials?.loginId || !credentials?.password) return null
        
        const res = await fetch("http://localhost:8000/api/v1/auth/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            loginId: credentials?.loginId,
            password: credentials?.password,
          })
        })

        const user = await res.json()
  
        if (res.ok && user) {
          console.log(user)
          return {
            id: user.uuid,
            token: user.token,
          }
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
}