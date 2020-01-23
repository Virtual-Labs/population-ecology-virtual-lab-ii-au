  /**
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Anitha;
  *Date of modified: 08-05-2015
  */

  $(document).ready(function (){
	var start_val_float=0.1;
	var fraction_float=0.01;
	var end_val_float=0.1;
	var x_val_array = [];
	var y_one_array = [];
	var y_two_array = [];
	var y_three_array = [];
	var wrong_alert_int=0;
	var button_flag_int;
	var array_push_one_float;
	var array_push_two_float;
	var calc_one_float;
	var calc_two_float;
	var calc_three_float;
	var calc_four_float;
	var calc_five_float;
	var calc_six_float;
	var calc_seven_float;
	var calc_eight_float;
	var calc_nine_float;
	var prey_one_array=[];
	var prey_two_array=[];
	var average_array=[];
	$("#top").html("Time per Item");
	$("#left").html("Time in Seconds");
	$("#bottom").html("Abundance of Prey-1");
	/** Default graph area */
	$.plot($("#GraphArea"), [[]]);
	/** Staring value slider function */
	function startSliderFN(){
	  start_val_float = $("#startValue").val();
	  if ( $("#endValue").val() < $("#startValue").val() ) {	
		end_val_float=$("#endValue").val($("#startValue").val());
		$("#input4").html($("#endValue").val());
		$("#input2").html($("#endValue").val());
	  } else {
	    end_val_float= $("#endValue").val();
	  }
	}
	/** Ending value slider function */
	function endSliderFN(){
	  if ( $("#endValue").val() < $("#startValue").val() ) {			
		end_val_float=$("#startValue").val($("#endValue").val());
		$("#input4").html($("#endValue").val());
		$("#input2").html($("#endValue").val());
	  } else {
		end_val_float = $("#endValue").val();
	  }
	}
	/** Function for restrict alphabets in textbox */
	$("#hp1,#hp2,#ep1,#ep2,#es,#eh").keypress(function (e){
	  /** if the letter is not digit then display error and don't type anything */
	  if ( e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) ) {
		return false;
	  }
	});
	/** Startvalue slider change function */
	$("#startValue").change(function (){		
	  startSliderFN();		
	  start_val_float = $("#startValue").val();
	  end_val_float = $("#endValue").val();	
	  $("#input2").html($("#startValue").val());
	});
	/** Fraction value slider change function */
	$("#fraction").change(function (){
	  fraction_float = $("#fraction").val();
	  $("#input3").html($("#fraction").val());
	});
	/** End value slider change function */
	$("#endValue").change(function (){
	  endSliderFN();
	  start_val_float = $("#startValue").val();
	  end_val_float = $("#endValue").val();
	  $("#input4").html(end_val_float);
	});
	/** Plot time per item button click event */
	$("#plotTimeItem").click(function(){
	  $.plot($("#GraphArea"), [[]]);
	  prey_one_array=[];
	  prey_two_array=[];
	  average_array=[];
	  wrongInputAlert();		
	  if ( wrong_alert_int == 0 ) {
	    button_flag_int = 1;
	  }
	  graphCalculation();
	  for( var i=1; i < x_val_array.length; i++ ) {
	    _temp_arr_one=[x_val_array[i],y_one_array[i]];	
		prey_one_array.push(_temp_arr_one);	
		_temp_arr_two=[x_val_array[i],y_two_array[i]];
		prey_two_array.push(_temp_arr_two);
		_temp_arr_two=[x_val_array[i],y_three_array[i]];
		average_array.push(_temp_arr_two);
		$.plot($("#GraphArea"), [{label :" Prey-1", data: prey_one_array, color: '#FF3300'}, {label :" Prey-2", data: prey_two_array,color: '#CC66FF'}, {label :" Average", data: average_array,color: '#32FF32'}],
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
	  prey_one_array.splice(0,prey_one_array.length);	
	  prey_two_array.splice(0,prey_two_array.length);	
	  average_array.splice(0,average_array.length);	
	  x_val_array.splice(0,x_val_array.length);
	  y_one_array.splice(0,y_one_array.length);
	  y_two_array.splice(0,y_two_array.length);
	  y_three_array.splice(0,y_three_array.length);			
	});
	/** Plot energy per item button click event */
	$("#plotEnergyItem").click(function(){
	  $.plot($("#GraphArea"), [[]]);
	  prey_one_array=[];
	  prey_two_array=[];
	  average_array=[];
	  wrongInputAlert();
	  if ( wrong_alert_int == 0 ) {
	    button_flag_int = 2;
	  }
	  graphCalculation();
	  for( var i=1; i < x_val_array.length; i++ ) {
	    _temp_arr_one=[x_val_array[i],y_one_array[i]];
	    prey_one_array.push(_temp_arr_one);
		_temp_arr_two=[x_val_array[i],y_two_array[i]];
		prey_two_array.push(_temp_arr_two);
		_temp_arr_two=[x_val_array[i],y_three_array[i]];
		average_array.push(_temp_arr_two);
		$.plot($("#GraphArea"), [{label :" Prey-1", data: prey_one_array, color: '#FF3300'}, {label :" Prey-2", data: prey_two_array,color: '#CC66FF'}, {label :" Average", data: average_array,color: '#32FF32'}],
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
	  prey_one_array.splice(0,prey_one_array.length);	
	  prey_two_array.splice(0,prey_two_array.length);	
	  average_array.splice(0,average_array.length);	
	  x_val_array.splice(0,x_val_array.length);
	  y_one_array.splice(0,y_one_array.length);
	  y_two_array.splice(0,y_two_array.length);
	  y_three_array.splice(0,y_three_array.length);
	});

	/** Plot energy per time button click event */
	$("#plotEnergyTime").click(function(){
	  $.plot($("#GraphArea"), [[]]);
	  prey_one_array=[];
	  prey_two_array=[];
	  average_array=[];
	  wrongInputAlert();
	  if ( wrong_alert_int == 0 ) {
	    button_flag_int = 3;
	  }
	  graphCalculation();
	  for( var i=1; i < x_val_array.length; i++ )
	  {
	    _temp_arr_one=[x_val_array[i],y_one_array[i]];
	    prey_one_array.push(_temp_arr_one);
	    _temp_arr_two=[x_val_array[i],y_two_array[i]];
	    prey_two_array.push(_temp_arr_two);
	    _temp_arr_two=[x_val_array[i],y_three_array[i]];
		average_array.push(_temp_arr_two);
		$.plot($("#GraphArea"), [{label :" Prey-1", data: prey_one_array, color: '#FF3300'}, {label :" Prey-2", data: prey_two_array,color: '#CC66FF'}, {label :" Average", data: average_array,color: '#32FF32'}],
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
	  prey_one_array.splice(0,prey_one_array.length);	
	  prey_two_array.splice(0,prey_two_array.length);	
	  average_array.splice(0,average_array.length);	
	  x_val_array.splice(0,x_val_array.length);
	  y_one_array.splice(0,y_one_array.length);
	  y_two_array.splice(0,y_two_array.length);
	  y_three_array.splice(0,y_three_array.length);
	});
	/** Reset button click event */
	$("#reset").click(function(){
	  window.location.reload();
	});
	/** Function for graph calculation, X and all Y array values are getting from this function */
	function graphCalculation(){
	  x_val_array=[];
	  y_one_array=[];
	  y_two_array=[];
	  y_three_array=[];
	  _x_number = parseFloat(end_val_float) / parseFloat(fraction_float);
	  for ( var i=0; i<(_x_number); i++ ) {
	    x_val_array.push(parseFloat(start_val_float)+parseFloat((fraction_float)*i));
		array_push_one_float = Number(x_val_array[i]);			
	  }
	  if ( button_flag_int == 1 ) {
	    for ( j=0; j<x_val_array.length; j++ ) {
		  array_push_one_float = Number(x_val_array[j]);
		  calc_one_float=parseFloat(1/array_push_one_float)+parseFloat($("#hp1").val());
		  y_one_array.push(calc_one_float);
		  arrayPushFn();
		}
	  } else if ( button_flag_int == 2 ) {
	    for ( j=0; j<x_val_array.length; j++ ) {
		  array_push_one_float = Number(x_val_array[j]);
		  calc_one_float=parseFloat(($("#ep1").val()))-parseFloat(($("#es").val()/array_push_one_float)-($("#eh").val()*$("#hp1").val()));
		  y_one_array.push(calc_one_float);
		  arrayPushFn();
		}
	  } else if ( button_flag_int == 3 ) {
	    for ( j=0; j<x_val_array.length; j++ ) {
		  array_push_one_float = Number(x_val_array[j]);
		  calc_four_float=parseFloat(1/array_push_one_float)+parseFloat($("#hp1").val());
		  calc_seven_float=parseFloat($("#ep1").val())-parseFloat($("#es").val()/array_push_one_float)-parseFloat(($("#eh").val()*$("#hp1").val()));
		  calc_one_float = parseFloat(calc_seven_float / calc_four_float);
		  y_one_array.push(calc_one_float);
		  arrayPushFn();
		}
	  }			
	}	
	/** Calculate array_push_two_float and Y2 and Y3 array values */
	function arrayPushFn(){
	  if ( $("#rb1").is(":checked") ) {
	    array_push_two_float = array_push_one_float / 2;
	  } else if ( $("#rb2").is(":checked") ) {
	    array_push_two_float = array_push_one_float;
	  } else if ( $("#rb3").is(":checked") ) {
	    array_push_two_float = array_push_one_float * 2;
	  }
	  hp1=$("#hp1").val();
	  hp2=$("#hp2").val();
	  ep1=$("#ep1").val();
	  ep2=$("#ep2").val();
	  es=$("#es").val();
	  eh=$("#eh").val();
	  if ( button_flag_int == 1 ) {
	    calc_two_float=parseFloat((1/array_push_two_float))+parseFloat(hp2);
		calc_three_float=parseFloat(1+parseFloat(hp1*array_push_one_float)+parseFloat(hp2*array_push_two_float))/parseFloat(array_push_one_float+array_push_two_float);
	  } else if ( button_flag_int == 2 ) {
		calc_two_float=parseFloat(ep2)-parseFloat(es/array_push_two_float)-parseFloat(eh*hp2);
		p = parseFloat(hp1*parseFloat(array_push_one_float/parseFloat(array_push_one_float+array_push_two_float))) + parseFloat(hp2*parseFloat(array_push_two_float/parseFloat(array_push_one_float+array_push_two_float)));
		calc_three_float=parseFloat(ep1*parseFloat(array_push_one_float/parseFloat(array_push_one_float+array_push_two_float))) + parseFloat(ep2*parseFloat(array_push_two_float/parseFloat(array_push_one_float+array_push_two_float))) - parseFloat(es/parseFloat(array_push_one_float+array_push_two_float)) - parseFloat(eh)*p;
	  } else if ( button_flag_int == 3 ) {
		calc_five_float=parseFloat(1/array_push_two_float)+parseFloat(hp2);
		calc_eight_float=parseFloat(ep2)-parseFloat(es/array_push_two_float)-parseFloat(eh*hp2);
		calc_six_float=parseFloat(1/parseFloat(array_push_one_float+array_push_two_float)) + parseFloat(hp1*parseFloat(array_push_one_float/parseFloat(array_push_one_float+array_push_two_float))) + parseFloat(hp2*parseFloat(array_push_two_float/parseFloat(array_push_one_float+array_push_two_float)));
		p = parseFloat(hp1*parseFloat(array_push_one_float/parseFloat(array_push_one_float+array_push_two_float))) + parseFloat(hp2*parseFloat(array_push_two_float/parseFloat(array_push_one_float+array_push_two_float)));
		calc_nine_float=parseFloat(ep1*parseFloat(array_push_one_float/parseFloat(array_push_one_float+array_push_two_float))) + parseFloat(ep2*parseFloat(array_push_two_float/parseFloat(array_push_one_float+array_push_two_float))) - parseFloat(es/parseFloat(array_push_one_float+array_push_two_float)) - parseFloat(eh)*p;
		calc_two_float = parseFloat(calc_eight_float / calc_five_float);
		calc_three_float = parseFloat(calc_nine_float / calc_six_float);
	  }
	  y_two_array.push(calc_two_float);
	  y_three_array.push(calc_three_float);
	}
	/** Create alert messages for the values not in the specified range */
	function wrongInputAlert(){
	  if ( $("#hp1").val() < 1 || $("#hp1").val() > 1200 || $("#hp2").val() < 1 || $("#hp2").val() > 1200 ) {
	    wrong_alert_int = 1;
		alert('hp1 & hp2 should be in the range 1-1200');
	  } else if ( $("#ep1").val() < 1 || $("#ep1").val() > 3000 || $("#ep2").val() < 1 || $("#ep2").val() > 3000 ) {
		wrong_alert_int = 1;
		alert('ep1 & ep2 should be in the range 1-3000');
	  } else if ( $("#es").val() < 1 || $("#es").val() > 50 || $("#eh").val() < 1 || $("#eh").val() > 50 ) {
		wrong_alert_int = 1;
		alert('es & eh should be in the range 1-50');
	  } else {
		wrong_alert_int = 0;
	  }
	}
	/** Tooltips of all text boxes and radio buttons */
	function showControlTooltip(contents,top,left){	
	  $('<div id="toolId">' + contents + '</div>').css( {
	    position: 'absolute',
		textAlign:'right',
		display: 'block',
		top: top+50,
		fontSize: '14px',
		left: left+1020,
		border: '1px solid #fdd',
		padding: '2px',
		backgroundColor: '#fee'
      }).appendTo("body").fadeIn(200);
	}	
	/** First textbox mouseover and mouseout functions */
	$("#hptext1").mouseover(function(){
	  var _top=$("#hptext1").position().top;
	  var _left=$("#hptext1").position().left;
	  showControlTooltip("Handling Time for Prey-1 (s)",_top,_left);
	});
	$("#hptext1").mouseout(function(){
	  $("#toolId").remove();
	});	
	/** Second textbox mouseover and mouseout functions */
	$("#hptext2").mouseover(function(){
	  var _top=$("#hptext2").position().top;
	  var _left=$("#hptext2").position().left;
	  showControlTooltip("Handling Time for Prey-2 (s)",_top,_left);
	});
	$("#hptext2").mouseout(function(){
	  $("#toolId").remove();
	});
	/** Third textbox mouseover and mouseout functions */
	$("#eptext1").mouseover(function(){
	  var _top=$("#eptext1").position().top;
	  var _left=$("#eptext1").position().left;
	  showControlTooltip("Energy Content of Prey-1 (kCal)",_top,_left);
	});
	$("#eptext1").mouseout(function(){
	  $("#toolId").remove();
	});
	/** Fourth textbox mouseover and mouseout functions */
	$("#eptext2").mouseover(function(){
	  var _top=$("#eptext2").position().top;
	  var _left=$("#eptext2").position().left;
	  showControlTooltip("Energy Content of Prey-2 (kCal)",_top,_left);
	});
	$("#eptext2").mouseout(function(){
	  $("#toolId").remove();
	});
    /** Fifth textbox mouseover and mouseout functions */
    $("#estext").mouseover(function(){
      var _top=$("#estext").position().top;
	  var _left=$("#estext").position().left;
      showControlTooltip("Energy Cost for Searching a Prey (kCal/s)",_top,_left);
    });
    $("#estext").mouseout(function(){
      $("#toolId").remove();
    });
    /** Sixth textbox mouseover and mouseout functions */
    $("#ehtext").mouseover(function(){
      var _top=$("#ehtext").position().top;
	  var _left=$("#ehtext").position().left;
	  showControlTooltip("Energy Cost for Handling a Prey (kCal/s)",_top,_left);
	});
    $("#ehtext").mouseout(function(){
      $("#toolId").remove(); 
	});
    /** First radio button mouseover and mouseout functions */
    $("#rb1").mouseover(function(){
      var _top=$("#rb1").position().top;
	  var _left=$("#rb1").position().left;
	  showControlTooltip("half of Abundance of Prey-1",_top,_left);
    });
	$("#rb1").mouseout(function(){
      $("#toolId").remove();
	});
	/** Second radio button mouseover and mouseout functions */
	$("#rb2").mouseover(function(){
      var _top=$("#rb2").position().top;
	  var _left=$("#rb2").position().left;
	  showControlTooltip("half of Abundance of Prey-2",_top,_left);
	});
    $("#rb2").mouseout(function(){
      $("#toolId").remove();
	});
    /** Third radio button mouseover and mouseout functions */
    $("#rb3").mouseover(function(){
      var _top=$("#rb3").position().top;
	  var _left=$("#rb3").position().left;
	  showControlTooltip("half of Abundance of Prey-3",_top,_left);
    });
	$("#rb3").mouseout(function(){
      $("#toolId").remove();
	});	
    /** Function for the x and y position tooltip inside the graph */
    $(function (){		 
      function showTooltip(x, y, contents){
	    $('<div id="tooltip">' + contents + '</div>').css({
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
	  $("#GraphArea").bind("plothover", function (event, pos, item){
        $("#x").text(pos.x.toFixed(2));
		$("#y").text(pos.y.toFixed(2));
		if ( _previous_point != item.dataIndex ) {
		  _previous_point = item.dataIndex;
		  $("#tooltip").remove();
		  var x = item.datapoint[0].toFixed(2),
		  y = item.datapoint[1].toFixed(2);	
		  showTooltip(item.pageX, item.pageY," X:" + x + " and Y:" + y);
		} else {
		  $("#tooltip").remove();
		  previousPoint = null;
		}
      });
	});
  });