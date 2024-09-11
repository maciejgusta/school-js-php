<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="box">BOX</div>
    <script src="script.js"></script>
    <?php
    // Database configuration
    $servername = "localhost";
    $username = "root"; // Default MySQL root user
    $password = "";     // Default MySQL root password (if none, leave empty)
    $dbname = "example_DB";   // Name of the database you want to access

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully<br>";


    $sql = "SELECT id, imie, nazwisko FROM new_table";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0){
        while ($row = $result->fetch_assoc()){
            echo "ID: " . $row["id"] . " - Imie: " .$row["imie"] . " - Nazwisko: " .$row["nazwisko"]. "<br>";
        }
    } else {
        echo "0 results";
    }


    // Close connection
    $conn->close();
    ?>

</body>
</html>