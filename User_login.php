<?
include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 $json = file_get_contents('php://input');

 $obj = json_decode($json,true);
$email = $obj['email'];
$password = $obj['password'];
$Sql_Query = "select * from User where email = '$email' and password = '$password' ";
 
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));
 
 
if(isset($check)){
 
 $SuccessLoginMsg = 'Data Matched';
 
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
 echo $SuccessLoginJson ; 
 
 }
 
 else{
$InvalidMSG = 'Invalid username or password Please Try Again' ;
 
$InvalidMSGJSon = json_encode($InvalidMSG)
 echo  $InvalidMSGJSon ;
 
 }
 
 mysqli_close($con);
?>

