<?php
// This function grabs the definition of a word in XML format.
$word = $_GET["word"];
//$ref="collegiate";
$key="dcaf0d28-4751-4f06-969f-d2df3c28a43d";
		$uri = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/" . 
					urlencode($word) . "?key=" . urlencode($key);
$xml = simplexml_load_file($uri);
	/*
	for($i=0;$i<3;$i++){
		
		$def = $xml->entry->def->dt[$i];
		if($def==":"){
			$def = ":".$xml->entry->def->dt[$i]->sx;
		}
		echo $def . "<br/>";
		
	}*/

$array_of_words=array();

	foreach($xml->entry as $block){
		
		
		foreach($block->def as $def){
			
			foreach($def->dt as $defines){
				if($defines==":"){
					$defines=":".$defines->sx;
				}else{
					$defines = $defines. " " . $defines->sx;
				}
				$len = strlen($defines);
				if($len>2){
					$defines = strip_tags($defines);
					$arr = array('Meaning' => $defines);
					array_push($array_of_words,$defines);
				}
				}
			}
		}
	echo json_encode($array_of_words);

?>