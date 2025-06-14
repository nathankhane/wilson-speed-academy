"use client"

import React, { useEffect, useState } from 'react'
import Loading from '@/components/Loading'

// Note: Metadata is added in layout.tsx since this is a client component
// If needed, create a separate metadata.ts file or wrap this in a server component

export default function BookPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [scriptError, setScriptError] = useState(false)

    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true

        script.onload = () => {
            setIsLoading(false)
        }

        script.onerror = () => {
            setScriptError(true)
            setIsLoading(false)
        }

        document.body.appendChild(script)

        return () => {
            // Cleanup script on unmount
            const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
            if (existingScript) {
                document.body.removeChild(existingScript)
            }
        }
    }, [])

    if (scriptError) {
        return (
            <div className="min-h-screen">
                <section className="pt-16 pb-16">
                    <div className="container mx-auto max-w-screen-xl px-4">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
                                Book Your Session
                            </h1>
                            <div className="max-w-md mx-auto p-6 border rounded-lg bg-destructive/10 border-destructive/20">
                                <p className="text-destructive mb-4">
                                    Unable to load booking calendar. Please try again or contact us directly.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p><strong>Email:</strong> wilsonspeedacademy@gmail.com</p>
                                    <p><strong>Phone:</strong> (504) 430-9308</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 pb-12">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
                            Book Your Session
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            Select a convenient time for your training consultation with Tyriq Wilson.
                            All sessions include personalized coaching and performance analysis.
                        </p>
                    </div>
                </div>
            </section>

            {/* Calendly Widget Section */}
            <section className="py-12 pb-32">
                <div className="container mx-auto max-w-2xl px-4 flex flex-col items-center justify-center">
                    {isLoading && (
                        <div className="flex items-center justify-center h-96">
                            <div className="text-center">
                                <Loading size="lg" className="mb-4" />
                                <p className="text-muted-foreground">Loading booking calendar...</p>
                            </div>
                        </div>
                    )}
                    <div
                        className={`calendly-inline-widget ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 rounded-2xl shadow-2xl bg-white w-full`}
                        data-url="https://calendly.com/wilsonspeedacademy/consultation"
                        style={{ minWidth: '320px', width: '100%', maxWidth: '700px', height: '700px', margin: '0 auto', overflow: 'hidden' }}
                        aria-label="Select a time for your training consultation"
                    />
                </div>
            </section>
        </div>
    )
} 