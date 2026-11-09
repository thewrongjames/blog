# Development

```
hugo server
```

Or if you want draft pages to show up

```
hugo server --buildDrafts
```

# Notes

## Page Kind

Pages have a "kind". Either `home`, `page`, `section`, `taxonomy`, or `term`.

```
content/
├── books/
│   ├── book-1/
│   │   └── index.md    <-- kind = page
│   ├── book-2.md       <-- kind = page
│   └── _index.md       <-- kind = section
├── tags/
│   ├── fiction/
│   │   └── _index.md   <-- kind = term
│   └── _index.md       <-- kind = taxonomy
└── _index.md           <-- kind = home
```

See:
- https://gohugo.io/quick-reference/glossary/#page-kind
- https://gohugo.io/methods/page/kind/

## Taxonomies

Hugo creates pages for the "tags" and "categories" taxonomies by default. I
don't really see the difference between them. I can see the use for one of them,
but not both. It seems like it is straight forward to disable the whole taxonomy
system, or to add extra taxonomies, but I don't see a way to disable just one of
them. I'll leave them for now.

See:
- https://gohugo.io/content-management/taxonomies/
- https://gohugo.io/configuration/taxonomies/

## Templates

https://gohugo.io/templates/lookup-order/ explains the rules that determine
which template is used when rendering a page.

https://gohugo.io/templates/types describes the different types of templates.

- For base templates, for now, I probably just need to know that a
  `layouts/baseof.html` will be the base for everything.