<?php
include 'dbh.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {

            $("button").click(function() {

                $("#users").load("loadusers.php");
            });
        });
    </script>
</head>

<body>
    <div id="users">
    </div>
    <button>Show more</button>
</body>

</html>