<form action="/" method="get" id="form">
    <div class="icons__container">
        <div class="icon__search"></div>
        <div class="icon__close">
            <div class="x__up"></div>
            <div class="x__down"></div>
        </div>
    </div>
	<input type="text" class="search" name="s" id="search" value="<?php the_search_query(); ?>" placeholder="Search..."/>
</form>