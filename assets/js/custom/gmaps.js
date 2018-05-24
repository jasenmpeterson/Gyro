let GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY = 'AIzaSyC7tSjhQyqDfDkKWmiemLdrrKFMTymkqgM';
GoogleMapsLoader.load(function(google) {
    if(document.getElementById("map")) {
        let api = pageParams.root+'/wp-json/wp/v2/locations';
        fetch(api).then((resp)=> resp.json()).then(function(data) {
          parse( data );
        });
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
        let contactModule = document.querySelector(".location__module.contact");
        let loader = document.querySelector(".location__module .loader");
        let weatherModule = document.querySelector(".weather__container");
        let icon = {
            url:  '/wp-content/themes/gyro/assets/images/raw/pulsating.svg',
            scaledSize: new google.maps.Size(40, 40), // scaled size
        };
        let map = new google.maps.Map(el, {
            center: myLatLng,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 3,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#6b767f"
                        }
                    ]
                },
                {
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
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
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#757575"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
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
                            "color": "#181818"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1b1b1b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#2c2c2c"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8a8a8a"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#373737"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#3c3c3c"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#4e4e4e"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#5a6771"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#3d3d3d"
                        }
                    ]
                }
            ]
        });
        function parse(locations) {
            for (let location of locations) {
                console.log(location.acf);
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(location.acf.latitude, location.acf.longitude),
                    map: map,
                    icon: icon,
                    title: location.acf.city_name,
                    region: location.acf.city_region,
                    optimized: false
                });
                let infoWindow = new google.maps.InfoWindow({
                    content: location.acf.city_name
                });
                marker.addListener("click", function () {
                    infoWindow.open(map, this);
                    map.setZoom(5);
                    map.setCenter(marker.getPosition());
                    setTemp(parseInt(marker.getPosition().lat()), parseInt(marker.getPosition().lng()), marker.title, marker.region);
                    TweenMax.to(locationsModule, 0.2, {
                        opacity: 1,
                        y: 0
                    });
                    document.querySelector(".region__title h1 span").innerHTML = marker.region;
                    loadLocations(marker.region);
                    setContact(marker.title);
                    TweenMax.to(localModule, 0.2, {
                        opacity: 1,
                        y: 0
                    });
                });
            }
        }


    }
});
