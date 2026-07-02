import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { siteContent } from './src/content/site.js'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

function contentMetadata() {
  const replacements = {
    '__SITE_NAME__': siteContent.name,
    '__SITE_TITLE__': siteContent.seo.title,
    '__SITE_DESCRIPTION__': siteContent.seo.description,
    '__SITE_LOCALE__': siteContent.seo.locale,
    '__SOCIAL_CARD__': siteContent.seo.socialCard,
    '__NOT_FOUND_TITLE__': siteContent.pages.notFound.seoTitle,
    '__NOT_FOUND_DESCRIPTION__': siteContent.pages.notFound.seoDescription,
  }

  return {
    name: 'content-metadata',
    transformIndexHtml(html) {
      return Object.entries(replacements).reduce(
        (output, [token, value]) => output.replaceAll(token, value),
        html,
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), contentMetadata()],
  build: {
    rollupOptions: {
      input: {
        main: `${projectRoot}index.html`,
        notFound: `${projectRoot}404.html`,
      },
    },
  },
})
