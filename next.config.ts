import nextra from 'nextra'

const withNextra = nextra({
  // Nextra config options
  defaultShowCopyCode: true,
})

export default withNextra({
  // Next.js config options
  output: 'export',
  images: {
    unoptimized: true,
  },
})
