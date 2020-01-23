<!--
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
-->


<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
  <!--label text display in the top-->
  <p id="topLabel_graph"></p>

  <!--label text display in the left-->
  <p id="leftLabel_graph"></p>


  <!--label text display in the bottom-->
  <p id="bottomLabel_graph"></p>


<div id="statLabel">
<p class="Label" id="species1"></p>
<p class="Label" id="species2"></p>
</div>
<!--label text display in the top
-->
<p id="top" style=" margin:0px; position:relative;  font-family:Verdana, Geneva, sans-serif; font-size:13px; color:#6f6f6f; "></p>

<!--label text display in the left-->
<p id="left" style=" margin:0px; position:relative; left:-277px; top:230px; -webkit-transform: rotate(-90deg);-moz-transform: rotate(-90deg); font-family:Verdana, Geneva, sans-serif; font-size:13px; color:#6f6f6f; "></p>
<canvas id="speciesCanvas" ></canvas>
<!--graph content displaying div-->
<div id="tinyGraphArea" style="width:90%;height:80%;top:-84%;left:6%">
</div>
<p id="bottom" style="background-color:#FFF;  padding:0px; margin:0px; font-family:Verdana, Geneva, sans-serif; font-size:13px; color:#6f6f6f; "></p>
<div id="triButton" >
    <div id="statistics">
    <img src="<?php getSimPath(); ?>images/Stati.svg"  id="statImg"/>
    
    <p id="stat_txt">Statistics</p>
    
</div>
<div id="dataPlot">
<img src="<?php getSimPath(); ?>images/graphPlot.svg"  id="dataImg"/>
<p id="data_txt">Data plots</p>
</div>
<div id="workSheet">
<img src="<?php getSimPath(); ?>images/workSheet.svg"  id="worksheetImg"/>
<p id="worksheet_txt">Work sheet</p>
</div>

<!--<div id="dataPlot" style="background:url(<?php getSimPath(); ?>images/graphPlot.svg) top left no-repeat;" onClick="ShowGph()">Data plots</div>
<div id="workSheet" style="background:url(<?php getSimPath(); ?>images/workSheet.svg) top left no-repeat;">Work sheet</div>-->
</div>

<!--label text display in the bottom-->

