<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 2/14/18
 * Time: 3:54 PM
 */
$query = new WP_Query(
	array(
		'post_type' => 'page',
		'p' => 36
	)
);
if ($query->have_posts() ) : ?>

<section class="history history__home component" data-emergence="hidden">
	<?php
	while ( $query->have_posts() ) : $query->the_post();
	    $history_home_page_component = get_field('history_home_page_component');
	    $id = get_the_ID();
		$post_thumbnail_id = get_post_thumbnail_id($id);
		$post_thumbnail = wp_get_attachment_image_url($post_thumbnail_id, 'full');
		$link = get_permalink();
		?>
    <div class="background__image" style="background-image: url('<?php echo $post_thumbnail; ?>')"></div>
	<div class="row align-center">
		<div class="col">
			<div class="content__wrap">
				<h1 class="title" data-history-splitting-chars><?php echo $history_home_page_component['header']; ?></h1>
				<?php echo $history_home_page_component['paragraph']; ?>
				<a href="<?php echo $link; ?>" class="button white" data-text="Learn more about our history"><span>Learn more about our history</span></a>
			</div>
		</div>
	</div>
	<?php endwhile; wp_reset_postdata(); ?>
</section>
<?php
endif;