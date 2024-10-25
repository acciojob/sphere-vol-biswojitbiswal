function volume_sphere(e) {
    //Write your code here
	e.preventDefault();

	const radiusInput = document.getElementById("radius");
	const radius = parseFloat(radiusInput.value);
	
	const volume = document.getElementById("volume");

	if(isNaN(radius) && radius < 0){
		volume.value = 'NaN';
		return;
	}

	const result = (4 / 3) * Math.PI * Math.pow(radius, 3);
	
	volume.value = result.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
