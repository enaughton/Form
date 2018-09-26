//On Page Load the Name Field will be In focus
document.getElementById("name").focus();

// Job Role Section:
// If Other is selected in the DropDown Menu a text field will appear.
// If another option is selected the text field will not appear. 

let jobRole = document.getElementById("title");
const select = document.querySelector('fieldset');
const newInput = document.getElementById('other-title');

newInput.style.display = 'none'

select.addEventListener('change', (e) => {

	//console.log(select);
	if(e.target.value === 'other'){
		newInput.style.display = ''
	
	} else {
		newInput.style.display = 'none';	
	}
});

// T-Shirt Section:
//If the user selects "Theme - JS Puns" then the color menu will display only the JS Puns Color Options
//If the user selects "Theme - I ♥ JS" then the color menu will only display the I ♥ JS Color Options
//When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.

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
	} else if(e.target.value === 'heart js'){
		colorDiv.style.display = '';
		color.value = 'tomato';
		color[0].style.display = 'none';
		color[1].style.display = 'none';
		color[2].style.display = 'none';
		color[3].style.display = '';
		color[4].style.display = '';
		color[5].style.display = '';
	} else{
		colorDiv.style.display = 'none'
	}
});


// Activity Registration Section:
// When an Activity is Selected from the Menu if it conflicts with another Activity
//The Unselected Activity will be grayed out
//When an Activity is Selected the total the User will be charged is Displayed Below the Menu

	
	const activities = document.getElementsByClassName('activities');
	const check = activities[0].children;
	const box = check[1].children; 
	const main = 200
	let total = 0
	
	check[1].firstChild.addEventListener('change', (e)=> {
		if(check[1].firstChild.checked){
			 total = main;
			 total;
		} else {
			total = 0;
		}
	})		

	check[2].firstChild.addEventListener('change', (e)=> {
		if(check[2].firstChild.checked ){
			check[4].firstChild.disabled = true;
			check[4].style.color = 'grey';
			total += 100
		} else {
			total = total - 100;
			check[4].firstChild.disabled = false;
			check[4].style.color = 'black';
		}	
	})

	check[3].firstChild.addEventListener('change', (e) =>{
		if(check[3].firstChild.checked){
			check[5].firstChild.disabled = true;
			check[5].style.color = 'grey';
			total += 100
		} else{
			total = total - 100;
			check[5].firstChild.disabled = false;
			check[5].style.color = 'black';			
		}
	})

	check[4].firstChild.addEventListener('change', (e) =>{
		if(check[4].firstChild.checked){
			total += 100
			check[2].firstChild.disabled = true;
			check[2].style.color = 'grey';	
		} else{
			total = total - 100;
			check[2].firstChild.disabled = false;
			check[2].style.color = 'black';	
			
		}
	})

	check[5].firstChild.addEventListener('change', (e) =>{
		if(check[5].firstChild.checked){
			total += 100
			check[3].firstChild.disabled = true;
			check[3].style.color = 'grey';
		} else{
			total = total - 100;
			check[3].firstChild.disabled = false;
			check[3].style.color = 'black';	
		}
	})

	check[6].firstChild.addEventListener('change', (e)=> {
		if(check[6].firstChild.checked){
			total += 100
		}
		else{
			total = total - 100;
		}
	})	

	check[7].firstChild.addEventListener('change', (e)=> {
		if(check[7].firstChild.checked){
			total += 100;
		} else{
			total = total - 100;
		}
	})	

	var div = document.createElement('div');
	var head =  document.createElement('h3');


	activities[0].addEventListener('change', (e) => {
	for(let i = 1; i < check.length; i++){
		check[7].appendChild(div);
		div.className = 'total';
		div.appendChild(head)
		head.innerHTML = 'Your Total is ' + total;
	}
});

//PayMent Methods:
//If Credit Card Method: Selected (Credit Card Form will Appear)
//If PayPal Method: Selected (PayPal Message will Appear)
//If BitCoin Method: Selected (BitCoin Message will Appear)


const payment = document.getElementById('payment');
const credit = document.getElementById('credit-card');
const p = document.querySelectorAll('p');
const cardNum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');

	payment.value = 'select_method'
	p[0].style.display = 'none'
	p[1].style.display = 'none'
	credit.style.display = 'none'
		
	payment.addEventListener('change', (e) =>{
		if(e.target.value === 'credit card'){
			credit.style.display = ''
			p[0].style.display = 'none';
			p[1].style.display = 'none';
			console.log(p[1])
		} else if(e.target.value === 'paypal'){

			credit.style.display = 'none'
			p[0].style.display = ''
			p[1].style.display = 'none';
		} else if(e.target.value === 'bitcoin'){
			credit.style.display = 'none'
			p[1].style.display = ''
		} else {
			credit.style.display = 'none'
			p[0].style.display = 'none'
			p[1].style.display = 'none'
		}
	})

//Validation Section:
//Name field (border will turn red, if name field left blank)
//Email field (border will turn red, if the email field left blank or not)
//Register for Activities (an Alert will let user know they need to select an Activity)
//Credit Card Payment Method: Selected)
//Checks if the fields(Credit Card Number, Zip Code, CVV) contain the correct amount of Numbers)
//If Errors in the form, preventDefault() will trigger, and not "Submit" the form. 

const button = document.querySelector('button')
const name = document.getElementById('name');
const email = document.getElementById('mail');

function validName (name) {

	button.addEventListener("click", function(e){
		if(name.value === ''){
			e.preventDefault()
			name.style.borderColor = 'red'
		}
	})
}	

function emailValid (email) {
	button.addEventListener("click", function(e){

		if(email.value.includes('^\w+$' &&'@' && '.') === false){
			e.preventDefault();
			email.style.borderColor = 'red'
		}
	})
}	

function eventValid(activities){

	button.addEventListener('click', function(e){
		
    var flag = false;
	
		for(var i = 1; i < check.length; i++) {
			if(check[i].firstChild.checked) {
		       	console.log(true)
		        flag = true;
		    }
		 	if(!flag){
		    	alert("Please check at least one ");
		    	console.log(false)
		    	return false;
			}
		}
	})	
}		

function cardValid(credit){		
	button.addEventListener('click', function(e){
		
		if(payment.value ==='credit card'){
			
			if(/^\d{16}$/.test(cardNum.value)){
			
			} else{
				e.preventDefault();
			}
			if(/^\d{5}$/.test(zip.value)){

			} else{
				e.preventDefault();
		}
	}
			if(/^\d{3}/.test(cvv.value)){
			
			} else {
			e.preventDefault();
		}
	})
}	


	validName(name);
	emailValid(email);
	eventValid(activities);
	cardValid(credit);