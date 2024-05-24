## 🔂 Inverser

[Source: Newsletter de Cassidoo du 15/01](https://buttondown.email/cassidoo/archive/try-and-fail-but-dont-fail-to-try-john-quincy/)

A partir d'un tableau à deux dimensions, écrire une fonction qui l'inverse horizontalement ou verticalement.

Exemple

Pour ce tableau:

```
let array = [
[1,2,3],
[4,5,6],
[7,8,9]
]
```
En mode "horizontal", on obtient

```
> flip(array, 'horizontal')
> [[3,2,1],[6,5,4],[9,8,7]]
```

Tandis qu'en mode "vertical", on obtient

```
> flip(array, 'vertical')
> [[7,8,9],[4,5,6],[1,2,3]]
```
