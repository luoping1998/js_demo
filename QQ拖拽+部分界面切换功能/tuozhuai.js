window.onload=drag;

function drag(){

	var oDiv=document.getElementById("window");
	var oUp=document.getElementById("up");
	var aLi=oUp.getElementsByTagName("li");
	var oClose=aLi[2];
	var oXuan=document.getElementById('xuanxiang');
	var oWord=document.getElementById("word");
	var aCheck=document.getElementsByName("choice");

	var oShowCancle=document.getElementById("showcancle"); //
	var oQq=oShowCancle.getElementsByTagName('img')[0];	//qq图标进入登陆
	var oFirst=document.getElementById("first"); 
	var oAfter=document.getElementById("after");
	var aBtn=oAfter.getElementsByTagName("input");

	aCheck[1].onclick=function(){

		aCheck[0].checked=true;
	}

	for(var i=0;i<2;i++){

		aLi[i].index=i;

		aLi[i].onmouseover=function(){
			aLi[this.index].style.backgroundColor="rgba(225,225,225,0.4)";
		}

		aLi[i].onmouseout=function(){
			aLi[this.index].style.backgroundColor="rgb(0,194,236)";
		}
	}

	var oStatus=document.getElementById("status");
	var oSel=document.getElementById("sel");
	oSel.onclick=oStatus.onclick=function(e){

		window.event? window.event.cancelBubble = true : e.stopPropagation();
		oSel.style.display='block';
	}
	
	document.onclick=function(){
		oSel.style.display='none';
	}

	oClose.onclick=function(){
		oDiv.style.display='none';
	}

	oClose.onmouseover=function(){
		oClose.style.backgroundColor="rgb(212,64,39)";
	}

	oClose.onmouseout=function(){
		oClose.style.backgroundColor="rgb(0,194,236)";
	}

	oDiv.onmousedown=move;
	var aGray=[];

	var oSta=document.getElementById("status");
	var oImg=oSta.getElementsByTagName("img")[0];

	var aImg=oSel.getElementsByTagName("img");
	var aGray=getClass(oSel,'gray');
	var aStat=getClass(oSel,'stat');

	for(var i=0;i<aImg.length;i++){
		aStat[i].index=aGray[i].index=aImg[i].index=i;
		aStat[i].onclick=aGray[i].onclick=aImg[i].onclick=function(){

			oImg.src=aImg[this.index].src;
			window.event? window.event.cancelBubble = true : e.stopPropagation();
		}
	}

	var oAdd=document.getElementById("add");
	var oEr=document.getElementById('er');
	var oEr2=document.getElementById("er2");

	var oDown=document.getElementById("down");
	var oAddShow=document.getElementById("add_show");

	oAdd.onmouseover=function(){
		oAdd.src='bai2.png';
	}

	oAdd.onmouseout=function(){
		oAdd.src='bai1.png';
	}

	oEr2.onmouseover=oEr.onmouseover=function(){
		oEr2.src=oEr.src="er2.png";
	}
	oEr2.onmouseout=oEr.onmouseout=function(){
		oEr2.src=oEr.src='er1.png';
	}

	var oErShow=document.getElementById("er_show");
	var oErBig=document.getElementById('er_img');
	var oErImg=document.getElementById("biger");
	var oSaoEr=document.getElementById("sao");

	var oReturn =oErShow.getElementsByTagName("input")[0];

	oEr2.onclick=oEr.onclick=function(){
		window.event? window.event.cancelBubble = true : e.stopPropagation();
		oShowCancle.style.display='none';
		oErShow.style.display='block';
		console.log(1);
	}

	oErBig.onmouseover=function(){
		oErImg.style.left='0px';
		oSaoEr.style.display='block';
	}

	oErBig.onmouseout=function(){
		oSaoEr.style.display='none';
		oErImg.style.left='20%';
	}

	aBtn[1].onclick=oAdd.onclick=function(){
		oDown.style.display='none';
		oAddShow.style.display='block';
	}

	var oConfirm=oAddShow.getElementsByTagName("input")[0];
	var oCancle=oAddShow.getElementsByTagName("input")[1];

	oConfirm.onmouseover=oCancle.onmouseover=function(){
		this.style.backgroundColor='rgba(38,133,227,0.3)'
	}

	oConfirm.onmouseout=oCancle.onmouseout=function(){
		this.style.backgroundColor='white';
	}

	//返回页面，取消进去多用户登录页面
	oCancle.onclick=function(){
		window.event? window.event.cancelBubble = true : e.stopPropagation();
		oErShow.style.display=oAddShow.style.display='none';
		oDown.style.display='block';
	}

	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;

		aBtn[i].onmouseover=function(){
			aBtn[this.index].style.backgroundColor='rgba(38,133,227,0.3)';
		}
		aBtn[i].onmouseout=function(){
			aBtn[this.index].style.backgroundColor='white';
		}
	}


 	oConfirm.onclick=function(){
 		window.event? window.event.cancelBubble = true : e.stopPropagation();
 		oShowCancle.style.display='block';
 		oFirst.style.display='none';
 	}

 	var oLogin=document.getElementById("log");
 	var oSafe=document.getElementById("safe");

 	oSafe.onmouseover=oLogin.onmouseover=oReturn.onmouseover=function(){
 		oSafe.style.backgroundColor=oLogin.style.backgroundColor=oReturn.style.backgroundColor='rgb(60,195,245)';
 	}

 	oSafe.onmouseout=oLogin.onmouseout=oReturn.onmouseout=function(){
 		oSafe.style.backgroundColor=oLogin.style.backgroundColor=oReturn.style.backgroundColor='rgb(9,163,220)';
 	}
	//进入确定添加多用户页面
	oReturn.onclick=oQq.onclick=function(){
		window.event? window.event.cancelBubble = true : e.stopPropagation();
		oErShow.style.display=
		oAfter.style.display=
		oAddShow.style.display=
		oShowCancle.style.display='none';

		oFirst.style.display=
		oWord.style.display=
		oXuan.style.display=
		oDown.style.display='block';
	}

	oQq.onmouseover=function(){
		oQq.src='qq2.png';
	}

	oQq.onmouseout=function(){
		oQq.src='qq.png';
	}

	var oAddQQ=document.getElementsByName("add")[0];//进入安全登陆界面
	
	oAddQQ.onclick=function(){
		window.event? window.event.cancelBubble = true : e.stopPropagation();
		oAfter.style.display=oDown.style.display='block';

		oAddShow.style.display=
		oWord.style.display=
		oXuan.style.display='none';

	}
}

function move(){
	var oDiv=document.getElementById("window"),
		disX=event.clientX-oDiv.offsetLeft,
		disY=event.clientY-oDiv.offsetTop;

	//移动
	document.onmousemove=function(event){

		event=event||window.event;

		var L=event.clientX-disX,
			T=event.clientY-disY,
			winW=document.documentElement.clientWidth||document.body.clientWidth,
			winH=document.documentElement.clientHeight||document.body.clientHeight;
		
		//限制可以到达的边界
		
		var maxW=winW-oDiv.offsetWidth,
			maxH=winH-oDiv.offsetHeight;

		if(L<=0){
			L=0;
		}
		else if(L>=maxW){
			L=maxW;
		}

		if(T<=0){
			T=0;
		}
		else if(T>=maxH){
			T=maxH;
		}

		oDiv.style.left=L+'px';
		oDiv.style.top=T+'px';

	}
	//释放鼠标
	document.onmouseup=function(){

		document.onmousemove=null;
		document.onmouseup=null;
	}

}

function getClass(oParent,sClass){

	var aEle=oParent.getElementsByTagName("*");
	var aRe=[];

	for(var i=0;i<aEle.length;i++){

		if(aEle[i].className==sClass){

			aRe.push("aEle[i]");
		}
	}
	return aRe;
}

