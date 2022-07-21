
<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$dbname = "cadastro_ui";
// Create connection
$conn = mysqli_connect($servidor,$usuario, $senha, $dbname );
// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
 
echo "Connectado com sucesso";

?>

