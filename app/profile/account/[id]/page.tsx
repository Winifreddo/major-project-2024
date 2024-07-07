import prisma from "@/lib/prisma";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { auth } from "@/auth.config";

export default async function page() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/profile/settings");
  }

  const account = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
    include: { profile: true },
  });
  console.log(account?.profile);
  return (
    <div>
      <ul>
        <li>{account?.profile?.firstName}</li>
        <li>{account?.profile?.lastName}</li>
        <li>{account?.email}</li>
        <li>{account?.profile?.phone}</li>
      </ul>
    </div>
  );
}
