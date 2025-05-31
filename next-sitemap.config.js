/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://wilsonspeedacademy.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/admin/'],
            },
        ],
        additionalSitemaps: [
            `${process.env.NEXT_PUBLIC_SITE_URL || 'https://wilsonspeedacademy.com'}/sitemap.xml`,
        ],
    },
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/api/*', '/_next/*'],
    transform: async (config, path) => {
        // Custom priority for different pages
        const priorities = {
            '/': 1.0,
            '/programs': 0.9,
            '/book': 0.9,
            '/about': 0.8,
            '/results': 0.8,
            '/contact': 0.7,
            '/resources': 0.7,
        }

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: priorities[path] || config.priority,
            lastmod: new Date().toISOString(),
        }
    },
    additionalPaths: async (config) => [
        await config.transform(config, '/programs'),
        await config.transform(config, '/book'),
        await config.transform(config, '/results'),
    ],
} 