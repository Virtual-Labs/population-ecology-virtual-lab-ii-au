 /**
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Saranya S;
  *Date of modified: 23-05-2015
  */
  var ctx;
  var snake_array=[];
  var rat_array=[];
  var img_rat = new Image();
  var img_snake= new Image();
  var initial_preytxt_int=0;
  var initial_predatortxt_int=0;
  var step_count_int=0;
  var count_rat_int=0;
  var count_snake_int=0;
  var intervel_rat,intervel_snake;
  var array_X=[];
  var array_snake_X=[];
  var array_Y=[];
  var tmp_graph_array=[];
  var iteration_array=[];
  var selec_iteration_bool=0;
  var combo_val;
  var stat_show_boolean=0;
  var pred_satiation_boolean=false;
  var show_graph_int=0;
  var alert_flag_boolean=true;
  var graph_flag_int=0;
  var run_iterationflag_boolean=0;
  var rand_x,rand_y;
  var temp_rat_variable_one=0;
  var temp_snake_variable_one=0;
  var temp_rat_variable_two=0;
  var temp_snake_variable_two=0;
  var temp_rat_variable_three=0;
  var temp_snake_variable_three=0;
  var temp_rat_variable_four=0;
  var temp_snake_variable_four=0;
  var Interval_Duration=100;
  var growth_rate_int;
  var timer_id_int;
  var prev_count_rat_int=0;
  var prev_count_snake_int=0;
  var pre_num_steps_int=0;
  var pre_growth_rate_int=0;
  var pre_step_size_int=0;
  var pre_theta_val_int=0;
  var pre_encntr_reslt_kill_int=0;
  var pre_predator_convertn_float=0;
  var pre_death_rate_float=0;
  var pre_carrying_capacity_int=0;
  var pre_satiation_val=0;
  $(document).ready(function(){
    var ctx = document.getElementById('speciesCanvas').getContext('2d');
	ctx.canvas.width  = $("#canvasBox").width()/1.05;	
	ctx.canvas.height = $("#canvasBox").height()/1.18;
	img_rat.src = simPath+"images/rat.jpg";
    img_snake.src = simPath+"images/snake.png";
	initial_prey_int=	$("#initialPrey").val();
	initial_predator_int=$("#initialPredator").val();
	$("#satiationVal").css("display", "none");
	 $("#statistics").css("pointer-events","none");
	$("#dataPlot").css("pointer-events","none");
	$("#workSheet").css("pointer-events","none");
	prev_count_rat_int=$("#initialPrey").val();
	prev_count_snake_int=$("#initialPredator").val();	
	pre_num_steps_int=$("#noSteps").val();
	pre_growth_rate_int=$("#growthRate").val();	
	pre_step_size_int=$("#stepSize").val();	
	pre_theta_val_int=$("#thetaVal").val();	
	pre_encntr_reslt_kill_int=$("#eResult").val();	
	pre_death_rate_float=$("#deathRate").val();	
	pre_predator_convertn_float=$("#predatorConv").val();	
	pre_carrying_capacity_int=$("#carryCapacity").val();	
    pre_satiation_val=$("#satiationValue").val();
	/** get statistics when clicking Statistics button */
	$( "#statistics" ).click(function() {
	  getStatistics();
	});
	 /** get data graph when clicking Data Plot button */
   	$( "#dataPlot" ).click(function() {
	  clearCanvas();
	  graph_flag_int=1;
	  clearFlag();
	  $("#tinyGraphArea").css("display", "block");
	  $("#statLabel").css("display", "none");
	  $("#topLabel_graph").html("Prey vs Predator Population Space");
	  $("#leftLabel_graph").html("Predator Population");
	  $("#bottomLabel_graph").html("Prey Population");
	  if (run_iterationflag_boolean==1) {
		showGraph(tmp_graph_array);
	  } else {
		  showGraph(iteration_array);
		}
		if ( ( selec_iteration_bool == 1 ) ) {
	      if ( show_graph_int == 0 ) {
		    $("#tinyGraphArea").css("display","block");
            /** Function for the x and y position tooltip inside the graph */				
            function showTooltip(x, y, contents){		
		      $('<div id="tooltip">' + contents + '</div>').css( {
		      position: 'absolute',
		      display: 'block',
			  top: y + 5,
			  left: x + 5,
			  border: '1px solid #fdd',
			  padding: '2px',
			 'background-color': '#fee',
			  opacity: 0.80
			}).appendTo("body").fadeIn(200);
		  }
		  var _previous_point;	
		  $("#tinyGraphArea").bind("plothover", function (event, pos, item) {
		    $("#x").text(pos.x.toFixed(2));
		    $("#y").text(pos.y.toFixed(2));	
			if ( _previous_point != item.dataIndex ) {
			  _previous_point = item.dataIndex;
			  $("#tooltip").remove();
			  var gx = item.datapoint[0].toFixed(2),
			  gy = item.datapoint[1].toFixed(2);	
			  showTooltip(item.pageX, item.pageY," X:" + gx + " and Y:" + gy);
			} else {
			  $("#tooltip").remove();
			  _previous_point = null;            
			}			
	      });			
		} else {
		  $("#tinyGraphArea").css("display","none");
		  $("#dataPlot").css("color","#6e6e6e");
		  show_graph_int=0;
		  $("#tooltip").remove();
		}
	  } else {
	    alert("To plot a graph you need to complete two steps.");
	  }
	 });
	 /** Step by step iteration of the population */
    $( "#stepRun" ).click(function(){
	  getVal();
	  alertFunction();
      if (alert_flag_boolean==true) {
        graph_flag_int=0;
	  	clearFlag();
	  	$("#tinyGraphArea").css("display", "none");	
	  	$("#statistics").css("pointer-events","visible");
	  	$("#dataPlot").css("pointer-events","visible");
	  	$("#workSheet").css("pointer-events","none");
	  	selec_iteration_bool=1;
		run_iterationflag_boolean=1;
		var _nostep=document.getElementById("noSteps").value;
		getVal();
		if (step_count_int<=_nostep-1) {
		  drawItem();
			/** In case the user changes the previous inputed value, then it will do calculation again */   
		  if (($("#dropdown").val())=="Predator without satiation") {
		    if ((prev_count_rat_int!=initial_prey_int)||(prev_count_snake_int!=initial_predator_int)||(pre_num_steps_int!=num_steps_int)||(pre_growth_rate_int!=growth_rate_int)||(pre_step_size_int!=step_size_int)||(pre_theta_val_int!=theta_val_int)||(pre_encntr_reslt_kill_int!=encntr_reslt_kill_int)||(pre_predator_convertn_float!=predator_convertn_float)||(pre_death_rate_float!=death_rate_float)||(pre_carrying_capacity_int!=carrying_capacity_int)) {			
		       rat_array=[];
		       snake_array=[];		  
		       calcPopulation();
		     }
		  }
		  if (($("#dropdown").val())=="Predator with satiation") {
		    if ((prev_count_rat_int!=initial_prey_int)||(prev_count_snake_int!=initial_predator_int)||(pre_num_steps_int!=num_steps_int)||(pre_growth_rate_int!=growth_rate_int)||(pre_step_size_int!=step_size_int)||(pre_theta_val_int!=theta_val_int)||(pre_encntr_reslt_kill_int!=encntr_reslt_kill_int)||(pre_predator_convertn_float!=predator_convertn_float)||(pre_death_rate_float!=death_rate_float)||(pre_carrying_capacity_int!=carrying_capacity_int)||(pre_satiation_val!=satiation_val)) {			
		       rat_array=[];
		       snake_array=[];		  
		       calcPopulation();
		     }
		   }
			calcPopulation();
			initial_preytxt_int=Math.round(rat_array[step_count_int]);
			initial_predatortxt_int=Math.round(snake_array[step_count_int]);
			document.getElementById("species1").innerHTML="Population of Prey:"+Math.round(rat_array[step_count_int],0);
			document.getElementById("species2").innerHTML="Population of Predator:"+Math.round(snake_array[step_count_int],0);
			tmp_graph_array.push([rat_array[step_count_int],snake_array[step_count_int]]);
			step_count_int++;

		} else {
			document.getElementById("stepRun").disabled=true;
			document.getElementById("runIteration").disabled=true;
			document.getElementById("Pause").disabled=true;
			document.getElementById("reset").disabled=false;
		  }
	  }
    });
	/** setting a timer and iterating the population based on that */
    $( "#runIteration" ).click(function(){
      alertFunction();
	  if (alert_flag_boolean==true) {
      	iteration_array=[];
	  	selec_iteration_bool=1;
	  	graph_flag_int=0;
	  	run_iterationflag_boolean=0;
	  	clearFlag();
	  	$("#Pause").val("Pause");
	  	$("#tinyGraphArea").css("display", "none");	
	 	$("#statistics").css("pointer-events","visible");
	  	$("#dataPlot").css("pointer-events","visible");
	  	$("#workSheet").css("pointer-events","visible");
	  	document.getElementById("dataPlot").disabled=true;
	  	$("#Pause").prop("disabled",false);
	  	$("#Pause").val("Pause");
	  	$("#dataPlot").prop("disabled",true);
	  	$("#dataPlot").css("pointer-events","none");
	  	calcPopulation();
	  	iteration_count_int=0;
	  	timer_id_int = setInterval(iterationFn,500);
      }
    });
	/** selecting drop down values */
    $("#dropdown").change(function(){
	  combo_val =$("#dropdown option:selected").val();
	  if (combo_val=="Predator with satiation") {
	    clearCanvas();
		clearAllValues();
		graph_flag_int=0;
		clearFlag();
		$("#tinyGraphArea").css("display", "none");	
		$("#tooltip").remove();
		$("#satiationVal").css("display", "block");
		pred_satiation_boolean=false;
		document.getElementById("noSteps").value=500;
	  } else {
        clearCanvas();
		clearAllValues();
		graph_flag_int=0;
		clearFlag();
		$("#tinyGraphArea").css("display", "none");	
		pred_satiation_boolean=true;
		$("#satiationVal").css("display", "none");
		document.getElementById("noSteps").value=200;
		$("#dataPlot").css("pointer-events","visible");
		document.getElementById("dataPlot").disabled=false;
	   }   
	});
	$("#statLabel").css("display", "none");
	/** Function for restrict alphabets in textbox */	
   $( ".tinyTxtArea" ).keypress(function(key) {	
     step_count_int=0;
     tmp_graph_array=[];	
		/** if the letter is not digit then display error and don't type anything */
	  var _keycode = (key.which) ? key.which : key.keyCode;
	  if ( !(_keycode==8 || _keycode==46)&&(_keycode < 48 || _keycode > 57) ) {
		return false;
	  }	
    });
	/** Reset all values and clear the canvas */
	$("#reset").click(function () {
		window.location.reload();
	});
	/** Play pause functions which is active only in the case of Run Iteration */
	$("#Pause").click(function(){
	  graph_flag_int=0;
	  clearFlag();
	  $("#dataPlot").prop("disabled",false);
	  $("#dataPlot").css("pointer-events","visible");
	  $("#tinyGraphArea").css("display", "none");	
	  if ($(this).val()=="Pause") {
	    $("#Pause").val("Play");
		clearInterval(timer_id_int);
	  } else {
	    $("#Pause").val("Pause");
		timer_id_int = setInterval(iterationFn, 500); 
	  }
	});
	$( ".tinyTxtArea" ).change(function(e){	
	  var _count_int=0;
	  var _string_int=e.value;
	  var _string_array = new Array();
	  var _array_length_int=_string_array.length;
	  for (var i=0;i<_array_length_int;i++) {
	    if (_string_array[i]==".") {
		  _count_int++;
		}
	  }
	  if (_string_array[_array_length_int-1]==".") {
	    e.value="";
	  }
	  if (_count_int>1) {
		e.value="";
	  }
   });
	
	getVal();
    for (w=0;w<= $("#canvasBox").width()/1.05;w+=19) {
	  array_X.push(w);
	}
	for (h=0;h<= $("#canvasBox").width()/1.02;h+=16) {
	  array_Y.push(h);
	}

  });
  function getStatistics(){
  /** fn for showing statClick and disable the statclick */
    graph_flag_int=0;
	clearFlag();
	if (selec_iteration_bool==1) {
	  if (stat_show_boolean==0) {
        $("#tinyGraphArea").css("display", "none");	
		$("#statLabel").css("display", "block");
		document.getElementById("statistics").style.color="#cacaca";
		document.getElementById("species1").innerHTML="Intial Prey Population: "+initial_preytxt_int;
		document.getElementById("species2").innerHTML="Intial Predator Population: "+initial_predatortxt_int;
		stat_show_boolean=1;
		} else {
		 document.getElementById("statLabel").style.display="none";
		 document.getElementById("statistics").style.color="#6e6e6e";
		 stat_show_boolean=0;
		}
	}
  }
  /** graph properties like color,data etc */
  function showGraph(tmpArr){
    $.plot($("#tinyGraphArea"),[{ data: tmpArr, color: getRandomColor()}],
	  {
         grid: 
	  {
		 hoverable: true, clickable: true
	  },
	  points: 
	  { 
		show: true 
	  },
	  lines: 
	  {
	    show: true 
	  }			
	});
  }
  /** getting random colors for graph */
  function getRandomColor(){
    var _letters = '0123456789ABCDEF'.split('');
    var _color = '#';
    for (var i = 0; i < 6; i++ ) {
        _color += _letters[Math.floor(Math.random() * 16)];
    }
    return _color;
  }
  /** clearing graph labels when clicking buttons */
  function clearFlag(){
	if (graph_flag_int==1) {
	  $("#topLabel_graph").css("display","block");
	  $("#leftLabel_graph").css("display","block");
		$("#bottomLabel_graph").css("display","block");
	}
	else{
		$("#topLabel_graph").css("display","none");
		$("#leftLabel_graph").css("display","none");
		$("#bottomLabel_graph").css("display","none");
		$("#tooltip").remove();

	}
  }
  function getWorksheet(){
	$("#tinyGraphArea").css("display", "none");	
	$("#statLabel").css("display", "none");
  }
  /** calculating rat count and snake count based on textbox values */
  function calcPopulation() {
    clearInterval(timer_id_int);
	getVal();
	for (var j=0; j<num_steps_int; j++) {
	  snake_array[j]=0;
	  rat_array[j]=0;
	}
	rat_array[0]=initial_prey_int;
	snake_array[0]=initial_predator_int;
	if (($("#dropdown").val())=="Predator without satiation") {
	  for (var i=0; i<num_steps_int; i++) {
        temp_rat_variable_one=calcRatCount(Number(rat_array[i]),Number(snake_array[i]),growth_rate_int,encntr_reslt_kill_int,predator_convertn_float,death_rate_float,carrying_capacity_int,theta_val_int);
		temp_snake_variable_one=calcSnakeCount(Number(snake_array[i]),Number(rat_array[i]),encntr_reslt_kill_int,predator_convertn_float,death_rate_float);
		temp_rat_variable_two=calcRatCount(Number(rat_array[i])+Number(0.5*step_size_int*temp_rat_variable_one),Number(snake_array[i])+Number(0.5*step_size_int*temp_snake_variable_one),growth_rate_int,encntr_reslt_kill_int,predator_convertn_float,death_rate_float,carrying_capacity_int,theta_val_int);
		temp_snake_variable_two=calcSnakeCount(Number(snake_array[i])+Number(0.5*step_size_int*temp_snake_variable_one),Number(rat_array[i])+Number(0.5*step_size_int*temp_rat_variable_one),encntr_reslt_kill_int,predator_convertn_float,death_rate_float);
		temp_rat_variable_three=calcRatCount(Number(rat_array[i])+Number(0.5*step_size_int*temp_rat_variable_two),Number(snake_array[i])+Number(0.5*step_size_int*temp_snake_variable_two),growth_rate_int,encntr_reslt_kill_int,predator_convertn_float,death_rate_float,carrying_capacity_int,theta_val_int);
		temp_snake_variable_three=calcSnakeCount(Number(snake_array[i])+Number(0.5*step_size_int*temp_snake_variable_two),Number(rat_array[i])+Number(0.5*step_size_int*temp_rat_variable_two),encntr_reslt_kill_int,predator_convertn_float,death_rate_float);
		temp_rat_variable_four=calcRatCount(Number(rat_array[i])+Number(step_size_int*temp_rat_variable_three),Number(snake_array[i])+Number(step_size_int*temp_snake_variable_three),growth_rate_int,encntr_reslt_kill_int,predator_convertn_float,death_rate_float,carrying_capacity_int,theta_val_int);
		temp_snake_variable_four=calcSnakeCount(Number(snake_array[i])+Number(step_size_int*temp_snake_variable_three),Number(rat_array[i])+Number(step_size_int*temp_rat_variable_three),encntr_reslt_kill_int,predator_convertn_float,death_rate_float);
		rat_array[i+1] = Number(rat_array[i])+Number(step_size_int/6*Number((temp_rat_variable_one +  (2*temp_rat_variable_two) +  (2*temp_rat_variable_three) + temp_rat_variable_four)));
		snake_array[i+1] = Number(snake_array[i])+Number(step_size_int/6*Number((temp_snake_variable_one +  (2*temp_snake_variable_two) +  (2*temp_snake_variable_three) + temp_snake_variable_four)));
      }	
	  for (var m=0;m<num_steps_int;m++) {
        clearCanvas();
		drawItem();	
		initial_preytxt_int=Math.round(rat_array[m]+m,0);
		initial_predatortxt_int=Math.round(snake_array[m],0);
		document.getElementById("species1").innerHTML="";
		document.getElementById("species2").innerHTML="";
		document.getElementById("species1").innerHTML="Population of Prey: "+initial_preytxt_int;
		document.getElementById("species2").innerHTML="Population of Predator: "+initial_predatortxt_int;
	  }
	}
	if (($("#dropdown").val())=="Predator with satiation") {

      for (var i=0; i<num_steps_int; i++) {
        temp_rat_variable_one=ratCount_satiation(Number(rat_array[i]),Number(snake_array[i]),growth_rate_int,encntr_reslt_kill_int,predator_convertn_float,death_rate_float,carrying_capacity_int,theta_val_int,satiation_val_int);
		temp_snake_variable_one=snakeCount_satiation(Number(snake_array[i]),Number(rat_array[i]),encntr_reslt_kill_int,predator_convertn_float,death_rate_float,satiation_val_int);
			
		temp_rat_variable_two=ratCount_satiation(Number(rat_array[i])+Number(0.5*step_size_int*temp_rat_variable_one),Number(snake_array[i])+Number(0.5*step_size_int*temp_snake_variable_one),growth_rate_int,encntr_reslt_kill_int,predator_convertn_float,death_rate_float,carrying_capacity_int,theta_val_int,satiation_val_int);
		temp_snake_variable_two=snakeCount_satiation(Number(snake_array[i])+Number(0.5*step_size_int*temp_snake_variable_one),Number(rat_array[i])+Number(0.5*step_size_int*temp_rat_variable_one),encntr_reslt_kill_int,predator_convertn_float,death_rate_float,satiation_val_int);
			
		temp_rat_variable_three=ratCount_satiation(Number(rat_array[i])+Number(0.5*step_size_int*temp_rat_variable_two),Number(snake_array[i])+Number(0.5*step_size_int*temp_snake_variable_two),growth_rate_int,encntr_reslt_kill_int,predator_convertn_float,death_rate_float,carrying_capacity_int,theta_val_int,satiation_val_int);
		temp_snake_variable_three=snakeCount_satiation(Number(snake_array[i])+Number(0.5*step_size_int*temp_snake_variable_two),Number(rat_array[i])+Number(0.5*step_size_int*temp_rat_variable_two),encntr_reslt_kill_int,predator_convertn_float,death_rate_float,satiation_val_int);
			
		temp_rat_variable_four=ratCount_satiation(Number(rat_array[i])+Number(step_size_int*temp_rat_variable_three),Number(snake_array[i])+Number(step_size_int*temp_snake_variable_three),growth_rate_int,encntr_reslt_kill_int,predator_convertn_float,death_rate_float,carrying_capacity_int,theta_val_int,satiation_val_int);
		temp_snake_variable_four=snakeCount_satiation(Number(snake_array[i])+Number(step_size_int*temp_snake_variable_three),Number(rat_array[i])+Number(step_size_int*temp_rat_variable_three),encntr_reslt_kill_int,predator_convertn_float,death_rate_float,satiation_val_int);
			
		rat_array[i+1] = Number(rat_array[i])+Number((step_size_int/6))*Number((temp_rat_variable_one +  (2*temp_rat_variable_two) +  (2*temp_rat_variable_three) + temp_rat_variable_four));
		snake_array[i+1] = Number(snake_array[i])+ Number((step_size_int/6))*Number((temp_snake_variable_one +  (2*temp_snake_variable_two) +  (2*temp_snake_variable_three) + temp_snake_variable_four));
     }
	for (var m=0;m<num_steps_int;m++) {
      clearCanvas();
	  drawItem();	
	  initial_preytxt_int=Math.round(rat_array[m]+m,0);
	  initial_predatortxt_int=Math.round(snake_array[m],0);
	  document.getElementById("species1").innerHTML="Population of Prey: "+Math.round(rat_array[m],0);
	  document.getElementById("species2").innerHTML="Population of Predator: "+Math.round(snake_array[m],0);
	  }
    }
  }
  /** Calculating rat count in without satiation case */
  function calcRatCount(rat_array,snake_array,growth_rate,encntr_reslt_kill_int,predator_convertn_float,death_rate_float,carrying_capacity_int,th) {

	var rat_count=Number(growth_rate)*Number(rat_array)*(1-Math.pow((rat_array/carrying_capacity_int),Number(th)))-(Number(encntr_reslt_kill_int)*Number(rat_array)*Number(snake_array));
	return rat_count;
  }
  /** Calculating snake count in without satiation case */
  function calcSnakeCount(snake_array,rat_array,encntr_reslt_kill_int,predator_convertn_float,death_rate_float) {
	var snake_count_int=Number(((predator_convertn_float * encntr_reslt_kill_int * rat_array * snake_array)-(death_rate_float * snake_array)));
	return snake_count_int;
  }
 /** Calculating rat count in  satiation case */
  function ratCount_satiation(rat_array,snake_array,growth_rate,encntr_reslt_kill_int,predator_convertn_float,death_rate_float,carrying_capacity_int,th,satiation_val_int) {
	var rat_count=Number((growth_rate*rat_array*(1-Math.pow((rat_array/carrying_capacity_int),th))-satiation_val_int*(1-Math.exp(-1*encntr_reslt_kill_int*rat_array/satiation_val_int))*snake_array));
	return rat_count;
  }
  /** Calculating snake count in satiation case */
  function snakeCount_satiation(snake_array,rat_array,encntr_reslt_kill_int,predator_convertn_float,death_rate_float,satiation_val_int) {
	var snake_count_int=Number((predator_convertn_float * satiation_val_int *(1-Math.exp(-1*encntr_reslt_kill_int*rat_array/satiation_val_int))*snake_array-(death_rate_float * snake_array)));
	return snake_count_int;
  }
/** Drawing rat images at random positions */
  function drawRat(){
	document.getElementById("statistics").disabled=false;
	document.getElementById("dataPlot").disabled=false;
		if (initial_preytxt_int>0) {
			if (count_rat_int<initial_preytxt_int) {	
			  rand_x = Math.random() * (27 - 0);
			  rand_y=  Math.random() * (24 - 0);
			  x= Math.round(rand_x,0);
			  y= Math.round(rand_y,0);
			  var ctx = document.getElementById('speciesCanvas').getContext('2d');
			  ctx.drawImage(img_rat,array_X[x],array_Y[y],18,18);
			}else {
			  clearInterval(intervel_rat);
			 }
      }	
	count_rat_int++;
  }
/** Drawing snake images at random positions */
  function drawSnake(){
	  if (initial_predatortxt_int>0) {
		if (count_snake_int<initial_predatortxt_int) {
			rand_x1 = Math.random() * (26 - 0);
			rand_y1=  Math.random() * (24 - 0);
			x1= Math.round(rand_x1,0);
			y1= Math.round(rand_y1,0);
			var ctx = document.getElementById('speciesCanvas').getContext('2d');
			ctx.drawImage(img_snake,array_X[x1],array_Y[y1]);
	   } else{
		    clearInterval(intervel_snake);
	   }
	}
	count_snake_int++;
  }
  function iterationFn(){
	getVal();
    graph_flag_int=0;
	iteration_count_int++;
	if(iteration_count_int >100) {
	  clearInterval(timer_id_int);
	  document.getElementById("Pause").disabled=true;
	  document.getElementById("dataPlot").disabled=false;
	  selec_iteration_bool=1;
	  $("#dataPlot").prop("disabled",false);
	  $("#dataPlot").css("pointer-events","visible");
	}else {	
	  clearCanvas();
	  count_rat_int=0;
	  count_snake_int=0;
	  document.getElementById("species1").innerHTML="Population of Prey: "+Math.round(rat_array[iteration_count_int],0);
	  document.getElementById("species2").innerHTML="Population of Predator: "+Math.round(snake_array[iteration_count_int],0);
	  iteration_array.push([rat_array[iteration_count_int],snake_array[iteration_count_int]]);
	  drawItem();
    }
  }
  /** Drawing item using timer */
  function drawItem(){
	clearInterval(intervel_rat);
	clearInterval(intervel_snake);
	intervel_rat =setInterval("drawRat()",0);
	intervel_snake =setInterval("drawSnake()",0);
  }
  /** for maintaining all textbox values */
  function getVal(){					
    num_steps_int=document.getElementById("noSteps").value;
	growth_rate_int=document.getElementById("growthRate").value;	
	initial_prey_int=document.getElementById("initialPrey").value;
	initial_predator_int=document.getElementById("initialPredator").value;
	step_size_int=document.getElementById("stepSize").value;
	theta_val_int=document.getElementById("thetaVal").value;
	encntr_reslt_kill_int=document.getElementById("eResult").value;
	predator_convertn_float=document.getElementById("predatorConv").value;
	death_rate_float=document.getElementById("deathRate").value;
	carrying_capacity_int=document.getElementById("carryCapacity").value;
	satiation_val_int=document.getElementById("satiationValue").value;
	count_rat_int=0;
	count_snake_int=0;
  }	
  /** fn for clear canvas */
  function clearCanvas(){
    var canvas = document.getElementById("speciesCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
   	clearInterval(intervel_rat);
    clearInterval(intervel_snake);
	temp_snake_variable_one=0
	temp_snake_variable_two=0;
	temp_snake_variable_three=0;
	temp_snake_variable_four=0;
	temp_rat_variable_one=0;
	temp_rat_variable_two=0;
	temp_rat_variable_three=0;
	temp_rat_variable_four=0;
  }
  /** clearing all values when changing drop down values */
  function clearAllValues(){
    count_rat_int=0;
	count_snake_int=0;
	initial_preytxt_int=0;
    initial_predatortxt_int=0;
	step_count_int=0;
	$("#statLabel").css("display","none");
	$("#tinyGraphArea").css("display","none");
    clearInterval(intervel_rat);
	$("#stepRun").prop("disabled",false);
	$("#runIteration").prop("disabled",false);
	$("#Pause").prop("disabled",true);
	$("#Reset").prop("disabled",false);
	snake_array=[];
 	rat_array=[];
	temp_rat_variable_one=0;
	temp_snake_variable_one=0;
	temp_rat_variable_two=0;
	temp_snake_variable_two=0;
	temp_rat_variable_three=0;
	temp_snake_variable_three=0;
	temp_rat_variable_four=0;
	temp_snake_variable_four=0;
	stat_show_boolean=0;
  }
  /** alerting when textbox values less than 1 */
  function alertFunction(){
	getVal();
	if (initial_prey_int<=0 || initial_predator_int<=0 ||num_steps_int<=0 || step_size_int<=0 || growth_rate_int<=0 || carrying_capacity_int<=0 || theta_val_int<=0 || encntr_reslt_kill_int<=0 ||predator_convertn_float<=0 || death_rate_float<=0 || satiation_val_int<=0) {
		alert_flag_boolean = false;
		clearAllValues();
		alert("Enter a value greater than 0");
	} else{
		alert_flag_boolean = true;
	}

  }