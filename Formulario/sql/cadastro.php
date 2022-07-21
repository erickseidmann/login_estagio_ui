<?php
include("conexao.php")

$nome=$_POST['nome'];
$sobrenome=$_POST['sobrenome'];

 
$sql = "INSERT INTO pessoa (id_pessoa, no_pessoa, ds_sobrenome) VALUES ('$nome', '$sobrenome')";
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>