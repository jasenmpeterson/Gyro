<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 2/15/18
 * Time: 10:01 AM
 */

/* Check if Class Exists. */
if ( ! class_exists( 'Gyro_Walker' ) ) {

	class Gyro_Walker extends Walker_Nav_Menu {

		var $db_fields = array( 'parent' => 'menu_item_parent', 'id' => 'db_id' );

		function start_lvl( &$output, $depth = 0, $args = array() ) {
			$indent = str_repeat("\t", $depth);

			if( $depth >  0 ) {
				$output .= "\n$indent<ul class='sub-menu grand-children-sub-menu'>\n";
			} else {
				$output .= "\n$indent<ul class='sub-menu'>\n";
			}
		}

		function end_lvl( &$output, $depth = 0, $args = array() ) {
			$indent = str_repeat("\t", $depth);
			$output .= "$indent</ul>\n";
		}

		function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {

			global $wp_query;
			$indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
			$class_names = $value = '';
			$classes = empty( $item->classes ) ? array() : (array) $item->classes;

			// active class
			if(in_array('current-menu-item', $classes)) {
				$classes[] = 'active';
				unset($classes['current-menu-item']);
			}

			// check for children
			$children = get_posts(array('post_type' => 'nav_menu_item', 'nopaging' => true, 'numberposts' => 1, 'meta_key' => '_menu_item_menu_item_parent', 'meta_value' => $item->ID));
			if (!empty($children)) {
				$classes[] = 'has-sub';
			}

			$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args ) );
			$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

			$id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args );
			$id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

			$output .= $indent . '<li' . $id . $value . $class_names .'>';

			$attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
			$attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
			$attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
			$attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';

			$item_output = $args->before;
			$item_output .= '<a class="primary-link"'. $attributes .'>';
			$item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
			$item_output .= '</a>';
			$item_output .= $args->after;

			$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
		}

		function end_el( &$output, $item, $depth = 0, $args = array() ) {
			$output .= "</li>\n";
		}

	}

}