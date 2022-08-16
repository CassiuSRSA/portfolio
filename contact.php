<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];


    $email_from = 'webmaster@seanbrookstein.co.za';

    $email_subject = "New Form Submission";
    
    $email_body = "Name: $name.\n".
                    "Email: $visitor_email.\n".
                      "Messsage: $message.\n";
    
    $to = "info@seanbrookstein.co.za";

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html")
?>