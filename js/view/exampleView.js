//ExampleView Object constructor
var ExampleView = function (container,model) {
 
 
 // dish.html   dish name, image and description specified by ID
 this.dishname = container.find("#dishname");
 this.dishimage = container.find("#dishimage");
 this.dishpreparation = container.find("#dishpreparation");

 this.dishname.html(model.getDish(1).name);
 this.dishimage.html("<img src=images/" + model.getDish(1).image + ">");
 this.dishpreparation.html(model.getDish(1).description); 
 
 
 // dish.html    ingredients box
 this.dishingredients = container.find("#dishingredients");

 this.ingredientlist = model.getDish(1).ingredients;
 var ingredients = [];
 ingredients = ingredients.concat(model.getDish(1).ingredients);
 
 this.dishingredients.html("");
 dishprice = 0;
 for (var key in ingredients) {
	 text = ["<div class=row> <div class=col-xs-1>" + this.ingredientlist[key].quantity*model.getNumberOfGuests() + "</div>" + "<div class=col-xs-1>" + this.ingredientlist[key].unit + "</div>" + "<div class=col-xs-6>" + this.ingredientlist[key].name + "</div>" + "<div class=col-xs-1> SEK </div>" + "<div class=col-xs-2>" + this.ingredientlist[key].price*model.getNumberOfGuests() + "</div> </div>"];
	 this.dishingredients.append(text) ;
	 dishprice += this.ingredientlist[key].price*model.getNumberOfGuests();
 }
 this.totaldishprice = container.find("#dishprice");
 this.totaldishprice.html(dishprice);
 
 
 // load full menu + full menu price 
 this.fullMenu = model.getFullMenu();
 this.totalmenuprice = container.find("#totalMenuPrice");
 this.totalmenuprice.html(model.getTotalMenuPrice());


 // dinnersummary Menu
 this.dinnersummary = container.find("#dinnersummary");
 this.dinnersummary.html(" <h3> My Dinner </h3>");
 // num guests
 this.dinnersummary.append("<p> Number of guests: <span id='numberOfGuests'></span> </p> <button id='minusGuest' class='btn'><span class='glyphicon glyphicon-minus'></span></button> <button id='plusGuest' class='btn'><span class='glyphicon glyphicon-plus'></span></button> <br>");
 // add top row
 this.dinnersummary.append("<div id='namecost' class='row'> <div class='col-xs-1'> Dish </div> <div class='col-xs-5'> Name </div> <div class='col-xs-1'> Cost </div> </div>");               
 // add row for each dish in menu			                    
  for (key in model.getFullMenu()) {
	 text = ["<div class='row'> <div class='col-xs-1'> " + this.fullMenu[key].id + " </div> <div class='col-xs-5'>" + this.fullMenu[key].name + "</div> <div class='col-xs-2'> " + model.getDishPrice(this.fullMenu[key].id) + " </div> <div class='col-xs-1'> <button id='delete' class='btn'><span class='glyphicon glyphicon-remove'></span> </button> </div></div> "];
	this.dinnersummary.append(text); 	
	}                 
 // add confirm button if there is a dish selected
if (this.fullMenu[0]){
	this.dinnersummary.append(" <br> <a href='overview.html'> <button id='button' class='btn'>Confirm dinner</button> </a>");
} else {
	this.dinnersummary.append(" <br> <button id='inactivebutton' class='btn'>Confirm dinner</button>");
}
	


 // overview.html
 this.dinneroverview = container.find("#dinneroverview");
 this.dinneroverview.html("");
 
 for (key in model.getFullMenu()) {
	 text = ["<div class=col-sm-3> <div id=dish> <img src=images/" + this.fullMenu[key].image + "> <h4 align=center> " + this.fullMenu[key].name + " </h4> </div> " + model.getDishPrice(this.fullMenu[key].id) + "</div>"]
	this.dinneroverview.append(text); 	
	}
 
  // dinner_preparation.html
 this.dinnerprep = container.find("#dinnerpreparation");
 this.dinnerprep.html("");
 
 for (key in model.getFullMenu()) {
	 text = ["<div class=row style=padding-top:20px> <div class='col-xs-1'></div> <div class='col-sm-3 col-md-2'> <br> <img src=images/" + this.fullMenu[key].image + " style=border:3px solid black> </div> <div class=col-sm-3> <h2> " + this.fullMenu[key].name + " </h2> <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. </p> </div> <div class=col-sm-5> <h2> Preparation </h2> <p> " + this.fullMenu[key].description + " </p> </div> </div>"]
	this.dinnerprep.append(text); 	
	}
  
 

// load all dishes      default = starter
this.allStarters = [] 
this.allStarters.push(model.getDish(1));
this.allStarters.push(model.getDish(2));
this.allStarters.push(model.getDish(3));

this.allMain = [];
this.allMain.push(model.getDish(100));
this.allMain.push(model.getDish(101));
this.allMain.push(model.getDish(102));

this.allDessert = [];
this.allDessert.push(model.getDish(200));
this.allDessert.push(model.getDish(201));
this.allDessert.push(model.getDish(202));


// selectdish.html     enter all dishes
this.allDishesContainer = container.find("#alldishes"); 
this.allDishesContainer.html("");

this.allDishes = this.allStarters.concat(this.allMain, this.allDessert);

for (key in this.allDishes) {
	this.allDishesContainer.append(" <div class='col-xs-6 col-md-4'> <div style='height:100px'> <a href='dish.html'><img src='images/" + this.allDishes[key].image + "'> </a> </div> <br> <h3> " + this.allDishes[key].name + " </h3> <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. </p> </div> ");
	
}

 
  // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 this.numberOfGuests = container.find("#numberOfGuests");
 this.plusButton = container.find("#plusGuest");
 this.minusButton = container.find("#minusGuest");
 
 this.numberOfGuests.html(model.getNumberOfGuests());
 
}
