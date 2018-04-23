<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/23/18
 * Time: 10:21 AM
 * Template Name: Careers
 */
get_header();
$page_object = get_queried_object();
$page_id     = get_queried_object_id();
?>

	<div class="content__wrapper static__banner__small contact__page static__banner__background__color">
		<?php include(locate_template('components/contact/static-banner.php')); ?>
		<div class="row">
			<?php include(locate_template("components/locations.php")); ?>
			<?php include(locate_template("components/contact/content.php")); ?>
            <section class="form__wrapper">
                <?php
                    echo do_shortcode('[contact-form-7 id="660" title="Contact Form"]');
                ?>
            </section>
		</div>
	</div>

<?php
get_footer();