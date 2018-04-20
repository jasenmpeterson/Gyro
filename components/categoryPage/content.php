<?php
$category = get_queried_object();
$listCategories = new \categories\categories();
$listCategories->retrieveCategories();
$query = new WP_Query(
	array(
		'post_type' => 'post',
		'cat' => $category->term_id
	)
);
if ($query->have_posts() ) :
	?>
    <div class="content__wrapper static__banner__small static__banner__background__color">
        <?php include('staticBanner.php') ;?>
        <section class="row">
            <div class="col sidebar left">
                <aside>
                    <div class="content__wrap recent__posts">
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
            <div class="col interior__page__content content__with__sidebar content__contain newsrooms content__with__sidebar category__articles">
                <?php
                    while ( $query->have_posts() ) : $query->the_post();
                        $title = get_the_title();
                        $excerpt = get_the_excerpt();
                        $content = excerpt(get_the_content(), 25);
                        $link = get_permalink();
                        $date = get_the_date('F j, Y');
                        $image = get_the_post_thumbnail_url(get_the_ID(), 'full');
                ?>
                <article>
                    <a class="background__image" href="<?php echo $link ?>" style="background: url('<?php echo $image; ?>');">
                        <div class="tint"></div>
                        <div class="wrap">
                            <span class="date"><?php echo $date;?></span>
                            <h1><?php echo $title; ?></h1>
                            <div class="excerpt">
                                <?php echo wpautop($excerpt); ?>
                            </div>
                        </div>
                    </a>
                </article>
                <?php
                    endwhile;
                ?>
            </div>
        </section>
    </div>
<?php
endif;