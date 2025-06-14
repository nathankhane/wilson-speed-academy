"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Mail, Phone } from 'lucide-react'
import { useTheme } from 'next-themes'

const Footer = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    // Ensure component is mounted before accessing theme
    useEffect(() => {
        setMounted(true)
    }, [])

    // Determine which logo to use based on theme, with proper fallback
    const logoSrc = mounted && resolvedTheme === 'dark'
        ? '/images/WSA_logo_white.png'
        : '/images/WSA logo2.png'

    return (
        <footer className="border-t bg-background pb-28 sm:pb-8">
            <div className="container mx-auto max-w-screen-2xl px-4 py-8">
                <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-8 items-start">
                    {/* Logo and Description */}
                    <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
                        <h3 className="font-headline text-lg font-bold text-wsa-blue">
                            Wilson Speed Academy
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
                            Elite speed training for track athletes.
                            Transform your performance with personalized coaching by Tyriq Wilson.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 flex flex-col items-center">
                        <h4 className="font-semibold text-center">Quick Links</h4>
                        <nav className="flex flex-col space-y-2 items-center text-center">
                            <Link href="/programs" className="text-base text-muted-foreground hover:text-wsa-blue transition-colors py-2 px-4 rounded-lg focus:bg-muted">Programs</Link>
                            <Link href="/about" className="text-base text-muted-foreground hover:text-wsa-blue transition-colors py-2 px-4 rounded-lg focus:bg-muted">About Tyriq</Link>
                            <Link href="/book" className="text-base text-muted-foreground hover:text-wsa-blue transition-colors py-2 px-4 rounded-lg focus:bg-muted">Book Session</Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 text-center md:text-right flex flex-col items-center md:items-end">
                        <h4 className="font-semibold">Contact</h4>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center md:justify-end space-x-3 text-base text-muted-foreground">
                                <Mail className="h-6 w-6" />
                                <span>wilsonspeedacademy@gmail.com</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-end space-x-3 text-base text-muted-foreground">
                                <Phone className="h-6 w-6" />
                                <span>(504)-430-9308</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-6 justify-center md:justify-end mt-2">
                            <Link
                                href="https://www.instagram.com/wilsonspeedacademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-wsa-blue transition-colors"
                            >
                                <Instagram className="h-7 w-7" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="https://twitter.com/wilsonspeedacademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-wsa-blue transition-colors"
                            >
                                <Twitter className="h-7 w-7" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Center Logo */}
                <div className="mt-8 flex justify-center items-center">
                    <Image
                        src={logoSrc}
                        alt="Wilson Speed Academy Logo"
                        width={60}
                        height={60}
                        className="h-12 w-auto opacity-60"
                    />
                </div>

                {/* Location Only - Perfectly Centered */}
                <div className="mt-6 text-center">
                    <p className="text-base text-muted-foreground">
                        Austin, Texas
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer 