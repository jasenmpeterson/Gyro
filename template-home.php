<?php
	/**
	 * Created by IntelliJ IDEA.
	 * User: jasen
	 * Date: 2/12/18
	 * Time: 12:23 PM
	 */

	$homePageClass = new \homePageClass\homePageClass(342);
	$banner = $homePageClass->displayMainBanner();
	$contentSlider = $homePageClass->displayContentSlider();
	$technology = $homePageClass->displayTechnology();
	$history = $homePageClass->displayHistory();
	if(!empty($banner)):
?>

		<section class="rotating__banner component is-hidden">
			<?php foreach ($banner as $slide ): ?>
				<div class="carousel__cell" style="background-image: url(<?php echo $slide['image'] ;?>);">
					<div class="row">
						<div class="col">
							<div class="content__wrap">
								<h1 data-banner-splitting-chars style="--word-total:1; --char-total:5;"><?php echo $slide['header']; ?></h1>
								<?php if (!empty($slide['paragraph'])): ?>
									<div data-banner-splitting-chars style="--word-total:1; --char-total:5; margin-bottom: 15px;"><?php echo $slide['paragraph']; ?></div>
								<?php endif; ?>
								<a href="<?php echo $slide['link']; ?>" class="button" data-text="Learn More"><span>Learn more</span></a>
							</div>
						</div>
					</div>
				</div>
			<?php endforeach; ?>
		</section>

<?php
	endif;

	if(!empty($contentSlider)):
?>
        <section class="blueprint__wrap">
            <section class="content__slider component is-hidden" data-emergence="hidden">
		        <?php
		        foreach ($contentSlider as $slide ):
			        if ($slide) :
				        ?>
                        <div class="carousel__cell">
                            <div class="product__background">
                                <video src="<?php echo $slide['bg_video']; ?>" preload="true" autoplay="autoplay" loop="loop"></video>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="content__wrap">
                                        <h1 data-content-slider-splitting-chars style="--word-total:1; --char-total:5;" class="title"><?php echo $slide['title']; ?></h1>
                                        <div class="image--wrap">
                                            <svg class="call--outs" id="Layer_2_1_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3024 3024"><g class="st0"><path class="st1" d="M674.5 1909.2v3.8h-23.9v-33h23.1v3.8h-19.1v10.7h14.9v3.8h-14.9v11.1h19.9zM705.4 1909.2v3.8h-22.9v-33h4v29.2h18.9zM736.3 1909.2v3.8h-23.9v-33h23.1v3.8h-19.1v10.7h14.9v3.8h-14.9v11.1h19.9zM765 1911.1c-2.4 1.6-5.1 2.4-8.2 2.4-3.1 0-5.8-.7-8.1-2.1-2.3-1.4-4.1-3.3-5.3-5.9-1.2-2.6-1.9-5.6-1.9-9 0-3.4.6-6.4 1.9-9 1.2-2.6 3-4.5 5.3-5.9 2.3-1.4 5-2.1 8-2.1 3.2 0 5.8.7 8 2 2.1 1.3 3.8 3.2 4.8 5.8l-3.9 1.8c-.7-1.9-1.8-3.4-3.2-4.3s-3.2-1.5-5.4-1.5c-2.3 0-4.2.5-5.9 1.6-1.7 1-3 2.6-4 4.6-.9 2-1.4 4.4-1.4 7.1 0 4.1 1 7.4 3 9.7 2 2.4 4.7 3.5 8.1 3.5 2.2 0 4.2-.6 5.8-1.7 1.6-1.1 2.8-2.8 3.5-5l4 1.5c-1 2.7-2.7 4.9-5.1 6.5zM801 1883.8h-11.5v29.2h-4v-29.2H774v-3.8h27v3.8zM819.9 1899.3H812v13.7h-4v-33h12.5c3.4 0 6.1.9 8.1 2.6 2 1.7 3 4.1 3 7.1 0 2.3-.6 4.3-1.9 5.9-1.3 1.6-3.1 2.7-5.4 3.3l9.3 14.2h-4.8l-8.9-13.8zm-7.9-3.8h8.5c4.7 0 7-2 7-5.9s-2.3-5.9-7-5.9H812v11.8zM862.4 1881.6c2.3 1.4 4.1 3.3 5.3 5.9 1.2 2.6 1.9 5.6 1.9 9s-.6 6.5-1.9 9c-1.2 2.5-3 4.5-5.3 5.9-2.3 1.4-5 2.1-8.1 2.1-3.1 0-5.8-.7-8.1-2.1-2.3-1.4-4.1-3.3-5.3-5.9-1.2-2.6-1.9-5.6-1.9-9s.6-6.5 1.9-9c1.2-2.5 3-4.5 5.3-5.9 2.3-1.4 5-2.1 8.1-2.1 3.1 0 5.8.7 8.1 2.1zm-16.3 5.2c-2 2.3-3 5.6-3 9.7s1 7.4 3 9.7c2 2.4 4.7 3.5 8.1 3.5 3.4 0 6.1-1.2 8.1-3.5s3-5.6 3-9.7-1-7.4-3-9.7c-2-2.4-4.7-3.5-8.1-3.5-3.4-.1-6.1 1.1-8.1 3.5zM904.3 1913h-4.9l-13.8-22.1-3.5-6.5.2 5.3v23.3h-3.8v-33h5l13.8 22 3.5 6.6h.1l-.2-5.3V1880h3.8v33zM919.1 1913h-4v-33h4v33zM951.4 1911.1c-2.4 1.6-5.1 2.4-8.2 2.4-3.1 0-5.8-.7-8.1-2.1-2.3-1.4-4.1-3.3-5.3-5.9-1.2-2.6-1.9-5.6-1.9-9 0-3.4.6-6.4 1.9-9 1.2-2.6 3-4.5 5.3-5.9 2.3-1.4 5-2.1 8-2.1 3.2 0 5.8.7 8 2 2.1 1.3 3.8 3.2 4.8 5.8l-3.9 1.8c-.7-1.9-1.8-3.4-3.2-4.3s-3.2-1.5-5.4-1.5c-2.3 0-4.2.5-5.9 1.6-1.7 1-3 2.6-4 4.6-.9 2-1.4 4.4-1.4 7.1 0 4.1 1 7.4 3 9.7 2 2.4 4.7 3.5 8.1 3.5 2.2 0 4.2-.6 5.8-1.7 1.6-1.1 2.8-2.8 3.5-5l4 1.5c-1.1 2.7-2.8 4.9-5.1 6.5zM987.5 1886.5l-3.5 2.8c-1-2.2-2.2-3.8-3.6-4.7-1.4-.9-3.3-1.4-5.7-1.4-2.5 0-4.5.5-6 1.6-1.5 1-2.2 2.4-2.2 4 0 1.1.3 2 .9 2.7.6.7 1.5 1.3 2.8 1.8 1.3.5 3.1 1 5.5 1.4 4.4.7 7.5 1.8 9.3 3.3 1.8 1.5 2.7 3.5 2.7 6.1 0 1.9-.5 3.5-1.6 4.9-1.1 1.4-2.5 2.5-4.5 3.3-1.9.8-4.2 1.2-6.7 1.2-3.3 0-6.2-.7-8.5-2s-4.1-3-5.4-5.2l3.5-2.8c.9 2 2.2 3.5 4 4.6 1.8 1.1 3.9 1.6 6.6 1.6 2.6 0 4.7-.5 6.2-1.4 1.5-1 2.3-2.3 2.3-4 0-1.5-.7-2.6-2-3.5-1.3-.9-3.7-1.6-7.1-2.2-4.4-.8-7.5-1.9-9.3-3.3-1.8-1.4-2.8-3.4-2.8-6 0-1.8.5-3.4 1.5-4.9s2.4-2.7 4.3-3.6c1.9-.9 4-1.3 6.5-1.3 6 0 10.2 2.3 12.8 7z"/></g><g class="st0"><path class="st1" d="M1207.3 777.4h11.8c3.8 0 6.6.8 8.5 2.4 1.9 1.6 2.8 3.8 2.8 6.7 0 1.7-.5 3.3-1.5 4.6-1 1.3-2.3 2.2-4.1 2.5 1.9.4 3.5 1.2 4.6 2.7 1.2 1.4 1.8 3 1.8 4.8 0 2.8-1.1 5.1-3.2 6.8-2.1 1.7-5.1 2.5-8.9 2.5h-11.7v-33zm11.8 14.5c2.4 0 4.1-.4 5.3-1.3 1.1-.9 1.7-2.2 1.7-4.1 0-3.6-2.3-5.3-7-5.3h-7.8V792h7.8zm.8 14.8c2.3 0 4.1-.5 5.2-1.4 1.2-1 1.8-2.3 1.8-4.1 0-1.8-.6-3.1-1.8-4.1-1.2-1-2.9-1.4-5.2-1.4h-8.6v11h8.6zM1258 801.3h-15l-3.5 9.2h-4.2l12.9-33h4.8l12.8 33h-4.2l-3.6-9.2zm-1.5-3.8l-4.5-11.7-1.5-4.6h-.1l-1.4 4.5-4.5 11.8h12zM1291.1 781.2h-11.5v29.2h-4v-29.2h-11.5v-3.8h27v3.8zM1321.3 781.2h-11.5v29.2h-4v-29.2h-11.5v-3.8h27v3.8zM1352.2 806.7v3.8h-23.9v-33h23.1v3.8h-19.1V792h14.9v3.8h-14.9v11.1h19.9zM1372.1 796.7h-7.9v13.7h-4v-33h12.5c3.4 0 6.1.9 8.1 2.6 2 1.7 3 4.1 3 7.1 0 2.3-.6 4.3-1.9 5.9-1.3 1.6-3.1 2.7-5.4 3.3l9.3 14.2h-4.8l-8.9-13.8zm-7.9-3.7h8.5c4.7 0 7-2 7-5.9s-2.3-5.9-7-5.9h-8.5V793zM1403.3 797.5v12.9h-4v-12.9l-11.8-20.1h4.8l9 16 9.1-16h4.8l-11.9 20.1z"/></g><g class="st0"><path class="st1" d="M2466.2 1581.5v16.7h-3l-.2-4.5c-1 1.6-2.3 2.8-4.1 3.7-1.8.9-3.9 1.3-6.3 1.3-3.1 0-5.8-.7-8.1-2.1-2.3-1.4-4.1-3.3-5.3-5.9-1.2-2.6-1.9-5.6-1.9-9 0-3.4.6-6.4 1.9-9 1.3-2.6 3.1-4.5 5.4-5.9 2.3-1.4 5-2.1 8.1-2.1 3.3 0 6 .6 8.1 1.8 2.1 1.2 3.8 3.1 5.1 5.7l-3.7 2c-.7-1.9-1.9-3.3-3.6-4.3-1.7-1-3.6-1.5-6-1.5-2.2 0-4.2.5-5.9 1.6-1.7 1.1-3 2.6-3.9 4.6-.9 2-1.4 4.3-1.4 7.1 0 4.2 1 7.5 2.9 9.8 1.9 2.3 4.7 3.5 8.3 3.5 2.9 0 5.2-.7 7-2.2 1.8-1.5 2.7-3.6 2.7-6.3v-1.2h-10.5v-3.8h14.4zM2486 1585.3v12.9h-4v-12.9l-11.8-20.1h4.8l9 16 9.1-16h4.8l-11.9 20.1zM2515.6 1584.5h-7.9v13.7h-4v-33h12.5c3.4 0 6.1.9 8.1 2.6 2 1.7 3 4.1 3 7.1 0 2.3-.7 4.3-1.9 5.9-1.3 1.6-3.1 2.7-5.4 3.3l9.3 14.2h-4.8l-8.9-13.8zm-7.9-3.8h8.5c4.7 0 7-2 7-5.9s-2.3-5.9-7-5.9h-8.5v11.8zM2558 1566.7c2.3 1.4 4.1 3.3 5.3 5.9 1.2 2.6 1.9 5.6 1.9 9s-.6 6.5-1.9 9c-1.2 2.5-3 4.5-5.3 5.9-2.3 1.4-5 2.1-8.1 2.1s-5.8-.7-8.1-2.1c-2.3-1.4-4.1-3.3-5.3-5.9-1.2-2.6-1.9-5.6-1.9-9s.6-6.5 1.9-9c1.2-2.5 3-4.5 5.3-5.9 2.3-1.4 5-2.1 8.1-2.1s5.9.8 8.1 2.1zm-16.2 5.2c-2 2.3-3 5.6-3 9.7s1 7.4 3 9.7c2 2.4 4.7 3.5 8.1 3.5s6.1-1.2 8.1-3.5 3-5.6 3-9.7-1-7.4-3-9.7c-2-2.4-4.7-3.5-8.1-3.5s-6.1 1.2-8.1 3.5zM2614.4 1571.7l-3.5 2.8c-1-2.2-2.2-3.8-3.6-4.7-1.4-.9-3.3-1.4-5.7-1.4-2.5 0-4.5.5-6 1.6-1.5 1-2.2 2.4-2.2 4 0 1.1.3 2 .9 2.7.6.7 1.5 1.3 2.8 1.8 1.3.5 3.1 1 5.5 1.4 4.4.7 7.5 1.8 9.3 3.3 1.8 1.5 2.7 3.5 2.7 6.1 0 1.9-.5 3.5-1.6 4.9-1.1 1.4-2.5 2.5-4.5 3.3-1.9.8-4.2 1.2-6.7 1.2-3.3 0-6.2-.7-8.5-2s-4.1-3-5.4-5.2l3.5-2.8c.9 2 2.2 3.5 4 4.6 1.8 1.1 3.9 1.6 6.6 1.6 2.6 0 4.7-.5 6.2-1.4 1.5-1 2.3-2.3 2.3-4 0-1.5-.7-2.6-2-3.5-1.3-.9-3.7-1.6-7.1-2.2-4.4-.8-7.5-1.9-9.3-3.3-1.8-1.4-2.8-3.4-2.8-6 0-1.8.5-3.4 1.5-4.9s2.4-2.7 4.3-3.6c1.9-.9 4-1.3 6.5-1.3 6 0 10.2 2.3 12.8 7zM2647 1594.4v3.8h-23.9v-33h23.1v3.8h-19.1v10.7h14.9v3.8h-14.9v11.1h19.9zM2680.9 1598.2h-5l-13.8-22.1-3.5-6.5h-.1l.2 5.3v23.3h-3.8v-33h5l13.8 22 3.5 6.6h.1l-.2-5.3v-23.3h3.8v33zM2715.1 1571.7l-3.5 2.8c-1-2.2-2.2-3.8-3.6-4.7-1.4-.9-3.3-1.4-5.7-1.4-2.5 0-4.5.5-6 1.6-1.5 1-2.2 2.4-2.2 4 0 1.1.3 2 .9 2.7.6.7 1.5 1.3 2.8 1.8 1.3.5 3.1 1 5.5 1.4 4.4.7 7.5 1.8 9.3 3.3 1.8 1.5 2.7 3.5 2.7 6.1 0 1.9-.5 3.5-1.6 4.9-1.1 1.4-2.5 2.5-4.5 3.3-1.9.8-4.2 1.2-6.7 1.2-3.3 0-6.2-.7-8.5-2s-4.1-3-5.4-5.2l3.5-2.8c.9 2 2.2 3.5 4 4.6 1.8 1.1 3.9 1.6 6.6 1.6 2.6 0 4.7-.5 6.2-1.4 1.5-1 2.3-2.3 2.3-4 0-1.5-.7-2.6-2-3.5-1.3-.9-3.7-1.6-7.1-2.2-4.4-.8-7.5-1.9-9.3-3.3-1.8-1.4-2.8-3.4-2.8-6 0-1.8.5-3.4 1.5-4.9s2.4-2.7 4.3-3.6c1.9-.9 4-1.3 6.5-1.3 5.9 0 10.2 2.3 12.8 7zM2745.2 1566.7c2.3 1.4 4.1 3.3 5.3 5.9 1.2 2.6 1.9 5.6 1.9 9s-.6 6.5-1.9 9c-1.2 2.5-3 4.5-5.3 5.9-2.3 1.4-5 2.1-8.1 2.1-3.1 0-5.8-.7-8.1-2.1-2.3-1.4-4.1-3.3-5.3-5.9-1.2-2.6-1.9-5.6-1.9-9s.6-6.5 1.9-9c1.2-2.5 3-4.5 5.3-5.9 2.3-1.4 5-2.1 8.1-2.1 3.1.1 5.8.8 8.1 2.1zm-16.2 5.2c-2 2.3-3 5.6-3 9.7s1 7.4 3 9.7c2 2.4 4.7 3.5 8.1 3.5 3.4 0 6.1-1.2 8.1-3.5s3-5.6 3-9.7-1-7.4-3-9.7c-2-2.4-4.7-3.5-8.1-3.5-3.4 0-6.1 1.2-8.1 3.5zM2773.1 1584.5h-7.9v13.7h-4v-33h12.5c3.4 0 6.1.9 8.1 2.6 2 1.7 3 4.1 3 7.1 0 2.3-.7 4.3-1.9 5.9-1.3 1.6-3.1 2.7-5.4 3.3l9.3 14.2h-4.8l-8.9-13.8zm-7.9-3.8h8.5c4.7 0 7-2 7-5.9s-2.3-5.9-7-5.9h-8.5v11.8z"/></g><path class="st2" d="M650.7 1930H988l455.6-262.7M1413.2 821.1h-205.3l-381.8 222.3M2156.4 1773.2L2438 1611h351"/></svg>
                                            <img src="<?php echo $slide['image']['url']?>" alt="<?php echo $slide['image']['alt']; ?>">
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="content__wrap last">
                                        <h4 data-content-slider-splitting-chars style="--word-total:1; --char-total:5;"><?php echo $slide['label']; ?></h4>
                                        <h3><?php echo $slide['header'] ;?></h3>
								        <?php echo $slide['paragraph'] ;?>
                                        <a href="<?php echo $slide['link'] ;?>" class="button" data-text="Learn More"><span>Learn more</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
			        <?php
			        endif;
		        endforeach;
		        ?>
            </section>
        </section>
<?php
	endif;

	if($technology):
?>
		<section class="technology__and__services component background__image" data-emergence="hidden">
				<div class="background__image secondary" style="background-image: url('<?php echo $technology['image'] ;?>')"></div>
				<div class="row">
					<div class="col">
						<div class="content__wrap">
							<h2 class="title"><?php echo $technology['title']; ?></h2>
							<?php echo $technology['paragraph']; ?>
							<ul class="icon__list">
								<?php
								foreach($technology['list'] as $list):
									?>
									<li>
										<div class="wrap">
											<a href="<?php echo $list['page_link']; ?>">
												<figure><img src="<?php echo $list['icon']['url']; ?>" alt="<?php echo $list['icon']['alt']; ?>"></figure>
												<span>Learn More About</span> <article> <?php echo $list['label']; ?></article>
											</a>
										</div>
									</li>
								<?php endforeach; ?>
							</ul>
						</div>
					</div>
				</div>
		</section>

<?php
	endif;
	get_template_part('components/locations');
	get_template_part('components/news-posts');
	if($history):
?>
		<section class="history history__home component" data-emergence="hidden">
				<div class="background__image" style="background-image: url('<?php echo $history['image']; ?>')"></div>
				<div class="row align-center">
					<div class="col">
						<div class="content__wrap">
							<h1 class="title" data-history-splitting-chars><?php echo $history['header']; ?></h1>
							<?php echo $history['paragraph']; ?>
							<a href="<?php echo $history['link']; ?>" class="button white" data-text="Learn more about our history"><span>Learn more about our history</span></a>
						</div>
					</div>
				</div>
		</section>
<?php

	endif;

