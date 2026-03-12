import type { CollectionConfig } from 'payload'

export const Spaces: CollectionConfig = {
  slug: 'spaces',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'capacity', 'updatedAt']
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'text' },
    { name: 'capacity', type: 'number' },
    { name: 'imageURL', type: 'text', required: true }
  ]
}
