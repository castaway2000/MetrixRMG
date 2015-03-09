
var script = document.createElement('script');
script.src = '/jquery-2.1.1.js';
script.type = 'text/javascript';

google.load('visualization', '1.0', { 'packages': ['corechart'] });
google.setOnLoadCallback(function () {
    var newdata = new google.visualization.DataTable();
    var graphtype;
    var titleChk;
    var widthChk;
    var heightChk;
    var sqldatachart1;

    newdata.addColumn('string', 'date');
    //TODO: make graph data editable ie top sales
    newdata.addColumn('number', 'top sales');
    if (boxarray !== null) {
        var titleChk = document.getElementById("xtitle").value;
        var widthChk = document.getElementById("xwidth").value;
        var heightChk = document.getElementById("xheight").value;
        console.log(titleChk, widthChk, heightChk);
        console.log($('#ContentPlaceHolder1_graphselector').val());
        newdata.addRows(boxarray);
        /*==========================================\
          TODO: make options user defined variables
          TODO: bind user defined vairable from forms
        \==========================================*/

        var options = {
            'title': titleChk || "",
            'width': widthChk || 400,
            'height': heightChk || 400
        };

        $('#ContentPlaceHolder1_graphselector').change(function () {
            graphtype = $(this).val();
            if (graphtype == "ColumnChart") { sqldatachart1 = new google.visualization.ColumnChart(document.getElementById('grid')); }
            if (graphtype == "BarChart") { sqldatachart1 = new google.visualization.BarChart(document.getElementById('grid')); }
            if (graphtype == "LineChart") { sqldatachart1 = new google.visualization.LineChart(document.getElementById('grid')); }
            if (graphtype == "AreaChart") { sqldatachart1 = new google.visualization.AreaChart(document.getElementById('grid')); }
            if (graphtype == "PieChart") { sqldatachart1 = new google.visualization.PieChart(document.getElementById('grid')); }
            console.log($('#ContentPlaceHolder1_graphselector').val());
            if (document.getElementById('imgtickbox').checked) {
                google.visualization.events.addListener(sqldatachart1, 'ready', function () {
                    var imgUri = sqldatachart1.getImageURI();
                    window.open(imgUri);
                });
            }
            sqldatachart1.draw(newdata, options);
        });
    }
});