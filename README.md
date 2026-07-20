# Cobber Racing website

Static site for the Cobber Racing Assetto Corsa community, ready for GitHub Pages.

## Pages

- `index.html` — splash page and challenge selection
- `tatuus.html` — Daily Tatuus FA01 Challenge archive
- `gt3.html` — Weekly GT3 Manufacturer Showdown archive
- `news.html` — race reports and community updates

## Adding a news summary

Open `news.html`, copy one complete `<article class="news-card"> ... </article>` block, place the copy above the older stories, then replace its date, headline, summary and tag. The featured story uses `class="news-card featured"`.

## Adding leaderboard results

Both leaderboard pages use month and week tabs. Add each new result inside the matching `.week-panel`, following the existing event and result markup. Every tab button's `aria-controls` value must match its panel's `id`.
