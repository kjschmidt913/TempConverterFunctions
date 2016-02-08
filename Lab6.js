

function fahrenheitToCelsius (temp) {
	return ((temp-32) * (5/9));
}



function celsiusToFahrenheit (temp) {
	return ((temp*9/5) + 32);
}


function convertTemp(temp,unit){
	if(unit==="F"){
		return fahrenheitToCelsius(temp);
	} else{
		return celsiusToFahrenheit(temp);
	}
}

console.log (convertTemp(212, "C"));