"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { name: "Transakcijsko savjetovanje", href: "/transactional" },
    { name: "Finansijsko savjetovanje", href: "/financial" },
    { name: "Procjene vrijednosti", href: "/evaluation" },
    { name: "Kontroling i ostale usluge", href: "/controlling" },
]

export const Header = () => {
    const [menuState, setMenuState] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <nav className="fixed z-20 w-full px-2">
                <div
                    className={cn(
                        "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
                        isScrolled && "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5",
                    )}
                >
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                <img src={"/logo-bpm.png"} alt="logo" className="h-10 w-40" />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? "Close Menu" : "Open Menu"}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                            >
                                <Menu className={cn("m-auto size-6 duration-200", menuState && "rotate-180 scale-0 opacity-0")} />
                                <X
                                    className={cn(
                                        "absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200",
                                        menuState && "rotate-0 scale-100 opacity-100",
                                    )}
                                />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="text-center">
                                        <Link
                                            href={item.href}
                                            className="text-foreground hover:text-muted-foreground block duration-150"
                                        >
                                            {/* Split the menu item name into two lines */}
                                            {item.name.split(" ").map((word, i, arr) => {
                                                // Display first half of words on first line, second half on second line
                                                const midpoint = Math.ceil(arr.length / 2)
                                                if (i === 0) {
                                                    // First word - start first line
                                                    return (
                                                        <span key={i} className="block">
                                                            {word} {i < midpoint - 1 ? arr[i + 1] : ""}
                                                        </span>
                                                    )
                                                } else if (i === midpoint) {
                                                    // Start of second line
                                                    return (
                                                        <span key={i} className="block">
                                                            {word} {i < arr.length - 1 ? arr[i + 1] : ""}
                                                        </span>
                                                    )
                                                } else if (i !== 1 && i !== midpoint + 1) {
                                                    // Skip words that were already included
                                                    return null
                                                }
                                                return null
                                            })}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div
                            className={cn(
                                "bg-background mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
                                menuState ? "block" : "hidden lg:flex",
                            )}
                        >
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                                onClick={() => setMenuState(false)}
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                {/*
                <LanguageToggle />
                <ThemeToggle />
            */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}