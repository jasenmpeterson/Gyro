<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 5/2/18
 * Time: 9:46 AM
 */

namespace jobs;

class jobs {

	public $api;

	function __construct($API) {
		$this->api = $API;
	}

	public function getData() {
		$subdomain = "gyrodata";
		$jazz = new \Jazz($this->api);
		$jazz->cache['EXPIRES'] = 604800;
		$jazz->cache['PATH'] = __DIR__ . DIRECTORY_SEPARATOR . "jazz-api" . DIRECTORY_SEPARATOR;
		$jazz->cache['ENABLED'] = false;
		$jobs = $jazz->getJobs();
		$output = "";
		$totalJobs = count($jobs);
		for ($x = 0; $x <= $totalJobs; $x++) {
			if(!empty($jobs[$x])) {
				$output .= "<article>";
				$output .= "<h3>".$jobs[$x]->title."</h3>";
				$output .= "<h4>Department: ".$jobs[$x]->department."</h4>";
				$output .= "<a class='button' href=http://".$subdomain.".theresumator.com/apply/jobs/details/".$jobs[$x]->board_code." data-text='Apply'><span>Apply</span></a>";
				$output .= "</article>";
			}
		}
		return $output;
	}
}