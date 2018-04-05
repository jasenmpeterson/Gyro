<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 2/9/18
 * Time: 9:45 AM
 */

get_header();

?>

<div class="content__wrapper">
	<?php get_template_part("template-home"); ?>
	<?php get_template_part("components/home/content-slider"); ?>
	<?php // get_template_part("components/technology-and-services"); ?>
	<?php get_template_part("components/locations"); ?>
	<?php get_template_part("components/news-posts"); ?>
	<?php get_template_part("components/history"); ?>
</div>


<?php
get_footer();
?>