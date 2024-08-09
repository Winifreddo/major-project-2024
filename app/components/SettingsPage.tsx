import prisma from "@/lib/prisma";
import React from "react";
import { useState, useEffect } from "react";
import { Session } from "next-auth";
import getSession from "@/lib/getSession";
// import updateProfile from "@/app/updateActions";

interface UserProfile {
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  houseNumber: string | null;
  streetName: string | null;
  town: string | null;
  postCode: string | null;
  phone: string | null;
  profileId: number;
  cartId: number | null;
}
interface SettingsPageProps {
  user: UserProfile | null;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ user }) => {
  // TODO: add Update options and Validation

  return (
    <div>
      <form action="" className="w-full">
        <div className="flex ">
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder={user?.firstName || "First Name"}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder={user?.lastName || "Last Name"}
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder={user?.phone || "Phone Number"}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="houseNumber">House Number</label>
            <input
              type="text"
              name="houseNumber"
              id="houseNumber"
              placeholder={user?.houseNumber || "House Number"}
            />
            <label htmlFor="streetName">Street Name</label>
            <input
              type="text"
              name="streetName"
              id="streetName"
              placeholder={user?.streetName || "Street Name"}
            />
            <label htmlFor="town">Town</label>

            <input
              type="text"
              name="town"
              id="town"
              placeholder={user?.town || "Town"}
            />

            <label htmlFor="postCode">Post Code</label>
            <input
              type="text"
              name="postCode"
              id="postCode"
              placeholder={user?.postCode || "Post Code"}
            />
          </div>
        </div>
        <button
          type="submit"
          value="Update"
          className="bg-smokeGrey p-2 text-white w-full hover:bg-salmonPink hover:text-smokeGrey rounded-md m-3"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
