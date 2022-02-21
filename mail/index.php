<?php

require __DIR__ . '/vendor/autoload.php';

/**
 * Returns an authorized API client.
 * @return Google_Client the authorized client object
 */
function getClient()
{
    $client = new Google_Client();
    $client->setApplicationName('Gmail API PHP Quickstart');
    $client->setScopes(Google_Service_Gmail::MAIL_GOOGLE_COM);
    $client->setAuthConfig('credentials.json');
    $client->setAccessType('offline');
    $client->setPrompt('select_account consent');

    // Load previously authorized token from a file, if it exists.
    // The file token.json stores the user's access and refresh tokens, and is
    // created automatically when the authorization flow completes for the first
    // time.
    $tokenPath = 'token.json';
    if (file_exists($tokenPath)) {
        $accessToken = json_decode(file_get_contents($tokenPath), true);
        $client->setAccessToken($accessToken);
    }

    // If there is no previous token or it's expired.
    if ($client->isAccessTokenExpired()) {
        // Refresh the token if possible, else fetch a new one.
        if ($client->getRefreshToken()) {
            $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
        } else {
            // Request authorization from the user.
            $authUrl = $client->createAuthUrl();
            printf("Open the following link in your browser:\n%s\n", $authUrl);
            print 'Enter verification code: ';
            $authCode = trim(fgets(STDIN));

            // Exchange authorization code for an access token.
            $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);
            $client->setAccessToken($accessToken);

            // Check to see if there was an error.
            if (array_key_exists('error', $accessToken)) {
                throw new Exception(join(', ', $accessToken));
            }
        }
        // Save the token to a file.
        if (!file_exists(dirname($tokenPath))) {
            mkdir(dirname($tokenPath), 0700, true);
        }
        file_put_contents($tokenPath, json_encode($client->getAccessToken()));
    }
    return $client;
}

/**
* @param $sender string sender email address
* @param $to string recipient email address
* @param $subject string email subject
* @param $messageText string email text
* @return Google_Service_Gmail_Message
*/
function createMessage($sender, $to, $subject, $messageText) {
 $message = new Google_Service_Gmail_Message();

 $rawMessageString = "From: <{$sender}>\r\n";
 $rawMessageString .= "To: <{$to}>\r\n";
 $rawMessageString .= 'Subject: =?utf-8?B?' . base64_encode($subject) . "?=\r\n";
 $rawMessageString .= "MIME-Version: 1.0\r\n";
 $rawMessageString .= "Content-Type: text/html; charset=utf-8\r\n";
 $rawMessageString .= 'Content-Transfer-Encoding: quoted-printable' . "\r\n\r\n";
 $rawMessageString .= "{$messageText}\r\n";

 $rawMessage = strtr(base64_encode($rawMessageString), array('+' => '-', '/' => '_'));
 $message->setRaw($rawMessage);
 return $message;
}

$to = $_GET["to"];
$name = $_GET["name"];
$message = $_GET["message"];

$client = getClient();
$service = new Google_Service_Gmail($client);
$user = "me";

$message = createMessage($user, "luisfc.90@gmail.com", "Coding Palta contact", $name . " - " . $to . "\r\n" . $message);
try {
  $service->users_messages->send($user, $message);
} catch (Exception $e) {
  print 'An error occurred: ' . $e->getMessage();
}

?>

