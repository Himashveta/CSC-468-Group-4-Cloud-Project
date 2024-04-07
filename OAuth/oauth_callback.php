<?php
$code = $_GET['code']; // Get authorization code from URL
$client_id = 'YOUR_CLIENT_ID';
$client_secret = 'YOUR_CLIENT_SECRET';
$redirect_uri = 'YOUR_REDIRECT_URI';
$token_endpoint = 'https://oauth2.googleapis.com/token';

$data = array(
    'code' => $code,
    'client_id' => $client_id,
    'client_secret' => $client_secret,
    'redirect_uri' => $redirect_uri,
    'grant_type' => 'authorization_code'
);

$curl = curl_init($token_endpoint);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
curl_close($curl);

$token_data = json_decode($response, true);
$access_token = $token_data['access_token'];
// Use $access_token to fetch user info or perform other actions
?>
