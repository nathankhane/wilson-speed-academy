import React from 'react'
import { cn } from '@/lib/utils'

interface LoadingProps {
    size?: 'sm' | 'md' | 'lg'
    variant?: 'spinner' | 'pulse' | 'dots'
    className?: string
}

const Loading: React.FC<LoadingProps> = ({
    size = 'md',
    variant = 'spinner',
    className
}) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8'
    }

    if (variant === 'spinner') {
        return (
            <div className={cn('flex items-center justify-center', className)}>
                <div
                    className={cn(
                        'animate-spin rounded-full border-2 border-wsa-blue border-t-transparent',
                        sizeClasses[size]
                    )}
                    role="status"
                    aria-label="Loading"
                />
            </div>
        )
    }

    if (variant === 'pulse') {
        return (
            <div className={cn('flex items-center justify-center', className)}>
                <div
                    className={cn(
                        'bg-wsa-blue rounded-full animate-pulse',
                        sizeClasses[size]
                    )}
                    role="status"
                    aria-label="Loading"
                />
            </div>
        )
    }

    if (variant === 'dots') {
        return (
            <div className={cn('flex items-center justify-center space-x-1', className)}>
                <div className="w-2 h-2 bg-wsa-blue rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-2 h-2 bg-wsa-blue rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-2 h-2 bg-wsa-blue rounded-full animate-bounce" />
            </div>
        )
    }

    return null
}

export default Loading 