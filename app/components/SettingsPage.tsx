"use client";

import React from "react";
import { useState, useEffect } from "react";
import prisma from "@/lib/prisma";

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
      <form action="" className="flex flex-col w-full mx-auto gap-2">
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
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder={user?.phone || "Phone Number"}
        />

        <button
          type="submit"
          value="Update"
          className="bg-black text-bgColor rounded-md p-2"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
