<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Ambil data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // (Untuk assignment: kita tak simpan, cuma simulate success)

    // Redirect balik dengan status success
    header("Location: contact.html?success=1");
    exit();
}
?>
