<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/22/18
 * Time: 1:49 PM
 * Template Name: Parent Page
 */
get_header();
$page_object = get_queried_object();
$page_id     = get_queried_object_id();
$args = array (
	'post_type' => 'page',
	'parent' => $page_id,
	'post_status' => 'publish',
    'sort_column' => 'menu_order'
);
$documents = get_field('related_downloads', $page_id);
$case_studies = get_field('case_studies', $page_id);
$children = get_pages($args);
?>

	<div class="content__wrapper static__banner__small static__banner__background__color parent__page">
		<?php include(locate_template('components/parentPage/static-banner.php')); ?>
		<div class="row sidebar_row">
			<?php include(locate_template('components/parentPage/sidebar.php')); ?>
			<?php include(locate_template('components/parentPage/content.php')); ?>
			<?php include(locate_template('components/parentPage/sidebar-right.php')); ?>
		</div>
	</div>

<?php
get_footer();