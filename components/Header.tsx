"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigationLinks = [
        { href: '/', label: 'Home' },
        { href: '/programs', label: 'Programs' },
        { href: '/about', label: 'About' },
        { href: '/results', label: 'Results' },
        { href: '/resources', label: 'Resources' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/images/WSA logo1.png"
                        alt="Wilson Speed Academy"
                        width={50}
                        height={50}
                        className="h-12 w-12"
                    />
                    <span className="font-headline text-xl font-bold text-wsa-blue">
                        Wilson Speed Academy
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center space-x-6 lg:flex">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium transition-colors hover:text-wsa-blue"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA and Theme Toggle */}
                <div className="hidden items-center space-x-4 lg:flex">
                    <ThemeToggle />
                    <Button asChild size="lg">
                        <Link href="/book">Book Session</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center space-x-2 lg:hidden">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="border-t bg-background lg:hidden"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <nav className="flex flex-col space-y-4">
                                {navigationLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm font-medium transition-colors hover:text-wsa-blue"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-4">
                                    <Button asChild className="w-full">
                                        <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                                            Book Session
                                        </Link>
                                    </Button>
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header 