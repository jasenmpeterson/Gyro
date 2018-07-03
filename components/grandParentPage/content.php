<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/20/18
 * Time: 9:29 AM
 */
?>
	<section class="col interior__page__content newsrooms">
        <div class="content__wrap">
		<?php
		if(!empty($children)):
			foreach($children as $child):
					$background_image = get_field('static_banner', $child->ID);
				?>
				<div class="child__wrap" style="background: url('<?php echo $background_image['image']['url'] ;?>'); background-size: cover; background-repeat: no-repeat; background-position: center center;">
					<div class="tint"></div>
					<div class="inner-wrap">
						<h1><?php echo $child->post_title ?></h1>
						<?php echo wpautop($child->post_content); ?>
						<a class="button fade-in" href="<?php echo get_permalink($child->ID); ?>" data-text="Learn more">
							<span>Learn more</span>
						</a>
					</div>
                </div>

			<?php
			endforeach;
		endif;
		?>
        </div>
	</section>
