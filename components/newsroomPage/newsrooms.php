<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/22/18
 * Time: 2:18 PM
 */
$terms = get_categories();
?>
<section class="col interior__page__content content__with__sidebar content__contain newsrooms content__with__sidebar">
    <div class="content__wrap">
	    <?php
	    if(!empty($terms)):
		    foreach($terms as $term):
                $args = array(
                    'cat' => $term->cat_ID,
                    'posts_per_page' => 1,
                );
                $query = new WP_Query($args);
			    ?>
                <?php
                    if($query->have_posts()):
                        while($query->have_posts()) : $query->the_post();
	                        $date = get_the_date('F j, Y');
	                        $link = get_permalink();
                            ?>
                        <article class="newsroom__article">
                            <div class="wrap">
                                <span class="date"><i class="far fa-clock"></i> <?php echo $date;?></span>
                                <h3><?php echo get_the_title(); ?></h3>
                                <span class="categories">Categories: <?php echo get_the_category_list( ', ' );?></span>
	                            <?php echo wpautop(excerpt(get_the_content(), 100)); ?>
                                <a href="<?php echo $link ?>" class="button" data-text="Read More"><span>Read More</span></a>
                            </div>
                        </article>
                    <?php
                        endwhile;
                    endif;
                ?>
		    <?php
		    endforeach;
	    endif;
	    ?>
    </div>
</section>