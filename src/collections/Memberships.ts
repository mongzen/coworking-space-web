import type { CollectionConfig } from 'payload'

export const Memberships: CollectionConfig = {
  slug: 'memberships',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'priceTHB', 'updatedAt']
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'priceTHB', type: 'number', required: true },
    {
      name: 'benefits',
      type: 'array',
      fields: [{ name: 'benefit', type: 'text', required: true }]
    }
  ]
}
