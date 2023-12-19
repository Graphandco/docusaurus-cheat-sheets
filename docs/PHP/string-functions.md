---
sidebar_position: 2
---

# String Functions

```css "
strlen()
//Retourne la longueur d'une chaîne de caractères.
$str = "Hello, World!";
$length = strlen($str);
echo $length; // Affiche 13

strpos()
//Retourne la position de la première occurrence d'une
sous-chaîne dans une chaîne.
$str = "Hello, World!";
$position = strpos($str, "World");
echo $position; // Affiche 7

substr()
//Retourne une partie d'une chaîne à partir d'une position donnée.
$str = "Hello, World!";
$substring = substr($str, 7, 5);
echo $substring; // Affiche "World"

str_replace()
//Remplace toutes les occurrences d'une sous-chaîne par une autre dans une chaîne.
$str = "Hello, World!";
$newStr = str_replace("World", "PHP", $str);
echo $newStr; // Affiche "Hello, PHP!"

strtolower()
//Convertit une chaîne en minuscules.
$str = "Hello, World!";
$newStr = strtolower($str);
echo $newStr; // Affiche "hello, world!"

strtoupper()
//Convertit une chaîne en majuscules.
$str = "Hello, World!";
$newStr = strtoupper($str);
echo $newStr; // Affiche "HELLO, WORLD!"

trim()
//Supprime les espaces au début et à la fin d'une chaîne.
$str = " Hello, World! ";
$newStr = trim($str);
echo $newStr; // Affiche "Hello, World!"

strrev()
//Inverse une chaîne de caractères.
$str = "Hello, World!";
$reversedStr = strrev($str);
echo $reversedStr; // Affiche "!dlroW ,olleH"

explode()
//Divise une chaîne en un tableau de sous-chaînes en utilisant un délimiteur spécifié.
$str = "Hello, World!";
$parts = explode(", ", $str);
print_r($parts); //Affiche ["Hello", "World!"]

implode()
//Concatène les éléments d'un tableau en une seule chaîne, en utilisant un séparateur spécifié.
$parts = ["Hello", "World!"];
$str = implode(", ", $parts);
echo $str; // Affiche "Hello, World!"

ucfirst()
//Met en majuscule la première lettre d'une chaîne.
$str = "hello, world!";
$newStr = ucfirst($str);
echo $newStr; // Affiche "Hello, world!"

ucwords()
//Met en majuscule la première lettre de chaque mot dans une chaîne.
$str = "hello, world!";
$newStr = ucwords($str);
echo $newStr; // Affiche "Hello, World!"

htmlspecialchars()
//Convertit les caractères spéciaux en entités HTML.
$str = "Hello <strong>World</strong>!";
$encodedStr = htmlspecialchars($str);
echo $encodedStr; // Affiche "Hello &lt;strong&gt;World&lt;/strong&gt;!"

wordwrap()
//Effectue la césure d'une chaîne
$str = "Hello world! This is a long sentence that needs to be wrapped.";
$wrappedStr = wordwrap($str, 10, "<br>");
echo $wrappedStr; // Affiche Hello<br>world!<br>This is a<br>long<br>sentence<br>that needs<br>to be<br>wrapped.
```
