<?php
global $post;
$postID = $post->ID;
$query = new WP_Query(
	array(
		'post_type' => 'page',
		'p' => $postID
	)
);
if ($query->have_posts() ) :
	;?>
	<div class="col generic__page" data-emergence="hidden">
		<?php
		while ( $query->have_posts() ) : $query->the_post();
			$id = get_the_ID();
           ?>
            <div class="content__wrap">
                <?php echo wpautop(get_the_content()); ?>
            </div>
        <?php
		endwhile;

		?>
	</div>
<?php
endif;