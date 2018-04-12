<?php
$recentPosts = new \recentPosts\recentPosts(null,null);
$recentPosts->retrievePosts();
$listCategories = new \categories\categories();
$listCategories->retrieveCategories();
if (have_posts()) :
	while (have_posts()) : the_post();
	$image = get_the_post_thumbnail_url(get_the_ID());
	$date = get_the_date('F j, Y');
	$link = get_permalink();
?>
<div class="single__page">
	<div class="row">
		<div class="col interior__page__content content__with__sidebar content__contain newsrooms content__with__sidebar single__page__content">
			<figure class="background__image" style="background: url(<?php echo $image; ?>"></figure>
			<div class="wrap">
                <ul class="social__media__module">
                    <li><a href="https://www.linkedin.com/shareArticle?mini=true&url=http:<?php echo $link;?>" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.facebook.com/sharer.php?u=http:<?php echo $link;?>" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com/intent/tweet?url=http:<?php echo $link;?>" target="_blank"><i class="fab fa-twitter"></i></a></li>
                </ul>
				<span class="date"><i class="far fa-clock"></i><?php echo $date;?></span>
				<h1><?php the_title(); ?></h1>
				<span class="categories">Categories: <?php echo get_the_category_list( ', ' );?></span>
				<?php the_content(); ?>
			</div>
		</div>
		<div class="col sidebar">
			<aside>
				<div class="content__wrap recent__posts">
					<h3>Recent Posts</h3>
					<ul>
						<?php
						if(!empty($recentPosts->output)):
							echo $recentPosts->output;
						endif;
						?>
					</ul>
				</div>
				<div class="content__wrap recent__posts">
					<h3>Categories</h3>
					<?php
					if(!empty($listCategories->output)):
						echo $listCategories->output;
					endif;
					?>
				</div>
				<div class="content__wrap contact">
					<h5>Contact Local Support</h5>
					<table>
						<tr>
							<td>North America</td>
							<td>+1 281.213.6300</td>
						</tr>
						<tr>
							<td>North America</td>
							<td>+1 281.213.6300</td>
						</tr>
						<tr>
							<td>North America</td>
							<td>+1 281.213.6300</td>
						</tr>
						<tr>
							<td>North America</td>
							<td>+1 281.213.6300</td>
						</tr>
					</table>
					<a href="#" class="button" data-text="Contact Us"><span>Contact Us</span></a>
				</div>
			</aside>
		</div>
	</div>
</div>
<?php
	endwhile;
endif;