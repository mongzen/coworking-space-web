import path from 'node:path'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { Memberships } from './collections/Memberships'
import { Spaces } from './collections/Spaces'
import { Homepage } from './globals/Homepage'

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(process.cwd(), 'src')
    }
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [{ name: 'name', type: 'text' }]
    },
    Memberships,
    Spaces
  ],
  globals: [Homepage],
  secret: process.env.PAYLOAD_SECRET || 'dev-secret',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db'
    }
  }),
  typescript: {
    outputFile: path.resolve(process.cwd(), 'src/payload-types.ts')
  }
})
