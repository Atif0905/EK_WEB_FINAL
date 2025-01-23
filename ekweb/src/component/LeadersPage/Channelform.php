<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['subject'];
    $message = $_POST['message'];

    $to = "atif123n@gmail.com"; // Your email address
    $subject = "New Contact Form Submission: $subject";
    $body = "You have received a new message for Channel Partner from your website contact form.\n\n" . "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $name <$email>";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(array('status' => 'success'));
        header('Location: contact.html?status=success');
        exit;
    } else {
        echo json_encode(array('status' => 'error'));
        header('Location: contact.html?status=error');
        exit;
    }
}
?>