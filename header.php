<!doctype html>
<head>

    <!--=== META TAGS ===-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="description" content="Keywords">
    <meta name="author" content="Name">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!--=== LINK TAGS ===-->
    <link rel="shortcut icon" href="<?php echo THEME_DIR; ?>/path/favicon.ico" />
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

    <!--=== TITLE ===-->
    <title><?php wp_title(); ?> - <?php bloginfo( 'name' ); ?></title>

    <!--=== WP_HEAD() ===-->
	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

<header>
    <div class="row align-right meta__header">
        <div class="col search__form">
            <div class="search__form__wrap">
				<?php get_search_form(); ?>
            </div>
        </div>
        <div class="col secondary__nav">
            <div class="nav__wrap">
				<?php
				wp_nav_menu(array(
					"menu" => "Secondary Menu",
					'container'=> false
				));
				?>
            </div>
        </div>
        <div class="col social__media">
            <div class="social__media__wrap">
                <a href="<?php echo get_field("linkedin_url", "option") ;?>"><i class="fab fa-linkedin-in"></i></a>
                <a href="<?php echo get_field("facebook_url", "option") ;?>"><i class="fab fa-facebook-f"></i></a>
                <a href="<?php echo get_field("youtube_url", "option") ;?>"><i class="fab fa-youtube"></i></a>
                <a href="<?php echo get_field("twitter_url", "option") ;?>"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </div>
    <div class="row between primary__header">
        <div class="col logo">
            <div class="logo__wrap">
                <a href="<?php echo home_url(); ?>">
                    <?php get_template_part("logo"); ?>
                </a>
            </div>
        </div>
        <div class="col primary_nav">
            <div class="nav__wrap">
                <?php
                    wp_nav_menu(array(
                        "menu" => "Primary Menu",
                        'container'=> false
                    ));
                ?>
                <div class="hamburger__menu">
                    <div class="bar"></div>
                </div>
            </div>
        </div>
    </div>
</header>