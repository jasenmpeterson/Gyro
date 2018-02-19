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

// REMOVE CONTENT EDITOR FROM PAGES

add_action('admin_init', 'remove_textarea');

function remove_textarea() {
	remove_post_type_support( 'page', 'editor' );
}

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
	'secondary_menu' => 'Secondary Menu',
	'footer_menu' => 'Footer Menu'
) );

// Custom Walker

include("walker.php");