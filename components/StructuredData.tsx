import React from 'react'

interface StructuredDataProps {
    data: any
}

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}

// Pre-defined structured data for the business
export const businessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wilson Speed Academy",
    "description": "Elite speed training for track athletes in New Orleans, LA. Transform your athletic performance with personalized coaching by Tyriq Wilson.",
    "url": "https://wilsonspeedacademy.com",
    "telephone": "+1-504-430-9308",
    "email": "wilsonspeedacademy@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Orleans",
        "addressRegion": "LA",
        "addressCountry": "US"
    },
    "founder": {
        "@type": "Person",
        "name": "Tyriq Wilson",
        "jobTitle": "Founder & Head Coach",
        "alumniOf": "St. Edwards University"
    },
    "serviceType": "Athletic Training",
    "areaServed": {
        "@type": "Place",
        "name": "New Orleans, Louisiana"
    },
    "priceRange": "$75-$500",
    "openingHours": [
        "Mo-Fr 06:00-20:00",
        "Sa 08:00-18:00"
    ]
}

export const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Elite Speed Training",
    "description": "Personalized speed training programs for track and field athletes",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Wilson Speed Academy"
    },
    "serviceType": "Athletic Training",
    "offers": [
        {
            "@type": "Offer",
            "name": "Elite Personal Training",
            "description": "Personalized 1-on-1 training with Tyriq Wilson",
            "price": "150",
            "priceCurrency": "USD"
        },
        {
            "@type": "Offer",
            "name": "Remote Coaching Plan",
            "description": "Custom training plans and virtual coaching",
            "price": "75",
            "priceCurrency": "USD"
        }
    ]
}

export default StructuredData 