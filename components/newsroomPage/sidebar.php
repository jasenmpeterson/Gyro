<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/19/18
 * Time: 12:49 PM
 */
$recentPosts = new \recentPosts\recentPosts(null,null);
$recentPosts->retrievePosts();
$contacts = new \supportContacts\supportContacts();
$listCategories = new \categories\categories();
$listCategories->retrieveCategories();
?>
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