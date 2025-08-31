import { CircleEllipsis } from "lucide-react";
import { links } from "@/utils/links";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import SignOutLinks from "./SignOutLinks";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import SignInLinks from "./SignInLinks";

const DropdownListMenu = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <CircleEllipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="space-y-1">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>

          <DropdownMenuSeparator />
          <SignedOut>
            <SignInLinks />
            <SignUpButton mode="modal">
              <Button className="w-full" variant="secondary">
                Register
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            {links.map((item, index) => {
              return (
                <DropdownMenuItem key={index} className="w-full">
                  <Link href={item.href} className="w-full block">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}

            <SignOutLinks />
          </SignedIn>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default DropdownListMenu;
