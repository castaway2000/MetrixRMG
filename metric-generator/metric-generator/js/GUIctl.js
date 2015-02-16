
var script = document.createElement('script');
script.src = '/jquery-2.1.1.js';
script.type = 'text/javascript';

//$(document).ready(function () {
google.load('visualization', '1.0', { 'packages': ['corechart'] });
google.setOnLoadCallback(function () {
    var newdata = new google.visualization.DataTable();
    newdata.addColumn('string', 'date');
    //TODO: make graph data editable ie top sales
    newdata.addColumn('number', 'top sales');

    if (boxarray !== null) {
        newdata.addRows(boxarray);
        var titleChk = document.getElementById("xtitle").value;
        var widthChk = document.getElementById("xwidth").value;
        var heightChk = document.getElementById("xheight").value;
        console.log(titleChk);
        console.log(widthChk);
        console.log(heightChk);
        /*==========================================\
          TODO: make options user defined variables
          TODO: bind user defined vairable from forms
        \==========================================*/
        if (titleChk == "") {
            title1 = "test";
        }
        else { title1 = titleChk; }

        if (widthChk == "") {
            width1 = 400;
        }
        else { width1 = widthChk; }

        if (heightChk == "") {
            height1 = 400;
        }
        else { height1 = heightChk; }

        var options = {
            'title': title1,
            'width': width1,
            'height': height1
        };

        //TODO: make ChartType a working variable 
        //var ctl = document.getElementById('graphselector').selectedIndex;
        //console.log(ctl);
        var sqldatachart1 = new google.visualization.ColumnChart(document.getElementById('grid'));
        sqldatachart1.draw(newdata, options);
    }
});
//});