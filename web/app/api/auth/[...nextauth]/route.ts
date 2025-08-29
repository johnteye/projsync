import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  })
  
],
  pages: {
    signIn: "/", // keep your sign-in page at /
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Always go to dashboard after login
      return "/dashboard";
    },
  },
});

export { handler as GET, handler as POST };
