<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 2/9/18
 * Time: 9:45 AM
 * Template Name: About Page
 */

get_header();

?>

	<div class="content__wrapper">
		<?php get_template_part("components/aboutPage/static-banner-our-vision"); ?>
		<?php get_template_part("components/aboutPage/culture-video"); ?>
		<?php get_template_part("components/aboutPage/core-values"); ?>
		<?php get_template_part("components/aboutPage/static-banner-our-history"); ?>
		<?php get_template_part("components/aboutPage/history-blocks"); ?>
		<?php get_template_part("components/aboutPage/history"); ?>
	</div>


<?php
get_footer();
?>