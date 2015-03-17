/*
        Metrix RMG: (R)apid (M)etrics (G)enerator Version 1.0
        Written and Coded by Adam Szablya
        Project Started on:1/2/2015

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
using System.Text;

namespace metric_generator
{
    public class SqlDataClass
    {
        public DataSet ds;
        public SqlConnection con = new SqlConnection(@"Data Source=BLAZE-TURBO; Initial Catalog=AdventureWorks;Integrated Security=True;");
        public DataSet SqlDataFill(String sqltext)
        {
            try
            {
                /*=======================================================\
                    Change the SQL connection to your own sql/mysql server
                  * and the default SQL statement to your own if you want 
                  * a graph to populate on load
                  * the default database used is AdventureWorks
                \=======================================================*/
                SqlDataAdapter ad = new SqlDataAdapter(sqltext, con);
                ds = new DataSet();
                ad.Fill(ds);
            }
            catch (SqlException e)
            {
                throw e;
            }
            return ds;
        }

        public bool securitycheck(String sqltext)
        {
            try
            {
                string[] badSqlList = new string[] { "insert", "update", "delete", "drop", "truncate", "alter" };

                foreach (char c in sqltext)
                {
                    switch (c)
                    {
                        case '@':
                        case '[':
                        case ']':
                        case '%':
                        case '*':
                            {
                                return true;
                            }
                        default:
                            {
                                break;
                            }
                    }
                }


                for (int i = 0; i < badSqlList.Count(); i++)
                {
                    if (sqltext.Split(' ').Intersect(badSqlList, StringComparer.InvariantCultureIgnoreCase).Any())
                    {
                        return true;
                    }
                }
            }
            catch (Exception e) { throw e; }
            return false;
        }
    }

    public partial class WebForm1 : System.Web.UI.Page
    {
        protected SqlDataClass sdc = new SqlDataClass();
        protected DataSet ds;
        public string title;
        public int width, height;

        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (IsPostBack == false)
                {
                    //add optional starting query here
                }
            }
            catch (SqlException se) { Message(Convert.ToString(se)); }
            catch (Exception ex) { Message(Convert.ToString(ex)); }
        }

        public void Message(string strMsg)
        {
            string strScript = "<script> alert('" + strMsg + "'); </script>";
            Page.RegisterStartupScript("ClientScript", strScript.ToString());
        }

        protected String sqlDataInput()
        {
            Control myControl1 = FindControl("sqlbox");
            String sqldata = sqlbox.InnerText;
            return sqldata;
        }

        protected void btn1_Click(object sender, EventArgs e)
        {
            try
            {
                if (sdc.securitycheck(sqlDataInput()) == false)
                {
                    if (xwidth.Value != null || xheight.Value != null)
                    {
                        width = Convert.ToInt32(xwidth.Value);
                        height = Convert.ToInt32(xheight.Value);
                    }
                    if (xtitle.Value != null || xtitle.Value != "")
                    {
                        title = xtitle.Value;
                    }
                    ds = sdc.SqlDataFill(sqlDataInput());
                }
                else
                {
                    Message("NO DESTRUCTIVE QUERIES ALLOWED. SELECT STATEMENTS ONLY!");
                }
            }
            catch (SqlException se) { Message(Convert.ToString(se)); }
            catch (Exception ex) { Message(Convert.ToString(ex)); }
        }
    }
}