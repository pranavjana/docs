# Mino Intern Docs

Documentation site for Mino interns, built with [Mintlify](https://mintlify.com).

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the docs.

## Deployment

This site is deployed to Vercel at [mino-intern-docs.vercel.app](https://mino-intern-docs.vercel.app).

Deployments are automatic on push to the main branch.

## Structure

```
├── mint.json           # Mintlify configuration
├── introduction.mdx    # Home page
├── get-started.mdx     # Getting started guide
├── workflow-playbook.mdx
├── prompt-templates.mdx
├── best-practices.mdx
├── qol-tips.mdx
├── god-mode.mdx
├── duplicable-prd.mdx
├── faq.mdx
└── public/             # Static assets (logo, favicon)
```

## Adding New Pages

1. Create a new `.mdx` file at the root
2. Add frontmatter with `title` and `description`
3. Add the page to `mint.json` navigation
4. Commit and push

## Resources

- [Mintlify Documentation](https://mintlify.com/docs)
- [Mino API Docs](https://docs.mino.ai)
