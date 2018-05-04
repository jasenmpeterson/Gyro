<?php
/**
 * Created by IntelliJ IDEA.
 * User: jasen
 * Date: 4/26/18
 * Time: 9:08 AM
 */

namespace supportContacts;


class supportContacts {
	public function getContacts() {
		$contacts = get_field('contacts', 'options');
		$contactPage = get_permalink(13);
		$output = '';
		$output .= '<h5>Contact Local Support</h5>';
           $output .= '<table>';
                foreach($contacts as $contact):
                 $output .= '<tr>';
                    $output .= '<td>'.$contact['country'].'</td>';
	                $output .= '<td>'.$contact['phone'].'</td>';
	                $output .= '</tr>';
                endforeach;
             $output .= '</table>';
            $output .= '<a href="'.$contactPage.'" class="button" data-text="Contact Us"><span>Contact Us</span></a>';

            return $output;
	}
}