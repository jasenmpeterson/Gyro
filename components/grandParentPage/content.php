<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/20/18
 * Time: 9:29 AM
 */
?>
	<section class="col interior__page__content parent__page <?php if(empty($documents)): echo 'no-right-sidebar'; endif; ?> content__contain newsrooms content__with__sidebar">
        <div class="content__wrap">
		<?php
		if(!empty($children)):
			foreach($children as $child):
				?>
				<div class="child__wrap">
                    <h2><?php echo $child->post_title ?></h2>
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
