import {format} from "date-fns";

let GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.load(function(google) {
    if(document.getElementById("map")) {
        let el = document.querySelector("#map");
        let myLatLng = {lat: 29.76328, lng: -95.36327};
        let currentTemp;
        let currentHumidity;
        let currentPrecipitation;
        let currentWind;
        let currentTime;
        let d = new Date();
        let dayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        let currentDay = dayNames[d.getDay()-1];
        let locationsModule = document.querySelector(".location__module.locations");
        let localModule = document.querySelector(".location__module.local");
        let loader = document.querySelector(".location__module .loader");
        let weatherModule = document.querySelector(".weather__container");
        let icon = {
            url:  '/wp-content/themes/gyro/assets/images/raw/map_marker.svg',
            scaledSize: new google.maps.Size(20, 20), // scaled size
        };
        let map = new google.maps.Map(el, {
            center: myLatLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 3,
            styles: [
                {
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ]
        });
        let locations = [
            {
                name: "United States",
                region: "North America",
                cities: [
                    {
                        name: "Houston, TX",
                        latitude: 29.76328,
                        longitude: -95.36327,
                        region: "North America",
                        contact: {
                            name: "GyroData Global - North American Headquarters",
                            street: "4245 Cadillac Lane",
                            city: "Houston, TX",
                            zip: "77581",
                            tel: "911",
                            fax: "911"
                        }
                    },
                    {
                        name: "Miami, FL",
                        latitude: 25.77427,
                        longitude: -80.193667,
                        region: "North America",
                        contact: {
                            name: "GyroData Global - North American Headquarters",
                            street: "4245 Cadillac Lane",
                            city: "Miami, FL",
                            zip: "77581",
                            tel: "911",
                            fax: "911"
                        }
                    }
                ],
            }
        ];

        let regions = [
            { name: "North America", latitude: 54.525961, longitude: -105.255119 },
            { name: "Asia & Middle East", latitude: 34.047863, longitude: 100.619655  },
            { name: "Europe, Africa & Caspian", latitude: 54.525961, longitude: 15.255119  },
            { name: "Latin America", latitude: -4.442039, longitude: -61.326854 }
        ];

        let regionsModule = document.querySelector(".location__module.regions .regions__wrap");

        for(let location of locations) {
            for(let city of location.cities) {
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(city.latitude, city.longitude),
                    map: map,
                    icon: icon,
                    title: city.name,
                    region: city.region,
                });
                // marker.addListener("click", function () {
                //     map.setZoom(5);
                //     map.setCenter(marker.getPosition());
                //     setTemp(parseInt(marker.getPosition().lat()),parseInt(marker.getPosition().lng()), marker.title, marker.region);
                //     locationsModule.classList.add("active");
                //     document.querySelector(".region__title").innerHTML = marker.region;
                //     loadLocations(marker.region);
                //     localModule.classList.add("active");
                //     // marker.setIcon({
                //     //     url: '/wp-content/themes/gyro/assets/images/raw/map_marker.svg',
                //     //     scaledSize: new google.maps.Size(30, 30)
                //     // })'
                // });
            }
        }

        let  setTemp = (lat,lng, location, region) => {
            weatherModule.classList.remove("active");
            loader.classList.remove("inactive");
            fetch(`${pageParams.themeDirectory}/api/weather.php?lat=${lat}&lng=${lng}`)
                .then( function (response) {
                    return response.json();
                }).then(function(myJSON) {
                        weatherModule.classList.add("active");
                        loader.classList.add("inactive");
                        currentTemp = Math.round(myJSON.temp);
                        currentHumidity = myJSON.humidity + "%";
                        currentHumidity = currentHumidity.replace(/^[0\.]+/, "");
                        currentPrecipitation = Math.round(myJSON.precipitation) + "%";
                        currentWind = Math.round(myJSON.wind) + " mph";
                        currentTime = myJSON.time;
                        document.querySelector("span.temperature").innerHTML = currentTemp + "<sup>&#8457;</sup>";
                        document.querySelector("span.humidity").innerHTML = currentHumidity;
                        document.querySelector("span.precipitation").innerHTML = currentPrecipitation;
                        document.querySelector("span.wind").innerHTML = currentWind;
                        document.querySelector("span.day").innerHTML = currentDay + " " + myJSON.time;
                        document.querySelector("span.city").innerHTML = location;
                        document.querySelector("span.region").innerHTML = region;
                });
        };

        let setContact = (city) => {
            let contactModule = document.querySelector(".location__module.contact");
            let module = document.querySelector(".location__module.contact .col");
            //module.innerHTML =  `${locations.map(location => location.cities.map(currentCity => console.log(currentCity.contact)) ).join('')}`;
            module.innerHTML =  `${locations.map(location => location.cities.map(currentCity => (currentCity.contact.city === city ? `<h4>${currentCity.contact.name}</h4><address><p>${currentCity.contact.street}</p><p>${currentCity.contact.city} ${currentCity.contact.zip}</p><p>Tel: ${currentCity.contact.tel}</p><p>Fax: ${currentCity.contact.fax}</p></address> `  : "")).join('') )}`;
            contactModule.classList.add("active");
        };

        regionsModule.innerHTML = `<div class="locations__button__wrap">
        ${regions.map(region => `<button class="region__button maps__button" data-name="${region.name}" data-lat="${region.latitude}" data-lng="${region.longitude}">${region.name}</button>`).join('')}
    </div>`;

        let regionButtons = document.querySelectorAll(".region__button");
        for(let regionButton of regionButtons) {
            regionButton.addEventListener("click", (e) => {
                let longitude = e.target.dataset.lng;
                let latitude = e.target.dataset.lat;
                let region = e.target.dataset.name;
                map.setZoom(3);
                map.setCenter({lat: parseInt(latitude), lng: parseInt(longitude)});
                let prevActiveRegion = document.querySelector(".region__button.active");
                (prevActiveRegion !== null) ? prevActiveRegion.classList.remove("active") : "";
                e.target.classList.add("active");
                if(!document.querySelector(".location__button[data-region='"+region+"']")) {
                    loadLocations(region);
                    locationsModule.classList.add("active");
                    let regionTitle = document.querySelector(".region__title h1 span");
                    regionTitle.innerHTML = region;
                }
            })
        }

        function loadLocations (region) {
            let buttonsWrap = document.querySelector(".locations__button__wrap.cities");
            buttonsWrap.innerHTML +=`
                ${
                    locations.map(location => (location.region === region ? `<h4>${location.name}</h4>${location.cities.map(location => `<button class="location__button maps__button" data-name="${location.name}" data-region="${location.region}" data-lat="${location.latitude}" data-lng="${location.longitude}">${location.name}</button> `).join('')}` : "")).join('')
                }`;

            let locationButtons = document.querySelectorAll(".location__button");
            for(let locationButton of locationButtons) {
                locationButton.addEventListener("click", (e) => {
                    let longitude = e.target.dataset.lng;
                    let latitude = e.target.dataset.lat;
                    let location = e.target.dataset.name;
                    let region = e.target.dataset.region;
                    map.setZoom(8);
                    map.setCenter({lat: parseInt(latitude), lng: parseInt(longitude)});
                    setTemp(parseInt(latitude),parseInt(longitude), location, region);
                    setContact(e.target.dataset.name);
                    localModule.classList.add("active");
                });

            }
        }
    }
});

GoogleMapsLoader.KEY = 'AIzaSyC7tSjhQyqDfDkKWmiemLdrrKFMTymkqgM';
