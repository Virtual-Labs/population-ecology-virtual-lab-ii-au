 <!--
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Athira;
  *Date of modified: 23-05-2015
  -->

  <ul>
    <li><h1>Variables<span></span></h1>
   <div class="varBox">
   <select class="dropBox" id="dropdown">
     <option>Equillibrium Densities</option>
	 <option>Population Stabilities</option>
   </select>
   <div>
    <p class="varTitle">Initial prey population:
    <input type="text" class="tinyTxtArea"  name="intprey" id="intprey" value="20"/></p>
    
    <p class="varTitle">Initial predator population:
    <input type="text" class="tinyTxtArea"  name="intPredtr" id="intPredtr" value="30"/></p>
    
    <p class="varTitle">Number of steps:
    <input type="text" class="tinyTxtArea"  name="steps" id="steps" value="10"/></p>
    
    <p class="varTitle">Step size:
    <input type="text" class="tinyTxtArea"  name="stepSize" id="stepSize" value="1"/></p>
   
    <p class="varTitle">Rate of growth:
    <input type="text" class="tinyTxtArea"  name="growthRate" id="growthRate" value="1"/></p>
    
    <p class="varTitle">Theta value:
    <input type="text" class="tinyTxtArea"  name="thetaVal" id="thetaVal" value="1"/></p>
    
    <p  class="varTitle"><span id="killSpan">Encounters result in Kill:</span>
    <input type="text" class="tinyTxtArea"  name="kill" id="kill" value="0.02"/></p>
    <p  class="varTitle">Predator conversion:
    <input type="text" class="tinyTxtArea"  name="preconversion" id="preconversion" value="0.03"/></p>
   
    <p  class="varTitle">Predator death rate:
    <input type="text" class="tinyTxtArea"  name="deathrate" id="deathrate" value="0.15"/></p>
    <p  class="varTitle"><span id="capactySpan">Carrying capacity(k):</span></p>
    
    <p  class="varTitle"><span id="KminSpan">k min:</span>
    <input type="text" class="tinyTxtArea"  name="Kmin" id="Kmin" value="1"/></p>
    
    <p  class="varTitle"><span id="kmaxSpan">k max:</span>
    <input type="text" class="tinyTxtArea"  name="Kmax" id="Kmax" value="10"/></p>
    
    <p  class="varTitle" id="step">step size of a:
    <input type="text" class="tinyTxtArea"  name="stepA" id="stepA" value="0.005"/></p>
      </div>
    </div>
  </li>
  <br>
  <br>
  <li><h1>Controls</h1>
  <div class="varBox">
  <br>
  <span><input type="button" class="subButton widthclass" name="SR" value="Step run" id="stepRun"></span>
  <span><input type="button" class="subButton widthclass" name="RI" value="Run iteration" id="runIteration"></span>
  <span><input type="button" class="subButton widthclass" name="Pause" value="Pause" id="Pause" disabled="disabled"></span>
  <span><input type="button" class="subButton widthclass" name="ReSet" value="Reset" onClick="window.location.reload()" id="ReSet"> </span>
  </div>
  </li>

</ul>