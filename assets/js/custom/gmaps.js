let GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.load(function(google) {
    if(document.getElementById("map")) {
        let el = document.querySelector("#map");
        let myLatLng = {lat: 29.76328, lng: -95.36327};
        let currentTemp;
        let currentHumidity;
        let currentPrecipitation;
        let currentSummary;
        let currentWind;
        let currentTime;
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
            { name: "Houston", latitude: 29.76328, longitude: -95.36327  },
            { name: "Miami", latitude: 25.77427, longitude: -80.193667  },
            { name: "Ajdabiya", latitude: 30.75545, longitude: 20.22625  }
        ];

        let regions = [
            { name: "North America", latitude: 54.525961, longitude: -105.255119 },
            { name: "Asia & Middle East", latitude: 34.047863, longitude: 100.619655  },
            { name: "Europe, Africa & Caspian", latitude: 54.525961, longitude: 15.255119  },
            { name: "Latin America", latitude: -4.442039, longitude: -61.326854 }
        ];

        let locationModule = document.querySelector(".location__module.locations");
        let regionsModule = document.querySelector(".location__module.regions");

        for(let location of locations) {
            let marker = new google.maps.Marker({
                position: new google.maps.LatLng(location.latitude, location.longitude),
                map: map,
                icon: icon,
                title: location.name
            });
            marker.addListener("click", function () {
                map.setZoom(5);
                map.setCenter(marker.getPosition());
                setTemp(parseInt(marker.getPosition().lat()),parseInt(marker.getPosition().lng()), marker.title);
                // marker.setIcon({
                //     url: '/wp-content/themes/gyro/assets/images/raw/map_marker.svg',
                //     scaledSize: new google.maps.Size(30, 30)
                // })'
            });
        }

        let  setTemp = (lat,lng, location) => {
            fetch(`https://api.darksky.net/forecast/c17289827bd62ef9aab0884abfe6f5fd/${lat},${lng}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJSON) {
                    console.log(myJSON);
                    currentTemp = myJSON.currently.apparentTemperature;
                    currentHumidity = myJSON.currently.humidity;
                    currentPrecipitation = myJSON.currently.precipIntensity;
                    currentSummary = myJSON.currently.summary;
                    currentWind = myJSON.currently.windSpeed;
                    currentTime = myJSON.currently.time;
                    document.querySelector("span.temperature").innerHTML = currentTemp;
                    document.querySelector("span.humidity").innerHTML = currentHumidity;
                    document.querySelector("span.precipitation").innerHTML = currentPrecipitation;
                    document.querySelector("span.wind").innerHTML = currentWind;
                    document.querySelector("span.day").innerHTML = currentTime;
                    document.querySelector("span.summary").innerHTML = currentSummary;
                    document.querySelector("span.city").innerHTML = location
                });
        };

        locationModule.innerHTML = `<div class="locations__button__wrap">
        ${locations.map(location => `<button class="location__button maps__button" data-name="${location.name}" data-lat="${location.latitude}" data-lng="${location.longitude}">${location.name}</button>`).join('')}
    </div>`;

        regionsModule.innerHTML = `<div class="locations__button__wrap">
        ${regions.map(region => `<button class="region__button maps__button" data-name="${region.name}" data-lat="${region.latitude}" data-lng="${region.longitude}">${region.name}</button>`).join('')}
    </div>`;

        let locationButtons = document.querySelectorAll(".location__button");
        for(let locationButton of locationButtons) {
            locationButton.addEventListener("click", (e) => {
                let longitude = e.target.dataset.lng;
                let latitude = e.target.dataset.lat;
                let location = e.target.dataset.name;
                map.setZoom(8);
                map.setCenter({lat: parseInt(latitude), lng: parseInt(longitude)});
                setTemp(parseInt(latitude),parseInt(longitude), location);
            });

        }

        let regionButtons = document.querySelectorAll(".region__button");
        for(let regionButton of regionButtons) {
            regionButton.addEventListener("click", (e) => {
                let longitude = e.target.dataset.lng;
                let latitude = e.target.dataset.lat;
                map.setZoom(3);
                map.setCenter({lat: parseInt(latitude), lng: parseInt(longitude)});
            })
        }
    }
});

GoogleMapsLoader.KEY = 'AIzaSyC7tSjhQyqDfDkKWmiemLdrrKFMTymkqgM';
