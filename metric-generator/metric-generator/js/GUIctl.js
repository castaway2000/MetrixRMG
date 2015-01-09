/*
        Metrix RMG: (R)apid (M)etrics (G)enerator Version 1.0
        Written and Coded by Adam Szablya
        Project Started on:11/15/2014

        Licencing Information:
        Metrix RMG Version 1.0 is freely useable and re-distributable
        under the GNU General Public Licence version 3.
*/

var script = document.createElement('script');
script.src = '/jquery-2.1.1.js';
script.type = 'text/javascript';

//$(document).ready(function () {
    google.load('visualization', '1.0', { 'packages': ['corechart'] });
    google.setOnLoadCallback(function () {
        var newdata = new google.visualization.DataTable();
        newdata.addColumn('string', 'date');
        newdata.addColumn('number', 'top sales')



        if (boxarray != null) {
            newdata.addRows(boxarray);

            var titleChk = document.getElementById("title");
            var widthChk = document.getElementById("width");
            var heightChk = document.getElementById("height");
            /*==========================================\
              TODO: make options user defined variables
            \==========================================*/

        if (titleChk.value != null) {
            title1 = titleChk.value;
            }
            else { title1 = "" }
        if (widthChk.value != null) {
                width1 = widthChk;
            }
            else { width1 = 400 }
            if (heightChk.value != null) {
                height1 = heightChk.value;
            }
            else { height1 = 400 }

            var options = {
                'title': title1,
                'width': width1,
                'height': height1
            };

            //TODO: make ChartType a working variable 
            //var ChartType = document.getElementById('graphselector').value; 
            var sqldatachart1 = new google.visualization.ColumnChart(document.getElementById('grid'));
            sqldatachart1.draw(newdata, options);
        }
    });
//});
