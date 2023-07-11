<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'sanjeevtripathi1997@gmail.com';
if (isset($_POST['submit'])){
  $name=$_POST['name'];
  $mailform = $_POST['email'];
  $message = $_POST['message'];

  $mailTo = "sanjeevtripathi1997@gmail.com";
  $headers = "From: ".$mailForm;
  $text = "You have a new message".$name".\n\n".$message;

  mail($mailTo, $name, $txt, $headers);

  header("Location: index.html?MessageSent");
}

  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();
?>
