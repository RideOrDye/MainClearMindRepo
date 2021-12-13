//JS is appending to each ul in HTML 
const women = document.getElementById("women");
const men = document.getElementById("men");
const kids = document.getElementById("kids");
const activeware = document.getElementById("activeware");
const home = document.getElementById("home");
const beauty = document.getElementById("beauty");


//each list has to have their seperate UL. Struggled with this for a while. 
const womenUl = document.createElement("ul");
const menUl = document.createElement("ul");
const kidsUl = document.createElement("ul");
const activeUl = document.createElement("ul");
const homeUl = document.createElement("ul");
const beautyUl = document.createElement("ul");



//I had to make an array of objects to store subcategories.Started with individual arrays but couldnt make function reusable with so many arguments. 
const womenObject = {
	cat: [
		{
			name: "shoes",
			subCat: ["boots", "heels", "platform"],
		},
		{
			name: "bags",
			subCat: ["tote", "hand bags", "clutch"],
		},
		{
			name: "jewelry",
      subCat: ["bracelet", "earrings", "rings"],
      
		},
	],
	target: womenUl, //womenUl is declared at the top using document.createElement
	parent: women, //<a> tag from the html file
};

const menObject = {
	cat: [
		{
			name: "shoes",
			subCat: ["loafers", "oxfords", "slip-ons"],
		},
		{
			name: "accessories",
			subCat: ["hats", "wallet", "watch"],
		},
		{
			name: "clothing",
      subCat: ["jeans", "T-shirts", "joggers", "socks"]
		},
	],
	target: menUl,
	parent: men,
};

const kidsObject = {
	cat: [
		{
			name: "boys",
			subCat: ["shorts", "pants", "sweatshirts"],
		},
		{
			name: "girls",
			subCat: ["leggings", "tops", "jeans"],
		},
		{
			name: "baby",
      subCat: ["gender-neutral clothing", "blankets",  "baby shower"]
		},
	],
	target: kidsUl,
	parent: kids,
};

const activeObject = {
	cat: [
		{
			name: "Womens",
			subCat: ["Dresses", "Skorts", "Sports Bras"],
		},
		{
			name: "Mens",
			subCat: ["Jackets", "Shirts", "Sweats"],
		},
		{
			name: "Kids",
      subCat: ["Active Girls", "Active Boys"],
		},
	],
	target: activeUl,
	parent: activeware,
};

const homeObject = {
	cat: [
		{
			name: "Bath",
			subCat: ["Towels", "Bath Accessories"],
		},
		{
			name: "Bedding",
			subCat: ["Throws", "Pillows", "Duvets"],
		},
		{
			name: "Holiday Decor",
      subCat: ["Stationary", "Holiday Ornaments", "Tree Accessories"],
		},
	],
	target: homeUl,
	parent: home,
};

const beautyObject = {
	cat: [
		{
			name: "Beauty Brands",
			subCat: ["CHANNEL", "Dior", "MAC"],
		},
		{
			name: "Make-up",
			subCat: ["Blush", "Highlighters", "Nail Polish"],
		},
		{
			name: "Skin Care",
      subCat: ["Cleanser", "Facial Masks", "Serums"],
		},
	],
	target: beautyUl,
	parent: beauty,
};


// this function accepts object, each of my objects has 3 properties; cat, target, and parent
const makeUL = (obj) => {
	//looing through the "cat" property to create the first level dropdown
	for (var i = 0; i < obj.cat.length; i++) {
    //iterating through the names of first set of categories
		let emptyItem = obj.cat[i].name;
		let item = document.createElement("li");
    //appending the empty li with iteration items
		item.appendChild(document.createTextNode(emptyItem));

		// if statments indexing through subCat 
		if (obj.cat[i].subCat) {
			//creates a UL for sub category which is not displayed until mouseover
			const subUl = document.createElement("ul");
			subUl.style.display = "none";
			subUl.style.flexDirection = "column";
			subUl.style.paddingLeft = "40px";
			//second level is diplayed using mouseover and calling dropdown function
			item.addEventListener("mouseover", () => dropDown(subUl));
      
		   //for loop below iterates through the sub categories
			// uses 'j' since 'i' is used in the first loop
			for (var j = 0; j < obj.cat[i].subCat.length; j++) {
				const subLi = document.createElement("li");
				//appending subCat located inside cat property
				subLi.appendChild(document.createTextNode(obj.cat[i].subCat[j]));
				//subUl gets updated with subLis
				subUl.appendChild(subLi);
			}
			//first level category gets appended with subUl
		   item.appendChild(subUl);
		}
   //statements below execute as part of first for loop
   //appending ul in target property inside the obj 
	obj.target.appendChild(item);
    //prevents display. mouseover event in html <span> triggers display of first category
	obj.target.style.display = "none";
	obj.target.style.flexDirection = "column";
    //parent property is referencing  <a> and appended after loop runs
	obj.parent.appendChild(obj.target);
	}
}


const dropDown = (target) => {
	target.style.display = target.style.display === "flex" ? "none" : "flex";
}

makeUL(womenObject);
makeUL(menObject);
makeUL(kidsObject);
makeUL(activeObject);
makeUL(homeObject);
makeUL(beautyObject);
