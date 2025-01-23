<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $content = htmlspecialchars($_POST['content']);

    $to = "atif123n@gmail.com"; 
    $subject = "New Contact Form Submission";
    $message = "
        Name: $name\n
        Email: $email\n
        Phone: $phone\n
        content: $content for channel Partner 
    ";
    $headers = "From: Ekaksharbuildtech.com";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["message" => "Email sent successfully!"]);
    } else {
        echo json_encode(["message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["message" => "Invalid request."]);
}
?>
