<?php
global $post;
$postID = $post->ID;
$query = new WP_Query(
	array(
		'post_type' => 'page',
		'p' => $postID
	)
);
if ($query->have_posts() ) :
	;?>
	<div class="col interior__page__content content__with__sidebar content__contain technology__and__services__content" data-emergence="hidden">
		<?php
		while ( $query->have_posts() ) : $query->the_post();
			$id = get_the_ID();
			$content_blocks = get_field('content_blocks');
			$content = $content_blocks['content'];
			foreach($content as $content_block):
				?>
				<div class="content__wrap">
					<h3 class="title"><?php echo $content_block['title']; ?></h3>
					<?php echo $content_block['paragraph']; ?>
				</div>
			<?php
			endforeach;
		endwhile;

		?>
		<div class="content__wrap">
			<h3 class="title">Technical Specifications</h3>
			<table cellspacing="0" class="stripes">
				<thead>
				<tr>
					<th>Motor Size</th>
					<th>Configuration</th>
					<th>Hole Size</th>
					<th>Flow Range</th>
					<th>Revs/Galllon</th>
					<th>RPM</th>
					<th>Weight</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>4 3/4"</td>
					<td>5/6 8.3</td>
					<td>150-300</td>
					<td>6-7 7/8</td>
					<td>1.03</td>
					<td>103-284</td>
					<td>1100</td>
				</tr>
				<tr>
					<td>4 3/4"</td>
					<td>5/6 8.3</td>
					<td>150-300</td>
					<td>6-7 7/8</td>
					<td>1.03</td>
					<td>103-284</td>
					<td>1100</td>
				</tr>
				<tr>
					<td>4 3/4"</td>
					<td>5/6 8.3</td>
					<td>150-300</td>
					<td>6-7 7/8</td>
					<td>1.03</td>
					<td>103-284</td>
					<td>1100</td>
				</tr>
				<tr>
					<td>4 3/4"</td>
					<td>5/6 8.3</td>
					<td>150-300</td>
					<td>6-7 7/8</td>
					<td>1.03</td>
					<td>103-284</td>
					<td>1100</td>
				</tr>
				<tr>
					<td>4 3/4"</td>
					<td>5/6 8.3</td>
					<td>150-300</td>
					<td>6-7 7/8</td>
					<td>1.03</td>
					<td>103-284</td>
					<td>1100</td>
				</tr>
				<tr>
					<td>4 3/4"</td>
					<td>5/6 8.3</td>
					<td>150-300</td>
					<td>6-7 7/8</td>
					<td>1.03</td>
					<td>103-284</td>
					<td>1100</td>
				</tr>
				<tr>
					<td>4 3/4"</td>
					<td>5/6 8.3</td>
					<td>150-300</td>
					<td>6-7 7/8</td>
					<td>1.03</td>
					<td>103-284</td>
					<td>1100</td>
				</tr>
				<tr>
					<td>4 3/4"</td>
					<td>5/6 8.3</td>
					<td>150-300</td>
					<td>6-7 7/8</td>
					<td>1.03</td>
					<td>103-284</td>
					<td>1100</td>
				</tr>
				<tr>
					<td>4 3/4"</td>
					<td>5/6 8.3</td>
					<td>150-300</td>
					<td>6-7 7/8</td>
					<td>1.03</td>
					<td>103-284</td>
					<td>1100</td>
				</tr>
				<tr>
					<td>4 3/4"</td>
					<td>5/6 8.3</td>
					<td>150-300</td>
					<td>6-7 7/8</td>
					<td>1.03</td>
					<td>103-284</td>
					<td>1100</td>
				</tr>
				<tr>
					<td>4 3/4"</td>
					<td>5/6 8.3</td>
					<td>150-300</td>
					<td>6-7 7/8</td>
					<td>1.03</td>
					<td>103-284</td>
					<td>1100</td>
				</tr>
				<tr>
					<td>4 3/4"</td>
					<td>5/6 8.3</td>
					<td>150-300</td>
					<td>6-7 7/8</td>
					<td>1.03</td>
					<td>103-284</td>
					<td>1100</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
<?php
endif;