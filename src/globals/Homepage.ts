import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: () => true
  },
  fields: [
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Your Future Office' },
    { name: 'heroDescription', type: 'textarea', required: true },
    {
      name: 'stats',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true }
      ]
    },
    {
      name: 'featuredImages',
      type: 'array',
      minRows: 3,
      fields: [{ name: 'imageURL', type: 'text', required: true }]
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'buttonLabel', type: 'text', required: true, defaultValue: 'Book a Tour' }
      ]
    }
  ]
}
