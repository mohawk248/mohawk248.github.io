var
  r = document.getElementById('red').value,
  g = document.getElementById('green').value,
  b = document.getElementById('blue').value,
  red_out = document.getElementById('RedColor'),
  green_out = document.getElementById('GreenColor'),
  blue_out = document.getElementById('BlueColor'),
  colorBox = document.getElementById('box'),
  color_out = "rgb("+r+","+g+","+b+")",
  drawcolor = color_out;
  colorBox.style.backgroundColor = color_out;
//Color Sliders//
  function colorSlider() {
    r = document.getElementById('red').value;
    g = document.getElementById('green').value;
    b = document.getElementById('blue').value;
    red_out.innerHTML = r;
    green_out.innerHTML = g;
    blue_out.innerHTML = b;
    color_out = "rgb("+r+","+g+","+b+")";
    colorBox.style.backgroundColor = color_out;
    drawcolor = color_out;
  }
//first Row of Drawing Grid//
  function OneA() { document.getElementById("OneA").style.backgroundColor = drawcolor; }
  function OneB() { document.getElementById("OneB").style.backgroundColor = drawcolor; }
  function OneC() { document.getElementById("OneC").style.backgroundColor = drawcolor; }
  function OneD() { document.getElementById("OneD").style.backgroundColor = drawcolor; }
  function OneE() { document.getElementById("OneE").style.backgroundColor = drawcolor; }
//Second Row of drawing Grid//
  function TwoA() { document.getElementById("TwoA").style.backgroundColor = drawcolor; }
  function TwoB() { document.getElementById("TwoB").style.backgroundColor = drawcolor; }
  function TwoC() { document.getElementById("TwoC").style.backgroundColor = drawcolor; }
  function TwoD() { document.getElementById("TwoD").style.backgroundColor = drawcolor; }
  function TwoE() { document.getElementById("TwoE").style.backgroundColor = drawcolor; }
//Third Row of Drawing Grid//
  function ThreeA() { document.getElementById("ThreeA").style.backgroundColor = drawcolor; }
  function ThreeB() { document.getElementById("ThreeB").style.backgroundColor = drawcolor; }
  function ThreeC() { document.getElementById("ThreeC").style.backgroundColor = drawcolor; }
  function ThreeD() { document.getElementById("ThreeD").style.backgroundColor = drawcolor; }
  function ThreeE() { document.getElementById("ThreeE").style.backgroundColor = drawcolor; }
//Fourth Row of Drawing Grid//
  function FourA() { document.getElementById("FourA").style.backgroundColor = drawcolor; }
  function FourB() { document.getElementById("FourB").style.backgroundColor = drawcolor; }
  function FourC() { document.getElementById("FourC").style.backgroundColor = drawcolor; }
  function FourD() { document.getElementById("FourD").style.backgroundColor = drawcolor; }
  function FourE() { document.getElementById("FourE").style.backgroundColor = drawcolor; }
//Fifth Row of Drawing Grid//
  function FiveA() { document.getElementById("FiveA").style.backgroundColor = drawcolor; }
  function FiveB() { document.getElementById("FiveB").style.backgroundColor = drawcolor; }
  function FiveC() { document.getElementById("FiveC").style.backgroundColor = drawcolor; }
  function FiveD() { document.getElementById("FiveD").style.backgroundColor = drawcolor; }
  function FiveE() { document.getElementById("FiveE").style.backgroundColor = drawcolor; }