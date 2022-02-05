// Original: https://github.com/mb21/markdown-it-pandoc
// Copyright (c) 2018 Mauro Bieg, MIT License
//
// The following is the modernized version.
// Copyright (c) 2022 TANIGUCHI Masaya


import bracketedSpans from 'markdown-it-bracketed-spans'
import attrs from 'markdown-it-attrs'
import container from 'markdown-it-container'
import deflist from 'markdown-it-deflist'
import footnote from 'markdown-it-footnote'
import implicitFigures from 'markdown-it-implicit-figures'
import gridtables from 'markdown-it-gridtables'
import sub from 'markdown-it-sub'
import sup from 'markdown-it-sup'
import taskLists from 'markdown-it-task-lists'
import mathjax from 'markdown-it-mathjax3'

function validate() {
  return true
}

function render(tokens, idx, _options, _env, slf) {
  const token = tokens[idx];
  const className = token.info.trim();
  const renderedAttrs = slf.renderAttrs(token);
  if (token.nesting === 1) {
    return (className && className !== '{}')
      ? '<div class="' + className + '">'
      : '<div' + renderedAttrs + '>';
  } else {
    return '</div>';
  }
}

export default function markdownItPandoc(md) {
  return md
    .use(bracketedSpans)
    .use(attrs)
    .use(container, 'dynamic', { validate, render })
    .use(deflist)
    .use(footnote)
    .use(implicitFigures, { figcaption: true })
    .use(gridtables)
    .use(sub)
    .use(sup)
    .use(taskLists)
    .use(mathjax)
}
