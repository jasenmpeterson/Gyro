<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 2/9/18
 * Time: 9:45 AM
 */

get_header();

?>

	<div class="content__wrapper static__banner__small static__banner__background__color">
		<?php get_template_part("components/static-banner"); ?>
        <div class="row">
	        <?php get_template_part("components/page/sidebar-left"); ?>
	        <?php get_template_part("components/page/content"); ?>
	        <?php get_template_part("components/page/sidebar-right"); ?>
        </div>
	</div>


<?php
get_footer();
?>