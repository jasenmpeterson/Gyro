<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/11/18
 * Time: 8:51 AM
 */

namespace recentPosts;


class recentPosts {
	public $post_count;
	public $post_type;
	public $output;

	function __construct($postCount, $postType) {
		$this->post_count = $postCount;
		$this->post_type = $postType;
	}

	function retrievePosts() {
		$query = new \WP_Query(
			array(
				'post_type' => (!empty($this->post_type) ? $this->post_type : 'post'),
				'post_per_page' => (!empty($this->post_count) ? $this->post_count : 5)
			)
		);
		if ( $query->have_posts() ) :
			while ( $query->have_posts() ) : $query->the_post();
				$this->output.= '<li>';
				$this->output.= '<a href="'.get_permalink().'"><span>'.get_the_title().'</span></a>';
				$this->output.= '</li>';
			endwhile;
		endif;
		return $this->output;
	}
}