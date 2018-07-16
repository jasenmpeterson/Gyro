<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/19/18
 * Time: 12:49 PM
 */
?>

<div class="col sidebar right">
	<?php if(!empty($documents['case_studies'])): ?>
        <div class="content__wrap">
            <h4>Case Studies</h4>
            <div class="scroll__wrap">
                <ul class="documents">
					<?php foreach($documents['case_studies'] as $case_study): ?>
                        <li>
                            <a href="<?php echo $case_study['document']; ?>" target="_blank">
                                <figure>
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/raw/pdf-icon.svg" alt="">
                                </figure>
                                <article><?php echo $case_study['title']; ?></article>
                            </a>
                        </li>
					<?php endforeach;?>
                </ul>
            </div>
        </div>
	<?php endif; ?>
    <?php if(!empty($documents['flyers'])): ?>
	<div class="content__wrap">
		<h4>Flyers</h4>
        <div class="scroll__wrap">
            <ul class="documents">
		        <?php foreach($documents['flyers'] as $flyer): ?>
                    <li>
                        <a href="<?php echo $flyer['document']; ?>" target="_blank">
                            <figure>
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/raw/pdf-icon.svg" alt="">
                            </figure>
                            <article><?php echo $flyer['title']; ?></article>
                        </a>
                    </li>
		        <?php endforeach;?>
            </ul>
        </div>
	</div>
	<?php endif; ?>
	<?php if(!empty($documents['specs'])): ?>
	<div class="content__wrap">
		<h4>Spec Sheets</h4>
        <div class="scroll__wrap">
            <ul class="documents">
		        <?php foreach($documents['specs'] as $spec_sheet): ?>
                    <li>
                        <a href="<?php echo $spec_sheet['document']; ?>" target="_blank">
                            <figure>
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/raw/pdf-icon.svg" alt="">
                            </figure>
                            <article><?php echo $spec_sheet['title']; ?></article>
                        </a>
                    </li>
		        <?php endforeach;?>
            </ul>
        </div>
	</div>
	<?php endif; ?>
</div>
