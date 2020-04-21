var database = require('db/v4/database');
var response = require('http/v4/response');

var connection = database.getConnection();
try {
    var statement = connection.prepareStatement("select * from DIRIGIBLE_EXTENSIONS");
    var resultSet = statement.executeQuery();
    while (resultSet.next()) {
        response.println("[path]: " + resultSet.getString("EXTENSION_LOCATION"));
    }
    resultSet.close();
    statement.close();
} catch(e) {
    console.trace(e);
    response.println(e.message);
} finally {
    connection.close();
}

response.flush();
response.close();