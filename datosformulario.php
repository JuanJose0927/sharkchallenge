<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $message = $_POST['message'];

    echo "<link rel='stylesheet' href='styles.css'>";

    echo "
    <div class='container_info_form'>
        <h1 class='container_info_form_title'>Datos del Formulario</h1>
        <p class='container_info_form_title'><strong>Nombre:</strong> $nombre</p>
        <p class='container_info_form_email'><strong>Email:</strong> $email</p>
        <p class='container_info_form_password'><strong>Contraseña:</strong> $password</p>
        <p class='container_info_form_message'><strong>Mensaje:</strong>$message</p>
    <div>
    ";
}
?>