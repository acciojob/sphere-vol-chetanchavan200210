function volume_sphere() {
    //Write your code here
  const radius = document.getElementById("radius");
	
	let btn=document.getElementById("submit")
	let calc=(4/3) * Math.PI*Math.pow(radius,3);
	btn.addEventListener('click',()=>{
		const volume = document.getElemnetById("volume");
		volume = calc;
	})
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
