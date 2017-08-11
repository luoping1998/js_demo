window.onload=move;

function move() {
	var oMain=document.getElementById("main");
	var oUl=oMain.getElementsByTagName("ul")[0];

	var oList=document.getElementById("list");

	var timer=null;
	var timer2=null;
	var timer3=null;

	var oLeft=document.getElementById('left');
	var oRight=document.getElementById("right");
	var last_index=1;

	var firstLi=document.createElement("li");
	var lastLi=document.createElement("li");
	var aLi=oUl.getElementsByTagName("li");

	firstLi.innerHTML=aLi[aLi.length-1].innerHTML;
	lastLi.innerHTML=aLi[0].innerHTML;

	oUl.appendChild(lastLi);
	oUl.insertBefore(firstLi,oUl.firstChild);
	oUl.style.width=aLi.length*1000+'px';
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		if(i<aLi.length-2){
			var aDiv=document.createElement("div");
			aDiv.className='spoint';
			aDiv.index=i+1;
			oList.appendChild(aDiv);
		}
	}

	var aImg=oMain.getElementsByTagName("img");

	for(var i=0;i<aImg.length;i++){

		aImg[i].index=i;
		aImg[i].onmouseenter=function(){
			clearTimeout(timer2);
			clearTimeout(timer);
			var iTarget=-(this.index)*1000;
			last_index=this.index;
			startMove(iTarget);
			Black();
		}
	}

	oMain.onmouseleave=function(){
		clearTimeout(timer3);
		timer3=setTimeout(auto,4000);
	}
	oMain.onmouseenter=function(){
		clearTimeout(timer3);
	}

	var aSpoint=oList.getElementsByTagName("div");

	for(var i=0;i<aSpoint.length;i++){

		aSpoint[i].onclick=function(e){

			clearTimeout(timer);
			clearTimeout(timer3);
			var iTarget=-(this.index)*1000;
			startMove(iTarget);
			last_index=this.index;
			console.log('dian:'+this.index);
			Black();
		}

		aSpoint[i].onmouseover=function(){
			aSpoint[this.index-1].style.backgroundColor='rgba(0,0,0,0.4)';		
		}

		aSpoint[i].onmouseout=function(){
			aSpoint[this.index-1].style.backgroundColor='rgba(255,255,255,0.4)';
			Black();
		}
	}

	function Black(){
		for(var i=0;i<aSpoint.length;i++){
			if(aSpoint[i].index==last_index){
				aSpoint[i].style.backgroundColor='rgba(0,0,0,0.4)';
			}
			else{
				aSpoint[i].style.backgroundColor='rgba(255,255,255,0.4)';
			}
		}
	}

	oLeft.onclick=function(e){
		
		oLeft.style.backgroundColor='rgba(0,0,0,0.8)';
		oLeft.style.color='rgba(255,255,255,0.8)';
		clearTimeout(timer3);
		clearTimeout(timer);
		
		if(last_index==1){
			oUl.style.left=-(aSpoint.length+1)*1000+'px';
			last_index=aSpoint.length+1;
		}
		var iTarget=-(last_index-1)*1000;
		last_index=last_index-1;
		console.log('left:'+last_index);
		startMove(iTarget);
		Black();
	}

	oRight.onclick=function(e){
		oRight.style.backgroundColor='rgba(0,0,0,0.8)';
		oRight.style.color='rgba(255,255,255,0.8)';
		clearTimeout(timer);
		clearTimeout(timer3);
		
		if(last_index==aSpoint.length){
			oUl.style.left='0px';
			last_index=0;
		}
		var iTarget=-(last_index+1)*1000;
		last_index=last_index+1;
		console.log('right:'+last_index);
		startMove(iTarget);
		Black();
	}

	oLeft.onmouseout=oRight.onmouseout=function(){
		oLeft.style.color=oRight.style.color='rgba(0,0,0,0.4)';
		oRight.style.backgroundColor=oLeft.style.backgroundColor='rgba(255,255,255,0.4)';
	}

	oRight.onmouseover=oLeft.onmouseover=function(e){
		clearTimeout(timer3);
		clearTimeout(timer2);
		clearTimeout(timer);
		var iTarget=-(last_index)*1000;
		startMove(iTarget);
		Black();
		oLeft.style.backgroundColor='rgba(0,0,0,0.4)';
		oLeft.style.color='rgba(255,255,255,0.4)';
		oRight.style.backgroundColor='rgba(0,0,0,0.4)';
		oRight.style.color='rgba(255,255,255,0.4)';
		console.log('clear');
	}

	function startMove(iTarget){

		clearTimeout(timer);
		timer=setTimeout(function(){
			
			var oUl=document.getElementsByTagName("ul")[0];
			var now=oUl.offsetLeft;
			var speed=(iTarget-now)/10;
			
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			oUl.style.left=oUl.offsetLeft+speed+'px';

			if(oUl.offsetLeft==iTarget){

				clearTimeout(timer);
			}
			startMove(iTarget);
		},30);
	}

	function auto(){

		clearTimeout(timer);
		clearTimeout(timer2);
		if(last_index==aSpoint.length){
			oUl.style.left='0px';
			last_index=0;
		}
		var iTarget=-(last_index+1)*1000;
		last_index=last_index+1;
		startMove(iTarget);
		Black();
		console.log('1:'+last_index);
		timer2=setTimeout(auto,4000);
	}
	Black();
	timer3=setTimeout(auto,4000);

}
