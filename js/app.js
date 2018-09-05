//On Page Load the Name Field will be In focus

document.getElementById("name").focus();

//Job Role Section:
//  Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
// Give the field an id of “other-title,” and add the placeholder text of "Your Job Role".
let jobRole = document.getElementById("title");
const select = document.querySelector('fieldset');

if(jobRole.value !='other') {

		newInput.style.display = 'none';
		jobRole.onchange = changeEventHandler;
		function changeEventHandler(event) {

	const newInput = document.createElement('input');
	console.log(jobRole.value);
    
    
	} else{
		
		newInput.id = 'other-title';
		newInput.placeholder = 'Your Job Role';
		select.appendChild(newInput);

	}

}

	



	


        
    
