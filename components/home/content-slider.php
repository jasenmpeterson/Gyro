<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/26/18
 * Time: 1:22 PM
 */
$contentSlider = new \contentSlider\contentSlider(342);
$slider = $contentSlider->DisplayContentSlider();
?>
	<section class="content__slider blueprint__wrap component" data-emergence="hidden">
        <?php
	        foreach ($slider as $slide ):
                if ($slide) :
        ?>
		<div class="carousel__cell">
			<div class="row">
				<div class="col">
					<div class="content__wrap">
						<h1 data-content-slider-splitting-chars style="--word-total:1; --char-total:5;" class="title"><?php echo $slide['title']; ?></h1>
						<img src="<?php echo $slide['image']['sizes']['medium']?>" alt="$slide['image']['alt']">
					</div>
				</div>
				<div class="col">
					<div class="content__wrap last">
						<h4 data-content-slider-splitting-chars style="--word-total:1; --char-total:5;"><?php echo $slide['label']; ?></h4>
						<h3><?php echo $slide['header'] ;?></h3>
						<?php echo $slide['paragraph'] ;?>
						<a href="<?php echo $slide['learn_more_button'] ;?>" class="button" data-text="Learn More"><span>Learn more</span></a>
					</div>
				</div>
			</div>
		</div>
        <?php
                endif;
            endforeach;
        ?>
	</section>