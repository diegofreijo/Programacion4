"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Menu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>


                    <Link href="/ssr/pepe" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            SSR
                        </NavigationMenuLink>
                    </Link>

                    <Link href="/csr?nombre=pepe" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            CSR
                        </NavigationMenuLink>
                    </Link>

                    <Link href="/ssg/pepe" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            SSG
                        </NavigationMenuLink>
                    </Link>

                    <Link href="/isr/pepe" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            ISR
                        </NavigationMenuLink>
                    </Link>


                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    );
}
