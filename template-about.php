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
		<?php get_template_part("components/static-banner"); ?>
		<?php get_template_part("components/aboutPage/our-vision"); ?>
		<?php get_template_part("components/aboutPage/core-values"); ?>
	</div>


<?php
get_footer();
?>