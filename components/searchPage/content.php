<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/12/18
 * Time: 10:57 AM
 */

?>
	<section class="search__results">
        <?php if (have_posts()): ?>
		<header class="search__header">
			<h1 class="search__title"><?php printf( __( 'Search Results for: %s', 'shape' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
		</header><!-- .page-header -->
		<?php
            while ( have_posts() ) : the_post();
            $post_type = get_post_type();
            $post_type_object = get_post_type_object( $post_type );
            $post_type_name = $post_type_object->labels->singular_name;
		?>
			<article class="search__result">
                <a href="<?php the_permalink() ?>">
                    <span class="post__type__name"><?php echo $post_type_name; ?></span>
                    <h3><?php the_title(); ?></h3>
                    <?php
                        if(!empty(get_the_content())):
                            echo wpautop(excerpt(strip_tags(get_the_content()), 25));
                        endif;
                    ?>
                </a>
			</article>
		<?php endwhile; ?>
        <?php echo paginate_links(); ?>
        <?php else: ?>
            <header class="search__header">
                <h1 class="search__title"><?php printf( __( 'No Results Were Found for: %s', 'shape' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
            </header><!-- .page-header -->
        <?php endif; ?>
	</section>
