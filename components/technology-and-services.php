<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 2/13/18
 * Time: 12:55 PM
 */
$query = new WP_Query(
        array(
                'post_type' => 'page',
                'p' => 22
        )
);
if ($query->have_posts() ) : ?>

<section class="technology__and__services component background__image" data-emergence="hidden">
	<?php
	while ( $query->have_posts() ) : $query->the_post();
		$learn_more_component = get_field('learn_more_component');
		?>
    <div class="background__image secondary" style="background-image: url('<?php echo $learn_more_component['image'] ;?>')"></div>
    <div class="row">
        <div class="col">
            <div class="content__wrap">
                <h2 class="title"><?php echo $learn_more_component['header']; ?></h2>
	                <?php echo $learn_more_component['paragraph']; ?>
                <ul class="icon__list">
                    <?php
                        foreach($learn_more_component['links'] as $link):
                    ?>
                    <li>
                        <div class="wrap">
                            <a href="<?php echo $link['page_link']; ?>">
                                <figure><img src="<?php echo $link['icon']['url']; ?>" alt="<?php echo $link['icon']['alt']; ?>"></figure>
                                <span>Learn More About</span> <article> <?php echo $link['label']; ?></article>
                            </a>
                        </div>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
	<?php endwhile; wp_reset_postdata(); ?>
</section>
<?php
endif;