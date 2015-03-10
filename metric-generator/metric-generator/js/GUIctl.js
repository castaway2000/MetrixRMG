
var script = document.createElement('script');
script.src = '/jquery-2.1.1.js';
script.type = 'text/javascript';

google.load('visualization', '1.0', { 'packages': ['corechart'] });
google.setOnLoadCallback(function () {
    var graphtype;
    var sqldatachart1;
    var newdata = new google.visualization.DataTable();
    var xtitle;// = document.getElementById('xtitle').value;
    var xwidth;// = document.getElementById('xwidth').value;
    var xheight;// = document.getElementById('xheight').value;

    //TODO: make graph data editable ie top sales
    newdata.addColumn('string', 'date');
    newdata.addColumn('number', 'testicles');
    if (boxarray !== null) {
        //console.log(titleChk, widthChk, heightChk);
        console.log($('#ContentPlaceHolder1_graphselector').val());
        newdata.addRows(boxarray);
        /*==========================================\
          TODO: make options user defined variables
          TODO: bind user defined vairable from forms
        \==========================================*/
        //if (titleChk.value != '') {
        //    var xtitle = String(document.getElementById('x1title').value);
        //}
        //if (widthChk.value != 400) {
        //    var xwidth = parseint(document.getElementById('xwidth').value);
        //}
        //if (heightChk.value != 400) {
        //    var xheight = parseint(document.getElementById('xheight').value);
        //}

        var options = {
            'title': xtitle || "",
            'width': xwidth || 400,
            'height': xheight || 400
        };

        $('#ContentPlaceHolder1_graphselector').change(function () {
            graphtype = $(this).val();
            if (graphtype == "ColumnChart") { sqldatachart1 = new google.visualization.ColumnChart(document.getElementById('grid')); }
            if (graphtype == "BarChart") { sqldatachart1 = new google.visualization.BarChart(document.getElementById('grid')); }
            if (graphtype == "LineChart") { sqldatachart1 = new google.visualization.LineChart(document.getElementById('grid')); }
            if (graphtype == "AreaChart") { sqldatachart1 = new google.visualization.AreaChart(document.getElementById('grid')); }
            if (graphtype == "PieChart") { sqldatachart1 = new google.visualization.PieChart(document.getElementById('grid')); }
            console.log($('#ContentPlaceHolder1_graphselector').val());
            if(document.getElementById('imgtickbox').checked){
            google.visualization.events.addListener(sqldatachart1, 'ready', function () {
                var imgUri = sqldatachart1.getImageURI();
                window.open(imgUri);
            });}
            sqldatachart1.draw(newdata, options);
        });
    }
});