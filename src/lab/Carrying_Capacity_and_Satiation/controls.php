<!--

  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Saranya S;
  *Date of modified: 23-05-2015
  
-->
  <ul>
    <li><h1>Variables<span></span></h1>
      <div class="varBox">
        <select class="dropBox" id="dropdown">
          <option>Predator without satiation</option>
          <option>Predator with satiation</option>
        </select>
       <div>
         <p class="varTitle" id="inputVal">Initial prey population:
    	   <input type="text" class="tinyTxtArea"  name="initialPrey" id="initialPrey" value="140"/></p>
         <p class="varTitle" id="inputVal">Initial predator population:
    	   <input type="text" class="tinyTxtArea"  name="initialPredator" id="initialPredator" value="20"/></p>
         <p class="varTitle" id="inputVal">Number of steps:
    	   <input type="text" class="tinyTxtArea"  name="noSteps" id="noSteps" value="200"/></p>
         <p class="varTitle" id="inputVal">Step size:
    	   <input type="text" class="tinyTxtArea"  name="stepSize" id="stepSize" value="1"/></p>
         <p class="varTitle" id="inputVal">Rate of growth:
    	   <input type="text" class="tinyTxtArea"  name="growthRate" id="growthRate" value="0.9"/></p>
         <p class="varTitle" id="inputVal">Theta value:
    	   <input type="text" class="tinyTxtArea"  name="thetaVal" id="thetaVal" value="1"/></p>
         <p  class="varTitle" id="inputVal">Encounters result in kill:
    	   <input type="text" class="tinyTxtArea"  name="eResult" id="eResult" value="0.05"/></p>
         <p  class="varTitle" id="inputVal">Predator conversion:
   		   <input type="text" class="tinyTxtArea"  name="predatorConv" id="predatorConv" value="0.02"/></p>
         <p  class="varTitle" id="inputVal">Predator death rate:
   		   <input type="text" class="tinyTxtArea"  name="deathRate" id="deathRate" value="0.1"/></p>
         <p  class="varTitle" id="inputVal">Carrying capacity(k):
    	   <input type="text" class="tinyTxtArea"  name="carryCapacity" id="carryCapacity" value="200"/></p>
         <p  class="varTitle" id="satiationVal">Satiation value:
    	   <input type="text" class="tinyTxtArea"  name="satiationValue" id="satiationValue" value="10"/></p>
      </div>
      </div>
    </li>
    <br>
    <br>
    <li><h1>Controls</h1>
      <div class="varBox">
      <br>
        <span><input type="button" class="subButton widthclass" name="stepRun" value="Step run" id="stepRun"></span>
        <span><input type="button" class="subButton widthclass" name="runIteration" value="Run iteration" id="runIteration"></span>
        <span><input type="button" class="subButton widthclass" name="Pause" value="Play" id="Pause" disabled="disabled"></span>
        <span><input type="button" class="subButton widthclass" name="reset" value="Reset" onClick="window.location.reload()" id="reset"></span>
      </div>
    </li>
  </ul>