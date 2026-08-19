# xGI-NC-State

Website for NC State University's xGI Initiative, showcasing research areas, faculty, publications,
and facilities in next-generation intelligent wireless networked systems.

The site runs entirely on **WordPress**. This repository holds the theme that renders it:

```
wordpress/
└── xgi-initiative/          ← the theme (this is what you install)
```

No build step, no package manager, no framework — the theme is plain PHP, CSS and vanilla JS, and
requires no plugins. See [wordpress/README.md](wordpress/README.md) for installation, the one-click
content importer, and how to edit each part of the site from wp-admin.

## Quick start

1. Copy `wordpress/xgi-initiative/` into `wp-content/themes/` (or zip it and use
   **Appearance → Themes → Add New → Upload Theme**).
2. Activate **xGI Initiative** under **Appearance → Themes**.
3. Run the importer: **Tools → xGI Content Setup → Import xGI content**.
4. Set **Settings → Permalinks** to **Post name** (needed for `/research/{area}/` URLs).

## Requirements

WordPress 6.0+ on PHP 7.4+. WordPress needs PHP hosting, so the site cannot be served from GitHub
Pages; deploy the theme to a WordPress host instead.
