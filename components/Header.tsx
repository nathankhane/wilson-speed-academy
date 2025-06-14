"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useTheme } from 'next-themes'

const Logo = () => (
    <Link href="/">
        <Image
            src="/images/WSA_logo_white.png"
            alt="Wilson Speed Academy"
            width={90}
            height={90}
            className="h-12 sm:h-20 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
            priority
            sizes="(max-width: 640px) 48px, 80px"
        />
    </Link>
)

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
        <Link href="/" onClick={onClick}>Home</Link>
        <Link href="/programs" onClick={onClick}>Programs</Link>
        <Link href="/about" onClick={onClick}>About</Link>
        <Link href="/#book" onClick={onClick} className="font-semibold">
            Book Session
        </Link>
    </>
)

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

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-background shadow">
            {/* desktop nav  */}
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                <Logo />

                {/* hamburger */}
                <button
                    className="md:hidden text-2xl p-2"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    ☰
                </button>

                {/* desktop links */}
                <nav className="hidden md:flex gap-6">
                    <NavLinks />
                </nav>
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
                        <NavLinks onClick={() => setIsOpen(false)} />
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header 