import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import Google from "next-auth/providers/google";
import { Adapter } from "next-auth/adapters";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
    theme: {
        brandColor: "#F5F0EC",
        logo: "/images/Reform.png",
    },
    adapter : PrismaAdapter(prisma) as Adapter,
  providers: [Google], 
})