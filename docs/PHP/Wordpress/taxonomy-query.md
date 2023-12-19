---
sidebar_position: 2
---

# Query des taxonomies

Permet de lister les taxonomies d'un CPT en particulier

```js "
function showTaxos() {
    ob_start();
    $terms = get_terms(
        array(
            'taxonomy'   => 'types_de_produits',
            'hide_empty' => false,
        )
    );
    if ( ! empty( $terms ) && is_array( $terms ) ) { ?>
        <div class="taxo-list">
        <?php foreach ( $terms as $term ) { ?>
            <a class="taxo-item" href="<?php echo esc_url( get_term_link( $term ) ) ?>">
                <div class="taxo-image"><?php echo $term->description; ?></div>
                <h2 class"taxo-title"><?php echo $term->name; ?></h2>
            </a><?php
        }?>
        </div>
    <?php }
    return ob_get_clean();
}
add_shortcode('showTaxos-shortcode', 'showTaxos');
```
