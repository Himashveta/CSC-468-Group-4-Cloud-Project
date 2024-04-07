<?php
$access_token = 'ACCESS_TOKEN'; // Replace with the access token obtained from the callback handler
$userinfo_endpoint = 'https://www.googleapis.com/oauth2/v1/userinfo';
$curl = curl_init($userinfo_endpoint . '?access_token=' . $access_token);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
curl_close($curl);

$user_info = json_decode($response, true);
// Use $user_info to retrieve user details like name, email, etc.
?>
