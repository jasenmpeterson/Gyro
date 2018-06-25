<?php
$query = new WP_Query(
	array(
		'post_type' => 'page',
		'p' => $postID
	)
);
$table = get_field( 'specifications' );
if ($query->have_posts() ) :
;?>
<div class="col interior__page__content content__with__sidebar <?php if(empty($documents)): echo 'no-right-sidebar'; endif; ?> content__contain technology__and__services__content" data-emergence="hidden">
    <div class="content__wrap">
        <?php
            while ( $query->have_posts() ) : $query->the_post();
            $id = get_the_ID();
            $content_blocks = get_field('content_blocks');
            $content = $content_blocks['content'];
            $post_content = get_the_content();
            foreach($content as $content_block):
        ?>

                <?php
                    if(!empty($content_block['title'])):
                ?>
                <h3 class="title"><?php echo $content_block['title']; ?></h3>
                <?php endif; echo $content_block['paragraph']; ?>
        <?php
                endforeach;
            endwhile;

        ?>
    </div>
    <?php   if ( $table ) { ?>
    <div class="content__wrap">
        <h3 class="title">Technical Specifications</h3>
        <div style="overflow: auto;">
            <?php



                    echo '<table border="0" class="stripes">';

                    if ( $table['header'] ) {

                        echo '<thead>';

                        echo '<tr>';

                        foreach ( $table['header'] as $th ) {

                            echo '<th>';
                            echo $th['c'];
                            echo '</th>';
                        }

                        echo '</tr>';

                        echo '</thead>';
                    }

                    echo '<tbody>';

                    foreach ( $table['body'] as $tr ) {

                        echo '<tr>';

                        foreach ( $tr as $td ) {

                            echo '<td>';
                            echo $td['c'];
                            echo '</td>';
                        }

                        echo '</tr>';
                    }

                    echo '</tbody>';

                    echo '</table>';

            ?>
        </div>
    </div>
    <?php } ?>
</div>
<?php
    endif;