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
?>
<div class="col sidebar left">
	<aside>
		<div class="content__wrap recent__posts">
			<ul class="drill__down categories">
				<?php
				if(!empty($recentPosts->output)):
					echo $recentPosts->output;
				endif;
				?>
			</ul>
		</div>
		<div class="content__wrap contact">
			<?php echo $contacts->getContacts(); ?>
		</div>
	</aside>
</div>