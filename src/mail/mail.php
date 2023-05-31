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
  $postData = json_decode(file_get_contents("php://input"), true);

  $name = clear_data($postData["name"]);
  $email = clear_data($postData["email"]);
  $tel = clear_data($postData["tel"]);
  $message = clear_data($postData["message"]);

  print_r($postData);

  $to = 'info@aquaworld.ltd';
  $subject = adopt('Новая заявка с сайта');

  $emailContent = 'Имя: '.$name."\n".'Email: '.$email."\n".
    'Tel: '.$tel."\n".'Message: '.$message."\n";

  $headers = "From: aquaworld.ltd" . "\r\n" 
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
