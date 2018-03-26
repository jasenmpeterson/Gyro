<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 2/12/18
 * Time: 3:28 PM
 */

    class ContentSlider {

        public $post_id;
        public  $content_slider;

        function __construct($PostID) {
            $this->post_id = $PostID;
        }
        function DisplayContentSlider() {
	        $query = new WP_Query(
		        array(
			        'post_type' => 'page',
			        'p' => $this->post_id
		        )
	        );
	        if ($query->have_posts() ) :
		        while ( $query->have_posts() ) : $query->the_post();
	                $slider = get_field("content_slider");
	                foreach ($slider as $slide) {
		                $this->content_slider = array(
                            $slide['label'] => array(
	                            'image' => $slide['image'],
	                            'label' => $slide['label'],
	                            'header' => $slide['header'],
	                            'paragraph' => $slide['paragraph']
                            )
		                );
                    }
	            endwhile;
            endif;
            return $this->content_slider;
        }
    }


?>
