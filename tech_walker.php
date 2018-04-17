<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 2/15/18
 * Time: 10:01 AM
 */

class Gyro_Tech_Walker extends Walker_Nav_Menu {
	// start a new level/sub-menu

	public function start_lvl(&$output, $depth = 0, $args = array()) {

		$indent = str_repeat("\t", $depth);

		$output .= ($depth == 0 ? "\n$indent<ul class=\"drill__down__drop__down parent\">\n" : "\n$indent<ul class=\"drill__down__drop__down child\">\n");

	}

	// the link element

	public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {

		$object = $item->object;
		$type = $item->type;
		$title = $item->title;
		$description = $item->description;
		$permalink = $item->url;
		$classes = empty( $item->classes ) ? array() : (array) $item->classes;

		// set classes

		if ( in_array( 'current-menu-item', $classes, true ) || in_array( 'current-menu-parent', $classes, true ) ) {
			$classes[] = 'active';
		}
		if( $depth === 0) {
			$classes[] = 'parent';
		} else {
			$classes[] = 'child';
		}

		$class_names = join( ' ', $classes );
		$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

		$output .= '<li '.$class_names.'>';

		// add span if no permalink

		if ($permalink && $permalink != "#") {

			$output .= '<a href="'.$permalink.'"><span class="link__block">';

		} else {
			$output .= '<span>';
		}

		// title

		$output .= $title;

		if ($permalink && $permalink != "#") {

			$output .= '</span></a>';

		}  else {
			$output .= "</span>";
		}

	}
}