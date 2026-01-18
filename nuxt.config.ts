export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'nuxt-studio',
        '@nuxt/ui',
    ],
    studio: {
        repository: {
            owner: 'Frigear-nu',
            repo: 'frigear-dev',
            branch: 'main',
        },
    },
})
