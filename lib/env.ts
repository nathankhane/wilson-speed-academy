/**
 * Environment Variables Validation
 * Ensures all required environment variables are set
 */

interface EnvVars {
    NEXT_PUBLIC_SITE_URL?: string
    NEXT_PUBLIC_SITE_NAME?: string
    NEXT_PUBLIC_SITE_DESCRIPTION?: string
    NEXT_PUBLIC_CALENDLY_USERNAME?: string
}

const requiredEnvVars: (keyof EnvVars)[] = [
    // Add required env vars here
]

const optionalEnvVars: (keyof EnvVars)[] = [
    'NEXT_PUBLIC_SITE_URL',
    'NEXT_PUBLIC_SITE_NAME',
    'NEXT_PUBLIC_SITE_DESCRIPTION',
    'NEXT_PUBLIC_CALENDLY_USERNAME',
]

export function validateEnv(): EnvVars {
    const env: EnvVars = {}

    // Check required variables
    for (const envVar of requiredEnvVars) {
        const value = process.env[envVar]
        if (!value) {
            throw new Error(`Missing required environment variable: ${envVar}`)
        }
        env[envVar] = value as any
    }

    // Check optional variables and provide defaults
    for (const envVar of optionalEnvVars) {
        env[envVar] = process.env[envVar] as any
    }

    return env
}

// Default values
export const env = {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Wilson Speed Academy',
    SITE_DESCRIPTION: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Elite speed training for track athletes',
    CALENDLY_USERNAME: process.env.NEXT_PUBLIC_CALENDLY_USERNAME || 'wilsonspeedacademy',
}

// Validate environment on module load (only in production)
if (process.env.NODE_ENV === 'production') {
    validateEnv()
} 