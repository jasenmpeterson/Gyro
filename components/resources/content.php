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
			<div class="filter-buttons">
				<button class="case_studies">Case Studies</button>
				<button class="articles">Articles</button>
				<button class="flyers">Flyers</button>
				<button class="specs">Specs</button>
				<button class="tech_papers">Tech Papers</button>
			</div>
			<div class="filter-list__messages"></div>
			<ul class="list">
				<?php
					$duplicates = array();
					$documents_array = array();

					while ( $query->have_posts() ) : $query->the_post();
						$id = get_the_ID();
						$documents = get_field('documents', $id);
						$documents_array[$id] = $documents;
					endwhile;

					foreach($documents_array as $document_array) {
						if(!empty($document_array)) {
							foreach($document_array as $key => $document) {
								if(!empty($document)) {
									foreach($document as $doc) {
										if(!in_array($doc['title'], $duplicates )):
											array_push($duplicates, $doc['title'] );
											echo '<li class="'.$key.'"><a href="'.$doc['document'].'" target="_blank">';
											echo '<figure><img src="'.get_template_directory_uri().'/assets/images/raw/pdf-icon.svg"></figure>';
											echo '<article>'.$doc['title'].'</article>';
											echo '</a></li>';
										endif;
									}
								}
							}
						}
					}
				?>
			</ul>
			<ul class="filter-pagination"></ul>
        </div>
	</div>
<?php
endif;
