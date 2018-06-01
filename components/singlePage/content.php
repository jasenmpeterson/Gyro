<?php
$recentPosts = new \recentPosts\recentPosts(null,null);
$recentPosts->retrievePosts();
$listCategories = new \categories\categories();
$listCategories->retrieveCategories();
$contacts = new \supportContacts\supportContacts();
if (have_posts()) :
	while (have_posts()) : the_post();
	$image = get_the_post_thumbnail_url(get_the_ID());
	$date = get_the_date('F j, Y');
	$link = get_permalink();
?>
<div class="single__page">
	<div class="row sidebar_row">
        <div class="col sidebar">
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
                    wp_reset_postdata();
	                ?>
                </div>
                <div class="content__wrap contact">
	                <?php echo $contacts->getContacts(); ?>
                </div>
            </aside>
        </div>
		<div class="col interior__page__content content__with__sidebar content__contain newsrooms content__with__sidebar single__page__content  static__banner__background__color">
            <section class="static__banner">
                <div class="row">
                    <div class="col">
                        <div class="content__wrap">
                            <h2 class="title"><?php echo get_the_title(); ?></h2>
                        </div>
                    </div>
                </div>
            </section>
			<figure class="background__image" style="background: url(<?php echo ( !empty($image) ? $image : get_home_url().'/wp-content/uploads/2018/05/pexels-photo-518543.jpeg' ) ?>"></figure>
			<div class="wrap">
                <ul class="social__media__module">
                    <li><a href="https://www.linkedin.com/shareArticle?mini=true&url=http:<?php echo $link;?>" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.facebook.com/sharer.php?u=http:<?php echo $link;?>" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com/intent/tweet?url=http:<?php echo $link;?>" target="_blank"><i class="fab fa-twitter"></i></a></li>
                </ul>
				<span class="date"><i class="far fa-clock"></i><?php echo $date;?></span>
				<span class="categories">Categories: <?php echo get_the_category_list( ', ' );?></span>
				<?php the_content(); ?>
			</div>
		</div>
	</div>
</div>
<?php
	endwhile;
endif;