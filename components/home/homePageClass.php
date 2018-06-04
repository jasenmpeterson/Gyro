<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/6/18
 * Time: 11:16 AM
 */

namespace homePageClass;


class homePageClass {
	public $main_banner;
	public $content_slider;
	public $technology_and_solutions;
	public $history;
	public $news;
	public $field;

	function __construct($postID) {
		$this->field = get_field('content',$postID);
	}

	function displayMainBanner() {

		$banner = $this->field['main_banner'];
		$i = 0;
		foreach ( $banner as $slide ) {
			$this->main_banner[$i++] = array(
				'image'     => $slide['image'],
				'header'    => $slide['header'],
				'paragraph' => $slide['paragraph'],
				'link' => $slide['learn_more_button']
			);
		}

		return $this->main_banner;
	}

	function displayContentSlider() {
		$content_slider = $this->field['content_slider'];
		$i = 0;
		foreach ( $content_slider as $slide ) {
			$this->content_slider[$i++] = array(
				'image'     => $slide['image'],
				'secondary_image'     => $slide['secondary_image'],
				'header'    => $slide['header'],
				'paragraph' => $slide['paragraphs'],
				'title' => $slide['title'],
				'label' => $slide['label'],
				'link' => $slide['learn_more_link']
			);
		}
		return $this->content_slider;
	}

	function displayTechnology() {
		$content_slider = $this->field['technology_and_solutions'];

		$this->technology_and_solutions = array(
			'paragraph' => $content_slider['paragraph'],
			'image' => $content_slider['image'],
			'title' => $content_slider['title'],
			'list' => $content_slider['list_items']
		);

		return $this->technology_and_solutions;
	}

	function displayHistory() {
		$history = $this->field['history_section'];

		$this->history = array(
			'paragraph' => $history['paragraphs'],
			'header' => $history['header'],
			'link' => $history['learn_more_button'],
			'image' => $history['image']
		);

		return $this->history;
	}
}