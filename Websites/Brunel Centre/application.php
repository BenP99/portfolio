<!-- Application Form PHP -->
<?
	/* Variables */
	/* Personal Details 1 */
	$name = $_POST["name"];
	$dob = $_POST["dob"];
	$age = $_POST["age"];
	
	/* Gender */
	$male_status = 'unchecked';
	$female_status = 'unchecked';
	if (isset($_POST['Submit'])) {
		$gender = $_POST['gender'];
		if ($gender = 'male') {
			$male_status = 'checked';
		}
		else if ($gender = 'female') {
			$female_status = 'checked';
		}
	}
	
	/* Personal Details 2 */
	$address = $_POST["address"];
	$postcode = $_POST["postcode"];
	$mobile = $_POST["mobile"];
	$email = $_POST["email"];
	
	/* Previous Education */
	$attendedschool = $_POST["attendedschool"];
	$dateleft = $_POST["dateleft"];
	$tutor = $_POST["tutor"];
	
	/* Other Qualifications */
	$gsce = $_POST["gsce"];
	$grades1 = $_POST["grades1"];
	$asa = $_POST["as&a"];
	$grades2 = $_POST["grades2"];
	
	/* Bursary Course Details */
	$title = $_POST["title"];
	$level = $_POST["level"];
	$duration = $_POST["duration"];
	$subject = $_POST["subject"];
	
	/* Employer Information */
	$company = $_POST["company"];
	$jobtitle = $_POST["jobtitle"];
	$caddress = $_POST["caddress"];
	$cpostcode = $_POST["cpostcode"];
	
	/* Aspirations and Circumstances */
	$aspirations = $_POST["aspirations"];
	$circumstances = $_POST["circumstances"];
	
	/* Declarations */
	$print = $_POST["print"];
	$signature = $_POST["signature"];
	$decdate = $_POST["decdate"];
	$decemail = $_POST["decemail"];
	
	/* Bank Details */
	$holder = $_POST["holder"];
	$number = $_POST["number"];
	$sortcode = $_POST["sortcode"];
	
	/* Recipients Email */
	$recipient = "ben.pearce25@gmail.com";
	
	/* Subject of Email */
	$subject = "New Application";
	
	/* The Message that will be Emailed */
	$email_message = "
	New Application
	
	Personal Details:
	Name: ".$name."
	Date of Birth: ".$dob."
	Age: ".$age."
	Gender: ".$gender."
	Address: ".$address."
	Postcode: ".$postcode."
	Mobile: ".$mobile."
	Email: ".$email."
	
	Previous Education:
	Name of School Attended: ".$attendedschool."
	Date of Leaving School: ".$dateleft."
	Name of Tutor / Head of Year: ".$tutor."
	
	Other Qualifications:
	GSCE / Vocational Equivalent: ".$gsce."
	Date Taken and Grades Achieved: ".$grades1."
	AS & A Level / Vocational Equivalent: ".$asa."
	Date Taken and Grades Achieved: ".$grades2."
	
	Bursary Course Details:
	Full Title of Course: ".$title."
	Level of Course: ".$level."
	Duration of Course in Years: ".$duration."
	Vocational Subject Area: ".$subject."
	
	Employer Information – (If you are an apprentice):
	Company Name: ".$company."
	Job Title ".$jobtitle."
	Company Address ".$caddress."
	Company Postcode: ".$cpostcode."
	
	Career Aspirations:
	".$aspirations."
	
	Special Circumstances:
	".$circumstances."
	
	Declarations:
	Printed Full Name: ".$print."
	Signature: ".$signature."
	Date (DD/MM/YYYY): ".$decdate."
	Decloration Email: ".$decemail."
	
	Bank Details:
	Account Holder’s Name: ".$holder."
	Account Number: ".$number."
	Sort Code: ".$sortcode."
	";
	
	/* Sending the Application Form */
	//mail ($recipient, $subject, $email_message);
	//header('Location:appsuccess.html');
?>