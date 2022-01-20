<?php
//Connection for Next Page page//
 $con = mysqli_connect('localhost', 'root');
 mysqli_select_db($con, 'webpagedb2');
 

 extract($_POST);


 if(isset($_POST['submit'])){
      $q =  " insert into webpageinsert1 (fast, last,emali,phno,dateofbirth,gender,profile_photo) values ('$fast','$last','$email','$phno','$dateofbirth'
      '$gender','$profile_photo')";

      $query = mysqli_query($con,$q);
      header('location:nextpage.html'); 
    }


?>