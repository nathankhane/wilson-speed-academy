"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'

const MobileStickyCTA = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 lg:hidden">
            <Button asChild className="w-full shadow-lg">
                <Link href="/book" className="flex items-center justify-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Book Your Session</span>
                </Link>
            </Button>
        </div>
    )
}

export default MobileStickyCTA 