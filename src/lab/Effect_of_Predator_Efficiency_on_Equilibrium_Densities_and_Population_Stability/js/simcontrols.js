 /**
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Athira;
  *Date of modified: 23-05-2015
  */
  var rat = new Image();
  var imgsnake = new Image();
  var interval_int;
  var combo_val_string;
  var prey_int=0;
  var predator_int=0;
  var count_rat_int=0;
  var count_snake_int=0;
  var stat_show_int=0;
  var show_graph_int=0;
  var array_x= [];
  var array_y= [];
  var step_count_int=0;
  var statshw_int=0;
  var snake_array=[];
  var rat_array=[];
  var carry_array=[];
  var canvas;
  var ctx;
  var temp_array=[];
  var temp_arry=[];
  var plot_array=[];	
  var color;
  var time_int=0;
  var time_array=[];
  var snake_interval_int;
  var rat_calc_one_int=0;
  var snake_calc_one_int=0;
  var rat_calc_two_int=0;
  var snake_calc_two_int=0;
  var rat_calc_three_int=0;
  var snake_calc_three_int=0;
  var rat_calc_four_int=0;
  var snake_calc_four_int=0;
  var carry_diff_int;
  var carry_int;
  var plot_array_first=[];
  var plot_array_second=[];
  var plot_array_third=[];
  var plot_array_four=[];
  var prev_prey_int=0;
    
  /** document ready function for canvas */
  $(document).ready(function(){
    canvas = document.getElementById("speciesCanvas");
    ctx = canvas.getContext("2d");
	ctx.canvas.width=$("#canvasBox").width()/1.05;
	ctx.canvas.height=$("#canvasBox").height()/1.15;
	rat.src = simPath+"images/snake.png";
    imgsnake.src = simPath+"images/rat.jpg";
	prey_int=$("#intprey").val();
	predator_int=$("#intPredtr").val();
	$("#step").css("display", "none");
	$("#ST").css("pointer-events","none");
	$("#DP").css("pointer-events","none");
	$("#WS").css("pointer-events","none");
	document.getElementById("statLabel").style.display="none";
	$( "#ST" ).click(function() {/**get statistcs function click*/
	  if (stat_show_int==0) {
	    $("#statLabel").css("display","block");
	    $("#ST").css("color","#cacaca");
		$("#tinyGraphArea").css("display","none");
		$("#speciesCanvas").css("display","block");
	    stat_show_int=1;
	  	} else {
	    $("#statLabel").css("display","none");
	    $("#ST").css("color","#6e6e6e");
	    stat_show_int=0;
      	}
	});	
	/**get data plot function click*/
	$( "#DP" ).click(function() {
      if ( show_graph_int == 0 ) {
	    $("#DP").css("color","#cacaca");
		show_graph_int=1;
		$("#speciesCanvas").css("display","none");
		$("#tinyGraphArea").css("display","block");
		$("#statLabel").css("display","none");
		$("#topLabel_graph").css("display","block");
	    $("#leftLabel_graph").css("display","block");
	    $("#bottomLabel_graph").css("display","block");
		$("#topLabel_graph").html("Effect of predator Efficiency");
	    $("#leftLabel_graph").html("Predator Population");
	    $("#bottomLabel_graph").html("Prey Population");
		  if (($("#dropdown").val())=="Population Stabilities") {
		    showGraphEquilrbium(array1Dto2D(plot_array_first),array1Dto2D(plot_array_second),array1Dto2D(plot_array_third),array1Dto2D(plot_array_four));
			}
	  } else {
		$("#topLabel_graph").css("display","none");
	    $("#leftLabel_graph").css("display","none");
	    $("#bottomLabel_graph").css("display","none");
		$("#tinyGraphArea").css("display","none");
		$("#DP").css("color","#6e6e6e");
		show_graph_int=0;
		$("#speciesCanvas").css("display","block");
		}
	});
	/**get worksheet click function*/   
	$( "#WS" ).click(function(){
	  clearCanvas();
	  getWorkSheet();
	});
	/** find values for text box change */
	$( ".tinyTxtArea" ).change(function(e) {	
	  var _count_int=0;                       
	  var _string_int=e.value;
	  var _midarray = new Array();
	  var _length_int=_midarray.length;
	  for(var i=0;i<_length_int;i++){
	    if(_midarray[i]=="."){
		  _count_int++;
		}
	  }
	  if(_midarray[_length_int-1]=="."){
	    e.value="";
	  }
	  if(_count_int>1){
	    e.value="";
	}
   });
	/**find respection positions of rat and snake */
	for(w=0;w<= $("#canvasBox").width()/1.05;w+=19)
	{
	  array_x.push(w);
	} 
	for(h=0;h<= $("#canvasBox").width()/1.2;h+=17.5)
	{
	  array_y.push(h);
	}
	$("#statLabel").css("display", "none");
	/** if the letter is not digit then display error and don't type anything */
	$( ".tinyTxtArea" ).keypress(function(key) {
		step_count_int=0;		
		/** if the letter is not digit then display error and don't type anything */
	  var _keycode = (key.which) ? key.which : key.keyCode;
	  if ( !(_keycode==8 || _keycode==46)&&(_keycode < 48 || _keycode > 57) ) {
		return false;
	  }
	});
	/** Clear canvas on dropdown change */
	$("#dropdown").change(function () {
	  clearCanvas();
	  clearAllValues();
	  $("#topLabel_graph").css("display","none");
      $("#leftLabel_graph").css("display","none");
      $("#bottomLabel_graph").css("display","none");
	});
	/**dropdown function change*/
	$("#dropdown").change(function(){	
	  combo_val_string =$("#dropdown option:selected").val();//combo1 change
      if (combo_val_string=="Population Stabilities") {
	    clearCanvas();
		document.getElementById("stepRun").disabled=false;
		document.getElementById("runIteration").disabled=false;
		$('#killSpan').html(("Carrying capacity"));
		document.getElementById("kill").value=10;
		$('#capactySpan').html(("Encounters result in kill(a)"));
		$('#KminSpan').html(("a min"));
		$('#kmaxSpan').html(("a max"));
	  	document.getElementById("Kmin").value=0;
		document.getElementById("Kmax").value=0.02;
		$("#step").css("display", "block");
	  } else if (combo_val_string=="Equillibrium Densities") {
		clearCanvas();
		document.getElementById("stepRun").disabled=false;
		document.getElementById("runIteration").disabled=false;
		$('#killSpan').html(("Encounters result in Kill(a)"));
		document.getElementById("kill").value=0.02;
		$('#capactySpan').html(("Carrying capacity(k)"));
		$('#KminSpan').html(("k min"));
		$('#kmaxSpan').html(("k max"));
	  	document.getElementById("Kmin").value=1;
		document.getElementById("Kmax").value=10;
		$("#step").css("display", "none");
	  }
	});
	/**function for step run of rat and snakes*/
	$("#stepRun").click(function(){
	  $("#topLabel_graph").css("display","none");
	  $("#leftLabel_graph").css("display","none");
	  $("#bottomLabel_graph").css("display","none");
	  $("#tinyGraphArea").css("display", "none");	
	  $("#speciesCanvas").css("display","block");
	  $("#ST").css("pointer-events","visible");
	  $("#DP").css("pointer-events","visible");
	  $("#WS").css("pointer-events","visible");
	  selectIteration=1;
	  var _NoStep=document.getElementById("steps").value;
	  getVal();
	    if(step_count_int<=_NoStep-1){
		  plot_array_first=[];
		  plot_array_second=[];
		  plot_array_third=[];
		  plot_array_four=[];
		  plot_array=[];
		  clearCanvas();
		  drawItem();
		  Calcu();
		  prey_int=Math.round((rat_array[step_count_int]));
		  predator_int=Math.round((snake_array[step_count_int]));
		  document.getElementById("species2").innerHTML="Population of Prey:"+Math.round(rat_array[step_count_int],0);	
		  document.getElementById("species1").innerHTML="Population of Predator:"+Math.round(snake_array[step_count_int],0);
		  step_count_int++;	
		} else {
		  document.getElementById("stepRun").disabled=true;
		  document.getElementById("runIteration").disabled=true;
		  document.getElementById("Pause").disabled=true;
		}
	});
	/**function of rrun iteration for rat and snakes*/
	$("#runIteration").click(function(){
	  $("#topLabel_graph").css("display","none");
	  $("#leftLabel_graph").css("display","none");
	  $("#bottomLabel_graph").css("display","none");
	  $("#tinyGraphArea").css("display", "none");	
	  $("#ST").css("pointer-events","visible");
	  $("#DP").css("pointer-events","visible");
	  $("#WS").css("pointer-events","visible");
	  $("#speciesCanvas").css("display","block");	
	  $("#Pause").val("Pause");
	  plot_array_first=[];
	  plot_array_second=[];
	  plot_array_third=[];
	  plot_array_four=[];
	  plot_array=[];
	  document.getElementById("stepRun").disabled=true;
	  document.getElementById("Pause").disabled=false;
	  selectIteration=1;
	  Calcu();
	  iteration_int=0;
	  timerId = setInterval(runItration, 200); 
	});
	/** Play pause functions for run iteration*/
	$("#Pause").click(function(){
	  $("#topLabel_graph").css("display","none");
	  $("#leftLabel_graph").css("display","none");
	  $("#bottomLabel_graph").css("display","none");
	  $("#tinyGraphArea").css("display", "none");
	    if($(this).val()=="Pause"){
		  clearInterval(timerId);
		  document.getElementById("Pause").value="Play";
	    } else {
		  document.getElementById("Pause").value="Pause";
		  getVal();
		  timerId = setInterval(runItration, 200);
	    }
	 });
  });
  /**convert one dimensional array to two dimensional array*/
	function array1Dto2D (temp_arry){
	  var array2D = [];
	  for (var i=0; i < temp_arry.length - 1; i+=2) {
	    var pair = [temp_arry[i], temp_arry[i+1]];
		array2D.push(pair);
	  }
	  return array2D;
	} 
  /**fn for showing statClick and disable the statclick*/
  function getStatistics(){
    if (selectIteration==1) {
      if (statshw_int==0) {
        $("#statLabel").css("display", "block");
        document.getElementById("ST").style.color="#cacaca";
		document.getElementById("species1").innerHTML="Intial Prey Population: "+prey_int;
		document.getElementById("species2").innerHTML="Intial Prey Population: "+predator_int;
		statshw_int=1;
      } else {
		document.getElementById("statLabel").style.display="none";
		document.getElementById("ST").style.color="#6e6e6e";
		statshw_int=0;
	  }
	}
  }
  /** get worksheet data */
  function getWorkSheet(){
  	$("#tinyGraphArea").css("display", "none");	
	$("#statLabel").css("display", "none");	
  }
  /** call function for drawing  items to the canvas */
  function drawItem(){
	clearInterval(interval_int);
    clearInterval(snake_interval_int);
	interval_int =setInterval("drawSpecies()",0);
	snake_interval_int=setInterval("drawSpecies1()",0);
  }
  /** Drawing the species */
  function drawSpecies(){
  	document.getElementById("ST").disabled=false;
	document.getElementById("DP").disabled=false;
		if (prey_int>0) {
		if (count_rat_int<prey_int) {						
			rand_x = Math.random() * (27-0);
			rand_y=  Math.random() * (24-0);
			x= Math.round(rand_x,0);
			y= Math.round(rand_y,0);
			var ctx = document.getElementById('speciesCanvas').getContext('2d');
			ctx.drawImage(rat,array_x[x],array_y[y-1]); 
		} else {
			clearInterval(interval_int);
		}
	}	
	count_rat_int++;
  }
	 function drawSpecies1(){
	if (predator_int>0) {
		if (count_snake_int<predator_int ){
			rand_x1 = Math.random() * (26 - 0);
			rand_y1=  Math.random() * (24 - 0);
			x1= Math.round(rand_x1,0);
			y1= Math.round(rand_y1,0);
			var ctx = document.getElementById('speciesCanvas').getContext('2d');
			ctx.drawImage(imgsnake,array_x[x1],array_y[y1-1]);
	   }
	   else{
		   clearInterval(snake_interval_int);
		   }
	}
	count_snake_int++;
  }
  /** draws items to canvas iteratively */
  function runItration(){
	iteration_int++;
	if (iteration_int >10) {
		clearInterval(timerId);
		document.getElementById("stepRun").disabled=true;
		document.getElementById("runIteration").disabled=true;
		document.getElementById("Pause").disabled=true;
		document.getElementById("ReSet").disabled=false;
	}
	else{
		clearCanvas();
		count_rat_int=0;
		count_snake_int=0;
		document.getElementById("species1").innerHTML="Population of Prey: "+Math.round(rat_array[iteration_int],0);
		document.getElementById("species2").innerHTML="Population of Predator: "+Math.round(snake_array[iteration_int],0);
		prey_int=Math.round(rat_array[iteration_int],0);
		predator_int=Math.round(snake_array[iteration_int],0);
		drawItem();
	}
  }
  /** randomly select color for ploting grpah */
  function getRandomColor(){
  		var letters = '0123456789ABCDEF'.split('');
   		color = '#';
    	for (var i = 0; i < 6; i++ ) {
        	color += letters[Math.floor(Math.random() * 16)];
   		 }
    	return color;}
  /**fn for drawing the graph*/
  function showGraphDensity(arr){
	$.plot($("#tinyGraphArea"), [{data: arr,color:getRandomColor()}],
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
  function showGraphEquilrbium(arr1,arr2,arr3,arr4){
	 $.plot($("#tinyGraphArea"), [{label :"", data: arr1, color: getRandomColor()}, {label :"", data: arr2,color: getRandomColor()}, {label :"", data: arr3,color: getRandomColor()},{label :"", data: arr4,color: getRandomColor()}],
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
  /** get input box values */
  function getVal(){					
  	prey_int=$("#intprey").val();
	predator_int=$("#intPredtr").val();
	contSteps=document.getElementById("steps").value;
	stepSize=document.getElementById("stepSize").value;	
	growthRate=document.getElementById("growthRate").value;	
	thetaVal=document.getElementById("thetaVal").value;
	kill=document.getElementById("kill").value;
	preconversion=document.getElementById("preconversion").value;
	deathrate=document.getElementById("deathrate").value;
	Kmin=document.getElementById("Kmin").value;
	Kmax=document.getElementById("Kmax").value;
	stepA=document.getElementById("stepA").value;
	count_rat_int=0;
	count_snake_int=0;
  }	
	/** main calculation function for snakes and rats count*/
  function Calcu(){
		getVal();
		for (var j=0; j<contSteps; j++) {
			snake_array[j]=0;
			rat_array[j]=0;
		}
		time_array[0]=0;
		rat_array[0]=prey_int;
		snake_array[0]=predator_int;
	if (($("#dropdown").val())=="Equillibrium Densities") {
		carry_int=Number(Kmax);
		carry_diff_int=Number(Kmax-Kmin);
		for (var i=0; i<=carry_diff_int; i++) {
			carry_array[i]=carry_int;
			rat_calc_one_int=populationCalc(Number(time_int),Number(rat_array[i]),Number(snake_array[i]),growthRate,kill,preconversion,deathrate,carry_int,thetaVal);
			snake_calc_one_int=stabilityCalc(Number(time_int),Number(snake_array[i]),rat_array[i],kill,preconversion,deathrate);
			
			rat_calc_two_int=populationCalc(Number(time_int)+Number(0.5*stepSize),Number(rat_array[i])+Number(0.5*stepSize*rat_calc_one_int),Number(snake_array[i])+Number(0.5*stepSize*snake_calc_one_int),growthRate,kill,preconversion,deathrate,carry_int,thetaVal);

			snake_calc_two_int=stabilityCalc(Number(time_int)+Number(0.5*stepSize),Number(snake_array[i])+Number(0.5*stepSize*snake_calc_one_int),Number(rat_array[i])+Number(0.5*stepSize*rat_calc_one_int),kill,preconversion,deathrate);
				
			rat_calc_three_int=populationCalc(Number(time_int)+Number(0.5*stepSize),Number(rat_array[i])+Number(0.5*stepSize*rat_calc_two_int),Number(snake_array[i])+Number(0.5*stepSize*snake_calc_two_int),growthRate,kill,preconversion,deathrate,carry_int,thetaVal);
			
			
			snake_calc_three_int=stabilityCalc(Number(time_int)+Number(0.5*stepSize),Number(snake_array[i])+Number(0.5*stepSize*snake_calc_two_int),Number(rat_array[i])+Number(0.5*stepSize*rat_calc_two_int),kill,preconversion,deathrate);
			
			rat_calc_four_int=populationCalc(Number(time_int)+Number(stepSize),Number(rat_array[i])+Number(stepSize*rat_calc_three_int),Number(snake_array[i])+Number(stepSize*snake_calc_three_int),growthRate,kill,preconversion,deathrate,carry_int,thetaVal);
			
			snake_calc_four_int=stabilityCalc(Number(time_int)+Number(stepSize),Number(snake_array[i])+Number(stepSize*snake_calc_three_int),Number(rat_array[i])+Number(stepSize*rat_calc_three_int),kill,preconversion,deathrate);

			rat_array[i+1] = Number(rat_array[i])+Number( (stepSize/6))*Number((rat_calc_one_int) +  Number((2*rat_calc_two_int)) +  Number((2*rat_calc_three_int)) + Number(rat_calc_four_int));
		
			snake_array[i+1] = Number(snake_array[i])+ Number((stepSize/6))*Number((snake_calc_one_int) +  Number((2*snake_calc_two_int)) + Number( (2*snake_calc_three_int)) + Number(snake_calc_four_int));
			time_int=Number(time_int)+Number(stepSize);
			time_array[i+1]=time_int;
	 		 temp_array=[rat_array[i],snake_array[i]];
			 plot_array.push(temp_array);
	 		 showGraphDensity(plot_array);
			carry_int--;
		}
		for (var m=0;m<contSteps;m++){
			clearCanvas();
			drawItem();	 
			prey_int=Math.round(rat_array[m],0);
			predator_int=Math.round(snake_array[m],0);
			document.getElementById("species1").innerHTML="";
			document.getElementById("species2").innerHTML="";
			document.getElementById("species1").innerHTML="Population of Species1: "+prey_int;
			document.getElementById("species2").innerHTML="Population of Species2: "+predator_int;
		}
	}else {
		
		var i;
	 	var _loopcount_int=0;
		if ((stepA > Kmax) || (stepA==0)) {
			alert("The Step size of Encounters result in kill(a) should be less than the maximum of Encounters result in kill(a) and its not equal to zero.");
		} else if (Kmin > Kmax) {
			alert("The minimum of Encounters result in kill(a) should be less than the maximum of Encounters result in kill(a)");
		} else {
			for (var j=Kmax; j >= Kmin; j-=stepA) {
				_loopcount_int++;
				for (i=0; i<contSteps; i++) {
					rat_calc_one_int=populationCalc(Number(time_int),Number(rat_array[i]),Number(snake_array[i]),growthRate,j,preconversion,deathrate,kill,thetaVal);
					
					snake_calc_one_int=stabilityCalc(Number(time_int),Number(snake_array[i]),Number(rat_array[i]),j,preconversion,deathrate);
					
					rat_calc_two_int=populationCalc(Number(time_int)+Number(0.5*stepSize),Number(rat_array[i])+Number(0.5*stepSize*rat_calc_one_int),Number(snake_array[i])+Number(0.5*stepSize*snake_calc_one_int),growthRate,j,preconversion,deathrate,kill,thetaVal);
					
					snake_calc_two_int=stabilityCalc(Number(time_int)+Number(0.5*stepSize),Number(snake_array[i])+Number(0.5*stepSize*snake_calc_one_int),Number(rat_array[i])+Number(0.5*stepSize*rat_calc_one_int),j,preconversion,deathrate);
					
					rat_calc_three_int=populationCalc(Number(time_int)+Number(0.5*stepSize),Number(rat_array[i])+Number(0.5*stepSize*rat_calc_two_int),Number(snake_array[i])+Number(0.5*stepSize*snake_calc_two_int),growthRate,j,preconversion,deathrate,kill,thetaVal);
					
					snake_calc_three_int=stabilityCalc(Number(time_int)+Number(0.5*stepSize),Number(snake_array[i])+Number(0.5*stepSize*snake_calc_two_int),Number(rat_array[i])+Number(0.5*stepSize*rat_calc_two_int),j,preconversion,deathrate);
					
					rat_calc_four_int=populationCalc(Number(time_int)+Number(stepSize),Number(rat_array[i])+Number(stepSize*rat_calc_three_int),Number(snake_array[i])+Number(stepSize*snake_calc_three_int),growthRate,j,preconversion,deathrate,kill,thetaVal);
					
					snake_calc_four_int=stabilityCalc(Number(time_int)+Number(stepSize),Number(snake_array[i])+Number(stepSize*snake_calc_three_int),Number(rat_array[i])+Number(stepSize*rat_calc_three_int),j,preconversion,deathrate);
					
					rat_array[i+1] = Number(rat_array[i])+Number((stepSize/6))*Number((rat_calc_one_int )+  Number((2*rat_calc_two_int)) +  Number((2*rat_calc_three_int)) + Number(rat_calc_four_int));
					
					snake_array[i+1] = Number(snake_array[i])+ Number((stepSize/6))*Number((snake_calc_one_int) +  Number((2*snake_calc_two_int)) +  Number((2*snake_calc_three_int)) + Number(snake_calc_four_int));
					
					 time_int=Number(time_int)+Number(stepSize);
					 time_array[i+1]=time_int;
			    	if (_loopcount_int==1) {
						plot_array_first.push(rat_array[i],snake_array[i]);
					}else if (_loopcount_int==2) {
						plot_array_second.push(rat_array[i],snake_array[i]);
					}else if (_loopcount_int==3) {
						plot_array_third.push(rat_array[i],snake_array[i]);
					}else if (_loopcount_int==4) {
						plot_array_four.push(rat_array[i],snake_array[i]);
					}
				} 
			}
		}
		for (var m=0;m<contSteps;m++) {
			clearCanvas();
			drawItem();	 
			prey_int=Math.round(rat_array[m],0);
			predator_int=Math.round(snake_array[m],0);
			document.getElementById("species1").innerHTML="";
			document.getElementById("species2").innerHTML="";
			document.getElementById("species1").innerHTML="Population of Species1: "+prey_int;
			document.getElementById("species2").innerHTML="Population of Species2: "+predator_int;
		}
	}
  }
  /**function for population calculation */
  function populationCalc(t,p,s,r,a,b,d,c,th){
  	value_return=(r*(1-Math.pow((p/c),th)))-(a*p*s);
	return value_return;
  }
  /** function for stability calculation*/
  function stabilityCalc(t,s,p,a,b,d){
 	q=((b * a * p * s)-(d * s));
	return q;
  }
	var value_return;
	var q;
	/**clear the whole canvas */
  function clearCanvas(){
  	ctx.clearRect(0, 0, $('#speciesCanvas').width(), $('#speciesCanvas').height());
	 $("#speciesCanvas").css("display","block");
  }
  /** clear whole values on drop down change event*/
  function clearAllValues(){
    clearInterval(interval_int);
	clearInterval(snake_interval_int);
	plot_array=[];	
	temp_array=[];
	snake_array=[];
    rat_array=[];
	show_graph_int=0;
	stat_show_int=0;	
	time_int=0;
	step_count_int=0;
	prey_int=0;
    statshw_int=0;
	predator_int=0;
	count_rat_int=0;
    count_snake_int=0;
 	rat_calc_one_int=0;
 	snake_calc_one_int=0;
 	rat_calc_two_int=0;
 	snake_calc_two_int=0;
	rat_calc_three_int=0;
	iteration_int=0;
	snake_calc_three_int=0;
 	rat_calc_four_int=0;
 	snake_calc_four_int=0;
	stat_show_int=0;
	_loopcount_int=0;
	$("#DP").css("color","#6e6e6e");
	$("#ST").css("color","#6e6e6e");
	$("#workSheet").css("display","none");
	$("#tinyGraphArea").css("display", "none");
	$("#statLabel").css("display","none");
	$("#stepRun").prop("disabled",false);
	$("#runIteration").prop("disabled",false);
	$("#Pause").prop("disabled",true);
	$("#Reset").prop("disabled",false);
	}
  