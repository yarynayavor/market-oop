var getWeightPopShow = function (imageSrc,weight) {
	var popup=document.createElement('div');
	popup.classList.add('pop-up-weight');
	document.body.appendChild(popup);
	var box=document.createElement('div');
	box.classList.add('box-weight');
	popup.appendChild(box);

	var img=document.createElement('img');
	img.setAttribute('src',imageSrc);
	box.appendChild(img);

	var span=document.createElement('span');
	spanText=document.createTextNode((weight/1000).toFixed(2)+' kg');
	span.appendChild(spanText);
	box.appendChild(span);

	setTimeout(function() { 
		$('.pop-up-weight').fadeOut(500);
	}, 1000);
}

var getBuyingProduct = function (curName,curWeight,curSection,curPrice) {
	var listBasket=document.getElementById('basket-list');
	var newBuyingProduct=document.createElement('li');

	var nameSpan = document.createElement('span');
	var nameSpanText = document.createTextNode(curName);
	nameSpan.appendChild(nameSpanText); 
	nameSpan.classList.add('prName'); 
	newBuyingProduct.appendChild(nameSpan);

	var weightSpan = document.createElement('span');
	var weightSpanText = document.createTextNode((curWeight/1000).toFixed(2)+' kg');
	weightSpan.appendChild(weightSpanText); 
	weightSpan.classList.add('prWeight'); 
	newBuyingProduct.appendChild(weightSpan);

	var sectionSpan = document.createElement('span');
	var sectionSpanText = document.createTextNode(curSection);
	sectionSpan.appendChild(sectionSpanText); 
	sectionSpan.classList.add('prSection'); 
	newBuyingProduct.appendChild(sectionSpan);

	var amountSpan = document.createElement('span');
	var amountSpanText = document.createTextNode(1);
	amountSpan.appendChild(amountSpanText); 
	amountSpan.classList.add('prAmount'); 
	newBuyingProduct.appendChild(amountSpan);

	var priceSpan = document.createElement('span');
	var priceSpanText = document.createTextNode('$ '+curPrice);
	priceSpan.appendChild(priceSpanText); 
	priceSpan.classList.add('prPrice'); 
	newBuyingProduct.appendChild(priceSpan);

	listBasket.appendChild(newBuyingProduct);
}

function getTotal() {
    var getPrice=document.querySelectorAll('.prPrice');
    var getAmount=document.querySelectorAll('.prAmount');
    var matchPriceArr=[];
    for (var i = 0; i < getPrice.length; i++) {
    	var textPrice=getPrice[i].textContent;
    	var amount=getAmount[i].textContent;
    	var matchPrice = textPrice.match(/\d{1,2}.{2,}/);
    	var matchPriceJoin = matchPrice.join('');
    	matchPriceArr.push(matchPriceJoin*amount);
    	for (var j = 0; j< matchPriceArr.length; j++) {
    		var total = eval(matchPriceArr.join('+')).toFixed(2);
    	}
    }
	return total;
}

function checkDublicates(nameOfProduct) {
	var getNameOfProduct=document.querySelectorAll(".prName");
	var getAmount=document.querySelectorAll('.prAmount');
	for (var i = 0; i < getNameOfProduct.length; i++) {
		var value=getNameOfProduct[i].textContent;
		if((value==nameOfProduct)) {
		    getAmount[i].textContent=parseInt(getAmount[i].textContent)+1;
            return true;
		}
	}
	return false;
}

function getTotalAmount() {
	var getAmount=document.querySelectorAll('.prAmount');
	var amountArr=[];
    for (var i = 0; i < getAmount.length; i++) {
    	var textAmount=getAmount[i].textContent;
    	var amountmatch = textAmount.match(/\d/g);
    	var amountJoin = amountmatch.join('');
    	amountArr.push(amountJoin);
    	for (var j = 0; j< amountArr.length; j++) {
    		var amount = eval(amountArr.join('+'));
    	}
    }
	return amount;
}

var ifFifteenOrMore= function () {
	var listBasket=document.getElementById('basket-list');
	var li = listBasket.getElementsByTagName('li'); 
	var amount=getTotalAmount();

	if(amount<15) {
		alert("We have a system that requires you to purchase at least 15 items.\nYou should buy "+(15-amount)+" more to get a total bill.");
	}
	if(amount>=15) {
		var yourPrice=getTotal();
	}
	if(amount===15) {
		var basketMain=document.getElementById('basket-main');
		var total=document.createElement('p');
		var totalText=document.createTextNode('Total: $ '+yourPrice);
		total.appendChild(totalText);
		total.setAttribute('id','total');
		basketMain.appendChild(total);
	}
	if(amount>15) {
		document.getElementById('total').textContent='Total: $ '+yourPrice;
	}
}