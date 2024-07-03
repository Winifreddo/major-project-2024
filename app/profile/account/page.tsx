import React from "react";
import prisma from "@/lib/prisma";

export default async function page() {
  const users = await prisma.user.findMany();

  return (
    <div>
      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>{user.createdAt.toString()}</li>
        </ul>
      ))}
    </div>
  );
}
