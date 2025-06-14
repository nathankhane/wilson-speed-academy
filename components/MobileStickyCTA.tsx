"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'

const MobileStickyCTA = () => {
    return (
        <div className="fixed bottom-4 left-0 right-0 z-40 px-4 lg:hidden pointer-events-none">
            <div className="max-w-md mx-auto pointer-events-auto">
                <Button asChild className="w-full shadow-xl rounded-xl py-4 text-lg animate-cta-pulse">
                    <Link href="/book" className="flex items-center justify-center space-x-2">
                        <Calendar className="h-5 w-5" />
                        <span>Book Your Session</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default MobileStickyCTA 