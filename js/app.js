//Add Hover effect to menus
// jQuery('ul.nav ul.dropdown').hover(function() {
//   jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
// }, function() {
//   jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
// });


var recipes = {
	"mainCourse": {
		"vegetarian": [
		{
			"name": "Palak Kale Paneer",
			"recipeImages": ["http://lorempixel.com/150/150/food/1"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Paneer Pasanda",
			"recipeImages": ["http://lorempixel.com/150/150/food/2"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Paneer Chole",
			"recipeImages": ["http://lorempixel.com/150/150/food/3"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Vegetable Paneer Kurma",
			"recipeImages": ["http://lorempixel.com/150/150/food/4"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Broccoli Paneer stir fry",
			"recipeImages": ["http://lorempixel.com/150/150/food/5"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Stuffed Bhindi Paneer",
			"recipeImages": ["http://lorempixel.com/150/150/food/6"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Besan Bhindi",
			"recipeImages": ["http://lorempixel.com/150/150/food/7"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Bhindi Paneer",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		}],
		"nonVegetarian": [
		{
			"name": "Kolhapuri Chicken Curry",
			"recipeImages": ["http://lorempixel.com/150/150/food/4"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Kolhapuri Mutton Curry",
			"recipeImages": ["http://lorempixel.com/150/150/food/5"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Chettinad Chicken Masala",
			"recipeImages": ["http://lorempixel.com/150/150/food/6"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Chicken Tikka Masala",
			"recipeImages": ["http://lorempixel.com/150/150/food/1"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Chicken Tikka Masala",
			"recipeImages": ["http://lorempixel.com/150/150/food/1"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		}
		]
	},
	"snacks": [
		{
			"name": "Tandoori Paneer Tikka",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Vegetable Tikka",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Alu Tikki",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Ragda Pattice",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Batata Vada",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Kolhapuri Misal Pav",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		}
		],
	"rice": [
		{
			"name": "Spinach Pulav",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Vegetable Pulav",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Vegetable Biryani",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Egg Biryani",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Chicken Biryani",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Masale Bhaat",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Dahi Bhaat",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Vangi Bhaat",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		},
		{
			"name": "Moong Khichadi",
			"recipeImages": ["http://lorempixel.com/150/150/food/"],
			"ingredients": ["A 1 tsp", "B 1 tsp", "C 2 tsp", "D 1 tbsp", "E 1 tsp", "F 2 in number"],
			"desc": "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt.",
			"tips": "",
			"datePosted": ""
		}
		],
	"desserts": [],
	"spiceMixes": []
};

var recipeName = '<a href=""><h4 class="recipe-name" style="color:#000000;font-weight:lighter;font-size:14px;">%data%</h4></a>';
var recipeImg = '<a href=""><img style="float:left" class="img-responsive recipe-image" src="%data%" alt="%altdata%"></a>';
var rightArrowImage = '<a href=""><img style="margin-top:80px;" class="img-responsive rightArrowImage" src="images/right-arrow.png"></a>'

// document.getElemenetById("recipeCol1").innerHTML = formattedRecipeName;		//not working


var colCount;	//id column count for snacks row
var tempColName = "#recipeCol"; //to hold string of id so to append and increment colCount later as below
var iWhile = 0;					//counter for while loop
var maxCount;
var i;
var vegCount, nonVegCount, snacksCount; //the count to remember which recipe to show when the previous 3 recipes fadeout when viewer wants to see more and when clicks

//main course vegetarian
colCount = 1;
i=recipes.mainCourse.vegetarian.length;	//recipes.mainCourse.nonVegetarian length
if (i>=4) {				//checking if recipes object have atleast 4 mainCourse-nonVegetarian items to fit into 4 columns; if there are atleast 4 or more, compare count iWhile with 3
	maxCount = 3;
} else {				//else compare iWhile with whatver array length of mainCourse.nonVegetarian[] is
	maxCount = i-1;
}

while(iWhile <= maxCount) {
	colName = tempColName + colCount;
	var formattedRecipeName = recipeName.replace("%data%", recipes.mainCourse.vegetarian[iWhile].name);
	$(colName).append(formattedRecipeName);
	var formattedRecipeImageSrc = recipeImg.replace("%data%", recipes.mainCourse.vegetarian[iWhile].recipeImages[0]);
	var formattedRecipeImage = formattedRecipeImageSrc.replace("%altdata%", recipes.mainCourse.vegetarian[iWhile].name);
	//following code appends rightArrowImage to the last rightmost recipe image. the reason for comenting out this block is below written under function arrowClick()
	/* if (iWhile===3) {
	// 	$(colName).append(formattedRecipeImage+rightArrowImage);
	 } else*/
	$(colName).append(formattedRecipeImage);
	colCount = colCount + 1;
	iWhile = iWhile + 1;
	vegCount = iWhile; 	//this count is needed to rememeber where we left off and to show which next 3 recipes to show, the array index needs to be remembered.
}

//main course non-vegetarian
colCount = 5;
i=recipes.mainCourse.nonVegetarian.length;	//recipes.mainCourse.nonVegetarian length
if (i>=4) {				//checking if recipes object have atleast 4 mainCourse-nonVegetarian items to fit into 4 columns; if there are atleast 4 or more, compare count iWhile with 3
	maxCount = 3;
} else {				//else compare iWhile with whatver array length of mainCourse.nonVegetarian[] is
	maxCount = i-1;
}

iWhile = 0;				//resetting iWhile count = 0
while(iWhile <= maxCount) {
	colName = tempColName + colCount;
	var formattedRecipeName = recipeName.replace("%data%", recipes.mainCourse.nonVegetarian[iWhile].name);
	$(colName).append(formattedRecipeName);
	var formattedRecipeImageSrc = recipeImg.replace("%data%", recipes.mainCourse.nonVegetarian[iWhile].recipeImages[0]);
	var formattedRecipeImage = formattedRecipeImageSrc.replace("%altdata%", recipes.mainCourse.nonVegetarian[iWhile].name);
	$(colName).append(formattedRecipeImage);
	colCount = colCount + 1;
	iWhile = iWhile + 1;
}

//snacks
colCount = 9;
i=recipes.snacks.length;	//recipes.snacks length
if (i>=4) {				//checking if recipes object have atleast 4 snacks to fit into 4 columns; if there are atleast 4 or more, compare count iWhile with 3
	maxCount = 3;
} else {				//else compare iWhile with whatver array length of snacks[] is
	maxCount = i-1;
}

iWhile = 0;				//resetting iWhile count = 0
while(iWhile <= maxCount) {
	colName = tempColName + colCount;
	var formattedRecipeName = recipeName.replace("%data%", recipes.snacks[iWhile].name);
	$(colName).append(formattedRecipeName);
	var formattedRecipeImageSrc = recipeImg.replace("%data%", recipes.snacks[iWhile].recipeImages[0]);
	var formattedRecipeImage = formattedRecipeImageSrc.replace("%altdata%", recipes.snacks[iWhile].name);
	$(colName).append(formattedRecipeImage);
	colCount = colCount + 1;
	iWhile = iWhile + 1;
}

//Rice
colCount = 13;
i=recipes.rice.length;	//recipes.snacks length
if (i>=4) {				//checking if recipes object have atleast 4 snacks to fit into 4 columns; if there are atleast 4 or more, compare count iWhile with 3
	maxCount = 3;
} else {				//else compare iWhile with whatver array length of snacks[] is
	maxCount = i-1;
}

iWhile = 0;				//resetting iWhile count = 0
while(iWhile <= maxCount) {
	colName = tempColName + colCount;
	var formattedRecipeName = recipeName.replace("%data%", recipes.rice[iWhile].name);
	$(colName).append(formattedRecipeName);
	var formattedRecipeImageSrc = recipeImg.replace("%data%", recipes.rice[iWhile].recipeImages[0]);
	var formattedRecipeImage = formattedRecipeImageSrc.replace("%altdata%", recipes.rice[iWhile].name);
	$(colName).append(formattedRecipeImage);
	colCount = colCount + 1;
	iWhile = iWhile + 1;
}

//WORKING FEATURE=>following function shows all recipes when clicked on links "Main Course Vegetarian", "Main Course Non Vegetarian", "Snacks" etc..
function allMainVegRecipesShow(rowId, recipeArray) {
	// following if block checks the row number and accordingly assigns the colCount
	if(rowId=="#row1"){
		colCount = 1;		//column counter to display recipes in particular column
	} else if(rowId=="#row2"){
		colCount = 5;		//column counter to display recipes in particular column
	}else if(rowId=="#row3"){
		colCount = 9;		//column counter to display recipes in particular column
	}else if(rowId=="#row4"){
		colCount = 13;		//column counter to display recipes in particular column
	}

	maxCount = recipeArray.length;	//total number of recipes in array
	iWhile = 4;			//recipe counter
	var cell;
	var columnCount = colCount; // used to recall original column number, e.g when columnCount=5, then when colCount>8, colCount=columnCount=5

	while(iWhile < maxCount) {
		colName = tempColName + colCount;
		//cell = rowId + " " + colName;
		var formattedRecipeName = recipeName.replace("%data%", recipeArray[iWhile].name);
		$(colName).append(formattedRecipeName);   //$(rowId colName).append(formattedRecipeName); didn't work as the space needed to be converted into string
		var formattedRecipeImageSrc = recipeImg.replace("%data%", recipeArray[iWhile].recipeImages[0]);
		var formattedRecipeImage = formattedRecipeImageSrc.replace("%altdata%", recipeArray[iWhile].name);
		$(colName).append(formattedRecipeImage);
		colCount = colCount + 1;
		//following code block makes sure to show recipes only in columns columnCount, columnCount+1, columnCount+2, columnCount+3
		if (colCount>columnCount+3)
			colCount = columnCount;
		iWhile = iWhile + 1;
	}
}
