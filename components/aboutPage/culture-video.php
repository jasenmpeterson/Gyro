<?php
    $query = new WP_Query(
        array(
            'post_type' => 'page',
            'p' => 36
        )
    );
    if ( $query->have_posts() ) :
        while ( $query->have_posts() ) : $query->the_post();
        $culture = get_field('our_culture');
?>
<section class="our__culture__video about__page" data-emergence="hidden">
	<div class="clippy"></div>
	<div class="row align-middle">
		<div class="col">
			<h1 class="title"><?php echo $culture['header']; ?></h1>
			<?php echo $culture['paragraphs']; ?>
		</div>
		<div class="col">
			<div class="video__wrap tint">
				<img src="/wp-content/themes/gyro/assets/images/raw/DSC_1335.jpg"  alt="">
<!--				<svg width="30" viewBox="0 0 20 20" class="play__button"><title>Play</title> <path d="M15 10l-9 5v-10l9 5z"></path></svg>-->
			</div>
		</div>
	</div>
</section>
<?php
        endwhile;
    endif;