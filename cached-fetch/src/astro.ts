import type { AstroIntegration } from 'astro'

export default (): AstroIntegration => ({
  name: '@e1himself/cached-fetch',
  hooks: {
    'astro:config:setup': ({ injectScript }) => {
      injectScript('page-ssr', `import '@e1himself/cached-fetch/register'`)
    }
  }
})
