<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 2/9/18
 * Time: 10:20 AM
 */

wp_footer();

?>
        <footer class="component">
            <div class="row between">
                <div class="col footer__logo">
                    <a href="<?php echo home_url(); ?>">
                        <?php get_template_part("logo"); ?>
                    </a>
                </div>
                <div class="col">
	                <?php
                        wp_nav_menu(array(
                            "theme_location" => "footer_menu",
                            'container'=> false
                        ));
	                ?>
                </div>
            </div>
        </footer>
        <section class="copyright component">
            &copy; 2018 Gyrodata Incorporated. All Rights Reserved.
        </section>
    </body>
</html>
