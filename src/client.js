import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const clientConfig = {
    projectId: 'ohx8wpby',
}

export const client = createClient({
    projectId: clientConfig.projectId,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-03-01',
    token: 'skCbGLLUR1lUlFOZ8tWeuIFtsideAUmZTfiK5MLQoMcUwCsCG5gaZnpiaOcnv9KQuRnZSrVsUhFn7HFzb3Avin2OTkiz0x00Bo2YrEIPCjn2hxZOygJJnpWOaH4Q4ZTOoIa570f0bUQ1QX8LttFGHpwSUuKhFIpZ3Qr6g1yZpcod4dQGhUvI'
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

const asdas=0