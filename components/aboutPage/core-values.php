<?php
    $query = new WP_Query(
            array(
                    'post_type' => 'page',
                    'p' => 36
            )
    );
    if ( $query->have_posts() ) :
	    while ( $query->have_posts() ) : $query->the_post();
        $values = get_field('core_values');
        $values_list = $values['values'];
?>
<section class="about__page core__values" data-emergence="hidden">
    <div class="background__image secondary"></div>
    <div class="tint"></div>
	<div class="row align-center align-middle">
		<div class="col">
			<h2 class="title"><?php echo $values['label'];?></h2>
		</div>
		<div class="col">
            <?php
                foreach($values_list as $value):
            ?>
			<div class="content__wrap">
				<h4><?php echo $value['title'];?></h4>
				<?php echo $value['paragraphs'];?>
			</div>
            <?php
                endforeach;
            ?>
		</div>
	</div>
</section>
<?php
        endwhile;
    endif;