<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/27/18
 * Time: 10:45 AM
 */

namespace contentSlider;


class contentSlider {
	public $post_id;
	public  $content_slider;

	function __construct($PostID) {
		$this->post_id = $PostID;
	}
	function DisplayContentSlider() {
		$query =  new \WP_Query(
			array(
				'post_type' => 'page',
				'p'         => $this->post_id
			)
		);
		if ( $query->have_posts() ) :
			while ( $query->have_posts() ) : $query->the_post();
				$slider = get_field( "content_slider" );
				$i      = 0;
				foreach ( $slider as $slide ) {
					print_r($slide);
					$this->content_slider[ $i ++ ] = array(
						'image'     => $slide['image'],
						'title'     => $slide['title'],
						'label'     => $slide['label'],
						'header'    => $slide['header'],
						'paragraph' => $slide['paragraph']
					);
				}
			endwhile;
		endif;

		return $this->content_slider;
	}
}