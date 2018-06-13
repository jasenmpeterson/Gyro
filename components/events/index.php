<?php
$category = get_queried_object();
$listCategories = new \categories\categories();
$listCategories->retrieveCategories();
$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$query = new WP_Query(
	array(
		'post_type' => 'events',
		'posts_per_page' => 10,
		'paged' => $paged
	)
);
$contacts = new \supportContacts\supportContacts();
if ($query->have_posts() ) :
	$post_thumbnail = get_the_post_thumbnail_url(get_the_ID(), 'full');
	?>
    <div class="content__wrapper static__banner__small static__banner__background__color">
	    <section class="static__banner">
		    <div class="row">
			    <div class="col">
				    <div class="content__wrap">
					    <h2 class="title"><?php echo get_the_title(); ?></h2>
				    </div>
			    </div>
			    <div class="col">
				    <div class="background__image secondary" style="width: 100%; background-image: url('<?php echo $post_thumbnail; ?>')"></div>
			    </div>
		    </div>
	    </section>
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
				                'showposts' => 4,
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
		                $link = get_field('more_info');
		                $dates = get_field('dates');
		                $image = get_the_post_thumbnail_url(get_the_ID(), 'full');
		                ?>
                        <article class="newsroom__article">
                            <div class="wrap">
                                <span class="date"><i class="far fa-calendar"></i> <?php echo $dates['start_date']; echo (!empty($dates['end_date']) ? ' &ndash; '.  $dates['end_date']: ' ');   echo  ' '. $dates['year'];?></span>
                                <h3><?php echo $title; ?></h3>
                                <a href="<?php echo $link ?>" target="_blank" class="button" data-text="Read More"><span>Learn More</span></a>
                            </div>
                        </article>
	                <?php
	                endwhile;
	                ?>
                    <section class="category__pagination">
		                <?php echo pagination_bar($query); ?>
                    </section>
                </div>
            </div>
        </section>
    </div>
<?php
endif;