import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: 'https://hacfy.com/', lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: 'https://hacfy.com/about', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://hacfy.com/trainings', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://hacfy.com/join-us', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://hacfy.com/contact', lastModified: now, changeFrequency: 'monthly', priority: 0.6 }
  ]
}
