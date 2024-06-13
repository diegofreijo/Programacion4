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


                    <Link href="/ssr" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            SSR
                        </NavigationMenuLink>
                    </Link>

                    <Link href="/csr" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            CSR
                        </NavigationMenuLink>
                    </Link>

                    <Link href="/ssg" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            SSG
                        </NavigationMenuLink>
                    </Link>

                    <Link href="/isr" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            ISR
                        </NavigationMenuLink>
                    </Link>


                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    );
}
