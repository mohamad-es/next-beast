"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png";
import { ModeToggle } from "../darkmode/mode-toggle";

const NavItems = [
  {
    title: "خانه",
    link: "/",
  },
  {
    title: "درباره ما",
    link: "/about-us",
  },
  {
    title: "تماس با ما",
    link: "/contact-us",
  },
];

export default function Header() {
  return (
    <header className="lg:container items-center mx-auto px-2 lg:px-10 lg:py-5 flex justify-between">
      <div className="flex gap-2 order-3 lg:order-1">
        <ModeToggle />
        <Button size="sm">
          <UserIcon />
          ثبت نام/ ورود
        </Button>
      </div>

      <div className="hidden lg:flex gap-8 order-2">
        {NavItems.map((item) => (
          <Link className="text-secondary-foreground text-sm " href={item.link} key={item.title}>
            {item.title}
          </Link>
        ))}
      </div>

      <div className="order-2 lg:order-3 gap-3 flex items-center">
        <Image src={logo} width={80} height={80} alt="لوگو روجابوم" />
      </div>

      {/* Navbar mobile */}
      <div className="lg:hidden order-1 text-secondary-foreground text-sm dark:text-secondary">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Image src={logo} width={60} height={60} alt="لوگو" />
              </SheetTitle>
            </SheetHeader>

            <div className="flex px-5 flex-col gap-3">
              {NavItems.map((item) => (
                <Link href={item.link} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>

            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
