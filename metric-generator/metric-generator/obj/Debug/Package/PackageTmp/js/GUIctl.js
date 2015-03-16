
var script = document.createElement('script');
script.src = '/jquery-2.1.1.js';
script.type = 'text/javascript';


google.load('visualization', '1.0', { 'packages': ['corechart'] });
google.setOnLoadCallback(function () {
    var graphtype;
    var sqldatachart1;
    var newdata = new google.visualization.DataTable();

    newdata.addColumn('string', 'date');
    newdata.addColumn('number', xtitle);

    if (boxarray !== null) {
        var options = {
            'title': xtitle || "",
            'width': xwidth || 400,
            'height': xheight || 400
        };
        //console.log($('#ContentPlaceHolder1_graphselector').val());
        newdata.addRows(boxarray);
        $('#ContentPlaceHolder1_graphselector').change(function () {
            graphtype = $(this).val();
            if (graphtype == "ColumnChart") { sqldatachart1 = new google.visualization.ColumnChart(document.getElementById('grid')); }
            if (graphtype == "BarChart") { sqldatachart1 = new google.visualization.BarChart(document.getElementById('grid')); }
            if (graphtype == "LineChart") { sqldatachart1 = new google.visualization.LineChart(document.getElementById('grid')); }
            if (graphtype == "AreaChart") { sqldatachart1 = new google.visualization.AreaChart(document.getElementById('grid')); }
            if (graphtype == "PieChart") { sqldatachart1 = new google.visualization.PieChart(document.getElementById('grid')); }
            //console.log($('#ContentPlaceHolder1_graphselector').val());

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