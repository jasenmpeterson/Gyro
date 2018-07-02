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
	    <?php echo wpautop(get_the_content($page_id)); ?>
        <div class="why-you-should-work-for-us-title">
            <span>
                <span class="sep_line"></span>
            </span>
            <h3>Why you should work for us</h3>
            <span>
                <span class="sep_line"></span>
            </span>
        </div>
        <div class="why-you-should-work-for-us">
            <div class="col">
                <div class="count__wrap">
                    <span class="count orange">850+</span>
                    <span class="context">Employees Worldwide</span>
                </div>
            </div>
            <div class="col">
                <div class="bullets__wrap">
                    <div class="col">
                        <ul>
                            <li>Small Company with Big Ideas – Be a Name not a Number</li>
                            <li>Family First Climate</li>
                            <li>Competitive Salaries</li>
                            <li>Engaging Work Environment</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="count__wrap">
                    <span class="count blue">36</span>
                    <span class="context">Office Locations</span>
                </div>
            </div>
        </div>
	    <?php //echo $jobs->getData(); ?>
        <div class="job__applications__wrap">
            <iframe name="resumator-job-frame" id="resumator-job-frame" class="resumator-advanced-widget" src="//gyrodata.applytojob.com/apply/jobs/?depatartment=eac" width="100%" scrolling="yes" frameborder="0" allowTransparency="true"></iframe><script>function resizeResumatorIframe(height,nojump){if(nojump== 0){window.scrollTo(0,0);}document.getElementById("resumator-job-frame").height = parseInt(height)+20;}</script>
        </div>
	    <div class="small">
		    <?php echo get_field('fraudulent_employment_offers', $page_id); ?>
        </div>
    </div>
</section>