# xGI Initiative — WordPress theme

A WordPress recreation of <https://nextg-wireless-lab-nc-state.github.io/> (the Next.js/React site in
the repository root). Same pages, same content, same NC State identity — rebuilt as a standard
WordPress theme with no page builder, no framework and no third-party plugins.

```
wordpress/
└── xgi-initiative/          ← the theme (this is what you install)
```

## Install

1. **Copy or zip the theme.** Upload `xgi-initiative/` to `wp-content/themes/` on your server, or zip
   the folder and use **Appearance → Themes → Add New → Upload Theme**.
2. **Activate** it under **Appearance → Themes**.
3. **Import the content.** An admin notice appears with a *Set up content* button; or go to
   **Tools → xGI Content Setup** and press **Import xGI content**.
4. **Set permalinks.** **Settings → Permalinks → Post name** (needed for `/research/{area}/` URLs).

That is the whole setup. WP-CLI equivalent:

```bash
wp theme activate xgi-initiative
wp rewrite structure '/%postname%/'
wp xgi import
```

The import is idempotent — run it again after an update and existing items are matched by slug and
updated in place rather than duplicated.

## What the import creates

| | |
|---|---|
| Pages | 8 — Home (front page), Research, Publications, People, Facilities and Testbeds, Events, Industry Affiliates, News |
| Research areas | 5 (custom post type, live at `/research/{slug}/`) |
| Faculty | 23, with portraits added to the media library |
| Publications | 135, 15 of them award-winning |
| Facilities | 4, with photos |
| Events | 1 upcoming |
| News | 4 placeholder posts (published but unlinked, as on the original) |
| Menus | Primary + Footer, built and assigned to their theme locations |

## Editing the site

Everything that was hard-coded in the original's TypeScript data files is now ordinary WordPress
content:

- **Research Areas** — overview is the editor content, area number is *Order* under Page
  Attributes, keywords / affiliated faculty / highlighted publications are fields below the editor.
  Highlighted publications use a simple text format:
  ```
  # Ruozhou Yu
  - Zhou, Fangtong, Sihao Liu, … IEEE Transactions on Networking (2026).
  - Wang, Xiaojian, Ruozhou Yu, and Dejun Yang. …
  ```
- **Faculty** — title, department, leadership role, lab, keywords, email, website. The portrait is
  the Featured Image; members without one fall back to their initials.
- **Publications** — authors, venue, award, research area. The award field drives both the red badge
  and the *Award-winning only* filter.
- **Events** — date label, location, speaker, topic, registration URL, past/upcoming. The image
  behind the date block is the Featured Image.
- **Facilities** — description is the editor content, plus an optional external URL that makes the
  whole card a link.
- **Standing copy** — **Appearance → Customize → xGI Initiative**: identity and contact email, the
  home hero (eyebrow, three-part headline, intro, stat chip, five carousel slides), mission, vision,
  research intro and positioning statement, and a switch to show the News section on the home page
  (off by default, matching the original).

## Structure

```
xgi-initiative/
├── style.css                  Theme header + the complete stylesheet (design tokens, components)
├── functions.php              Setup, assets, menus, widgets
├── header.php / footer.php    Utility bar, red identity band, nav / footer
├── front-page.php             Home: hero, mission, vision, research, news, events, CTAs
├── single-xgi_area.php        A research area
├── page-templates/            Research, Publications, People, Facilities, Events, Affiliates, News
├── page.php single.php index.php 404.php searchform.php
├── inc/
│   ├── post-types.php         CPTs, custom fields, meta boxes, admin columns
│   ├── template-tags.php      Options, queries, cards, page hero
│   ├── customizer.php         Customizer panel
│   ├── importer.php           Tools screen + `wp xgi import`
│   └── data/xgi-content.json  The packaged dataset
└── assets/
    ├── js/xgi.js              Header shadow, mobile nav, hero carousel, reveals, publication filter
    ├── css/editor.css         Block-editor styles
    └── images/                Faculty portraits, facilities, hero slides, event image
```

## Notes

- **Design.** Wolfpack Red `#CC0000`, ink `#1A1A1A`, NC State navy and olive accents; Source Serif 4
  for display headings and Inter for UI/body — the same tokens the original used. Breakpoints match
  (640 / 768 / 1024 / 1280 px).
- **Fonts** load from Google Fonts. Turn that off in the Customizer if you self-host them or need to
  avoid the external request; the stack falls back to Georgia / system sans.
- **JavaScript** is ~250 lines of vanilla JS with no dependencies, and every feature degrades
  gracefully: without it the nav, carousel and full publication list still render. `prefers-reduced-motion`
  is respected throughout.
- **Requirements.** WordPress 6.0+, PHP 7.4+. No plugins required.

## Verified

Built and tested against WordPress 7.0.2 on PHP 8.3: every page returns HTTP 200 with no PHP notices,
the importer runs clean, publication filtering and counts match the original (135 / 40 / 35 / 17 / 23 / 20,
15 award-winning), and editing through wp-admin round-trips without data loss.
