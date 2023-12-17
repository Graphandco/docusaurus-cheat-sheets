---
sidebar_position: 1
---

# Écrire en markdown

## Titres

```md "
# Mon titre h1

## Mon titre h2

### Mon titre h3
```

## Styles

```md "
_texte en italique_

**texte en gras**

~~Texte barré~~
```

## Listes

```md title="Liste ordonnées "
1. Liste d'éléments
2. Encore un item
3. Et un dernier
```

```md title="Liste non ordonnées "
-   Liste d'éléments
-   Encore un item
-   Et un dernier
```

## Citations

```md "
> Dorothy followed her through many of the beautiful rooms in her castle.
```

## Liens

```md "
Voici comment faire [un lien](./create-a-page.md).
```

## Images

## Code

```md "title="Simple ligne de code"
`Texte affiché sous forme de bloc de code`
```

````md "title="Plusieurs lignes de code avec langage"
```css title="Ceci est le titre du bloc de code"
.text {
    font-weight: bold;
    text-align: center;
}
```
````

## Emphasis[](#emphasis)

You can add emphasis by making text bold or italic.

### Bold[](#bold)

To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

Markdown

HTML

Rendered Output

`I just love **bold text**.`

`I just love <strong>bold text</strong>.`

I just love **bold text**.

`I just love __bold text__.`

`I just love <strong>bold text</strong>.`

I just love **bold text**.

`Love**is**bold`

`Love<strong>is</strong>bold`

Love**is**bold

#### Bold Best Practices[](#bold-best-practices)

Markdown applications don’t agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to bold the middle of a word for emphasis.

✅  Do this

❌  Don't do this

`Love**is**bold`

`Love__is__bold`

### Italic[](#italic)

To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

Markdown

HTML

Rendered Output

`Italicized text is the *cat's meow*.`

`Italicized text is the <em>cat's meow</em>.`

Italicized text is the _cat’s meow_.

`Italicized text is the _cat's meow_.`

`Italicized text is the <em>cat's meow</em>.`

Italicized text is the _cat’s meow_.

`A*cat*meow`

`A<em>cat</em>meow`

A_cat_meow

#### Italic Best Practices[](#italic-best-practices)

Markdown applications don’t agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to italicize the middle of a word for emphasis.

✅  Do this

❌  Don't do this

`A*cat*meow`

`A_cat_meow`

### Bold and Italic[](#bold-and-italic)

To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.

Markdown

HTML

Rendered Output
