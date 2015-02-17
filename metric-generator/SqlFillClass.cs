using System;

public class SqlDataClass
{
    protected DataSet ds;
    public SqlConnection con = new SqlConnection(@"Data Source=BLAZE-TURBO;Initial Catalog=AdventureWorks;Integrated Security=True");

    public SqlDataClass()
    {
        //TODO: Add checks to prevent destructive SQL queries.
        /*=======================================================\
            Change the SQL connection to your own sql/mysql server
          * and the default SQL statement to your own if you want 
          * a graph to populate on load
          * the default database used is AdventureWorks
         \=======================================================*/
        SqlDataAdapter ad = new SqlDataAdapter("select top 10 SA.OrderQty, SH.OrderDate " +
             "as OrderDate from Sales.SalesOrderDetail as SA " +
             "join Sales.SalesOrderHeader as SH " +
             "on SA.SalesOrderID = SH.SalesOrderID order by SA.OrderQty desc;", con);
        ds = new DataSet();
        ad.Fill(ds);
    }
}
