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

		// start a new level/sub-menu

		public function start_lvl(&$output, $depth = 0, $args = array()) {

			$indent = str_repeat("\t", $depth);

			$output .= ($depth == 0 ? "\n$indent<ul class=\"sub__menu parent__sub__menu\">\n" : "\n$indent<ul class=\"sub__menu child__sub__menu\">\n");

		}

		// the link element

		public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {

			$object = $item->object;
			$type = $item->type;
			$title = $item->title;
			$description = $item->description;
			$permalink = $item->url;

			// set classes

			$output .= ($depth == 0 ? "<li class='parent__nav__item ". implode(" ", $item->classes) . "'>" : "<li class='child__nav__item". implode(" ", $item->classes) . "'>");

			// add span if no permalink

			if ($permalink && $permalink != "#") {

				$output .= '<a href="'.$permalink.'">';

			} else if ($depth == 1) {

				$output .= '<span class="sub__menu__title">';

			} else if ($depth == 2) {

				$output .= '<span class="sub__menu__child__title">';

			} else {

				$output .= '<span class="sub__menu__grandchild__title">';

			}

			// title

			$output .= $title;

			// description

			if ($description != '' && $depth == 0) {

				$output .= '<small class="description">' . $description . '</small>';

			}

			if ($permalink && $permalink != "#") {

				$output .= '</a>';

			} else {

				$output .= "</span>";

			}

		}

	}

}