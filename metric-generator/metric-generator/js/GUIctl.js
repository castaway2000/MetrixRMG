///*
//        Metrix RMG: (R)apid (M)etrics (G)enerator Version 1.0
//        Written and Coded by Adam Szablya
//        Project Started on:11/15/2014

//        Licencing Information:
//        Metrix RMG Version 1.0 is freely useable and re-distributable
//        under the GNU General Public Licence version 3.
//*/
//var script = document.createElement('script');
//script.src = '/jquery-2.1.1.js';
//script.type = 'text/javascript';

//function start() {
//    var titleid = document.getElementById("title");
//    var widthid = document.getElementById("width");
//    var heightid = document.getElementById("height");

//    loadCharts(setChartOptions(heightid, widthid, titleid));//, chartType());
//}


//function setChartOptions(h, w, title) {
//    //this function checks for null values and sets accordingly
//    if (title.value != null) {
//        var titleChk = titlei.value;
//    }
//    else { titleChk = "title"; }

//    if (w.value != null) {
//        var widthChk = parseInt(w.value);
//    }
//    else { widthChk = 400; }

//    if (h.value != null) {
//        var heightChk = parseInt(h.value);
//    }
//    else { widthChk = 400; }

//    var title1 = titleChk;
//    var width1 = widthChk;
//    var height1 = heightChk;
//    var options = {
//        'title': title1,
//        'width': width1,
//        'height': height1
//    };
//    return options;
//}

//function chartType() {
//    //TODO: make ChartType a working variable 
//    var graphType = document.getElementById('graphselector').value; 
//    return graphType;
//}

//function loadCharts(options){//, chartType) {
//    //takes options and loads the graph from the gui
//    google.load('visualization', '1.0', { 'packages': ['corechart'] });
//    google.setOnLoadCallback(function () {
//    var newdata = new google.visualization.DataTable();
//    newdata.addColumn('string', 'date');
//    newdata.addColumn('number', title1)

//        if (boxarray != null) {
//            newdata.addRows(boxarray);
//            //                                         \\chart type//
//            var sqldatachart1 = new google.visualization.ColumnChart(document.getElementById('grid'));
//            sqldatachart1.draw(newdata, options);
//        }
//    });
//}

//start();

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
    newdata.addColumn('number', 'top sales');

    if (boxarray !== null) {
        newdata.addRows(boxarray);
        //document.getElementById

        var titleChk = document.getElementById("xtitle").value;
        var widthChk = document.getElementById("xwidth").value;
        var heightChk = document.getElementById("xheight").value;
        /*==========================================\
          TODO: make options user defined variables
          TODO: bind user defined vairable from forms
        \==========================================*/
        console.log(titleChk);
        console.log(widthChk);
        console.log(heightChk);

        if (titleChk === null) {
            title1 = "test";
        }
        else { title1 = titleChk; }

        if (widthChk === null) {
        width1 = 400;
        }
        else { width1 = widthChk; }

        if (heightChk === null) {
            height1 = 400;
        }
        else { height1 = heightChk; }

        var options = {
            'title': title1,
            'width': width1,
            'height': height1
        };

        //TODO: make ChartType a working variable 
        //var ChartType = document.getElementById.valueOf('graphselector')
        var sqldatachart1 = new google.visualization.ColumnChart(document.getElementById('grid'));
        sqldatachart1.draw(newdata, options);
    }
});
//});