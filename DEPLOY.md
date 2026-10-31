# Deploying

The site is a static export (`pnpm build` writes `./out`) hosted on Vercel.

## First deploy (dashboard)

1. Go to https://vercel.com/new and import `b1-ing/portfolio` from GitHub.
2. Framework preset: **Next.js** (auto-detected). Leave build and output settings at their defaults.
3. Deploy. Under **Settings → Git**, confirm the production branch is `main`. Every pull request gets a preview deployment automatically.
4. Under **Analytics**, click **Enable** to turn on Web Analytics.
5. Copy the production URL into `siteUrl` in `content/profile.ts`. It feeds the canonical URL, sitemap, robots.txt and JSON-LD.

### With the CLI instead

```bash
npm i -g vercel
vercel login
vercel link          # link this folder to a new Vercel project
vercel --prod        # deploy to production
```

## Custom domain

Replace `example.com` with your domain throughout.

1. In Vercel, open the project → **Settings → Domains** and add `example.com`, then add `www.example.com`.
2. Set `example.com` as the primary domain and have `www.example.com` redirect to it (Vercel offers this when you add the second domain, or choose **Redirect to** on the `www` entry).
3. At your registrar, add the DNS records Vercel shows for each domain. The usual values are:

   | Host | Type | Value |
   | --- | --- | --- |
   | `@` (apex) | `A` | `76.76.21.21` |
   | `www` | `CNAME` | `cname.vercel-dns.com` |

   Use the exact values in the Domains panel if they differ. Alternatively, point the domain's nameservers at Vercel and it manages the records for you.
4. Wait for DNS to propagate (minutes to a few hours). Vercel then issues a Let's Encrypt certificate and serves HTTPS automatically, with HTTP redirecting to HTTPS. No setup is needed.
5. Update `siteUrl` in `content/profile.ts` to `https://example.com` and push.
