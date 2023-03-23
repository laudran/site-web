<?php
header('content-type:application/json');
function function_alert($message) {
      
    // Display the alert box
    echo "<script>alert('$message');</script>";
}
function reCaptcha($recaptcha){
    $secret = "6LfKyCgjAAAAAPL8wMH-UrHm3N_xCx_r6p-c36dU";
    $ip = $_SERVER['REMOTE_ADDR'];
  
    $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
    $data = curl_exec($ch);
    curl_close($ch);
  
    return json_decode($data, true);
  }

$recaptcha = $_POST['recaptchaToken'];
$res = reCaptcha($recaptcha);
if(!$res['success']){
    http_response_code(401);
    echo json_encode([
        'message' => $res,
        'token' => $recaptcha
    ]);
    return;
}

if (!$_POST['email']) {

    http_response_code(401);
    echo(json_encode([
        'message' => 'Veuillez renseigner votre adresse email.',
    ]));
    
    return;
}

// EDIT THE 2 LINES BELOW AS REQUIRED
//$email_to = "contact@cybercorsaire.gp";
$email_to = "steven@mym.fans";
$email_subject = "Nouveau message depuis le site web";

function problem($errors)
{
    http_response_code(401);
    echo(json_encode([
        'message' => 'Il semble que le formulaire envoyé contient des erreurs.',
        'errors' => $errors
    ]));
    return;
}
$company = strip_tags($_POST['company'], ['a']);
$lastName = strip_tags($_POST['lastName'], ['a']); // required
$firstName = strip_tags($_POST['firstName'], ['a']); // required
$email = strip_tags($_POST['email'], ['a']); // required
$message = strip_tags($_POST['message'], ['a']); // required

$error_messages = [];
$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $error_messages[] = 'L\'adresse email envoyée n\'est pas valide.';
}

$string_exp = "/^[A-Za-z .'-]+$/";

if (!preg_match($string_exp, $lastName)) {
    $error_messages[] = sprintf('Le nom n\'est pas valide: valeur envoyée: %s', $lastName);
}
if (!preg_match($string_exp, $firstName)) {
    $error_messages[] = sprintf('Le prénom n\'est pas valide: valeur envoyée: %s', $firstName);
}

if (strlen($message) < 2) {
    $error_messages[] = 'Le message envoyé n\'est pas valide';
}

if (count($error_messages) > 0) {
    problem($error_messages);
    return;
}

function clean_string($string)
{
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
}

function getDefaultBody() {
    $email_message = "Form details below.\n\n";
    $email_message .= "Societe: " . clean_string($company) . "\n";
    $email_message .= "Name: " . clean_string($firstName) . " " . clean_string($lastName) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";

    return $email_message;
}

// create email headers
$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, getDefaultBody(), $headers);

http_response_code(200);
echo json_encode([
    'message' => 'ok'
]);
die();
    
?>
