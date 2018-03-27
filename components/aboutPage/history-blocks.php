<?php
    $query = new WP_Query(
        array(
            'post_type' => 'page',
            'p' => 36
        )
    );
    if ( $query->have_posts() ) :
?>
<section class="about__page history__blocks" data-emergence="hidden">
	<div class="row">
        <?php
	        while ( $query->have_posts() ) : $query->the_post();
            $history_blocks = get_field('history_blocks');
                foreach($history_blocks as $history_block):
        ?>
		<div class="col">
			<div class="wrap">
				<div class="image"></div>
				<div class="tint tint__primary"></div>
				<div class="tint tint__alternate"></div>
				<div class="content__wrap content__front">
					<button class="button"><span><?php echo $history_block['button_label']; ?></span></button>
				</div>
				<div class="content__wrap content__back">
					<h3 class="title"><?php echo $history_block['title']; ?></h3>
					<?php echo $history_block['paragraphs']; ?>
				</div>
			</div>
		</div>
        <?php
                endforeach;
            endwhile;
        ?>
	</div>
</section>
<?php
    endif;