/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://wilsonspeedacademy.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/api/*', '/admin/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
        ],
        additionalSitemaps: [
            `${process.env.NEXT_PUBLIC_SITE_URL || 'https://wilsonspeedacademy.com'}/sitemap.xml`,
        ],
    },
    transform: async (config, path) => {
        // Custom priority based on page importance
        const customPriorities = {
            '/': 1.0,
            '/programs': 0.9,
            '/book': 0.9,
            '/about': 0.8,
        }

        return {
            loc: path,
            changefreq: path === '/' ? 'weekly' : 'monthly',
            priority: customPriorities[path] || 0.7,
            lastmod: new Date().toISOString(),
        }
    },
} 