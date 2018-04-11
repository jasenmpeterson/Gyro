<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/27/18
 * Time: 10:49 AM
 */
$category = get_category(get_query_var('cat'));
$cat_id = $category->cat_ID;
$cat_name = get_cat_name($cat_id);
?>

<section class="static__banner">
	<div class="row">
		<div class="col">
			<div class="content__wrap">
				<h2 class="title"><?php echo $cat_name ?></h2>
			</div>
		</div>
	</div>
</section>