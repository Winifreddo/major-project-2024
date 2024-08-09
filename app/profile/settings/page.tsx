import { Metadata } from "next";
import React from "react";
// import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/profile/settings");
  } else {
    console.log("hello");
  }
  const response = await prisma.profile.findUnique({
    where: {
      userId: user?.id,
    },
  });
  const updateProfile = async (formData: FormData) => {
    "use server";
    const data = {
      user: user,
      userId: user.id,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      phone: formData.get("phone") as string,
      houseNumber: formData.get("houseNumber") as string,
      streetName: formData.get("streetName") as string,
      town: formData.get("town") as string,
      postCode: formData.get("postCode") as string,
    };

    try {
      const existingProfile = await prisma.profile.findUnique({
        where: {
          userId: user.id,
        },
      });
      let response;
      if (existingProfile) {
        const updateData: any = {
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          houseNumber: data.houseNumber,
          streetName: data.streetName,
          town: data.town,
          postCode: data.postCode,
        };

        if (data.userId) {
          updateData.userId = data.userId;
        }

        response = await prisma.profile.update({
          where: {
            userId: user.id,
          },
          data: {
            ...updateData,
          },
        });
      } else {
        const createData: any = {
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          houseNumber: data.houseNumber,
          streetName: data.streetName,
          town: data.town,
          postCode: data.postCode,
        };

        if (data.userId) {
          createData.userId = data.userId;
        }

        response = await prisma.profile.create({
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            houseNumber: data.houseNumber,
            streetName: data.streetName,
            town: data.town,
            postCode: data.postCode,
            user: {
              connect: { id: user.id },
            },
          },
        });
        revalidatePath("/profile/settings");
        console.log("created");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full grid grid-cols-1 font-poppins place-items-center gap-2 p-16 leading-loose">
      <h1 className="font-poppins text-4xl font-semibold ">My details</h1>
      <p className="md:mb-24 mb-4">View and update your details here.</p>
      <form action={updateProfile} className="w-full rounded-md shadow-md">
        <div className="grid md:grid-cols-2 grid-cols-1 place-content-center md:m-4">
          <div className="flex flex-col font-poppins m-4 ">
            <label htmlFor="firstName" className="font-semibold py-1">
              First Name
            </label>
            <input
              className="rounded-md shadow-md p-2"
              type="text"
              name="firstName"
              id="firstName"
              placeholder={response?.firstName || "First Name"}
            />
            <label htmlFor="lastName" className="font-semibold py-1">
              Last Name
            </label>
            <input
              className="rounded-md shadow-md p-2"
              type="text"
              name="lastName"
              id="lastName"
              placeholder={response?.lastName || "Last Name"}
            />
            <label htmlFor="phone" className="font-semibold py-1">
              Phone Number
            </label>
            <input
              className="rounded-md shadow-md p-2"
              type="text"
              name="phone"
              id="phone"
              placeholder={response?.phone || "Phone Number"}
            />
          </div>
          <div className="flex flex-col font-poppins m-4">
            <label htmlFor="houseNumber" className="font-semibold py-1">
              House Number
            </label>
            <input
              className="rounded-md shadow-md p-2"
              type="text"
              name="houseNumber"
              id="houseNumber"
              placeholder={response?.houseNumber || "House Number"}
            />
            <label htmlFor="streetName" className="font-semibold py-1">
              Street Name
            </label>
            <input
              className="rounded-md shadow-md p-2"
              type="text"
              name="streetName"
              id="streetName"
              placeholder={response?.streetName || "Street Name"}
            />
            <label htmlFor="town" className="font-semibold py-1">
              Town
            </label>

            <input
              className="rounded-md shadow-md p-2"
              type="text"
              name="town"
              id="town"
              placeholder={response?.town || "Town"}
            />

            <label htmlFor="postCode" className="font-semibold py-1">
              Post Code
            </label>
            <input
              className="rounded-md shadow-md p-2"
              type="text"
              name="postCode"
              id="postCode"
              placeholder={response?.postCode || "Post Code"}
            />
          </div>
        </div>
        <div className="flex justify-center mb-2">
          <button
            type="submit"
            value="Update"
            className="bg-smokeGrey px-3 py-1 text-white hover:bg-salmonPink hover:text-smokeGrey rounded-md md:m-3 m-2"
          >
            Update
          </button>
        </div>
      </form>
      {/* <SettingsPage user={response} /> */}
    </div>
  );
}
