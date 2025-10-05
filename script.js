function volume_sphere(event) {
  event.preventDefault(); // prevent page reload

  const radius = parseFloat(document.getElementById("radius").value);
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Always display result, even if NaN
  document.getElementById("volume").value = volume.toFixed(4);
}

window.onload = function () {
  document.getElementById("MyForm").onsubmit = volume_sphere;
};
