import prisma from "@/lib/prisma";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

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
