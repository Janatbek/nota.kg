<?php
$fileName = 'artistResult.json';
	$handle = fopen($fileName, 'w');
	$result = fwrite($handle, "\xEF\xBB\xBF");
	$result = fwrite($handle, $_POST["data"]);
	fclose($handle);
?>
