"use client"
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navbarOption } from "@/data/navbarOption";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger><Menu /></SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle />
          <SheetDescription className="flex flex-col gap-5">
            {
              navbarOption.map((item, i) => (

                <Link key={i} className=" hover:text-primary" href={item.link}>
                  <SheetClose>
                    {item.label}
                  </SheetClose>
                </Link>
              ))
            }
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar
