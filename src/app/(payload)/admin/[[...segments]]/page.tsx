import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'


type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}



export const generateMetadata = async ({ params, searchParams }: Args) => {
  // Ensure segments is always string[] for RootPage, but for generatePageMetadata, params must be Promise<{ [key: string]: string | string[] }>
  const resolvedParams = await params;
  const safeParams = { ...resolvedParams, segments: resolvedParams.segments ?? [] };
  return generatePageMetadata({
    config,
    params: Promise.resolve(safeParams),
    searchParams
  });
}


const Page = async ({ params, searchParams }: Args) => {
  const resolvedParams = await params;
  return RootPage({
    config,
    params: Promise.resolve({ segments: resolvedParams.segments ?? [] }),
    searchParams,
    importMap: {}
  });
}

export default Page
