import React from "react";
import { Wrapper } from "..";
import Link from "next/link";
import { buttonVariants } from "@/ui";
import { ArrowRight } from "lucide-react";
import {
  RegisterLink,
  LoginLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { Avatar } from "@radix-ui/themes";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  return (
    <nav className="sticky h-14 inset-x-0 top-0  z-30 w-full border-b border-b-gray bg-white/75 backgrop-blur-lg transition-all">
      <Wrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-300">
          <Link href="/" className="flex z-40 font-bold">
            <span>sass.</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            {!user ? (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>

                <LoginLink
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Login
                </LoginLink>

                <RegisterLink
                  className={buttonVariants({
                    size: "sm",
                    className:
                      "flex items-center space-x-1.5 px-4  py-2 bg-slate-950 text-cyan-50",
                  })}
                >
                  Register <ArrowRight className="ml-1.5 h-5 w-5" />
                </RegisterLink>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Dashboard
                </Link>

                <div>
                  <p>{user.email}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};
