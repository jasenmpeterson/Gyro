<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/19/18
 * Time: 12:49 PM
 */
$recentPosts = new \recentPosts\recentPosts(null,null);
$recentPosts->retrievePosts();
?>
<div class="col sidebar left">
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