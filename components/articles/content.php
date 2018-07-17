<?php
$query = new WP_Query(
	array(
		'post_type' => 'page',
		'posts_per_page' => -1,
		'post__not_in' => array(1402, 1400, 1398, 1395, 1393)
	)
);
if ($query->have_posts() ) :
	;?>
	<div class="col interior__page__content content__with__sidebar content__contain <?php if(empty($documents)): echo 'no-right-sidebar'; endif; ?> technology__and__services__content" data-emergence="hidden">
		<div class="resources--list" id="resource-list">
			<ul class="list">
				<?php
					$duplicates = array();
					$documents_array = array();
					while ( $query->have_posts() ) : $query->the_post();
						$id = get_the_ID();
						$documents = get_field('documents', $id);
						$articles = $documents['articles'];
						$documents_array[$id] = $articles;
					endwhile;
					foreach($documents_array as $document_array) {
						if(!empty($document_array)) {
							foreach($document_array as $key => $document) {
								if(!empty($document)) {
									if(!in_array($document['title'], $duplicates )):
										array_push($duplicates, $document['title'] );
										echo '<li class="'.$key.'"><a href="'.$document['document'].'" target="_blank">';
										echo '<figure><img src="'.get_template_directory_uri().'/assets/images/raw/pdf-icon.svg"></figure>';
										echo '<article>'.$document['title'].'</article>';
										echo '</a></li>';
									endif;
								}
							}
						}
					}
					wp_reset_postdata();
				?>
			</ul>
			<ul class="filter-pagination"></ul>
		</div>
	</div>
<?php
endif;
