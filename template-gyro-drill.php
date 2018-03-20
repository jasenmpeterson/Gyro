<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/19/18
 * Time: 12:18 PM
 * Template Name: GyroDrill Page
 */
get_header();
?>

<div class="content__wrapper static__banner__small static__banner__background__color">
	<?php get_template_part("components/static-banner"); ?>
    <div class="row">
	    <?php get_template_part("components/gyro-sidebar"); ?>
	    <?php get_template_part("components/technology/gyro-drill"); ?>
	    <?php get_template_part("components/gyro-sidebar-right"); ?>
    </div>
</div>

<?php
get_footer();
?>