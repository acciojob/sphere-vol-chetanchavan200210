function volume_sphere(event) {
  event.preventDefault(); // stop form reload

  const radius = parseFloat(document.getElementById("radius").value);

  if (isNaN(radius) || radius <= 0) {
    alert("Please enter a valid positive radius.");
    return;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume.toFixed(2);
}

// Run when page loads
window.onload = function() {
  document.getElementById("MyForm").onsubmit = volume_sphere;
};

