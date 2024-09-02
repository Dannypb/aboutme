<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "dagramer4092@gmail.com";

$body = "Nombre: $name\n";
$body .= "Correo electrónico: $email\n";
$body .= "Motivo: $subject\n";
$body .= "Mensaje:\n$message";

$headers = "From: $email\n";
$headers .= "Reply-To: $email\n";

$mail_sent = mail($to, $subject, $body, $headers);

if ($mail_sent) {
    echo "Tu mensaje ah sido enviado correctamente. Gracias!";
} else {
    echo "Error: Algo salio mal, intentenlo nuevamente!";
}
?>
