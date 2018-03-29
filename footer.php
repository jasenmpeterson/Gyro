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
                    <a href="#">Code of Conduct</a>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Site Map</a>
                </div>
            </div>
        </footer>
        <section class="copyright component">
            &copy; 2018 Gyrodata Incorporated. All Rights Reserved.
        </section>
    </body>
</html>
