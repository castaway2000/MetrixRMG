/*
        Metrix RMG: (R)apid (M)etrics (G)enerator Version 1.0
        Written and Coded by Adam Szablya
        Project Started on:11/15/2014

        Licencing Information:
        Metrix RMG Version 1.0 is freely useable and re-distributable
        under the GNU General Public Licence version 3.
*/
$(document).ready(function () {
    $('#grid').draggable();

// Load the Visualization API
google.load('visualization', '1.0', { 'packages': ['corechart'] });
google.setOnLoadCallback(drawChart);
//variables start below here
var sqlQuery = document.getElementById("sqlbox").value;
//Code starts below here

function drawChart() {
    // Create the data table.


    // Set chart options
    var options = {
        'title': document.getElementById("title").value,
        'width': document.getElementById("width").value,
        'height': document.getElementById("height").value
    };


}
});
