		$(document).ready(function(){
			$('.room1').css('display','none');
			$('.room2').css('display','none');
			$('.room3').css('display','none');
			$('.room4').css('display','none');
		});
		$('#toggle').click(function(){
		$('.room1').css('width','0px'),
 		$('.room2').css('width','0px'),
 		$('.room3').css('width','0px'),
 		$('.room4').css('width','0px');
 		$('.room1').css('display','none'),
 		$('.room2').css('display','none'),
 		$('.room3').css('display','none'),
 		$('.room4').css('display','none');
 	});

 		$('#btn1').click(function(){
 			$('.room2').css('display','none'),
 			$('.room3').css('display','none'),
 			$('.room4').css('display','none'),
 			$('.room1').show();
 			$('.room2').css('width','0px'),
 			$('.room3').css('width','0px'),
 			$('.room4').css('width','0px'),
 			$('.room1').css('transition','0.5s ease-in-out'),
 			$('.room1').css('width','500px');
 		});
 		$('#btn2').click(function(){
 			$('.room1').css('display','none'),
 			$('.room3').css('display','none'),
 			$('.room4').css('display','none'),
 			$('.room2').show();
 			$('.room1').css('width','0px'),
 			$('.room3').css('width','0px'),
 			$('.room4').css('width','0px'),
 			$('.room2').css('transition','0.5s ease-in-out'),
 			$('.room2').css('width','500px');
 		});
 		$('#btn3').click(function(){
 			$('.room1').css('display','none'),
 			$('.room2').css('display','none'),
 			$('.room4').css('display','none'),
 			$('.room3').show();
 			$('.room1').css('width','0px'),
 			$('.room2').css('width','0px'),
 			$('.room4').css('width','0px'),
 			$('.room3').css('transition','0.5s ease-in-out'),
 			$('.room3').css('width','500px');
 		});
 		$('#btn4').click(function(){
 			$('.room1').css('display','none'),
 			$('.room2').css('display','none'),
 			$('.room3').css('display','none'),
 			$('.room4').show();
 			$('.room1').css('width','0px'),
 			$('.room2').css('width','0px'),
 			$('.room3').css('width','0px'),
 			$('.room4').css('transition','0.5s ease-in-out'),
 			$('.room4').css('width','500px');
 		});
 		
 	$('.ui.accordion').accordion();
 	 $('.ui.dropdown').dropdown();  
 	   $('.ui.selection.dropdown').dropdown();
 	  			

 	  			var add= document.getElementById("items");
                var alt = "<div class='col-xs-6'>"+
							"<div class='form-group'>"+
							"<label style='margin: 14px 66px'>Room</label>"+
							"</div>"+
						"</div>"+
					"<div class='col-xs-3'>"+
						"<div class='form-group'>"+
							"<br>"+
							"<div class='ui selection dropdown'>"+
					  "<input type='hidden' name='adult'>"+
					  "<i class='dropdown icon'></i>"+
					  "<div class='default text'>adult</div>"+
					  "<div class='menu'>"+
					    "<div class='item' data-value='1'>1</div>"+
					    "<div class='item' data-value='2'>2</div>"+
					    "<div class='item' data-value='3'>3</div>"+
					    "<div class='item' data-value='4'>4</div>"+
					    "<div class='item' data-value='5'>5</div>"+
					    "<div class='item' data-value='6'>6</div>"+
					    "<div class='item' data-value='7'>7</div>"+
					    "<div class='item' data-value='8'>8</div>"+
					    "<div class='item' data-value='9'>9</div>"+
					    "<div class='item' data-value='10'>10</div>"+
					  "</div>"+
					"</div>"+

						"</div>"+
					"</div>"+
			
					"<div class='col-xs-3'>"+
						"<div class='form-group'>"+
							"<br>"+
						"<div class='ui selection dropdown'>"+
						  "<input type='hidden' name='gender'>"+
						  "<i class='dropdown icon'></i>"+
						  "<div class='default text'>childern</div>"+
						  "<div class='menu'>"+
						    "<div class='item' data-value='1'>1</div>"+
						    "<div class='item' data-value='2'>2</div>"+
						    "<div class='item' data-value='3'>3</div>"+
						    "<div class='item' data-value='4'>4</div>"+
						    "<div class='item' data-value='5'>5</div>"+
						    "<div class='item' data-value='6'>6</div>"+
						    "<div class='item' data-value='7'>7</div>"+
						    "<div class='item' data-value='8'>8</div>"+
						  "</div>"+
						"</div>"+

						"</div>"+
					"</div>";
                         
                 function adad(){

                        var d= document.getElementById("number").value-1;
                        
                        
		                     var rowHTML= "";
		                    for(var i=0 ; i < d ; i++)
		                    {
		                     rowHTML = rowHTML+ alt;
		                    }
		                    add.innerHTML = rowHTML;

             		   
           			 };
        		
         	$("body").niceScroll({
			cursorcolor:"aquamarine",
			cursorwidth:"0px"
			});
   // function add1(){
			// var d= document.getElementById("number").value;
			
			// for(i=0;i<d;i++)
			// {
			// 	h=document.createElement("label");
   //               	h.innerHTML="Room "+i;
   //               	a=document.getElementById("items");
                 	
   //               	a.appendChild(h);
                 	
   //            }

   //               	};         
