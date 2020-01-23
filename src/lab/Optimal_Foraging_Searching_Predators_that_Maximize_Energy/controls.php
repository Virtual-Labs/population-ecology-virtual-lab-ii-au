  <!--
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Anitha;
  *Date of modified: 08-05-2015
  -->

  <ul>
  <li><h1>Variables<span></span></h1>
  <div class="varBox">
    <div id="tabContainer">
      <p class="varTitle title" id="hptext1">hp1(s)<input type="text" id="hp1" value="6"></p>
      <p class="varTitle title" id="hptext2">hp2(s)<input type="text" id="hp2" value="120"></p>
      <p class="varTitle title" id="eptext1">ep1(kCal)<input type="text" id="ep1" value="150"></p>
      <p class="varTitle title" id="eptext2">ep2(kCal)<input type="text" id="ep2" value="2000"></p>
      <p class="varTitle title" id="estext">es(kCal/s)<input type="text" id="es" value="1"></p>
      <p class="varTitle title" id="ehtext">eh(kCal/s)<input type="text" id="eh" value="5"></p>
      <p class="varTitle title"><u>Abundance of Prey-1: </u><span id="input1">0.01</span></p>
      <div class="clear"></div>
      <p class="varTitle title" id="startingValue">Starting Value(s) <span id="input2" value="0.01">0.01</span></p>
      <input class="rangeSlider startValue" id="startValue" type="range" min="0.01" max="1" step="0.1" name="SV" value="0.01"/>            
      <div class="rangeVals">
        <span class="minrange">0.01</span><span class="maxrange">1</span>
      </div>
      <div class="clear"></div>
      <p class="varTitle title">Fraction(s) <span id="input3">0.01</span></p>
      <input class="rangeSlider fraction" id="fraction" type="range" min="0.01" max="0.1" step="0.01" name="FR" value="0.01"/>           
      <div class="rangeVals">
        <span class="minrange">0.01</span><span class="maxrange">0.1</span>
      </div>
      <div class="clear"></div>
      <p class="varTitle title">Ending Value(s) <span id="input4">0.01</span></p>
      <input class="rangeSlider endValue" id="endValue" type="range" min="0.01" max="1" step="0.1" name="EV" value="0.01"/>
      <div class="rangeVals">
        <span class="minrange">0.01</span><span class="maxrange">1</span>
      </div>
      <div class="clear"></div>
    </div>
      <p class="varTitle title"><u>Abundance of Prey-2: </u><span id="input1">0.01</span></p> 
      <div class="varTitle" id="radioBtns">
        <input type="radio" name="radioGroup" id="rb1" value="1">half of ap1
        <input type="radio" name="radioGroup" id="rb2" value="2" checked="true">equal to ap1
        <input type="radio" name="radioGroup" id="rb3" value="3">twice of ap1
      </div>
	  <li><h1>Simulation Control</h1>
      <div class="varBox box">
        <input class="submitBtns" type="button" id="plotTimeItem" style="width:120px; font-size:12px;" value="Plot Time per Item" onClick=""><br>
        <input class="submitBtns" type="button" id="plotEnergyItem" style="width:120px; font-size:12px;" value="Plot Energy per Item" onClick=""><br>
        <input class="submitBtns" type="button" id="plotEnergyTime" style="width:120px; font-size:12px;" value="Plot Energy per Time" onClick=""><br>
        <input class="submitBtns" type="button" id="reset" style="width:120px; font-size:12px;" value="Reset" onClick="">
      </div>
    </div>
  </li>
  </ul>
  <script type="text/javascript">
    var inputs = document.getElementsByTagName('p');
    for(var i = 0; i < inputs.length; i++) {	  
      if(inputs[i].type == 'range') {
		alert("a")
		inputs[i].addEventListener('click', function() {
          this.focus(); 
        });
      }
    }
  </script>