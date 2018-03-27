<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/27/18
 * Time: 10:44 AM
 */

namespace staticBanner;


class staticBanner {
	public $post_id;
	public $acf_field;
	public $banner;

	function __construct($PostID, $acfField) {
		$this->post_id = $PostID;
		$this->acf_field = $acfField;
	}
	function DisplayStaticBanner() {
		$query = new \WP_Query(
			array(
				'post_type' => 'page',
				'p' => $this->post_id
			)
		);
		if ( $query->have_posts() ) :
			while ( $query->have_posts() ) : $query->the_post();
				$this->banner = get_field($this->acf_field);
			endwhile;
		endif;
		return $this->banner;
	}
}