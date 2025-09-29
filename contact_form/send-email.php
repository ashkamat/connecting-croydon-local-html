<?php
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

date_default_timezone_set('Etc/UTC');

require "./vendor/autoload.php";

$recipient = "rnbtv.com@gmail.com";
$from = "rnbtv.com@gmail.com";
$isValid = true;

// Field validation
if (empty($_POST["firstName"])) {
    $isValid = false;
} else {
    $firstName = substr(strip_tags($_POST["firstName"]), 0, 255);
}

if (empty($_POST["lastName"])) {
    $isValid = false;
} else {
    $lastName = substr(strip_tags($_POST["lastName"]), 0, 255);
}

if (empty($_POST["phone"])) {
    $phone = "No phone number provided";
} elseif (preg_match("/^$|^\+?\d+( \d+)*$/", $_POST["phone"])) {
    $phone = $_POST["phone"];
} else {
    $isValid = false;
}

if (PHPMailer::validateAddress($_POST["email"])) {
    $email = $_POST["email"];
} else {
    $isValid = false;
}

if (empty($_POST["message"])) {
    $isValid = false;
} else {
    $message = substr(strip_tags($_POST["message"]), 0, 2000);
}

// Validate checkbox values
if (
    isset($_POST["terms"]) &&
    $_POST["terms"] == "Agreed to privacy policy"
) {
    $terms = substr(strip_tags($_POST["terms"]), 0, 255);
} else {
    $isValid = false;
}

// Send
if ($isValid) {
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = "send.one.com";
    $mail->Port = 587;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->SMTPAuth = true;
    $mail->Username = $from;
    $mail->Password = "g[0T3_SwfRz1o";
    $mail->setFrom($from, $firstName . " " . $lastName);
    $mail->addAddress($recipient);
    $mail->addReplyTo($email, $firstName . " " . $lastName);
    $mail->Subject = "New form submission: General enquiry";
    $mail->isHTML(true);
    $mail->Body = <<<EOT
    <p><strong>First Name:</strong> $firstName</p>
    <p><strong>Last Name:</strong> $lastName</p>
    <p><strong>Phone:</strong> $phone</p>
    <p><strong>Message:</strong></p>
    <p>$message</p>
    <p><strong>Checkboxes:</strong></p>
    <p>$terms</p>
EOT;

    if ($mail->send()) {
        $response = [
            "status" => "success",
            "message" => "Message sent",
        ];
    } else {
        $response = [
            "status" => "error",
            "message" => "Sending error",
        ];
    }

    echo json_encode($response);
}
