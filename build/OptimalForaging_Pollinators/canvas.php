<!--
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
-->


<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";</script>
	<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
<!--label text display in the top-->
<p id="top" style=" margin:0px; position:relative; top:10px;  font-family:Verdana, Geneva, sans-serif; font-size:13px; color:#6f6f6f; "></p>

<!--label text display in the left-->
<p id="left" style=" margin:0px; position:relative; left:-277px; top:220px; -webkit-transform: rotate(-90deg);-moz-transform: rotate(-90deg); font-family:Verdana, Geneva, sans-serif; font-size:13px; color:#6f6f6f; "></p>
<!--graph content displaying div-->
<div id="GraphArea" style="width:535px; height:440px; margin:0px 0px 0px 15px; left:10px;"></div>
<!--label text display in the bottom-->
<p id="bottom" style="background-color:#FFF;  padding:0px; margin:0px; font-family:Verdana, Geneva, sans-serif; font-size:13px; color:#6f6f6f; "></p>
<script language="javascript">
window.onload=Load();
</script>