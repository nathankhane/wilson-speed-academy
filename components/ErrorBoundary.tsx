"use client"

import React from 'react'

interface ErrorBoundaryProps {
    children: React.ReactNode
    fallback?: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
    error?: Error
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Log error to monitoring service in production
        if (process.env.NODE_ENV === 'production') {
            // TODO: Send to error monitoring service (e.g., Sentry)
            // console.error('ErrorBoundary caught an error:', error, errorInfo)
        } else {
            // eslint-disable-next-line no-console
            console.error('ErrorBoundary caught an error:', error, errorInfo)
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="min-h-screen flex items-center justify-center p-4">
                        <div className="text-center max-w-md mx-auto">
                            <h2 className="text-2xl font-bold text-destructive mb-4">
                                Something went wrong
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-wsa-blue text-white px-4 py-2 rounded-lg hover:bg-wsa-blue/90 transition-colors"
                            >
                                Refresh Page
                            </button>
                        </div>
                    </div>
                )
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary 