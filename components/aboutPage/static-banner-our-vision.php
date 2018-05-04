<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/27/18
 * Time: 10:49 AM
 */
$staticBanner = new \staticBanner\staticBanner(null,36, 'our_vision_static_banner');
$banner = $staticBanner->DisplayStaticBanner();
?>
<section class="about__page our__vision">
    <div class="row reverse">
        <div class="col">
            <div class="content__wrap">
                <h2 class="title"><?php echo $banner['header'] ?></h2>
	            <?php echo $banner['paragraphs'] ?>
            </div>
        </div>
        <div class="col">
            <div class="background__image secondary" style="width: 100%; background-image: url('<?php echo $banner['image']['sizes']['large']; ?>')"></div>
        </div>
    </div>
</section>