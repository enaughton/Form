//On Page Load the Name Field will be In focus

document.getElementById("name").focus();

//Job Role Section:
//Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
//Give the field an id of “other-title,” and add the placeholder text of "Your Job Role".
let jobRole = document.getElementById("title");
const select = document.querySelector('fieldset');
const newInput = document.createElement('input');

select.addEventListener('change', (e) => {

	//console.log(select);
	if(e.target.value === 'other'){
		newInput.style.display = 'block'
		newInput.id = 'other-title';
		newInput.placeholder = 'Your Job Role';
		select.appendChild(newInput);

	} else {
		newInput.style.display = 'none';	
		
	}
});

//For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
//If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
//If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
//When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.

	
//T-Shirt Section

const shirt = document.getElementById('design');
const color = document.getElementById('color');

shirt.addEventListener('change', (e) => {

	if(e.target.value === 'js puns'){
		
		color[3].style.display = 'none';
		color[4].style.display = 'none';
		color[5].style.display = 'none';
	}

	else if(e.target.value === 'heart js'){
		console.log(e.target.value)
		color[0].style.display = 'none';
		color[1].style.display = 'none';
		color[2].style.display = 'none';
	}
	//else{
		//color.style.display = 'none';
	//}
	
});

    