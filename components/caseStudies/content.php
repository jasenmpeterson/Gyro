<?php
global $post;
$postID = $post->ID;
$query = new WP_Query(
	array(
		'post_type' => 'page',
		'posts_per_page' => -1
	)
);
if ($query->have_posts() ) :
	;?>
	<div class="col interior__page__content content__with__sidebar content__contain <?php if(empty($documents)): echo 'no-right-sidebar'; endif; ?> technology__and__services__content" data-emergence="hidden">
        <div class="resources--list">
	        <?php
			$duplicates = array();
	        while ( $query->have_posts() ) : $query->the_post();
		        $id = get_the_ID();
				$documents = get_field('case_studies', $id);
		        if (!empty($documents)) {
					foreach($documents as $document):
						if(!in_array($document['title'], $duplicates )):
							array_push($duplicates, $document['title'] );
				        ?>
                        <div class="resource--wrap">
                            <a href="<?php echo $document['document']; ?>" target="_blank">
                                <figure>
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/raw/pdf-icon.svg" alt="">
                                </figure>
                                <article><?php echo $document['title']; ?></article>
                            </a>
                        </div>
			        <?php
						endif;
					endforeach;
		        }
			endwhile;
			wp_reset_postdata();
	        ?>
        </div>
	</div>
<?php
endif;
