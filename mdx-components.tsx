import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import type { MDXComponents } from 'mdx/types'

const docsComponents = getDocsMDXComponents({})

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...docsComponents,
    ...components,
  }
}

// Export wrapper directly for use in page.tsx
export const Wrapper = docsComponents.wrapper
