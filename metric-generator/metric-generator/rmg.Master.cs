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
    public partial class rmg : System.Web.UI.MasterPage
    {
        //public SqlConnection con = new SqlConnection(@"Data Source=BLAZE-TURBO;Initial Catalog=AdventureWorks;Integrated Security=True");
        protected void Page_Load(object sender, EventArgs e)
        {
            //SqlDataAdapter ad = new SqlDataAdapter("select top 10 SA.OrderQty, SH.OrderDate "+
            //    "from Sales.SalesOrderDetail as SA "+
            //    "join Sales.SalesOrderHeader as SH "+
            //    "on SA.SalesOrderID = SH.SalesOrderID order by SA.OrderQty desc;",con);
            //DataSet ds = new DataSet();
            //ad.Fill(ds);
            //GridView1.DataSource = ds;

        }
    }
}