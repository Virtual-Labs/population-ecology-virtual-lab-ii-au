/**
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Athira;
  *Date of modified: 23-05-2015
  */
  var step_count_int=0;
  var timer_current_count_int=0;
  var image_rat = new Image();
  var image_snake= new Image();
  var count_rat_int=0;
  var count_snake_int=0;
  var rat_inter;
  var data_plot_values=[];
  var snake_inter;
  var graph_flag_int=0;
  var show_graph_int=0;
  var iterate_timer;
  var ctx;
  var flag_validate_int=true;
  var array_x= [];
  var array_y= [];
  var stat_show_int=0;
  var select_iteration_int=0;
  var no_items_snake_int=0;
  var no_items_rat_int=0;
  var iteration_cnt_int;
  var rat_array=[];
  var snake_array=[];
  var data_plot_values=[];
  var time_int=0;
  var temp_calc_one=0;
  var temp_calc_two=0;
  var temp_calc_three=0;
  var temp_calc_four=0;
  var plot_inter_one=[];
  var plot_inter_two=[];
  var plot_inter_three=[];
  var plot_inter_four=[];
  var plot_inter_five=[];
  var plot_inter_six=[];
  var prev_growth_rate_int=0;	
  var prev_carrying_capacity_int=0;
  var prev_harvestRate_int=0;
  var prev_popDensityN1_float=0;
  var prev_popDensityN2_float=0;
  var prev_num_steps_int=0;
  var prev_step_size_int=0;
  $(document).ready(function(){
  	canvas = document.getElementById("speciesCanvas");
    ctx = canvas.getContext("2d");
	ctx.canvas.width=$("#canvasBox").width()/1.05;
	ctx.canvas.height=$("#canvasBox").height()/1.15;
	image_rat.src = simPath+"images/rat.jpg";
    image_snake.src = simPath+"images/snake.png";
	$("#statLabel").css("display", "none");
	$("#ST").css("pointer-events","none");
	$("#DP").css("pointer-events","none");
	$("#WS").css("pointer-events","none");
	get_prev_value();
	/**get statistics*/
	$( "#ST" ).click(function() {
		getStatistics();
	});
	/**get data graph*/
	$( "#DP" ).click(function() {
		graph_flag_int=1;
		if ( show_graph_int == 0 ) {
			$("#DP").css("color","#cacaca");
			show_graph_int=1;
			$("#speciesCanvas").css("display","none");
			$("#tinyGraphArea").css("display","block");
				if (($("#dropdown").val())=="Harvesting at less than MSY") {
					showGraphEquilrbium(array1Dto2D(plot_inter_one),array1Dto2D(plot_inter_two),array1Dto2D(plot_inter_three),array1Dto2D(	plot_inter_four),array1Dto2D(plot_inter_five),array1Dto2D(plot_inter_six));
				} else {
					showGraph(data_plot_values);
				}
		} else {
			$("#tinyGraphArea").css("display","none");
			$("#DP").css("color","#6e6e6e");
			show_graph_int=0;
			$("#speciesCanvas").css("display","block");
		}
	});
	/**reset the whole canvas and clear all values */
	$("#reset").click(function () {
		window.location.reload();
	});
	/** Clear canvas on dropdown change */
	$("#dropdown").change(function () {
	   clearCanvas();
	   clearAllValues();
	});
	/**drop down function change*/
	$("#dropdown").change(function(){
		$("#statLabel").css("display", "none");
		combo_val_bool =$("#dropdown option:selected").val();
		if (combo_val_bool=="Harvesting at less than MSY") {
			document.getElementById("popDensityN1").value=562.5;
		    document.getElementById("popDensityN2").value=437.5;
			document.getElementById("harvestRate").value=295.3;
			$('#densityN1').html(("Population density(n1):"));
		    $('#densityN2').html(("Population density(n2):"));
		} else{
			document.getElementById("popDensityN1").value=1;
		    document.getElementById("popDensityN2").value=580;
			document.getElementById("harvestRate").value=242.5;
			$('#densityN1').html(("Spatial distribution:"));
		    $('#densityN2').html(("Population density:"));
		}
	});
	/** get step run for rats and snakes  */
 	$( "#stepRun" ).click(function() {
	input_fun();
	get_prev_value();
	graph_flag_int=0;
	if (flag_validate_int) {
		$("#tinyGraphArea").css("display", "none");	
		$("#speciesCanvas").css("display","block");
		$("#ST").css("pointer-events","visible");
		$("#DP").css("pointer-events","visible");
		$("#WS").css("pointer-events","visible");
		
		select_iteration_int=1;
		var _NoStep=document.getElementById("countSteps").value;
		getVal();
	if(step_count_int<=_NoStep){
		data_plot_values=[];
		plot_inter_one=[];
    	plot_inter_two=[];
    	plot_inter_three=[];
    	plot_inter_four=[];
    	plot_inter_five=[];
    	plot_inter_six=[];
		clearCanvas();
		drawItem();
		
		console.log(prev_growth_rate_int+"prev_growth_rate_int",growth_rate_int+"growth_rate_int");
		/** In case the user changes the previous inputed value, then it will do calculation again */
		if ((prev_growth_rate_int!=growth_rate_int)||(prev_carrying_capacity_int!=carrying_capacity_int)||(prev_harvestRate_int!=harvestRate_int)||(prev_popDensityN1_float!=popDensityN1_float)||(prev_popDensityN2_float!=popDensityN2_float)||(prev_num_steps_int!=prev_num_steps_int)||(prev_step_size_int!=step_size_int)) {	
		console.log("changed");		
		  rat_array=[];
		  snake_array=[];
		  step_count_int=0;
		  CalcPopulation();
		}
		CalcPopulation();
		
		no_items_rat_int=Math.round((rat_array[step_count_int]));
		no_items_snake_int=Math.round((snake_array[step_count_int]));
		document.getElementById("species2").innerHTML="Population of Predator:"+Math.round(rat_array[step_count_int],0);	
		document.getElementById("species1").innerHTML="Population of Prey:"+Math.round(snake_array[step_count_int],0);
		step_count_int++;
	} else {
		document.getElementById("stepRun").disabled=true;
		document.getElementById("runIteration").disabled=true;
		document.getElementById("Pause").disabled=true;
	}
	}
	});
	/** get iteration for snakes and rats*/
	$( "#runIteration" ).click(function() {
	input_fun();
	if(flag_validate_int){
		graph_flag_int=0;
		$("#tinyGraphArea").css("display", "none");
		 $("#speciesCanvas").css("display","block");	
		$("#ST").css("pointer-events","visible");
		$("#DP").css("pointer-events","visible");
		$("#WS").css("pointer-events","visible");
		document.getElementById("Pause").disabled=false;
		$("#stepRun").prop("disabled",true);
	    $("#runIteration").prop("disabled",true);
		$("#Pause").val("Pause");
		select_iteration_int=1;
		iteration_cnt_int=0;
		iterate_timer = setInterval(iterationFn,200);
	}
	});
	/**Play pause functions */
	$("#Pause").click(function(){
	graph_flag_int=0;
	$("#DP").prop("disabled",false);
	$("#DP").css("pointer-events","visible");
	$("#tinyGraphArea").css("display", "none");	
	if($(this).val()=="Pause"){
		$("#Pause").val("Play");
		clearInterval(iterate_timer);
	} else {
	    $("#Pause").val("Pause");
		iterate_timer = setInterval(iterationFn, 200); 
	}
	});
	/** if the letter is not digit then display error and don't type anything */
	$( ".tinyTxtArea" ).keypress(function(key) {
		step_count_int=0;		
		/** if the letter is not digit then display error and don't type anything */
	  var _keycode = (key.which) ? key.which : key.keyCode;
	  if ( !(_keycode==8 || _keycode==46)&&(_keycode < 48 || _keycode > 57) ) {
		return false;
	  }
	});
	/** check for error in text boxes */
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
	/** get values for positions (snake and rat) */
	for(w=0;w<= $("#canvasBox").width()/1.05;w+=19.5)
	{
		array_x.push(w);
	} 
	for(h=0;h<= $("#canvasBox").width()/1.2;h+=17.5)
	{
		array_y.push(h);
	}
});
  /** Iterating function */
  function iterationFn(){
	graph_flag_int=0;
		iteration_cnt_int++;
		if(iteration_cnt_int >num_steps_int){
			clearInterval(iterate_timer);
			select_iteration_int=1;
		} else {	
		clearCanvas();
		count_rat_int=0;
		count_snake_int=0;
		data_plot_values=[];
		plot_inter_one=[];
        plot_inter_two=[];
    	plot_inter_three=[];
    	plot_inter_four=[];
    	plot_inter_five=[];
    	plot_inter_six=[];
		drawItem();
		CalcPopulation();
		numberOfSpecies();
		document.getElementById("species2").innerHTML="Population of Predator:"+Math.round(snake_array[iteration_cnt_int],0);	
		document.getElementById("species1").innerHTML="Population of Prey:"+Math.round(rat_array[iteration_cnt_int],0);
	}
  }	
  /**get statictics for count of snake and rat */
  function getStatistics(){
	graph_flag_int=0;
	if(select_iteration_int==1){
	if(stat_show_int==0){
		//$("#tinyGraphArea").css("display", "none");	
		$("#statLabel").css("display", "block");
		document.getElementById("ST").style.color="#cacaca";
		document.getElementById("species1").innerHTML="Population of Prey: "+no_items_snake_int;
		document.getElementById("species2").innerHTML="Population of Predator: "+no_items_rat_int;
		stat_show_int=1;
		} else {
			document.getElementById("statLabel").style.display="none";
			document.getElementById("ST").style.color="#6e6e6e";
			stat_show_int=0;
		}
	}
  }
  /**convert one dimensional array to two dimensional array*/
	function array1Dto2D (tmpArray1){
    	var _array2D = [];
    	for (var i=0; i < tmpArray1.length - 1; i+=2) {
        	var _pair = [tmpArray1[i], tmpArray1[i+1]];
        	_array2D.push(_pair);
    	}
    	return _array2D;
	} 
  /** show graph function */
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
  function showGraphEquilrbium(arr1,arr2,arr3,arr4,arr3,arr4,arr5,arr6){
	 $.plot($("#tinyGraphArea"), [{label :"", data: arr1, color: '#800000'}, {label :"", data: arr2,color: '#800000'}, {label :"", data: arr3,color: '#800000'},{label :"", data: arr4,color: '#800000'},{label :"", data: arr5, color: '#800000'}, {label :"", data: arr6,color: '#800000'}],
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
   /** randomly display color for grpah */
  function getRandomColor() {
    var _letters = '0123456789ABCDEF'.split('');
    var _color = '#';
    for (var i = 0; i < 6; i++ ) {
        _color += _letters[Math.floor(Math.random() * 16)];
    }
    return _color;
  }
  
  /** call draw function for  items to canvas setting interval */
  function drawItem()
  {
	clearInterval(rat_inter);
	clearInterval(snake_inter);
	rat_inter =setInterval("drawSpecies()",0);
	snake_inter =setInterval("drawSpecies1()",0);
  }
  /** main function for drawing snakes and rat to canvas */
  function drawSpecies1(){
	document.getElementById("ST").disabled=false;
	document.getElementById("DP").disabled=false;
    if(no_items_snake_int>0){
		if(count_snake_int<no_items_snake_int){
			rand_x1 = Math.random() * (26 - 0);
			rand_y1=  Math.random() * (24 - 0);
			x1= Math.round(rand_x1,0);
			y1= Math.round(rand_y1,0);
			var ctx = document.getElementById('speciesCanvas').getContext('2d');
			ctx.drawImage(image_snake,array_x[x1],array_y[y1-1]);
	   } else {
		  clearInterval(snake_inter);
			}
	}
	count_snake_int++;
  }
    /** main function for drawing snakes and rat to canvas */
  function drawSpecies(){
	document.getElementById("ST").disabled=false;
	document.getElementById("DP").disabled=false;
		if(no_items_rat_int>0){
			if(count_rat_int<no_items_rat_int)
			{	
				rand_x = Math.random() * (27 - 0);
				rand_y=  Math.random() * (24 - 0);
				x= Math.round(rand_x,0);
				y= Math.round(rand_y,0);
				var ctx = document.getElementById('speciesCanvas').getContext('2d');
				ctx.drawImage(image_rat,array_x[x],array_y[y-1]);
			} else {
				clearInterval(rat_inter);
			}
		}
	count_rat_int++;	
  }
  /** main function for calculation */
  function CalcPopulation(){
	//clearInterval(iterate_timer);
		getVal();
	for (var j=0; j<num_steps_int; j++) {
		snake_array[j]=0;
		rat_array[j]=0;
	}
	R=[];
	R.push(Number(popDensityN1_float)+Number(25));
	R.push(Number(popDensityN1_float));
	R.push(Number(popDensityN1_float)-Number(25));
	R.push(Number(popDensityN2_float));
	R.push(Number(popDensityN2_float)+Number(25));
	R.push(Number(popDensityN2_float)-Number(25));
	snake_array[0]=0;
	if (($("#dropdown").val())=="Harvesting at less than MSY") {
		var _loopcount_int=0;
		for (var j=0; j<R.length; j++) {	
			_loopcount_int++;		
	 		for (var i=0; i<=num_steps_int; i++) {
	  			if (i==0) {
	   				rat_array[0]=R[j];
	 			}
	  			temp_calc_one=calcfunc(time_int,Number(rat_array[i]),growth_rate_int,carrying_capacity_int,harvestRate_int);
	 			temp_calc_two=calcfunc(time_int+Number(0.5*step_size_int),Number(rat_array[i])+Number(0.5*step_size_int*temp_calc_one),growth_rate_int,carrying_capacity_int,harvestRate_int);
	  			temp_calc_three=calcfunc(Number(time_int+Number(0.5*step_size_int)),Number(Number(rat_array[i])+Number(0.5*step_size_int*temp_calc_two)),growth_rate_int,carrying_capacity_int,harvestRate_int);
	 			temp_calc_four=calcfunc(time_int+step_size_int,Number(rat_array[i])+Number(step_size_int*temp_calc_three),growth_rate_int,carrying_capacity_int,harvestRate_int);
	 			rat_array[i+1] = Number(rat_array[i]) + Number((step_size_int/6))*Number((temp_calc_one +  Number((2*temp_calc_two)) +  Number((2*temp_calc_three)) + Number(temp_calc_four)));
	 			time_int=Number(time_int)+Number(step_size_int);
	 			snake_array[i+1]=time_int;
				if (_loopcount_int==1) {
					plot_inter_one.push(snake_array[i],rat_array[i]);
				} else if (_loopcount_int==2) {
					plot_inter_two.push(snake_array[i],rat_array[i]);
				} else if (_loopcount_int==3) {
					plot_inter_three.push(snake_array[i],rat_array[i]);
				} else if (_loopcount_int==4) {
					plot_inter_four.push(snake_array[i],rat_array[i]);
				} else if (_loopcount_int==5) {
					plot_inter_five.push(snake_array[i],rat_array[i]);
				} else if (_loopcount_int==6) {
					plot_inter_six.push(snake_array[i],rat_array[i]);
				}
   			}
   			time_int=0;
   			rat_array[i+1]=R[j];
  		}
		
 	}	
	
 	if (($("#dropdown").val())=="Effect of Theta on MSY") {
 		rat_array[0]=580;
 		for (var i=0; i<num_steps_int; i++) {
  			temp_calc_one=calcfuncSec(time_int,Number(rat_array[i]),growth_rate_int,carrying_capacity_int,harvestRate_int,popDensityN1_float);
  			temp_calc_two=calcfuncSec(time_int+Number(0.5*step_size_int),Number(rat_array[i])+Number(0.5*step_size_int*temp_calc_one),growth_rate_int,carrying_capacity_int,harvestRate_int,popDensityN1_float);
  			temp_calc_three=calcfuncSec(time_int+Number(0.5*step_size_int),Number(rat_array[i])+Number(0.5*step_size_int*temp_calc_two),growth_rate_int,carrying_capacity_int,harvestRate_int,popDensityN1_float);
  			temp_calc_four=calcfuncSec(time_int+Number(step_size_int),Number(rat_array[i])+Number(step_size_int*temp_calc_three),growth_rate_int,carrying_capacity_int,harvestRate_int,popDensityN1_float);
  			rat_array[i+1] = Number(rat_array[i]) + Number((step_size_int/6))*Number((Number(temp_calc_one) +  Number((2*temp_calc_two)) +  Number((2*temp_calc_three)) + Number(temp_calc_four)));
  			time_int=Number(time_int)+Number(step_size_int);
  			snake_array[i+1]=time_int;
  			data_plot_values.push([snake_array[i],rat_array[i]]);
 		}
 	}
  }
  /** calculate the count of items */
  function numberOfSpecies(){
	getVal();
	no_items_snake_int=Math.round((snake_array[timer_current_count_int]));
	no_items_rat_int=Math.round((rat_array[timer_current_count_int]));
	timer_current_count_int++;
  }
  /** function for calculation*/
  function calcfunc(t,N,r,k,c_h) {
	if (N>0) {
		var _value= r * N * (k-N)/k-c_h;
	} else {
		var _value=- N;
	}
	return _value;
  }
  /** function for calculation*/
  function calcfuncSec(t,N,r,k,c_h,theta) {
	if (N>0) {
		var _value = r * N*(1-Math.pow((N/k),theta))-c_h;
	} else {
		var _value=- N;
	}
	return _value;
  }
  /** get inputed values form text boxes*/
  function getVal()
  {					
	growth_rate_int=document.getElementById("growthRate").value;	
	carrying_capacity_int=document.getElementById("carryCapacity").value;
	harvestRate_int=document.getElementById("harvestRate").value;
	popDensityN1_float=document.getElementById("popDensityN1").value;
	popDensityN2_float=document.getElementById("popDensityN2").value;
	num_steps_int=document.getElementById("countSteps").value;
	step_size_int=document.getElementById("stepSize").value;
	count_rat_int=0;
	count_snake_int=0;
  }	
  /** clear canvas */
  function clearCanvas(){
	  $("#speciesCanvas").css("display","block");
    ctx.clearRect(0, 0, $('#speciesCanvas').width(), $('#speciesCanvas').height());
  }
  /** check for validation in input boxes */
  function input_fun(){
	getVal();
	if(growth_rate_int<=0 || carrying_capacity_int<=0 || harvestRate_int<=0 || popDensityN1_float<=0 || popDensityN2_float<=0 || num_steps_int<=0 || step_size_int<=0){
		flag_validate_int = false;
		clearAllValues();
		alert("Enter a value greater than 0.");
	} else {
		flag_validate_int = true;
	}
  }
  function get_prev_value(){
    prev_growth_rate_int=document.getElementById("growthRate").value;	
	prev_carrying_capacity_int=document.getElementById("carryCapacity").value;
	prev_harvestRate_int=document.getElementById("harvestRate").value;
	prev_popDensityN1_float=document.getElementById("popDensityN1").value;
	prev_popDensityN2_float=document.getElementById("popDensityN2").value;
	prev_num_steps_int=document.getElementById("countSteps").value;
	prev_step_size_int=document.getElementById("stepSize").value;
  }
  /** Reset all values */
  function clearAllValues() {
	count_rat_int=0;
	count_snake_int=0;
	no_items_snake_int=0;
    no_items_rat_int=0;
	step_count_int=0;
	iteration_cnt_int=0;
	select_iteration_int=0;
	show_graph_int=0;
	stat_show_int=0;
	$("#workSheet").css("display","none");
	$("#statLabel").css("display","none");
    clearInterval(rat_inter);
	clearInterval(snake_inter);
	$("#stepRun").prop("disabled",false);
	$("#runIteration").prop("disabled",false);
	$("#Pause").prop("disabled",true);
	$("#Reset").prop("disabled",false);
	$("#tinyGraphArea").css("display", "none");	
	$("#DP").css("color","#6e6e6e");
	$("#ST").css("color","#6e6e6e");
	rat_array=[];
 	snake_array=[];
 	time_int=0;
	$("#tooltip").remove();
	clearInterval(iterate_timer);
	timer_current_count_int=0;
	data_plot_values=[];
	temp_calc_one=0;
	temp_calc_two=0;
 	temp_calc_three=0;
 	temp_calc_four=0;
	flag_validate_int=true;
	plot_inter_one=[];
    plot_inter_two=[];
    plot_inter_three=[];
    plot_inter_four=[];
    plot_inter_five=[];
    plot_inter_six=[];
 
  }
  