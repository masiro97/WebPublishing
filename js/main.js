	function getDate(){
    	document.getElementById('div1').innerHTML = Date();
    }
	function getName(){
    	document.getElementById('div2').innerHTML = '½ÅÇý¿µ';
    }
    function changeStyle(num){
    	var p1 = document.getElementById('msg');
        var h = document.getElementById('title');
    	
        if(num == 1){
    	p1.style.color='green';
        p1.style.fontSize ='20px';
        p1.style.backgroundColor ='lightyellow';
        }
        
        if(num ==2){
        	h.style.color = 'green';   	
        }
    }
    
    function setImage(num){
    
    	var img1 = document.getElementById('img1');
    	var img2 = document.getElementById('img2');
        var img3 = document.getElementById('img3');
        if(num == 1) {img1.src = 'https://cdn.pixabay.com/photo/2017/06/18/21/37/rose-2417334__480.jpg'}
        if(num == 2){
        img1.src = 'https://cdn.pixabay.com/photo/2017/11/03/17/20/sun-flower-2914972__480.png'}
        if(num == 3){
        	img2.src = 'https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610863__480.jpg';
        }
        if(num == 4){
        	img2.src = 'https://cdn.pixabay.com/photo/2017/07/19/03/13/pot-2517765__480.jpg';
        }
        if(num == 5){
        	img2.src = 'https://cdn.pixabay.com/photo/2015/03/24/06/45/chijimi-687155__480.jpg';
        }
    }
    
    function setImage2(imgsrc){
    	document.getElementById('img3').src = imgsrc;
    }
    function hideImage(){
    	document.getElementById('rose').style.display = "none";
    }	