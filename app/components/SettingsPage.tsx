"use client";
import { User } from "next-auth";
import React from "react";

interface SettingsPageProps {
  user: User;
}

const SettingsPage = ({ user }: SettingsPageProps) => {
  return (
    <div>
      <h1>Settings</h1>
      <div>
        <h2>Profile</h2>
        <ul>
          <li>Name: {user.name || ""}</li>
          <li>Email: {user.email || ""}</li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsPage;
