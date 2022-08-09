<?php 
   function notEmpty($name, $email, $message, $phone)
  {
      if (!empty($name) && !empty($email) && !empty($message) && !empty($phone)) {
         return true;
      }
  }


$messageIsSent=false;
  if ((isset($_POST['send'])) &&($_POST['pitanje']==4) ) {
    $admin_email="nenad@dulene.in.rs";
    $subject="Poruka sa kontakt forme";
   
    $phone=trim(htmlspecialchars($_POST['phone']));
    $name=trim(htmlspecialchars($_POST['ime']));
    $email=trim($_POST['email']);
    $message=trim(htmlspecialchars($_POST['message']));
    $email2=$email;
    $message=wordwrap($message, 70);
    if(notEmpty($name, $email, $message, $phone)){
      mail($admin_email, "Poruka sa sajta ". $email, $message . ' - ' . $phone .$name, "From: " . $admin_email);
      $messageIsSent=true;
    }
  }
?>
