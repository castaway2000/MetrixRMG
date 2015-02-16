/*
        Metrix RMG: (R)apid (M)etrics (G)enerator Version 1.0
        Written and Coded by Adam Szablya
        Project Started on:11/15/2014

        Licencing Information:
        Metrix RMG Version 1.0 is freely useable and re-distributable
        under the GNU General Public Licence version 3.
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

namespace metric_generator
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        //TODO: Add checks to prevent destructive SQL queries.
        protected DataSet ds;
        /*=======================================================\
           Change the SQL connection to your own sql/mysql server
         * and the default SQL statement to your own if you want 
         * a graph to populate on load
         * the default database used is AdventureWorks
        \=======================================================*/
        public SqlConnection con = new SqlConnection(@"Data Source=BLAZE-TURBO;Initial Catalog=AdventureWorks;Integrated Security=True");

        protected void Page_Load(object sender, EventArgs e)
        {
            SqlDataAdapter ad = new SqlDataAdapter("select top 10 SA.OrderQty, SH.OrderDate " +
             "as OrderDate from Sales.SalesOrderDetail as SA " +
             "join Sales.SalesOrderHeader as SH " +
             "on SA.SalesOrderID = SH.SalesOrderID order by SA.OrderQty desc;", con);
            ds = new DataSet();
            ad.Fill(ds);
        }

        protected String sqlDataInput()
        {
            Control myControl1 = FindControl("sqlbox");
            String sqldata = sqlbox.InnerText;
            return sqldata;
        }

        protected void btn1_Click(object sender, EventArgs e)
        {
            SqlDataAdapter ad = new SqlDataAdapter(sqlDataInput(), con);
            ds = new DataSet();
            ad.Fill(ds);
        }
    }
}