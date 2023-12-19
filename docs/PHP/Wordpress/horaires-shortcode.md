---
sidebar_position: 2
---

# Horaires Shortcode

Permet d'ajouter un menu directement dans le backoffice de Wordpress afin de pouvoir facilement modifier les horaires.

```js title="Ajouter dans le functions.php" "
if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title'    => 'Horaires',
        'menu_title'    => 'Horaires',
        'menu_slug'     => 'theme-general-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false,
        'icon_url'      => 'dashicons-clock',
        'position'      => 24
    ));
}

function horaires() {
    ob_start();
        $lundi = get_field('lundi', 'options');
        $mardi = get_field('mardi', 'options');
        $mercredi = get_field('mercredi', 'options');
        $jeudi = get_field('jeudi', 'options');
        $vendredi = get_field('vendredi', 'options');
        $samedi = get_field('samedi', 'options');
        $dimanche = get_field('dimanche', 'options');
     ?>
     <div class="horaires-grid">
         <?php
        if(!empty($lundi)) {print_r("<div class='horaires-line'><div class='horaires-day'>Lundi</div><div class='horaires-hour'>$lundi</div></div>");}
        if(!empty($mardi)) {print_r("<div class='horaires-line'><div class='horaires-day'>Mardi</div><div class='horaires-hour'>$mardi</div></div>");}
        if(!empty($mercredi)) {print_r("<div class='horaires-line'><div class='horaires-day'>Mercredi</div><div class='horaires-hour'>$mercredi</div></div>");}
        if(!empty($jeudi)) {print_r("<div class='horaires-line'><div class='horaires-day'>Jeudi</div><div class='horaires-hour'>$jeudi</div></div>");}
        if(!empty($vendredi)) {print_r("<div class='horaires-line'><div class='horaires-day'>Vendredi</div><div class='horaires-hour'>$vendredi</div></div>");}
        if(!empty($samedi)) {print_r("<div class='horaires-line'><div class='horaires-day'>Samedi</div><div class='horaires-hour'>$samedi</div></div>");}
        if(!empty($dimanche)) {print_r("<div class='horaires-line'><div class='horaires-day'>Dimanche</div><div class='horaires-hour'>$dimanche</div></div>");}
        ?>
    </div>
    <?php return ob_get_clean();
}
add_shortcode('horaires-shortcode', 'horaires');
```

```css title="Ajouter dans le fichier de styles" "
.horaires-line {
    display: grid;
    grid-template-columns: 1fr 2fr;
}
@media screen and (min-width: 1024px) {
    .horaires-hour {
        justify-self: end;
    }
}
```
