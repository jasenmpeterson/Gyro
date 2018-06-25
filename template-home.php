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
                                            <svg class="call--outs" id="Layer_2_1_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3024 3024"><style>.st0{fill:none;stroke:#888c8d;stroke-width:4;stroke-miterlimit:10}.st2{font-family:&apos;WorkSans-Regular&apos;}.st3{font-size:48px}.st4{fill:#888c8d}</style><path class="st0" d="M1303 1502l-528 306H586"/><text transform="translate(582.667 1796)" class="st2 st3" fill="#868a8b">CCL</text><text transform="translate(795.667 2097.333)" class="st4 st2 st3">ELECTRONICS</text><path class="st0" d="M1834.3 1807.9l-523.6 302.3H800"/><text transform="translate(1240.333 2358.333)" class="st4 st2 st3">CENTRALIZERS</text><path class="st0" d="M2265.5 2075l-511 295.5h-511"/><text transform="translate(2640 1615)" class="st4 st2 st3">GYRO</text><path class="st0" d="M2403.2 1726.5l178.5-102.2H2770M2168.2 1862l160.6-92.3"/><text transform="translate(2015 1228)" class="st4 st2 st3">GAMMA RAY</text><path class="st0" d="M1684.7 1364.8l217.8-126.3h398M1643 1389l8.4-4.9M1487 1479.5l116.6-67.7"/></svg>
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

