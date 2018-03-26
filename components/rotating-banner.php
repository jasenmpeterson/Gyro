<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 2/12/18
 * Time: 12:25 PM
 */
$query = new WP_Query(
        array(
                'post_type' => 'home_page_banner',
                'post_per_page' => 3
        )
);
if ($query->have_posts() ) : ?>

<section class="rotating__banner component is-hidden">
	<?php
        while ( $query->have_posts() ) : $query->the_post();
        $content = get_field('content');
        $image = get_field('featured_image');
        $page_link = get_field('learn_more_button');
    ?>
        <div class="carousel__cell" style="background-image: url(<?php echo $image ;?>);">
            <div class="row">
                <div class="col">
                    <div class="content__wrap">
                        <h1 data-banner-splitting-chars style="--word-total:1; --char-total:5;"><?php echo $content['header']; ?></h1>
                        <a href="<?php echo $page_link; ?>" class="button" data-text="Learn More"><span>Learn more</span></a>
                    </div>
                </div>
            </div>
        </div>
    <?php endwhile; wp_reset_postdata(); ?>
</section>
<?php
endif;