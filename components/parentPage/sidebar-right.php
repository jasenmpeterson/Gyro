<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/19/18
 * Time: 12:49 PM
 */
?>

<div class="col sidebar right">
	<?php if(!empty($case_studies)): ?>
        <div class="content__wrap">
            <h4>Case Studies</h4>
            <div class="scroll__wrap">
                <ul class="documents">
					<?php foreach($case_studies as $case_study): ?>
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
	<?php if(!empty($documents)): ?>
        <div class="content__wrap">
            <h4>Related Downloads</h4>
            <div class="scroll__wrap">
                <ul class="documents">
					<?php foreach($documents as $document): ?>
                        <li>
                            <a href="<?php echo $document['document']; ?>" target="_blank">
                                <figure>
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/raw/pdf-icon.svg" alt="">
                                </figure>
                                <article><?php echo $document['title']; ?></article>
                            </a>
                        </li>
					<?php endforeach;?>
                </ul>
            </div>
        </div>
	<?php endif; ?>
</div>