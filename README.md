# Brendan Ling — portfolio

Personal portfolio site: a single-page, fully static site with research, experience, projects, leadership, education, awards and skills. Light and dark themes, one 720px column, Space Mono throughout.

## Stack

- Next.js (App Router) + TypeScript, exported as static HTML (`output: 'export'`)
- Tailwind CSS v4
- Space Mono via `next/font/google`
- pnpm, Node LTS

## Run locally

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Check the production export:

```bash
pnpm build        # writes the static site to ./out
npx serve out
```

Other scripts: `pnpm lint`, `pnpm typecheck`.

## Edit content

All copy lives in `content/` as typed data; components never hard-code text.

| File | Controls |
| --- | --- |
| `profile.ts` | name, tagline, summary, links, nav, footer, site URL |
| `research.ts` | research entries |
| `experience.ts` | internships and national service |
| `projects.ts` | featured projects (add `liveUrl` / `githubUrl` to show the links) |
| `leadership.ts`, `education.ts`, `scholarships.ts`, `awards.ts`, `skills.ts` | the matching sections |

Adding an award or project means editing one data file.

### Images and CV

Drop these in and the placeholders disappear automatically:

- `public/images/profile.jpg` — profile photo (square works best)
- `public/images/uommods.png` — project screenshot, ~1600px wide
- `public/cv.pdf` — CV, linked from the hero and contact section

## Deploy

The site deploys to Vercel from the `main` branch, with preview deploys on every pull request. See [DEPLOY.md](./DEPLOY.md) for adding a custom domain.

CI (`.github/workflows/ci.yml`) runs lint, type-check, build and Lighthouse CI on every push and pull request.
