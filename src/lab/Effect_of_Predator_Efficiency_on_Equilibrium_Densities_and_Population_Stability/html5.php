  <!--
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Athira;
  *Date of modified: 23-05-2015
  -->

  <?php
  $simName="Logistic growth model";
  ?>
  <div class="g594 canvasHolder"> 
    <div id="canvasBox">
  <?php
  include('canvas.php');
  ?>
  </div>
  </div>
  <div class="g198 controlHolder">
  <?php
  include('controls.php');
  ?>
  </div>
  <script type="text/javascript">
    var expTitle="<?php echo $simName; ?>";
    document.getElementById("expName").innerHTML=expTitle;
  </script>


