var productsAll=[];

function Market(section){
	this.section=section;
}

Market.prototype.getSectionName=function() {
	return `SECTION: ${this.section} `;
}

function Section(nameItem,imageSrc,weight,price,section) {
	this.nameItem=nameItem;
	this.imageSrc=imageSrc;
	this.weight=weight;
	this.price=price;
	this.section=section;

	this.showWeight=function() {
		$('.weight').last().on('click',function(){
			getWeightPopShow(imageSrc,weight);
		});
	}
	this.showBuyMessage=function() {
		$('.buy').last().on('click',function(){
			alert("Bill for item: "+nameItem +"\n"+"Price: $ "+price);
			//getWeightPopShow(imageSrc,weight);
		});
	}
}

Section.prototype = new Market();

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

Section.prototype.getItemsInSections = function () {
	var listFruits = document.getElementById('fruits-list');
	var listVegetables = document.getElementById('vegetables-list');
	var listDairy = document.getElementById('dairy-list');
	var listMeatFish = document.getElementById('meat-fish-list');

	var newProduct = document.createElement('li');
	
	var imageSrc=document.createElement('img');
	imageSrc.setAttribute('src', this.imageSrc);
	newProduct.appendChild(imageSrc);

	var nameProduct=document.createElement('p');
	var nameProductText = document.createTextNode(this.nameItem); 
	nameProduct.appendChild(nameProductText);
	nameProduct.classList.add('name');
	newProduct.appendChild(nameProduct);

	var productPrice=document.createElement('p');
	var productPriceText = document.createTextNode('$ '+this.price); 
	productPrice.appendChild(productPriceText);
	productPrice.classList.add('price');
	var productWeight=document.createElement('span');
	productWeight.classList.add('weight');
	var productWeightText = document.createTextNode(this.weight+' gr'); 
	productWeight.appendChild(productWeightText);
	productPrice.appendChild(productWeight);
	newProduct.appendChild(productPrice);

	var buyProduct=document.createElement('a');
	var buyProductText = document.createTextNode('Buy'); 
	buyProduct.appendChild(buyProductText);
	buyProduct.setAttribute('href','#buy');
	buyProduct.classList.add('buy');
	newProduct.appendChild(buyProduct);

	var weightProduct=document.createElement('a');
	var weightProductText = document.createTextNode('Weight'); 
	weightProduct.appendChild(weightProductText);
	weightProduct.setAttribute('href','#weight');
	weightProduct.classList.add('weight');
	newProduct.appendChild(weightProduct);

	if(this.section.toLowerCase()==='fruits'){
		listFruits.appendChild(newProduct);
	}
	if(this.section.toLowerCase()==='vegetables'){
		listVegetables.appendChild(newProduct);
	}
    if(this.section.toLowerCase()==='dairy'){
		listDairy.appendChild(newProduct);
	}
	if(this.section.toLowerCase()==='meat-fish'){
		listMeatFish.appendChild(newProduct);
	}
}

productsAll[0]=new Section("Apple","img/fruits/apple.png",300,2.5,"Fruits");
productsAll[1]=new Section("Banana","img/fruits/banana.png",600,3.25,"Fruits");
productsAll[2]=new Section("Lemon","img/fruits/lemon.png",200,1.99,"Fruits");
productsAll[3]=new Section("Lime","img/fruits/lime.png",400,7.99,"Fruits");
productsAll[4]=new Section("Peach","img/fruits/peach.png",550,2.59,"Fruits");
productsAll[5]=new Section("Pear","img/fruits/pear.png",450,3.34,"Fruits");
productsAll[6]=new Section("Plum","img/fruits/plum.png",280,5.40,"Fruits");
productsAll[7]=new Section("Strawberry","img/fruits/strawberry.png",300,2.5,"Fruits");

productsAll[8]=new Section("Cabbage","img/vegetables/cabbage.png",700,3.5,"Vegetables");
productsAll[9]=new Section("Carrot","img/vegetables/carrot.png",120,1.5,"Vegetables");
productsAll[10]=new Section("Cucumber","img/vegetables/cucumber.png",340,2.85,"Vegetables");
productsAll[11]=new Section("Garlic","img/vegetables/garlic.png",90,0.75,"Vegetables");
productsAll[12]=new Section("Onion","img/vegetables/onion.png",500,6.99,"Vegetables");
productsAll[13]=new Section("Pepper","img/vegetables/pepper.png",640,7.75,"Vegetables");
productsAll[14]=new Section("Potato","img/vegetables/potato.png",1000,6.5,"Vegetables");
productsAll[15]=new Section("Tomato","img/vegetables/tomato.png",650,8.5,"Vegetables");

productsAll[16]=new Section("Coffee","img/dairy/coffee.png",200,7.99,"Dairy");
productsAll[17]=new Section("Milk","img/dairy/milk.png",1000,14.30,"Dairy");
productsAll[18]=new Section("Sour cream","img/dairy/sour-cream.png",200,2.75,"Dairy");
productsAll[19]=new Section("Cheese","img/dairy/cheese.png",850,9.75,"Dairy");

productsAll[20]=new Section("Chicken","img/meat-fish/chicken.png",2000,19.99,"Meat-Fish");
productsAll[21]=new Section("Meat","img/meat-fish/meat.png",1850,25.75,"Meat-Fish");
productsAll[22]=new Section("Crabsticks","img/meat-fish/crabsticks.png",600,18.25,"Meat-Fish");
productsAll[23]=new Section("Fish","img/meat-fish/fish.png",1200,9.75,"Meat-Fish");

for (product in productsAll) {
	productsAll[product].getItemsInSections();
	productsAll[product].showWeight();
	productsAll[product].showBuyMessage();
}

// Section.prototype.getName = function () {
// 	return `There are some ${this.nameItem}, weight is: ${this.weight}, price is: ${this.price} and SECTION: ${this.section}. `;
// }

// Section.prototype.getNavigation = function () {

// 	var list = document.getElementById('menu-list');
// 	var newSection = document.createElement('li');
	

//     var linkSection = document.createElement('a');
// 	var linkSectionText = document.createTextNode(this.section); 
// 	linkSection.appendChild(linkSectionText);
// 	linkSection.classList.add('section'); 
// 	if(this.section.toLowerCase()==='fruits'){
// 		linkSection.setAttribute("href","#fruits");
// 	}
// 	if(this.section.toLowerCase()==='vegetables'){
// 		linkSection.setAttribute("href","#vegetables");
// 	}
//     if(this.section.toLowerCase()==='dairy'){
// 		linkSection.setAttribute("href","#dairy");
// 	}
// 	if(this.section.toLowerCase()==='meat-fish'){
// 		linkSection.setAttribute("href","#meat-fish");
// 	}

// 	newSection.appendChild(linkSection); 

// 	list.appendChild(newSection);
   
// }