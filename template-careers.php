<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/23/18
 * Time: 10:21 AM
 * Template Name: Careers
 */
get_header();
$page_object = get_queried_object();
$page_id     = get_queried_object_id();
?>

	<div class="content__wrapper static__banner__small static__banner__background__color">
		<?php include(locate_template('components/careers/static-banner.php')); ?>
		<?php include(locate_template('components/careers/content.php')); ?>
	</div>

<?php
get_footer();