<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/22/18
 * Time: 2:18 PM
 */
$terms = get_categories();
?>
<section class="col interior__page__content content__with__sidebar content__contain newsrooms block__content__animations content__with__sidebar">
	<?php
	if(!empty($terms)):
		foreach($terms as $term):
			?>
			<article>
				<a href="<?php echo get_category_link($term->cat_ID); ?>">
					<figure class="background__image" style="background:url('<?php echo get_template_directory_uri();?>/assets/images/raw/banner_hp.jpg');"></figure>
					<figure class="background__image background__image__contrast" style="background:url('<?php echo get_template_directory_uri();?>/assets/images/raw/banner_hp.jpg');"></figure>
					<div class="content__wrap">
						<h2><?php echo $term->name?></h2>
						<span class="read__more">Learn More</span>
					</div>
				</a>
			</article>
		<?php
		endforeach;
	endif;
	?>
</section>