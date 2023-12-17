---
sidebar_position: 2
---

# Effet frosty

Pour créer un effet "frosty", ou gelé. L'idée est de créer un flou d'arrière-plan pour donner cet effet.

```css "
.glass {
    backdrop-filter: blur(6px) saturate(150%);
    -webkit-backdrop-filter: blur(5px);
    background-color: var(--glass);
}
```
