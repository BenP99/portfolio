<!-- Contact Form PHP -->
<?
	/* Variables */
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	
	/* Recipients Email */
	$recipient = "ben.pearce25@gmail.com";
	
	/* Subject of Email */
	$subject = "New Inquiry";
	
	/* The Message that will be Emailed */
	$email_message = "
	From the Contact Form on the Website:
	Name: ".$name."
	Email: ".$email."
	Message: ".$message."
	";
	
	/* Sending the Application Form */
	//mail ($recipient, $subject, $email_message);
	//header('Location:success.html');
?>