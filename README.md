MetrixRMGv1
===========
        Written and Coded by Adam Szablya
        contact szablya[at]gmail.com for inquiries.
        Project Started on:11/15/2014
        Licencing Information:
        Metrix RMG Version 1.0 is freely useable and re-distributable
        under the GNU General Public Licence version 3.
        
        
        Metrix RMG is a (R)apid (M)etrics (G)enerator. It is designed to quickly create graphical
        representations from data supplied to the tool. The end goal is to make data visually
        appealing and presentable to people. It can be used for generating various types
        of graphics for meetings and presentations. Its current design is intended to be
        used with businesses and currently requires a hard coded database. 
        
        
        ATTENTION:
        MetrixRMG version 1 is meant to be a server side webtool.
        Only accessable by the admin to create visual data quickly
        for things like meetings or presentations. This tool is not
        and should not be used as a user facing tool as it is not secure 
        againt SQL attacks. There will be basic checks in place for
        preventing destructive queries such as DROP, INSERT, UPDATE, ect.
        However, it is not meant to be an openly direct interface to a SQL server.
        
        
        Instalation instructions:
        As of now the best way to install this is to run it through the publisher from Visual Studio
        
        Prior to publishing make sure you change the connection strings in the metrix.aspx.cs 
        page to be that of your own SQL server of choice. 
        
        please see the following site for more detail about this:
        http://msdn.microsoft.com/en-us/library/20yh9f1b%28v=vs.140%29.aspx
