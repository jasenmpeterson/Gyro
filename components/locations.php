<section class="map__wrapper">
    <div class="location__module__wrapper">
        <div class="location__module regions">
            <div class="regions__title module__title"><h1><span>Regions</span></h1></div>
            <div class="regions__wrap"></div>
        </div>
        <div class="location__module locations">
            <div class="region__title module__title"><h1><span></span></h1></div>
            <div class="locations__wrap">
                <div class="locations__button__wrap cities">

                </div>
            </div>
        </div>
        <div class="location__module local">
            <div class="loader"><img src="<?php echo get_template_directory_uri();?>/assets/images/raw/puff.svg"></div>
            <div class="weather__container row">
                <div class="col">
                    <span class="region span__block"></span>
                    <span class="city span__block"></span>
                    <span class="day span__block"></span>
                </div>
                <div class="col text__align__center">
                    <span class="temperature span__block"></span>
                </div>
                <div class="col">
                    <p><span class="precipitation"> </span></p>
                    <p><span class="humidity"></span></p>
                    <p><span class="wind"></span></p>
                </div>
            </div>
        </div>
        <div class="location__module contact">
            <div class="row">
                <div class="col"></div>
            </div>
        </div>
    </div>
    <div id="map"></div>
</section>
