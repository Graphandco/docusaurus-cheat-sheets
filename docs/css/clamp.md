---
sidebar_position: 1
---

# Clamp

Pour une police responsive, essentiellement sur les titres, **clamp** est très puissant et permet d'utiliser une police adaptative selon la taille de l'écran.
Dans cet exemple le taille est de 20px + 3vw, qui changera donc selon la largeur de l'écran. La taille ne sera jamais de plus de 75px ni moins de 40px.

```css "
.title-xl {
    font-size: clamp(40px, 20px + 3vw, 75px);
}
```
