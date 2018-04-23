<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/27/18
 * Time: 10:49 AM
 */

global $post;
$postID = $post->ID;

?>
<section class="static__banner">
	<div class="row">
		<div class="col">
			<div class="content__wrap">
				<h2 class="title"><?php echo get_the_title($postID); ?></h2>
			</div>
		</div>
	</div>
</section>