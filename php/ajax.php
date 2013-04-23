<?php

// Create an array
$a = array();

// Add some names to our array
$a[]="Anna";
$a[]="Brittany";
$a[]="Cinderella";
$a[]="Diana";
$a[]="Eva";
$a[]="Fiona";
$a[]="Gunda";
$a[]="Hege";
$a[]="Inga";
$a[]="Johanna";
$a[]="Kitty";
$a[]="Linda";
$a[]="Nina";
$a[]="Ophelia";
$a[]="Petunia";
$a[]="Amanda";
$a[]="Raquel";
$a[]="Cindy";
$a[]="Doris";
$a[]="Eve";
$a[]="Evita";
$a[]="Sunniva";
$a[]="Tove";
$a[]="Unni";
$a[]="Violet";
$a[]="Liza";
$a[]="Elizabeth";
$a[]="Ellen";
$a[]="Wenche";
$a[]="Vicky";
$a[]="Zoo";


// Get the q parameter from URL
// The query parameter q will be set to the string value
// the user typed. We will search our array for strings
// matching q
$q=$_GET["q"];


// Lookup all hints from array if length of q is greater than zero
if (strlen($q) > 0) {
   $hint="";
   for($i=0; $i<count($a); $i++) {
      if (strtolower($q) == strtolower(substr($a[$i],0,strlen($q)))) {
         if ($hint == "") {
           $hint = $a[$i];
       }
       else {
           $hint = $hint." , ".$a[$i];
       }
   }
}
}


// Was a hint found?
if ($hint == "") {
    // Nope, set output to "No suggestion".
   $response = "No Suggestion";
}
else {
    // Yes! Set the output to the hint(s).
   $response = $hint;
}


// Output the response
echo $response;