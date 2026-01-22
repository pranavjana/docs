import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { Wrapper } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

type PageProps = {
  params: Promise<{
    mdxPath: string[]
  }>
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode="">
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
