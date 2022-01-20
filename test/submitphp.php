<?php
//Connection for popup page//
 $con = mysqli_connect('localhost', 'root');
 mysqli_select_db($con, 'webpagedb');
 

 extract($_POST);


 if(isset($_POST['submit'])){
      $q =  " insert into webpageinsert (fsname, lsname,emali,paswrd,repaswrd) values ('$fsname','$lsname','$email','$paswrd','$repaswrd')";

      $query = mysqli_query($con,$q);
      header('location:nextpage.html'); 
    }


?>