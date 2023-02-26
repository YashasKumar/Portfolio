var circle = document.getElementById('ball') // stores the values of the ball in html
var play=document.getElementById('playground') // stores the values of the playground in html
var moveBy = 3 //the number of steps the ball moves by
var points = 0 //score
var lef=new Array(10); //stores the value of left position of each block
var to=new Array(10); // stores the value of top position of each block

window.addEventListener('load', () =>
{
   circle.style.position = 'absolute'

   circle.style.top = 480

   circle.style.left = 0
  
//checking random left and top values to the blocks and making sure the blocks dont intersect each other
var i = 0;
while (i < 10) {
  var count = 1;
  var y = Math.floor(Math.random() * 900);
  var b = Math.floor(Math.random() * 400);
  if(i==0)
  {
	lef[0]=y;
	to[0]=b;
	i++;
	continue;
   }
  for(var a=0;a<=i;a++)
  	{
	 if(((y+24)<=(lef[a]+26) && (y+24)>=lef[a])||(y>=lef[a] && y<=(lef[a]+26))){
		count=0;
		if((b<=(to[a]+26) && b>=to[a])||((b+24)<=(to[a]+27) && (b+24)>=to[a])){
					count=0;
					break;
				}
			}
	}
  if (count == 1) {
    lef[i] = y;
    to[i]=b;
    i++;
  }
}

//assigning those random values
document.getElementById('box1').style.left=lef[0];
document.getElementById('box2').style.left=lef[1];
document.getElementById('box3').style.left=lef[2];
document.getElementById('box4').style.left=lef[3];
document.getElementById('box5').style.left=lef[4];
document.getElementById('box6').style.left=lef[5];
document.getElementById('box7').style.left=lef[6];
document.getElementById('box8').style.left=lef[7];
document.getElementById('box9').style.left=lef[8];
document.getElementById('box10').style.left=lef[9];

document.getElementById('box1').style.top=to[0];
document.getElementById('box2').style.top=to[1];
document.getElementById('box3').style.top=to[2];
document.getElementById('box4').style.top=to[3];
document.getElementById('box5').style.top=to[4];
document.getElementById('box6').style.top=to[5];
document.getElementById('box7').style.top=to[6];
document.getElementById('box8').style.top=to[7];
document.getElementById('box9').style.top=to[8];
document.getElementById('box10').style.top=to[9];

//timer
var count = 0;
var limit = 15;

const interval = setInterval(timer_15,1000);  //calls function after every 1 second

function timer_15(){
      count = count+1;

      document.getElementById("time").innerHTML =( limit - count ) ;
      

      if(count == 15){ 
        document.getElementById("section").style = "opacity:0.5;"; 
        document.getElementById("final").style = "opacity:1;"; 
        document.getElementById("headi").style = "opacity:0;";
	document.getElementById("score").style = "opacity:0;";
	document.getElementById("headin").style = "opacity:0;";
	document.getElementById("time").style = "opacity:0;";
	document.getElementById("poin").innerHTML="Your score: "+points;
        clearInterval(interval); //this will stop setInterval() function from calling again
      		}
	}	
});


//Game begins
window.addEventListener('keydown', (e) =>
{  
   //moving the ball
   switch (e.key)
   {
      case 'ArrowLeft':
         circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
         break

      case 'ArrowRight':
         circle.style.left = parseInt(circle.style.left) + moveBy + 'px'
         break

      case 'ArrowUp':
         circle.style.top = parseInt(circle.style.top) - moveBy + 'px'
         break

      case 'ArrowDown':
         circle.style.top = parseInt(circle.style.top) + moveBy + 'px'
         break
   }
   if (circle.getBoundingClientRect().top >= 580)
   {
      circle.style.top = 480
   }

   if (circle.getBoundingClientRect().left <= 270)
   {
      circle.style.left = 0
   }

   if (circle.getBoundingClientRect().top <= 100)
   {
      circle.style.top = 0
   }

   if (circle.getBoundingClientRect().left >= 1202)
   {
      circle.style.left = 930
   }

   //checks if the ball is hitting any of the blocks and if yes then increase points by 10
   var l=parseInt(circle.style.left)
   var t=parseInt(circle.style.top)
   document.getElementById("score").innerHTML=points;
   var z;
	for(var s=0;s<10;s++){
	if((t>(parseInt(to[s])) && t<((parseInt(to[s]))+26))  && (((l>(parseInt(lef[s]))) && l<((parseInt(lef[s]))+26)) || (l+20)>parseInt(lef[s]) && (l+20)<((parseInt(lef[s]))+26))){
		to[s]=-40
		lef[s]=-40
		break;
		}
	else if(((t+20)>(parseInt(to[s])) && (t+20)<((parseInt(to[s]))+26)) && (((l>(parseInt(lef[s]))) && l<((parseInt(lef[s]))+26)) || (l+20)>parseInt(lef[s]) && (l+20)<((parseInt(lef[s]))+26))){
		to[s]=-40
		lef[s]=-40
		break;
		}
	else if((l>(parseInt(lef[s])) && l<((parseInt(lef[s]))+26))  && (((t>(parseInt(to[s]))) && t<((parseInt(to[s]))+26)) || (t+20)>parseInt(to[s]) && (t+20)<((parseInt(to[s]))+26))){
		to[s]=-40
		lef[s]=-40
		break;
		}
	else if(((l+20)>(parseInt(lef[s])) && (l+20)<((parseInt(lef[s]))+26))  && (((t>(parseInt(to[s]))) && t<((parseInt(to[s]))+26)) || (t+20)>parseInt(to[s]) && (t+20)<((parseInt(to[s]))+26))){
		to[s]=-40
		lef[s]=-40
		break;
		}
	}
  switch(s)
  {
	case 0:document.getElementById("box1").style="opacity:0;";
		points+=10;
		break; 
	case 1:document.getElementById("box2").style="opacity:0;";
		points+=10;
		break;
	case 2:document.getElementById("box3").style="opacity:0;";
		points+=10;
		break;	
	case 3:document.getElementById("box4").style="opacity:0;";
		points+=10;
		break;
	case 4:document.getElementById("box5").style="opacity:0;";
		points+=10;
		break;
	case 5:document.getElementById("box6").style="opacity:0;";
		points+=10;
		break;
	case 6:document.getElementById("box7").style="opacity:0;";
		points+=10;
		break;
	case 7:document.getElementById("box8").style="opacity:0;";
		points+=10;
		break;
	case 8:document.getElementById("box9").style="opacity:0;";
		points+=10;
		break;
	case 9:document.getElementById("box10").style="opacity:0;";
		points+=10;
		break;
 }
});


