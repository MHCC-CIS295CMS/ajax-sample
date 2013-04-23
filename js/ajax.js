

function getXmlHttpObject() {

    var xmlhttp;

    try {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlHttp = new XMLHttpRequest();
        }
    catch (e) {

        try {
            // code for IE6
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            }

        catch (e) {

            try {
                // code for IE5
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                }

            catch (e) {
                // No XML Http Support!
                alert("Your browser does not support XMLHTTP.");
                return null;

                }
            }
        }
    // If we got this far, XML Http Object creation was succsessfull.
    // Now we return the variable xmlHttp which represents our XML
    // Http connection object.
    return xmlHttp;
}



function stateChanged() {

    // Has the XML Http connextion reached a state of "4"?
    if (xmlHttp.readyState == 4) {
        // Yes, grab the response text from the XML Http Connection Object
        document.getElementById("txtHint").innerHTML = xmlHttp.responseText;
    }
}



function showHint(str) {

    // Is the string lenghth the user typed zero?
    if (str.length == 0) {
        // Yes it's zero length, we should NOT try and match
        // any names, just display an empty string "" in the
        // hint area of our web page.
        document.getElementById("txtHint").innerHTML = "";
        return;
    }

    // If we made it here, the user enterd a string of at
    // least one character in length. Lets establish an
    // XML Http connection with the web server.
    xmlHttp = getXmlHttpObject();

    // Did the users browser support an XML Http connection?
    if (xmlHttp == null) {
        // Nope, Sorry!
        alert ("Your browser does not support XMLHTTP!");
        return;
        }

    // If we made it here, the users bowser supported XML Http
    // connections. Lets lookup some matches from the server
    // by loading our php script over the XML Http Connection
    // we have established.

    // Lets create a variable to hold the URL that we can pass
    // to our XML Http Connection

    // Start by sepecifing the path to our php script on the server.
    var url  = "php/ajax.php";

    // We need to append a query parameter "q" and the string
    // the user typed in our form field to the url. Our php
    // script will look for the q parameter and search it's
    // data array based on the string the user typed thus far.
    url     += "?q=" + str;

    // Set a method for our XML Http Object to run when the
    // conneciton state changes.
    xmlHttp.onreadystatechange = stateChanged;

    // Open the URL via our XML Http connection
    xmlHttp.open("GET",url,true);

    // Now we send our request to the server. The send method
    // accepts a parameter so that we can post data to the server.
    // We have no data to post, so we send "null" instead.
    xmlHttp.send(null);

}
