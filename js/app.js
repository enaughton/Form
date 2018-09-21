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
const colorDiv = document.getElementById('colors-js-puns');
const color = document.getElementById('color');

colorDiv.style.display = 'none';

shirt.addEventListener('change', (e) => {

	if(e.target.value === 'js puns'){
		colorDiv.style.display = '';
		color.style.display = '';
		color.value = 'cornflowerblue'
		color[0].style.display = '';
		color[1].style.display = '';
		color[2].style.display = '';
		color[3].style.display = 'none';
		color[4].style.display = 'none';
		color[5].style.display = 'none';
	}

	else if(e.target.value === 'heart js'){
		colorDiv.style.display = '';
		color.value = 'tomato';
		color[0].style.display = 'none';
		color[1].style.display = 'none';
		color[2].style.display = 'none';
		color[3].style.display = '';
		color[4].style.display = '';
		color[5].style.display = '';
	}
	else{
		colorDiv.style.display = 'none'

	}
	
});


//”Register for Activities” section
//Some events are at the same day and time as others.
//If the user selects a workshop, don't allow selection
//of a workshop at the same day and time -- you should disable
//the checkbox and visually indicate that the workshop in the competing time slot isn't available.
//When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
//As a user selects activities, a running total should display below the list of checkboxes.
//For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, 
//the total should change to Total: $300.

/*Same Time: Tuesday 9am-12pm
	  			 Express Workshop
	  			 JavaScript Frameworks Workshop
	  			 Tuesday 1pm-4pm 
	  			 JavaScript Libraries Workshop
	  			 Node.js Workshop

	  			 Wednesday 9am-12pm
	  			 Build Tools Workshop
	  			 Wednesday 1pm-4pm
	  			 npm Workshop
	*/
	
	const activities = document.getElementsByClassName('activities');
	const check = activities[0].children;
	const box = check[1].children;
	let total = 0;
	let price = 0;
	

	check[1].firstChild.addEventListener('change', (e)=> {
		if(check[1].firstChild.checked){
			let price = 200;
		}
	})		

	check[2].firstChild.addEventListener('change', (e)=> {
		if(check[2].firstChild.checked ){
			console.log(check[4].firstChild)
			check[4].firstChild.disabled = true;
			let price = 100

		}
		else {
			check[4].firstChild.disabled = false;
			console.log(check[4].firstChild)
		}
	})

	check[3].firstChild.addEventListener('change', (e) =>{
		if(check[3].firstChild.checked){
			console.log(check[4].firstChild)
			check[5].firstChild.disabled = true;
		} 
		else{
			check[5].firstChild.disabled = false;
		}

	})

	check[4].firstChild.addEventListener('change', (e) =>{
		if(check[4].firstChild.checked){
			console.log(check[4].firstChild)
			check[2].firstChild.disabled = true;
		} 
		else{
			check[2].firstChild.disabled = false;
		}

	})

	check[5].firstChild.addEventListener('change', (e) =>{
		if(check[5].firstChild.checked){
			console.log(check[3].firstChild)
			let price = 100
			check[3].firstChild.disabled = true;
		} 
		else{
			check[3].firstChild.disabled = false;
		}


	})

	check[6].firstChild.addEventListener('change', (e)=> {
		if(check[6].firstChild.checked){
			let price = 100;
		}
	})	

	check[7].firstChild.addEventListener('change', (e)=> {
		if(check[7].firstChild.checked){
			let price = 100;
			console.log('hi');
		}
	})	

	






		
	
	
	




	
	
	
	


	
	   		
