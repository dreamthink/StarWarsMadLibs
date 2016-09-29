var app = angular.module("myApp", ['ngAnimate']);
	app.controller("MyController", function() {		

	// set initial input values as blank
		this.pluralnoun1 = "";
		this.verb1 = "";
		this.pluralnoun2 = "";
		this.pluralnoun3 = "";
		this.pluralnoun4 = "";
		this.noun1 = "";
		this.adjective1 = "";
		this.pluralnoun5 = "";
		this.noun2 = "";
		this.noun3 = "";
		this.noun4 = "";
		this.verbEndingInIng = ""; 
		this.noun5 = "";
		this.verb2 = "";
		this.adverb1 = "";
		this.noun6 = "";

	// set input section to show
		this.showInputSection = true;

	// set text section to not show
		this.showTextSection = false;
	

	// show text section, hide input
		this.showMadLibs = function() {
			if (this.myForm.$valid) {
				this.showInputSection = false;
				this.showTextSection = true;
			}
		};

		this.resetMadLibs = function() {
			this.pluralnoun1 = "";
			this.verb1 = "";
			this.pluralnoun2 = "";
			this.pluralnoun3 = "";
			this.pluralnoun4 = "";
			this.noun1 = "";
			this.adjective1 = "";
			this.pluralnoun5 = "";
			this.noun2 = "";
			this.noun3 = "";
			this.noun4 = "";
			this.verbEndingInIng = "";
			this.noun5 = "";
			this.verb2 = "";
			this.adverb1 = "";
			this.noun6 = "";
			this.showTextSection = false;
			this.showInputSection = true;
			this.myForm.$setPristine();
		};

	});	