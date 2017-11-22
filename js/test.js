$(document).ready(function(){
	$('.elem_n').click(function(){
		move_elem(this);
		check_win();
	});
});

function move_elem(elem){
	var num = $(elem).text();
	var x = $(elem).attr('x');
	var y = $(elem).attr('y');
	var x_e = $('.empty').attr('x');
	var y_e = $('.empty').attr('y');
	if(x==x_e && Math.abs(y-y_e)==1 || Math.abs(x-x_e)==1 && y==y_e){
		$('.empty').text(num);
		$('.empty').removeClass('empty');
		$(elem).text('');
		$(elem).addClass('empty');
	}
}

function check_win(){
	var condition = true;
	var num = 0;
	$('.elem_n').each(function(n,elem){
		if(n>14){return;}
		//console.log(n,parseInt(num,10), parseInt($(elem).text(),10),parseInt(num,10) > parseInt($(elem).text(),10));
		if(parseInt(num,10) > parseInt($(elem).text(),10) || $(elem).text()==''){
			//console.log(n,parseInt(num,10), parseInt($(elem).text(),10));
			condition = false;
		}
		num = $(elem).text();
	});
	if(condition){
		alert('You win!');
	}
}

function mix(){
	var variants, x_e, y_e;

	for(var i=0; i<120; i++){
		variants = [];
		x_e = parseInt($('.empty').attr('x'),10);
		y_e = parseInt($('.empty').attr('y'),10);

		if(x_e == 1){
			variants.push(1);
		} else if(x_e == 4) {
			variants.push(2);
		} else {
			variants.push(1);
			variants.push(2);
		}

		if(y_e == 1){
			variants.push(3);
		} else if(y_e == 4) {
			variants.push(4);
		} else {
			variants.push(3);
			variants.push(4);
		}

		rand_key = selfRandom(variants);

		switch(rand_key) {
			case 1:
				console.log('RIGHT');
				x_e = x_e+1;
				break;
			case 2:
				console.log('LEFT');
				x_e = x_e-1;
				break;
			case 3:
				console.log('DOWN');
				y_e = y_e+1;
				break;
			case 4:
				console.log('UP');
				y_e = y_e-1;
				break;
		}

		move_elem($('.elem_n[x='+x_e+'][y='+y_e+']'));
	}

	function selfRandom(list){
		//return Math.floor(Math.random() * (max - min + 1)) + min;
		return list[Math.floor((Math.random()*list.length))];
	}
}