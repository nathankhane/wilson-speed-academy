import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
        description: {
            type: 'string',
            description: 'The description of the post',
            required: true,
        },
        image: {
            type: 'string',
            description: 'The featured image of the post',
            required: false,
        },
        author: {
            type: 'string',
            description: 'The author of the post',
            required: false,
        },
        tags: {
            type: 'list',
            of: { type: 'string' },
            description: 'Tags for the post',
            required: false,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `/resources/${doc._raw.flattenedPath}`,
        },
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.flattenedPath,
        },
    },
}))

export default makeSource({
    contentDirPath: './content',
    documentTypes: [Post],
}) 