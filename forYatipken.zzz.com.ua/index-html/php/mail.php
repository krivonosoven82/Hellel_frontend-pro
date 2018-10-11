<?php
	$resepient = 'krivonosoven82@gmail.com';
	$sitename = 'okkama studio';

	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$message = trim($_POST['message']);


	$messageShow = "Name: $name \nEmail: $email \nMessage: $message";


	$pagetitle = "new order to site \"$sitename\"";
	mail($recepient, $pagetitle, $messageShow, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

 ?>
