<?php
function clear_data($val) {
  $val = trim($val);
  $val = urldecode($val)
  $val = stripslashes($val);
  $val = htmlspecialchars($val);

  return $val;
}

function adopt($text) {
  return '=?UTF-8?B?'.base64_encode($text).'?=';
}

$to = 'info@aquaworld.ltd';
$subject = adopt('Заявка с сайта');
$message = 'Сообщение';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = clear_data($_POST["name"]);
  $email = clear_data($_POST["email"]);
  $tel = clear_data($_POST["tel"]);
  $message = clear_data($_POST["message"]);

  $text = 'Имя: '.$name."\n".'Email: '.$email."\n".
    'Tel: '.$tel."\n".'Message: '.$message."\n";

  $headers = 'From: aquaworld@ltd'."\r\n";
  $headers .= 'Reply-To: aquaworld@ltd'."\r\n";
  $headers .= 'X-Mailer: PHP/'.phpversion(); 
}


if (mail($to, $subject, $text, $headers )) {
  http_response_code(200);
  echo ("Данные отправлены.");
} else {
  http_response_code(400);
  echo ("Ошибка. Данные не отправлены.");
};
?>
