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
		  <option>Harvesting at less than MSY</option>
		  <option>Effect of Theta on MSY</option>
		</select>
	  <div>
      <p class="varTitle" id="inputVal">Rate of growth:
        <input type="text" class="tinyTxtArea"  name="growthRate" id="growthRate" value="1.2"/></p>
      <p class="varTitle" id="inputVal">Carrying capacity:
        <input type="text" class="tinyTxtArea"  name="carryCapacity" id="carryCapacity" value="1000"/></p>
      <p class="varTitle" id="inputVal">Rate of harvesting:
        <input type="text" class="tinyTxtArea"  name="harvestRate" id="harvestRate" value="295.3125"/></p>
      <p class="varTitle" id="inputVal"><span id="densityN1">Population density(n1):</span>
        <input type="text" class="tinyTxtArea"  name="popDensityN1" id="popDensityN1" value="562.5"/></p>
      <p class="varTitle" id="inputVal"><span id="densityN2">Population density(n2):</span>
        <input type="text" class="tinyTxtArea"  name="popDensityN2" id="popDensityN2" value="437.5"/></p>
      <p class="varTitle" id="inputVal">Number of steps:
        <input type="text" class="tinyTxtArea"  name="countSteps" id="countSteps" value="20"/></p>
      <p  class="varTitle" id="inputVal">Step size:
        <input type="text" class="tinyTxtArea"  name="stepSize" id="stepSize" value="1"/></p>
   </div>
  </div>
	</li>
	<br/><br/>
	<li><h1>Controls</h1>
		<div class="varBox">
    		<span><input type="button" class="subButton widthclass" name="stepRun" value="Step run" id="stepRun"></span>
    		<span><input type="button" class="subButton widthclass" name="runIteration" value="Run iteration" id="runIteration"></span>
    		<span><input type="button" class="subButton widthclass" name="Pause" value="Play" id="Pause" disabled="disabled"></span>
    		<span><input type="button" class="subButton widthclass" name="reset" value="Reset" onClick="window.location.reload()" id=	"reset"></span>
		</div>
	</li>
</ul>