<%@ Page Title="" Language="C#" MasterPageFile="~/rmg.Master" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="metric_generator.WebForm1" %>

<%@ Import Namespace="System.Data" %>
<%--Metrix RMG: (R)apid (M)etrics (G)enerator Version 1.0
        Written and Coded by Adam Szablya
        Project Started on:11/15/2014

        Licencing Information:
        Metrix RMG Version 1.0 is freely useable and re-distributable
        under the GNU General Public Licence version 3.
--%>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
        google.setOnLoadCallback(function () {
            var newdata = new google.visualization.DataTable();
            newdata.addColumn('string', 'date');
            newdata.addColumn('number', 'top sales')
            var array = [
        <%
        //itterare over the rows in the table using C# asp
        foreach (DataRow row in this.ds.Tables[0].Rows)
        {
            Response.Write("[\"");
            Response.Write(((DateTime)row.ItemArray[1]).ToString("yyyy-MM-dd"));
            Response.Write("\",");
            Response.Write(row.ItemArray[0]);
            Response.Write("],\r\n");
        }
        %>
            ];
            newdata.addRows(array);

            var options = {
                'title': "things",//document.getElementById(title),
                'width': 400, //document.getElementById(width),
                'height': 400 //document.getElementById(height),
                //'is3D': true
            };
            //var ChartType = document.getElementById('graphselector').value;
            var sqldatachart1 = new google.visualization.BarChart(document.getElementById('grid'));
            sqldatachart1.draw(newdata, options);
        });
    </script>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <!--Div that will hold the charts-->
 
    <div id="grid" style="width: auto; height: auto"></div>
    <br />
    <!--data selection tick boxes and button -->
    <div id="selectionID" class="selection">
        <form action="">
            <textarea rows="10" cols="90" id="sqlbox">Raw SQL query here</textarea>
         <%--   <p>
            <font size="2"><strong>Note:</strong>
                Destructive SQL query's will not work. (ie. Drop, Delete, Insert)
            </font>
            </p>--%>
            <br />
            Title:<input type="text" name="title" id="title">
            Width:<input type="text" name="width" id="width">
            Height:<input type="text" name="height" id="height">
            <br />
            
            <asp:DropDownList ID="graphselector" runat="server" CssClass="dropdown" Style="font-size: 11px" AutoPostBack="False">
                <asp:ListItem>Select Chart</asp:ListItem>
                <asp:ListItem Value="ColumnChart">Column Chart</asp:ListItem>
                <asp:ListItem Value="BarChart">Bar Chart</asp:ListItem>
                <asp:ListItem Value="LineChart">Line Chart</asp:ListItem>
                <asp:ListItem Value="AreaChart">Area Chart</asp:ListItem>
            </asp:DropDownList>
        </form>
        <br />
        <br />
        <asp:Button ID="DataSelectButton" runat="server" Text="Submit" OnClick="btn1_Click" class="button">
        </asp:Button>
    </div>
</asp:Content>
