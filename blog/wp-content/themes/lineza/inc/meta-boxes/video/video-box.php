<?php
// Add the Meta Box
function add_video_box() {
    add_meta_box(
		'video_box', // $id
		'Video Post Options', // $title 
		'show_video_box', // $callback
		'post', // $page
		'normal', // $context
		'high'); // $priority
}
add_action('add_meta_boxes', 'add_video_box');

// Field Array
$prefix = 'video_';
$video_meta_fields = array(
	array(
		'label' => __('Enter Video ID ' , 'framework'),
		'desc' => __('Enter your YouTube or Vimeo video ID here (For example: http://www.youtube.com/watch?v=<strong>dQw4w9WgXcQ</strong>).', 'framework'),
		'id' => $prefix . 'id',
		'type' => 'text',
		'std' => ''
		),
	array(
		'label'=> 'Video Host',
		'desc'	=> 'Select host of your video.',
		'id'	=> $prefix.'host',
		'type'	=> 'select',
		'options' => array (
			'star' => array (
				'label' => 'YouTube',
				'value'	=> 'youtube'
			),
			'percent' => array (
				'label' => 'Vimeo',
				'value'	=> 'vimeo'
			)
		)
	),
);

// The Callback
function show_video_box() {
global $video_meta_fields, $post;
// Use nonce for verification
echo '<input type="hidden" name="video_meta_box_nonce" value="'.wp_create_nonce(basename(__FILE__)).'" />';
	
	// Begin the field table and loop
	echo '<table class="form-table">';
	foreach ($video_meta_fields as $field) {
		// get value of this field if it exists for this post
		$meta = get_post_meta($post->ID, $field['id'], true);
		// begin a table row with
		echo '<tr>
				<th><label for="'.$field['id'].'">'.$field['label'].'</label></th>
				<td>';
				switch($field['type']) {
					// text
					case 'text':
						echo '<input type="text" name="'.$field['id'].'" id="'.$field['id'].'" value="'.$meta.'" size="30" />
							<br /><span class="description">'.$field['desc'].'</span>';
					break;
					
					// textarea
					case 'textarea':
						echo '<textarea name="'.$field['id'].'" id="'.$field['id'].'" cols="60" rows="4">'.$meta.'</textarea>
							<br /><span class="description">'.$field['desc'].'</span>';
					break;
					
					// checkbox
					case 'checkbox':
						echo '<input type="checkbox" name="'.$field['id'].'" id="'.$field['id'].'" ',$meta ? ' checked="checked"' : '','/>
							<label for="'.$field['id'].'">'.$field['desc'].'</label>';
					break;
					
					// select
					case 'select':
						echo '<select name="'.$field['id'].'" id="'.$field['id'].'">';
						foreach ($field['options'] as $option) {
							echo '<option', $meta == $option['value'] ? ' selected="selected"' : '', ' value="'.$option['value'].'">'.$option['label'].'</option>';
						}
						echo '</select><br /><span class="description">'.$field['desc'].'</span>';
					break;
					
					// radio
					case 'radio':
						foreach ( $field['options'] as $option ) {
							echo '<input type="radio" name="'.$field['id'].'" id="'.$option['value'].'" value="'.$option['value'].'" ',$meta == $option['value'] ? ' checked="checked"' : '',' />
									<label for="'.$option['value'].'">'.$option['label'].'</label><br />';
						}
					break;  
				} //end switch
		echo '</td></tr>';
	} // end foreach
	echo '</table>'; // end table
}

// Save the Data
function save_video_meta($post_id) {
    global $video_meta_fields;
	
	// verify nonce
	//if (!wp_verify_nonce($_POST['video_meta_box_nonce'], basename(__FILE__)))
	if (!isset($_POST[ 'video_meta_box_nonce' ] ) || !wp_verify_nonce( $_POST[ 'video_meta_box_nonce' ], basename( __FILE__ ) ) )
		return $post_id;
	// check autosave
	if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
		return $post_id;
	// check permissions
	if ('page' == $_POST['post_type']) {
		if (!current_user_can('edit_page', $post_id))
			return $post_id;
		} elseif (!current_user_can('edit_post', $post_id)) {
			return $post_id;
	}
	
	// loop through fields and save the data
	foreach ($video_meta_fields as $field) {
		$old = get_post_meta($post_id, $field['id'], true);
		$new = $_POST[$field['id']];
		if ($new && $new != $old) {
			update_post_meta($post_id, $field['id'], $new);
		} elseif ('' == $new && $old) {
			delete_post_meta($post_id, $field['id'], $old);
		}
	} // end foreach
}
add_action('save_post', 'save_video_meta'); 
?>