<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/20/18
 * Time: 9:29 AM
 * Template Name: Parent Page
 */
?>
	<section class="col interior__page__content parent__page <?php if(empty($documents)): echo 'no-right-sidebar'; endif; ?> content__contain newsrooms content__with__sidebar">
		<section class="page-intro">
			<?php echo wpautop(get_the_content($page_id)); ?>
		</section>
        <div class="content__wrap">
		<?php
		if(!empty($children)):
			foreach($children as $child):
				?>
				<div class="child__wrap">
                    <h1><?php echo $child->post_title ?></h1>
                    <?php echo wpautop($child->post_content); ?>
                    <a class="button fade-in" href="<?php echo get_permalink($child->ID); ?>" data-text="Learn more">
						<span>Learn more</span>
                    </a>
                </div>

			<?php
			endforeach;
		endif;
		?>
        </div>
	</section>
