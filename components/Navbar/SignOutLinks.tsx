"use client";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { toast } from "sonner";

const SignOutLinks = () => {
  const handleLogout = () => {
    toast("You have been logged out.");
  };
  return (
    <>
      <SignOutButton redirectUrl="/">
        <Button className="w-full" onClick={handleLogout}>
          Logout
        </Button>
      </SignOutButton>
    </>
  );
};
export default SignOutLinks;
