<?php
$category = get_queried_object();
$listCategories = new \categories\categories();
$listCategories->retrieveCategories();
$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$query = new WP_Query(
	array(
		'post_type' => 'post',
		'cat' => $category->term_id,
		'posts_per_page' => 3,
		'paged' => $paged
	)
);
$contacts = new \supportContacts\supportContacts();
if ($query->have_posts() ) :
	?>
    <div class="content__wrapper static__banner__small static__banner__background__color">
        <?php include('staticBanner.php') ;?>
        <section class="row sidebar_row">
            <div class="col sidebar left">
                <aside>
                    <div class="content__wrap recent__posts drill__down categories">
		                <?php
		                //for each category, show all posts
		                $cat_args=array(
			                'orderby' => 'name',
			                'order' => 'ASC'
		                );
		                $categories=get_categories($cat_args);
		                foreach($categories as $category) {
			                $args=array(
				                'showposts' => -1,
				                'category__in' => array($category->term_id),
				                'ignore_sticky_posts'=>1
			                );
			                $posts=get_posts($args);
			                if ($posts) {
				                echo '<h4>'.$category->name.'</h4>';
				                foreach($posts as $post) {
					                setup_postdata($post); ?>
                                    <p><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><span><?php the_title(); ?></span></a></p>
					                <?php
				                } // foreach($posts
			                } // if ($posts
		                } // foreach($categories
		                ?>
                    </div>
                    <div class="content__wrap contact">
	                    <?php echo $contacts->getContacts(); ?>
                    </div>
                </aside>
            </div>
            <div class="col interior__page__content content__with__sidebar content__contain newsrooms content__with__sidebar category__articles">
                <div class="content__wrap">
	                <?php
	                while ( $query->have_posts() ) : $query->the_post();
		                $title = get_the_title();
		                $content = excerpt(get_the_content(), 25);
		                $link = get_permalink();
		                $date = get_the_date('F j, Y');
		                $image = get_the_post_thumbnail_url(get_the_ID(), 'full');
		                ?>
                        <article class="newsroom__article">
                            <div class="wrap">
                                <span class="date"><i class="far fa-clock"></i> <?php echo $date;?></span>
                                <h3><?php echo $title; ?></h3>
                                <span class="categories">Categories: <?php echo get_the_category_list( ', ' );?></span>
				                <?php echo wpautop(excerpt(get_the_content(), 100)); ?>
                                <a href="<?php echo $link ?>" class="button" data-text="Read More"><span>Read More</span></a>
                            </div>
                        </article>
	                <?php
	                endwhile;
	                ?>
                    <section class="category__pagination">
		                <?php echo paginate_links(); ?>
                    </section>
                </div>
            </div>
        </section>
    </div>
<?php
endif;