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
                // getting a list of children from parent cat (applications) and all of it's grandchildren, etc.
                $args = array(
                    'post_parent' => 505,
                    'post_type'   => 'page',
                    'numberposts' => -1,
                    'post_status' => 'publish'
                );
                $page_children = get_children($args);
                $links = array();
                $children = array();
                $grandchildren = array();
                $i = 0;
			    $page_object = get_queried_object();
                foreach($page_children as $page_child) {
                    $page_args = array (
                      'post_parent' => $page_child->ID
                    );

                    $pages = get_children($page_args);

                    if(!empty($pages)) {
	                    foreach($pages as $page):
		                    $grandchildren[] = $page;
	                    endforeach;
	                    $links[$page_child->post_title] = $grandchildren;
                    } else {
                       $children[] = $page_child;
                       $links['pages'] = $children;
                    }
                }
                foreach($links as $key => $link) {
                    if(is_string($key) && $key !== 'pages') {
                        echo '<ul class="drill__down">';
	                    echo '<li class="list__title"><span>'.$key.'</span></li>';
	                    foreach($links[$key] as $page) {
	                        if(get_permalink($page->ID) == get_queried_object_id()) {
		                        echo '<li class="child"><a href="'.get_permalink($page->ID).'"><span class="link__block">'.$page->post_title.'</span></a></li>';
                            } else {
		                        echo '<li class="child active"><a href="'.get_permalink($page->ID).'"><span class="link__block">'.$page->post_title.'</span></a></li>';
                            }
	                    }
	                    echo '</ul>';
                    } else {
                        echo '<div class="drill__down">';
                        foreach($link as $page_link) {
	                        echo '<a class="no-parent" href="'.get_permalink($page_link->ID).'"><span class="link__block">'.$page_link->post_title.'</span></a>';
                        }
                        echo '</div>';
                    }
                }
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