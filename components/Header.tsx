"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useTheme } from 'next-themes'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { resolvedTheme } = useTheme()

    // lock body scroll when drawer is open
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isOpen)
        return () => document.body.classList.remove("overflow-hidden")
    }, [isOpen])

    // close on ⎋
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false)
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    // Choose logo based on theme
    const logoSrc = resolvedTheme === "dark"
        ? "/images/WSA_logo_white.png"
        : "/images/WSA logo2.png"

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-background shadow">
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <Image
                        src={logoSrc}
                        alt="Wilson Speed Academy"
                        width={90}
                        height={90}
                        className="h-12 sm:h-20 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
                        priority
                        sizes="(max-width: 640px) 48px, 80px"
                    />
                </Link>

                {/* Center nav links (desktop) */}
                <nav className="hidden md:flex gap-8 items-center justify-center flex-1">
                    <HeaderLink href="/">Home</HeaderLink>
                    <HeaderLink href="/programs">Programs</HeaderLink>
                    <HeaderLink href="/about">About</HeaderLink>
                </nav>

                {/* Book Session button (desktop) */}
                <div className="hidden md:flex items-center">
                    <Link href="/book">
                        <button className="bg-wsa-blue text-white px-6 py-2 rounded-lg font-semibold shadow transition-all duration-200 hover:bg-wsa-blue/90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-wsa-blue/50">
                            Book Session
                        </button>
                    </Link>
                </div>

                {/* Hamburger (mobile) */}
                <button
                    className="md:hidden text-2xl p-2 ml-auto"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    ☰
                </button>
            </div>

            {/* ----- MOBILE DRAWER ----- */}
            {isOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-[60] bg-white dark:bg-background flex flex-col overflow-y-auto md:hidden animate-slide-in"
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                        className="absolute top-4 right-4 text-2xl p-2"
                    >
                        ✕
                    </button>

                    <nav className="mt-20 flex flex-col items-center gap-8 text-xl">
                        <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                        <MobileNavLink href="/programs" onClick={() => setIsOpen(false)}>Programs</MobileNavLink>
                        <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                        <Link href="/book" onClick={() => setIsOpen(false)}>
                            <button className="bg-wsa-blue text-white px-6 py-2 rounded-lg font-semibold shadow transition-all duration-200 hover:bg-wsa-blue/90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-wsa-blue/50 mt-4">
                                Book Session
                            </button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}

const HeaderLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="relative px-2 py-1 font-medium text-lg transition-all duration-200 hover:text-wsa-blue focus:text-wsa-blue group"
    >
        <span className="transition-all duration-300 group-hover:underline group-hover:underline-offset-8 group-active:scale-95">
            {children}
        </span>
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-wsa-blue transition-all duration-300 group-hover:w-full"></span>
    </Link>
)

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link
        href={href}
        onClick={onClick}
        className="text-xl py-2 px-4 rounded transition-all duration-200 hover:bg-wsa-blue/10 active:scale-95 focus:bg-wsa-blue/20"
    >
        {children}
    </Link>
)

export default Header 