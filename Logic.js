function IsEnter()
{
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.

	// If enter key is pressed then only respond.
	if (TextBox_val != "")
	{
		if (event.keyCode == 13)
			main();
	}
}

function main()
{
	// the main logic will be coded here.
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.
	var ResponseText_val = document.getElementById("ResponseText"); // Get all the data from the response text.

	var FormatInput = TextBox_val.toLowerCase().trim(); // convert our given input to lowercase.
	// For example "Apple" -> "apple".

	// Let's code the Logic for chatting...
	// and like this you can add several more features to it make it really advance.
	// As i said, i will be uploading it's source code it github so just check the link in description!
	if (FormatInput.includes("hi") || FormatInput.includes("halo!"))
		ResponseText_val.innerHTML = "Hai!";

	

	// Open websites!

	else if (FormatInput.includes("open google"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}

	else if (FormatInput.includes("open youtube"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}

	else if (FormatInput.includes("open onestate"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Onestate Coding on YouTube";
		window.open("https://www.youtube.com/channel/UCrphqZNc_r-KsOTeTKH5hwA", "_blank");
	}

	else if (FormatInput.includes("open light-lens"))
	{
		// "https://" is important!
		ResponseText_val.innerHTML = "Opening Light-Lens on Github";
		window.open("https://github.com/Light-Lens", "_blank");
	}

    else if (FormatInput.includes("open whatsapp"))
    {
    
    
        ResponseText_val.innerHTML = "Opening WhatsApp";
        window.open("https://web.whatsapp.com", "_blank")

    }



    else if (FormatInput.includes("open discord"))
    {

        ResponseText_val.innerHTML = "Opening Discord";
        window.open("https://discord.com", "_blank")

    }


	else if (FormatInput.includes("open afar"))
	{

		ResponseText_val.innerHTML = "Who Is Afar";
		window.open("", "_blank")
	}


	else if (FormatInput.includes("open clousd"))
	{

		ResponseText_val.innerHTML = "Opening Clousd Discord";
		window.open("https://discord.gg/Hq9cbf2U9t", "_blank")
	}


	else
    ResponseText_val.innerHTML = "Maaf, Kami Belum Mengerti Apa Yang Kamu Cari 😔 Coba Lagi";


    
    
}