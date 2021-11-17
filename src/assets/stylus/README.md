# Stylus Structure

## Goals

* Architecture: [ITCSS](http://csswizardry.net/talks/2014/11/itcss-dafed.pdf)

ITCSS is a sane, scalable, managed architecture for CSS.

* Naming convention: [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)

BEMIT is an approach to front-end development designed with flexibility and ease of modification in mind.

### Directory structure

1. `Settings`
    * Globally-available settings.
    * Config switches.
    * Brand colours, etc.
2. `Tools`
    * Globally-available tools.
    * Public mixins.
    * Helper functions.
3. `Generic`
    * Ground zero styles.
    * Low-specificity, far-reaching.
    * Resets, Normalize.css, etc.
4. `Base`
    * Unclassed HTML elements.
    * H1–H6, basic links, lists, etc.
    * Last layer we see type selectors (e.g. a {},  blockquote {}).
5. `Objects`
    * OOCSS.
    * Design patterns.
    * No cosmetics.
    * Begin using classes exclusively.
    * Agnostically named (e.g. .o-list {}).
6. `Components`
    * Designed pieces of UI.
    * Still only using classes.
    * More explicitly named (e.g. .c-products-list {}).
7. `Trumps`
    * Overrides, helpers, utilities.
    * Only affect one piece of the DOM at a time.
    * Usually carry !important.