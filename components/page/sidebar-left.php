<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/19/18
 * Time: 12:49 PM
 */
$contacts = new \supportContacts\supportContacts();
?>
<div class="col sidebar left">
    <aside>
        <div class="content__wrap">
			<?php
			wp_nav_menu(array(
				"menu" => "Technology & Solutions",
				'container'=> false,
				'menu_class' => 'drill__down',
				'walker' => new Gyro_Tech_Walker()
			));
			?>
        </div>
        <div class="content__wrap contact">
	        <?php echo $contacts->getContacts(); ?>
        </div>
    </aside>
</div>