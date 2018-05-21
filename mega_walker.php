<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 5/4/18
 * Time: 10:37 AM
 */

class mega_walker extends  Walker_Nav_Menu {

	public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
		$object = $item->object;
		$type = $item->type;
		$title = $item->title;
		$description = $item->description;
		$permalink = $item->url;

		$output = '<li class="'.implode( ' ', $item->classes).'">';

		// add span if no permalink
		if( $permalink && $permalink != '#' ) {
			$output .= '<a href="'.$permalink.'">';
		} else {
			$output .= '<span>';
		}

		// title
		$output .= $title;

		// description
		if( $description != '' && $depth === 0 ) {
			$output .= '<small class="description">'.$description.'</small>';
		}

		// close span and link tags
		if( $permalink && $permalink != '#' ) {
			$output .= '</a>';
		} else {
			$output .= '</span>';
		}
	}

	public function end_el( &$output, $item, $depth = 0, $args = array() ) {
		$output .= '</li>';
	}
}