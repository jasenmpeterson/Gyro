<?php
get_header();
?>

	<div class="content__wrapper static__banner__small static__banner__background__color">
		<?php get_template_part("components/resources/static-banner"); ?>
		<div class="row sidebar_row">
			<?php get_template_part("components/resources/sidebar"); ?>
			<?php get_template_part("components/specs/content"); ?>
		</div>
	</div>

<?php
get_footer();
?>
