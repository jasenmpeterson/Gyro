<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 3/22/18
 * Time: 4:08 PM
 */
header("Content-Type: application/json; charset=UTF-8");
include('../lib/forecast.io.php');

$latitude = $_GET['lat'];
$longitude = $_GET['lng'];
$api_key = 'c17289827bd62ef9aab0884abfe6f5fd';
$units = 'auto';  // Can be set to 'us', 'si', 'ca', 'uk' or 'auto' (see forecast.io API); default is auto
$lang = 'en'; // Can be set to 'en', 'de', 'pl', 'es', 'fr', 'it', 'tet' or 'x-pig-latin' (see forecast.io API); default is 'en'
$forecast = new ForecastIO($api_key, $units, $lang);
$currentCondition = $forecast->getCurrentConditions($latitude, $longitude);
$time = $currentCondition->getTime('h:i A');
$humidity = $currentCondition->getHumidity();
$precipitation = $currentCondition->getPrecipitationProbability();
$windSpeed = $currentCondition->getWindSpeed();
$temperature = $currentCondition->getTemperature();
getWeather($time, $humidity, $precipitation, $windSpeed, $temperature);

function getWeather($time, $humidity, $precipitation, $windSpeed, $temperature) {
	$object = [];
	$object["time"] = $time;
	$object["temp"] = $temperature;
	$object["wind"] = $windSpeed;
	$object["humidity"] = $humidity;
	$object["precipitation"] =$precipitation;
	echo json_encode($object);
}