<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/19/18
 * Time: 12:49 PM
 */
?>
<div class="col sidebar left">
    <aside>
        <div class="content__wrap">
			<?php

			$sideBar = new \sideBar\sideBar(510);
			$displaySideBar = $sideBar->get_posts_children();
			echo $displaySideBar;
			?>
        </div>
        <div class="content__wrap contact">
            <h5>Contact Local Support</h5>
            <table>
                <tr>
                    <td>North & Latin Americas</td>
                    <td>+1 281 213 6300</td>
                </tr>
                <tr>
                    <td>Europe & Africa</td>
                    <td>+44 1224 823060</td>
                </tr>
                <tr>
                    <td>Asia & Middle East</td>
                    <td>+60 32713 3622</td>
                </tr>
            </table>
            <a href="#" class="button" data-text="Contact Us"><span>Contact Us</span></a>
        </div>
    </aside>
</div>