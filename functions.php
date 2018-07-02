<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 2/9/18
 * Time: 10:27 AM
 */

define("THEME_DIR", get_template_directory_uri());
define("THEME_URI", get_site_url());
/*--- REMOVE GENERATOR META TAG ---*/
remove_action('wp_head', 'wp_generator');

// CLASSES

include('classes/contentSlider.php');
include('classes/staticBanner.php');
include('classes/recentPosts.php');
include('classes/categories.php');
include('classes/sideBar.php');
include('classes/supportContacts.php');
include('classes/jazz.php');
include('components/home/homePageClass.php');
include('mega_walker.php');
require "lib/jazz-api/jazz.php";


// ENQUEUE STYLES

function enqueue_styles() {

	/** REGISTER css/screen.cs **/
	wp_register_style( 'theme-style', THEME_DIR . '/theme.min.css', array(), '1', 'all' );
	wp_enqueue_style( 'theme-style' );

}
add_action( 'wp_enqueue_scripts', 'enqueue_styles' );

// ENQUEUE SCRIPTS

function enqueue_scripts() {

	wp_register_script( 'vendor-script', THEME_DIR . '/assets/js/vendors.min.js', array(), '1', true );
	wp_enqueue_script( 'vendor-script' );

	wp_register_script( 'font-awesome', 'https://use.fontawesome.com/releases/v5.0.6/js/all.js', array(), '1', true );
	wp_enqueue_script( 'font-awesome' );

	wp_register_script( 'theme-script', THEME_DIR . '/assets/js/custom.min.js', array(), '1', true );

	$ajaxurl = admin_url('admin-ajax.php');

	$pageParams = array(
		'siteURL' => THEME_URI,
		'root'    => get_home_url(),
		'ajaxurl'  => $ajaxurl,
		'themeDirectory' => get_stylesheet_directory_uri(),
		'javascriptDirectory' => get_stylesheet_directory_uri() . '/assets/js/'
	);

	wp_localize_script('theme-script', 'pageParams', $pageParams);

	wp_enqueue_script( 'theme-script' );
}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );

// Add async and defer attributes
function google_maps_script_attributes( $tag, $handle) {
	if ( 'google-maps' !== $handle ) {
		return $tag;
	}

	return str_replace( ' src', ' async="async" defer src', $tag );
}
add_filter('script_loader_tag', 'google_maps_script_attributes', 10, 2);

if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));

}

// REGISTER MENU(S)

register_nav_menus( array(
	'primary_menu' => 'Primary Menu',
	'mega_menu' => 'Mega Menu',
	'secondary_menu' => 'Secondary Menu',
	'tech_menu' => 'Technology & Solutions Menu',
	'applications_menu' => 'Applications & Markets Menu',
	'footer_menu' => 'Footer Menu'
) );

// THUMBNAILS

add_theme_support( 'post-thumbnails' );

// Custom Walker

include("walker.php");
include("tech_walker.php");

// Custom Excerpt Length

function excerpt($content, $limit) {
	return wp_trim_words($content, $limit);
}

// Numeric Pagination for Custom Post Types
function pagination_bar( $custom_query ) {

	$total_pages = $custom_query->max_num_pages;
	$big = 999999999; // need an unlikely integer

	if ($total_pages > 1){
		$current_page = max(1, get_query_var('paged'));

		echo paginate_links(array(
			'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
			'format' => '?paged=%#%',
			'current' => $current_page,
			'total' => $total_pages,
		));
	}
}

add_action( 'admin_init', 'remove_editor' );
function remove_editor() {
	// Get the Post ID.
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	if( !isset( $post_id ) ) return;
	// Hide the editor on the page titled 'Homepage'
	$id = $post_id;
	if($id == 342){
		remove_post_type_support('page', 'editor');
	}
	// Hide the editor on a page with a specific page template
	// Get the name of the Page Template file.
	$template_file = get_post_meta($post_id, '_wp_page_template', true);
	if($template_file == 'my-page-template.php'){ // the filename of the page template
		remove_post_type_support('page', 'editor');
	}
}