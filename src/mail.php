<?php
function clear_data($val) {
  $val = trim($val);
  $val = stripslashes($val);
  $val = htmlspecialchars($val);

  return $val;
}

function adopt($text) {
  return '=?UTF-8?B?'.base64_encode($text).'?=';
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = clear_data($_POST["name"]);
  $email = clear_data($_POST["email"]);
  $tel = clear_data($_POST["tel"]);
  $message = clear_data($_POST["message"]);

  print_r($_POST);

  $to = 'info@aquaworld.ltd';
  $subject = adopt('Новая заявка с сайта');

  $emailContent = 'Имя: '.$name."\n".'Email: '.$email."\n".
    'Tel: '.$tel."\n".'Message: '.$message."\n";

  $headers = "From: info@aquaworld.ltd" . "\r\n" 
    . "Reply-To: " . $email . "\r\n"
    . "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $emailContent, $headers )) {
    http_response_code(200);
    echo ("Данные успешно отправлены.");
  } else {
    http_response_code(400);
    echo ("Ошибка при отправке данных.");
  }
} else {
  http_response_code(400);
  echo "Неверный метод запроса.";
}
?>
