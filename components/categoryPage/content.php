<?php
$categories = get_the_category();
$query = new WP_Query(
	array(
		'post_type' => 'post',
		'cat' => $categories[0]->term_id
	)
);
if ($query->have_posts() ) :
	while ( $query->have_posts() ) : $query->the_post();
        $title = get_the_title();
        $excerpt = get_the_excerpt();
        $content = excerpt(get_the_content(), 25);
        $link = get_permalink();
	?>
		<article class="article__hover">
            <a href="<?php echo $link ?>">
                <div class="wrap">
                    <h1><?php echo $title; ?></h1>
                    <div class="excerpt">
		                <?php echo wpautop($excerpt); ?>
                    </div>
                    <div class="content">
		                <?php echo wpautop($content); ?>
                    </div>
                </div>
            </a>
		</article>
<?php
	endwhile;
endif;