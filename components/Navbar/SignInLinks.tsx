import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const SignInLinks = () => {
  return (
    <>
      <SignInButton mode="modal">
        <Button className="w-full">Login</Button>
      </SignInButton>
    </>
  );
};
export default SignInLinks;
