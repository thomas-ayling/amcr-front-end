//package com.globallogic.amcr.datasource;
//
//import com.zaxxer.hikari.HikariConfig;
//import com.zaxxer.hikari.HikariDataSource;
//import org.springframework.beans.factory.annotation.Value;
//
//import java.sql.Connection;
//import java.sql.SQLException;
//
//public class DataSource {
//    private static HikariConfig config = new HikariConfig("application.properties");
//    private static HikariDataSource ds;
//
//    static {
//        ds = new HikariDataSource(config);
//    }
//
//    private DataSource() {}
//
//    public static Connection getConnection() throws SQLException {
//        return ds.getConnection();
//    }
//}
