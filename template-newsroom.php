<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/22/18
 * Time: 1:49 PM
 * Template Name: Newsroom Page
 */
get_header();
?>

	<div class="content__wrapper static__banner__small static__banner__background__color">
		<?php get_template_part("components/newsroomPage/static-banner-newsroom"); ?>
		<div class="row">
			<?php get_template_part("components/newsroomPage/sidebar"); ?>
			<?php get_template_part("components/newsroomPage/newsrooms"); ?>
		</div>
	</div>

<?php
get_footer();
