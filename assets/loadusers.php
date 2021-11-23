<?php
include 'dbh.php';

$sql = "SELECT * FROM user ";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<p>";
        echo $row['username'];
        echo $row['email'];
        echo "</p>";
    }
} else {
    echo "there are no users!";
}
