window.onload = function() {
	var oUpd = document.getElementById('upd');
	var oView = document.getElementById('view');
	
	oUpd.addEventListener('change',function(){
		var files = this.files;
	//限定上传文件类型为图片
		// if (!/\/(?:jpegpnggif)/i.test(files.type)) {
  //       	return ;
  //   	}
     	var oImg = new Image();

    	oImg.onload = function() {
			var canvas = document.createElement('canvas');
			var context = canvas.getContext('2d');

			var originW = oImg.width;
			var originH = oImg.height;

			var maxW = 400, maxH = 400;
			var targW = originW, targH = originH;
			if(originW > maxW || originH > maxH) {
				if(originH/originW > maxH/maxW) {
					targH = maxH;
					targW = Math.round(maxH * (originW / originH));
				}else {
					targW = maxW;
					targH = Math.round(maxW * (originH / originW));
				}
			}
				//对图片进行缩放canvas.toblob
			canvas.width = targW;
			canvas.height = targH;
			//清除画布
			context.clearRect(0,0,targW,targH);
			//图片压缩
			context.drawImage(oImg,0,0,targW,targH);
			var newUrl = canvas.toDataURL('image/jpeg', 0.92);
			console.log('压缩',newUrl);
			//canvas转为blob并上传
			canvas.toBlob(function (blob) {
				// console.log(blob);
				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function () {
					if(xhr.status == 200) {
					}
				};

			},files.type || 'image/png');
			oView.appendChild(canvas);
		}

    	var reader = new FileReader();
		reader.readAsDataURL(files[0]);

		reader.onload = function (e) {
			var base64Code = this.result;
			oImg.src = base64Code;
			// console.log(base64Code);
		}

	},false);
}