<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/19/18
 * Time: 12:18 PM
 * Template Name: Applications & Markets Template
 */
get_header();
?>

	<div class="content__wrapper static__banner__small static__banner__background__color">
		<?php get_template_part("components/applications/static-banner"); ?>
		<div class="row sidebar_row">
			<?php get_template_part("components/applications/sidebar"); ?>
			<?php get_template_part("components/applications/content"); ?>
		</div>
	</div>

<?php
get_footer();
?>