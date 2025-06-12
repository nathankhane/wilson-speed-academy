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
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto max-w-screen-2xl px-6 py-6">
                <div className="grid grid-cols-3 items-center h-20">
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
                                    width={90}
                                    height={90}
                                    className="h-20 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
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
                                className="transition-all duration-300 hover:scale-110"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </Button>
                        </div>
                    </div>
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