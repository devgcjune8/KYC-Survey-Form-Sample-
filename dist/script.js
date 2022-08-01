function CheckColors(val) {
  var element = document.getElementById('color');
  if (val == 'pick a color' || val == 'others')
  element.style.display = 'block';else

  element.style.display = 'none';
}