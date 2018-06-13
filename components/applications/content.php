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
	<div class="col interior__page__content content__with__sidebar content__contain <?php if(empty($documents)): echo 'no-right-sidebar'; endif; ?> technology__and__services__content" data-emergence="hidden">
		<?php
		while ( $query->have_posts() ) : $query->the_post();
			$id = get_the_ID();
			$content_blocks = get_field('content_blocks');
			$content = $content_blocks['content'];
			foreach($content as $content_block):
				?>
				<div class="content__wrap">
					<h3 class="title"><?php echo $content_block['title']; ?></h3>
					<?php echo $content_block['paragraph']; ?>
				</div>
			<?php
			endforeach;
		endwhile;

		?>
	</div>
<?php
endif;