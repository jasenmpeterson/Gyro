<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/11/18
 * Time: 9:53 AM
 */

namespace categories;


class categories {
	public $output;

	function retrieveCategories() {
		$terms = get_categories();
		if ( !empty($terms) ) :
			$this->output.= '<ul>';
			foreach($terms as $term):
				$this->output.= '<li>';
				$this->output.= '<a href="'.get_category_link($term->cat_ID).'">'.$term->name.'</a>';
				$this->output.= '</li>';
			endforeach;
			$this->output.='</ul>';
		endif;
		return $this->output;
	}
}
