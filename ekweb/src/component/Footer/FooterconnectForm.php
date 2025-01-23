<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $to = "atif123n@gmail.com"; // Your email address
    $subject = "New Contact Form Submission";
    $body = "You have received a new message from your website footer form.\n\n" . "Email: $email";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(array('status' => 'success'));
    } else {
        echo json_encode(array('status' => 'error'));
    }
}
?>
