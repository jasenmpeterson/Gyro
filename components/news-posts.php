<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 2/14/18
 * Time: 1:45 PM
 */
$query = new WP_Query(
	array(
		'post_type' => 'post',
		'posts_per_page' => 6
	)
);
if ($query->have_posts() ) : ?>

<section class="news__posts component" data-emergence="hidden">
	<div class="row">
		<div class="col"><h2 class="title">News</h2></div>
	</div>
	<div class="row">
	<?php
	while ( $query->have_posts() ) : $query->the_post();
	    $id = get_the_ID();
	    $title = get_the_title();
	    $excerpt = wpautop(get_the_excerpt());
	    $link = get_permalink();
	    $post_thumbnail_id = get_post_thumbnail_id($id);
	    $post_thumbnail = wp_get_attachment_image_url($post_thumbnail_id, 'medium_large');
		?>
		<div class="col">
			<article>
				<a href="<?php echo $link; ?>">
					<div class="background__image tint" style="background: url(<?php echo ( !empty($image) ? $image : get_home_url().'/wp-content/uploads/2018/05/pexels-photo-518543.jpeg' ) ?>"></div>
					<div class="content__wrap">
						<h3><?php echo $title; ?></h3>
					</div>
				</a>
			</article>
		</div>
	<?php endwhile; wp_reset_postdata(); ?>
	</div>
	<div class="row">
		<div class="col text__align__center">

			<a href="<?php echo get_permalink(20); ?>" class="button" data-text="Read More Articles"><span>Read More Articles</span></a>
		</div>
	</div>
</section>
<?php
endif;