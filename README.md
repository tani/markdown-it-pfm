# Markdown It PFM

This package is a preset ofr markdown-it to approximate Pandoc Flavored Markdown.

This is a fork of markdown-it-pandoc, and the difference from the original package as follows.

- The all dependency is listed in `package.json`
- Use MathJax instead of KaTeX

## Installation

```
$ npm i markdown-it-pfm
```

## Usage

```javascript
const md = require('markdown-it')()
md.use('markdown-it-pfm')
```

## Copyright and License

Copyright (c) 2018 Mauro Bieg (The original author)
Copyright (c) 2022 TANIGUCHI masaya

This package is released under the MIT License
