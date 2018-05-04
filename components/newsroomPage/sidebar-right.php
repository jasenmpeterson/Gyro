<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 5/2/18
 * Time: 2:47 PM
 */
$listCategories = new \categories\categories();
$listCategories->retrieveCategories();

?>

<div class="col sidebar">
	<aside>
		<div class="content__wrap recent__posts">
			<?php
			if(!empty($listCategories->output)):
				echo $listCategories->output;
			endif;
			?>
		</div>
	</aside>
</div>
