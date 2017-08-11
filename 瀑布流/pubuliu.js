window.onload=function () {

	waterFall();
	var arr=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg',
			 '6.jpg','7.jpg','8.jpg','9.jpg','10.gif',
			 '11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
			 '16.jpg','17.jpg','18.jpg','19.jpg','20.jpg',
			 '21.jpg','22.jpg','23.jpg','24.jpg','25.jpg',
			 '26.jpg','27.jpg','28.jpg','29.jpg','30.jpg',
			 '31.jpg','32.jpg','33.jpg','34.jpg','35.jpg',
			 '36.jpg','37.jpg','38.jpg','39.jpg','40.jpg'];
	window.onscroll=function(){
		var oMain=document.getElementById("main");
		if(Check){
			for(var i=0;i<arr.length;i++){
			var oBox=document.createElement("div");
			oBox.className='box';
			oMain.appendChild(oBox);
			var oPic=document.createElement("div");
			oPic.className='pic';
			oBox.appendChild(oPic);
			var oImg=document.createElement("img");
			oImg.src=arr[i];
			oPic.appendChild(oImg);
			}
			waterFall();
		}
	}

}

//为第一行之后的数据块设置位置
function waterFall(){

	var oMain=document.getElementById("main");
	var aBox=getByClass(oMain,'box');
	var oBoxW=aBox[0].offsetWidth;
	var oScreenW=document.documentElement.clientWidth;

	var cols=Math.floor(oScreenW/oBoxW);   //对列数取整

	oMain.style.cssText='width:'+cols*oBoxW+'px;margin:0 auto;';   //让main居中		

	var arrH=[];   //存储每一列的长度

	for(var i=0;i<aBox.length;i++){
		if(i<cols){
			arrH.push(aBox[i].offsetHeight);
		}
		else{
			var minH=Math.min.apply(null,arrH);
			var index=GetMinIndex(arrH,minH);		//获取最短列的索引
			
			aBox[i].style.cssText='position:absolute;';
			aBox[i].style.left=aBox[index].offsetLeft+'px';
			aBox[i].style.top=minH+'px';
			arrH[index]+=aBox[i].offsetHeight;
		}
	}

}

function getByClass(obj,claName){

	var oArr=obj.getElementsByTagName("*");
	var aClass=[];

	for(var i=0;i<oArr.length;i++){
		if(oArr[i].className==claName){
			aClass.push(oArr[i]);
		}
	}

	return aClass;
}


//获取数组中最小值的索引
function GetMinIndex(arr,min){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==min){
			return i;
		}
	}
}

//检查是否满足加载数据块的条件
function Check(){
	var oMain=document.getElementById("main");
	var aBox=getByClass(oMain,'box');

	var oCom=aBox[aBox.length-1].offsetTop;
	var oScrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var oScreeH=document.body.clientHeight||document.documentElement.clientHeight;
	return (oCom<=oScrollTop+oScreeH)?true:false;
}