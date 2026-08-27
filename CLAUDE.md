# epitheal-phase1-rewrite

## What this repo is

Static HTML/CSS/JS site, no build step, deployed via GitHub Pages with a
CNAME to epitheal.com. This is the temporary Phase 1 holding site. The
real rebuild (Medusa + Next.js) is Phase 2, confirmed but not starting
until roughly February 2027, this repo is not that build and should not
be treated as a place to introduce a framework, bundler, or dependency
that assumes one is coming.

## Git and commits

- Do not add a `Co-Authored-By: Claude` trailer to commits. This is
  already enforced via `.claude/settings.json` (`includeCoAuthoredBy:
  false`), but don't work around it by adding the line manually either.
- Write commit messages describing what changed and why, in plain
  sentences, no marketing language, no emoji.
- Never force-push. Never rewrite history on `main`.
- Ask before any commit that deletes a file, changes a URL structure,
  or touches `CNAME`, `robots.txt`, or `sitemap.xml` beyond what's been
  explicitly requested.

## Content and copy

- Do not write, rewrite, or "improve" any customer-facing copy on this
  site without explicit instruction. Wording changes are a Maria/JP
  decision, not a code task, even if a change looks like an obvious
  improvement.
- Do not touch the `/ga` (Irish language) nav link or create Irish
  content. That's a pending content decision, not a broken build.
- Do not add, remove, or reorder team members, testimonials, or product
  claims. Anything that reads as a health, medical, or efficacy claim
  ("treats", "heals", "cures", "clinically proven") needs sign-off from
  Emmet Noone before it goes anywhere near this repo, flag it instead
  of writing it.

## Images and assets

- Never generate AI imagery for this site, hero images, product shots,
  team photos, anything. Real photography only, per brand guidelines.
- Never regenerate, recolour, or alter the Epitheal logo file.
- If a task needs an image that doesn't exist yet (e.g. a social-share
  preview graphic), say so and describe the spec needed rather than
  substituting a placeholder or AI-generated stand-in.

## Brand reference

Colours, fonts, and voice are documented in the project's Brand Quick
Reference, not duplicated here since it changes independently of this
repo. If a task needs a hex code or type rule and it isn't obvious from
existing CSS in this repo, ask rather than guess.

## Working style

- Small, reviewable commits over one large one.
- If a request is ambiguous between "fix this" and "redesign this",
  assume "fix this" and flag the larger option rather than doing it
  unprompted.
- Report back plainly: what changed, what's still open, what needs a
  human decision rather than a code fix. Match this to how findings get
  handed back to the Claude.ai session working alongside this repo.
