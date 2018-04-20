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
			$this->output.= '<ul class="drill__down categories">';
			foreach($terms as $term):
				$this->output.= '<li>';
				$this->output.= '<a href="'.get_category_link($term->cat_ID).'"><span>'.$term->name.'</span></a>';
				$this->output.= '</li>';
			endforeach;
			$this->output.='</ul>';
		endif;
		return $this->output;
	}
}
