<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/20/18
 * Time: 9:29 AM
 * Template Name: Parent Page
 */
?>
	<section class="col interior__page__content  content__contain newsrooms block__content__animations content__with__sidebar">
		<?php
		if(!empty($children)):
			foreach($children as $child):
				?>
				<article>
					<a href="<?php echo get_permalink($child->ID); ?>">
						<figure class="background__image" style="background:url('<?php echo get_template_directory_uri();?>/assets/images/raw/banner_hp.jpg');"></figure>
						<figure class="background__image background__image__contrast" style="background:url('<?php echo get_template_directory_uri();?>/assets/images/raw/banner_hp.jpg');"></figure>
						<div class="content__wrap">
							<h2><?php echo $child->post_title?></h2>
							<span class="read__more">Learn More</span>
						</div>
					</a>
				</article>
			<?php
			endforeach;
		endif;
		?>
	</section>