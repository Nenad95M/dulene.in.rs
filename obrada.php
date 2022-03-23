<?php 
$messageIsSent=false;
  if ((isset($_POST['send'])) &&($_POST['pitanje']==4) ) {
    $admin_email="nenad@dulene.in.rs";
    $subject="Poruka sa kontakt forme";
    $phone=$_POST['phone'];

    $name=$_POST['ime'];
    $email=$_POST['email'];
    $message=$_POST['message'];
    $email2=$email;
    $message=wordwrap($message, 70);
    
    mail($admin_email, "Poruka sa sajta ". $email, $message . ' - ' . $phone .$name, "From:" . $admin_email);
  $messageIsSent=true;
  }
?>