<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/27/18
 * Time: 10:49 AM
 */

global $post;
$postID = $post->ID;

$staticBanner = new \staticBanner\staticBanner('page',$postID, 'static_banner');
$banner = $staticBanner->DisplayStaticBanner();
?>
<section class="static__banner">
	<div class="row">
		<div class="col">
			<div class="content__wrap">
				<h2 class="title"><?php echo $banner['header'] ?></h2>
				<?php echo $banner['paragraphs'] ?>
			</div>
		</div>
		<div class="col">
			<div class="background__image secondary" style="width: 100%; background-image: url('<?php echo $banner['image']['sizes']['large']; ?>')"></div>
		</div>
	</div>
</section>