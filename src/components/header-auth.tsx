"use client";

import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import * as actions from "@/actions";
import { useSession } from "next-auth/react";
export default function HeaderAuth() {
  const session = useSession();
  let authcontent: React.ReactNode;
  if (session.status === "loading") {
    authcontent = null;
  } else if (session.data?.user) {
    authcontent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data?.user.image || ""}></Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.SignOut}>
              <Button type="submit">SignOut</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authcontent = (
      <>
        <NavbarItem>
          <form action={actions.SignIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.SignOut}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authcontent;
}
