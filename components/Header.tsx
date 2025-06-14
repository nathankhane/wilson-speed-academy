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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    const navigationLinks = [
        { href: '/', label: 'Home' },
        { href: '/programs', label: 'Programs' },
        { href: '/about', label: 'About' },
    ]

    // Ensure component is mounted before accessing theme
    useEffect(() => {
        setMounted(true)
    }, [])

    // Determine which logo to use based on theme, with proper fallback
    const logoSrc = mounted && resolvedTheme === 'dark'
        ? '/images/WSA_logo_white.png'
        : '/images/WSA logo2.png'

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
            <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 py-4 sm:py-6">
                <div className="grid grid-cols-3 items-center h-16 sm:h-20">
                    {/* Left: Logo */}
                    <div className="flex justify-start">
                        <Link href="/" className="flex items-center group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src={logoSrc}
                                    alt="Wilson Speed Academy"
                                    width={60}
                                    height={60}
                                    className="h-12 w-auto sm:h-20 transition-all duration-300 group-hover:drop-shadow-lg"
                                    priority
                                />
                            </motion.div>
                        </Link>
                    </div>

                    {/* Center: Navigation */}
                    <nav className="hidden lg:flex items-center justify-center space-x-8">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-base font-medium transition-all duration-300 hover:text-wsa-blue hover:scale-105 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wsa-blue transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right: CTA and Theme Toggle */}
                    <div className="flex items-center justify-end space-x-4">
                        <div className="hidden lg:flex items-center space-x-4">
                            <ThemeToggle />
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button asChild size="lg" className="transition-all duration-300 hover:shadow-lg">
                                    <Link href="/book">Book Session</Link>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center space-x-2 lg:hidden">
                            <ThemeToggle />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle menu"
                                className="transition-all duration-300 hover:scale-110 h-12 w-12"
                            >
                                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="fixed inset-0 z-50 bg-background/95 backdrop-blur flex flex-col items-center justify-center space-y-8 lg:hidden"
                    >
                        <nav className="flex flex-col space-y-6 w-full max-w-xs mx-auto text-center">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-semibold py-3 rounded-lg transition-colors hover:text-wsa-blue focus:bg-muted"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button asChild className="w-full py-4 text-lg rounded-xl mt-4">
                                <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                                    Book Session
                                </Link>
                            </Button>
                        </nav>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                            className="absolute top-6 right-6 h-12 w-12"
                        >
                            <X size={32} />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header 