<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/6/18
 * Time: 10:32 AM
 */

namespace rotatingBanner;


class rotatingBanner {
	public $post_id;
	public  $rotating__banner;

	function __construct($PostID) {
		$this->post_id = $PostID;
	}
	function DisplayRotatingBanner() {
		$query =  new \WP_Query(
			array(
				'post_type' => 'page',
				'p'         => $this->post_id
			)
		);
		if ( $query->have_posts() ) :
			while ( $query->have_posts() ) : $query->the_post();
				$slider = get_field( "rotating_banner_content" );
				$i      = 0;
				foreach ( $slider as $slide ) {
					$this->rotating__banner[ $i ++ ] = array(
						'image'     => $slide['featured_image'],
						'header'    => $slide['header'],
						'paragraph' => $slide['paragraphs'],
						'link'  => $slide['learn_more_button']
					);
				}
			endwhile;
		endif;

		return $this->rotating__banner;
	}
}