---
sidebar_position: 1
---

# Afficher des catégories

```jsx title="Ajouter dans le fichier tpl"
{$catIDs = [10,12]}
<div class="homecats container">
{foreach from=$catIDs item=idcategory}
    {$catcontent = (FrontController::getCategoryDetails($idcategory, $language.id))}
    <div class="homecat" style="background-image: url({$urls.img_cat_url}{$catcontent->id_category}.jpg);">
        <div class="homecat-title">{$catcontent->name}</div>
        {* {$catcontent->description_short nofilter} *}
        <div class="to-curve">
            <a href="{url entity='category' id=$catcontent->id_category}" class="curved-text">Découvrir</a>
        </div>
    </div>
{/foreach}
</div>
```

```jsx title="Ajouter dans le frontController"
public static function getCategoryDetails($id, $lang) {
    $category = new Category($id, $lang);
    return $category;
}
```
