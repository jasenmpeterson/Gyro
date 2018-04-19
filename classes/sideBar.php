<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/18/18
 * Time: 8:27 AM
 */

namespace sideBar;


class sideBar {

	public $post_parent;
	public $array;

	public function __construct($postParent) {
		$this->post_parent = $postParent;
	}

	public function get_posts_children() {

		// https://wordpress.stackexchange.com/questions/13669/using-the-loop-to-show-all-levels-of-subpages-under-a-parent-page-halfway-there

		function show_all_children( $post_id, $current_level ) {

			$children = get_posts( array(
				'post_type' =>'page',
				'posts_per_page' =>-1,
				'post_parent' => $post_id,
				'order_by' => 'menu_order',
				'order' => 'DESC' ) );

			if ( empty($children) ) return;

			echo '<ul class="drill__down children level-'.$current_level.'-children">';

			foreach ($children as $child) {

				/* Here would be the point where you
					do whatever you want to display the
					posts. The variable $current_level can
					be used if you want to style different
					levels in the hierarchy differently */

				echo '<li>';

				echo '<a href="'.get_permalink($child->ID).'"><span>';
				echo apply_filters( 'the_title', $child->post_title );
				echo '</a></span>';

				// now call the same function for child of this child
				show_all_children( $child->ID, $current_level+1 );

				echo '</li>';

			}

			echo '</ul>';

		}

		show_all_children( $this->post_parent, 1 );
	}
}