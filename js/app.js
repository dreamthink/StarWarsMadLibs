var app = angular.module("myApp", []);
	app.controller("MyController", function() {
		
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

	// define showSection as false to prevent display	
		this.showTextSection = false;
		this.showInputSection = false;

		this.showMadLibs = function() {
			this.showTextSection = true;
			this.showInputSection = true;
			console.log("I'm submitted");
		};

		this.resetMadLibs = function() {
			this.showTextSection = false;
			this.showInputSection = false;
			this.pluralnoun1 = "plural noun";
			this.verb1 = "verb";
			this.pluralnoun2 = "plural noun";
			this.pluralnoun3 = "plural noun";
			this.pluralnoun4 = "plural noun";
			this.noun1 = "noun";
			this.adjective1 = "adjective";
			this.pluralnoun5 = "plural noun";
			this.noun2 = "noun";
			this.noun3 = "noun";
			this.noun4 = "noun";
			this.verbEndingInIng = "verb ending in -ing";
			this.noun5 = "noun";
			this.verb2 = "verb";
			this.adverb1 = "adverb";
			this.noun6 = "noun";
		};

	});