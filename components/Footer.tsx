import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Mail, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto max-w-screen-2xl px-4 py-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <h3 className="font-headline text-lg font-bold text-wsa-blue">
                            Wilson Speed Academy
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Elite speed training for track athletes.
                            Transform your performance with personalized coaching by Tyriq Wilson.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/programs" className="text-sm text-muted-foreground hover:text-wsa-blue transition-colors">
                                Programs
                            </Link>
                            <Link href="/about" className="text-sm text-muted-foreground hover:text-wsa-blue transition-colors">
                                About Tyriq
                            </Link>
                            <Link href="/results" className="text-sm text-muted-foreground hover:text-wsa-blue transition-colors">
                                Results
                            </Link>
                            <Link href="/book" className="text-sm text-muted-foreground hover:text-wsa-blue transition-colors">
                                Book Session
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Contact</h4>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <span>wilsonspeedacademy@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span>(504)-430-9308</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.instagram.com/wilsonspeedacademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-wsa-blue transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="https://twitter.com/wilsonspeedacademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-wsa-blue transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Center Logo */}
                <div className="mt-8 flex justify-center">
                    <Image
                        src="/images/WSA logo2.png"
                        alt="Wilson Speed Academy Logo"
                        width={120}
                        height={120}
                        className="h-20 w-20 opacity-60"
                    />
                </div>

                <div className="mt-8 border-t pt-8">
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Wilson Speed Academy. All rights reserved.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Austin, Texas
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 