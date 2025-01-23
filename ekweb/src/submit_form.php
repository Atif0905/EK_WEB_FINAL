<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "info@ekaksharbuildtech.com";
    $subject = "New Agent Registration";
    $body = "
        <html>
        <head>
            <title>Agent Registration</title>
        </head>
        <body>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong> $message</p>
        </body>
        </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your registration has been submitted.";
    } else {
        echo "Oops! Something went wrong. Please try again.";
    }
}
?>
