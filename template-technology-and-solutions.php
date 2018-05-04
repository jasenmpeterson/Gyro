<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/19/18
 * Time: 12:18 PM
 * Template Name: Technology and Solutions Template
 */
global $post;
$postID = $post->ID;
$documents = get_field('related_downloads', $postID);
get_header();
?>

<div class="content__wrapper static__banner__small static__banner__background__color">
	<?php include(locate_template('components/technology/static-banner.php')); ?>
    <div class="row sidebar_row">
	    <?php include(locate_template('components/technology/sidebar.php')); ?>
	    <?php include(locate_template('components/technology/content.php')); ?>
	    <?php include(locate_template('components/technology/sidebar-right.php')); ?>
    </div>
</div>

<?php
get_footer();
?>