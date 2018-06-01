<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/22/18
 * Time: 2:18 PM
 */
$terms = get_categories();
$jobs =  new \jobs\jobs('WKDgyBABahZCCIaAfyD7aSNDf36fHWbp');
?>
<section class="col interior__page__content content__contain newsrooms">
    <div class="content__wrap careers__wrap">
	    <?php echo $jobs->getData(); ?>
	    <div class="small">
		    <?php echo wpautop(get_the_content($page_id)); ?>
        </div>
    </div>
</section>