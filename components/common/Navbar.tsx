"use client"
import React from 'react'
import MobileNavbar from "./MobileNavbar";
import { navbarOption } from "@/data/navbarOption";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { getCookie, setCookie } from 'typescript-cookie';

function Navbar() {
    const token = getCookie("token");
   
    return (
        <nav className="h-16 z-[50] fixed pr-6 flex justify-between items-center border-b shadow-md w-full bg-gradient-to-tl from-[#7DE2FC] to-[#b6c6e5]">
            <div className="lg:hidden ml-3">
                <MobileNavbar />
            </div>
            <div className="flex items-center text-lg ">
                <Link href={"/"} className="ml-6">
                    <Image src="/College-logo.jpg" alt="logo" width={60} height={50} />
                </Link>
            </div>
            <div className="lg:flex hidden gap-5">
                {navbarOption.map((item, i) => (
                    <Link className="hover:text-primary" href={item.link} key={i}>
                        {item.label}
                    </Link>
                ))}
            </div>{
                token ? <div>
                    already login
                </div> :
                    <div className="flex gap-3">
                        <Link href={"/Register"}>
                            <Button variant="outline">Register</Button>
                        </Link>
                        <Link href={"/login"}>
                            <Button>Login</Button>
                        </Link>
                    </div>
            }

        </nav>
    )
}

export default Navbar
