---
sidebar_position: 1
---

# Limiter le nombre de lignes

Permet de limiter le nombre de lignes affichées en CSS.

```css "
.text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* nombre de lignes à afficher */
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
```
