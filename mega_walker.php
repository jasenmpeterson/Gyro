<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 5/4/18
 * Time: 10:37 AM
 */

class mega_walker extends  Walker_Nav_Menu {

	public function start_lvl( &$output, $depth = 0, $args = array() ) {
		$indent = str_repeat("\t", $depth);
		$submenu = ($depth > 0) ? ' sub-menu' : '';
		$output .= "\n$indent<ul class=\"dropdown-menu$submenu depth_$depth\" >\n";
	}

	public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
		$indent = ($depth) ? str_repeat("\t", $depth) : '';
		$li_attributes = '';
		$class_names = $value = '';
	}
}