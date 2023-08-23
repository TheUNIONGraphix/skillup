import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
       
        const res = await fetch("http://localhost:8000/api/v1/auth/login", {
          method: 'POST',
          body: JSON.stringify({
            loginId: credentials?.username,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
  
        if (res.ok && data) {
          console.log(data)
          return data
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  
  session: {
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/login",
    verifyRequest: "/login",
    newUser: "/signup"
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async jwt({ token, user}) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token as any
      return session
    }
  }
}