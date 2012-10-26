var parseFormData = function(data){
	//console.log(data);

};

var clearStorage = function(){
	localStorage.clear();
	alert('emplyees cleared');
	$('#checkPeople').click();
}

var resetForm = function($form) {
    $('#assetAdder').val('');
    $('#model').prop("selected", false);
	$('option:selected').prop("selected", false);
	$('#mission').prop("selected", false);
	$('#nameField').val('');
    
}

var storer = function(id, pname, pmodel, pjob, pmission, pdate){
	var data = {}
		data['name'] = ["name", pname];
		data['model'] = ["model", pmodel]; 
		data['job'] = ["job", pjob];
		data['mission'] = ["mission", pmission]; 
		data['date'] = ["date", pdate];

	localStorage.setItem(id, JSON.stringify(data));
	//console.log(JSON.stringify(json));
}

//var storer = function(id ,name, model, job, mission, experience, date){
//	var data = ("[name:"+name+"] [Model:"+model+"] [Job:"+job+"] [Mission:"+mission+"] [Experience:"+experience+"] [Date:"+date+"]");
//
//	localStorage.setItem(id, data);
//}

var loadDefaultData = function(){
	for (var key in json) {
			//var id = Math.floor(Math.random()*10000000000);
			var m = json[key]['date'][0];
			var d = json[key]['date'][1];
			var y = json[key]['date'][2];
			var date = (m+"-"+d+"-"+y);
			var m = m *= 100000;
			var d = d *= 1000;
			var y = y *= 1000000000;
			var name = json[key]['name'][1];
			var model = json[key]['model'][1];
			var job = json[key]['job'][1];
			var mission = json[key]['mission'][1];
			var id = (m += d +=y + name);
			//console.log(d);
			//console.log(json[key]['date'][0]);

			storer(id, name, model, job, mission, date);
			//localStorage.setItem(id, JSON.stringify(json[key]));
		}
}

var displayPeople = function(filterItem){
	$('#openHumanResources').click();
	var clearB = ('#clearButton');
	if (localStorage.length <= 1) {
		loadDefaultData();
		alert("localStorage is empty");
		}
	//console.log("display people is running now");
	$('#members').empty('.itemsListed').trigger('create');
	var members = $('#members');
	var directorFilter = $('<li><a href="#" id="findDirectors">Show Directors</a></li>');
	var composerFilter = $('<li><a href="#" id="findComposers">Show Composers</a></li>');
	var writerFilter = $('<li><a href="#" id="findWriters">Show Writers</a></li>');
	var producerFilter = $('<li><a href="#" id="findProducers">Show Producers</a></li>');
	var unfilter = $('<li><a href="#" id="undoFind">Show All</a></li>');

	var filterBar = $('<div></div>');
	members.append(filterBar).trigger('create');
	filterBar.attr('data-role', 'navbar');
	var crucialUL = $('<ul></ul>');
	

	
	//members.attr('data-filter', 'true');
	var resources = $('#resources');
	var clearButton = $('<a href="#" id="clearB" style="margin-bottom:10%;top:-40px">Clear Employees</a>');
	members.append(clearButton).trigger('create');
	filterBar.append(crucialUL).trigger('create');
	
	crucialUL.append(directorFilter).trigger('create');
	
	crucialUL.append(composerFilter).trigger('create');
	
	crucialUL.append(writerFilter).trigger('create');
	
	crucialUL.append(producerFilter).trigger('create');
	
	crucialUL.append(unfilter).trigger('create');
	var dfilter = $('#findDirectors').attr('data-role', 'button');
	dfilter.attr('data-mini', 'true');
	dfilter.css('float', 'right');
	dfilter.css('margin', '10px');
	var cfilter = $('#findComposers').attr('data-role', 'button');
	cfilter.attr('data-mini', 'true');
	cfilter.css('float', 'right');
	cfilter.css('margin', '10px');
	var wfilter = $('#findWriters').attr('data-role', 'button');
	wfilter.attr('data-mini', 'true');
	wfilter.css('float', 'right');
	wfilter.css('margin', '10px');
	var pfilter = $('#findProducers').attr('data-role', 'button');
	pfilter.attr('data-mini', 'true');
	pfilter.css('float', 'right');
	pfilter.css('margin', '10px');
	var ufilter = $('#undoFind').attr('data-role', 'button');
	ufilter.attr('data-mini', 'true');
	ufilter.css('float', 'right');
	ufilter.css('margin', '10px');
	clearButton.attr('id', 'clearButton');
	clearButton.attr('data-role', 'button');
	clearButton.attr('data-theme', 'a');
	clearButton.attr('href', '#');
	clearButton.attr('value', 'clear');
	var clearB = $('#clearB');
	var DC = $('#findDirectors');
	clearButton.click(clearStorage);
	
	clearButton.css('float', 'right');
	clearButton.css('margin', '40px');
	clearButton.css('top', '-85px');
	clearButton.css('left', '170px');
	clearButton.css('position', 'absolute');

	//var searchBar = $('<label for="search-basic">Search Input:</label><input type="search" data-filter="true" name="search" id="search-basic" value="members" />');
	//members.append(searchBar);
	//$('#search-basic').textinput();
	
	
	//<label for="search-basic">Search Input:</label>
	//<input type="search" name="search" id="searc-basic" value="" />
	for (var n in localStorage){
			var thing = localStorage.getItem(n);
			var value = JSON.parse(thing);
		if ((value['name']) && (value['job'])) {
		
			//var person = $('<ul></ul>');
			var html = "";
			var person = $('<li id="person"></li>');
			var name = value['name'][1];
			var model = value['model'][1];
			var job = value['job'][1];
			var mission = value['mission'][1];
			var date = [value['date'][1]];			
			/*
			person.attr('id', n);
			person.attr('data-role', 'listview');
			person.attr('class', 'itemsListed');
			var formLineName = ('<div data-role="fieldcontain"  class="itemsListed"><label for="name" id="label" style="font-size:small">Name:</label><input type="text" value="'+name+'" data-mini="true" class="required" name="name" id="name"  data-mini="true" style="display:block;width:90%"/></div>');
			var formLineModel = ('<div data-role="fieldcontain"  class="itemsListed"><label for="model" data-mini="true">Role Model:</label><select id="model"   name="model" data-mini="true" class="required validate" data-native-menu="true"><option data-placeholder="true" value="'+model+'">Asset\'s current role-model is '+model+'</option><option value="Lean">David Lean</option><option value="Hitchcock">Alfred Hitchcock</option><option value="Welles">Orson Welles</option><option value="Lucas">George Lucas</option><option value="Wilder">Billy Wilder</option><option value="Leone">Sergio Leone</option><option value="Spielberg">Steven Spielberg</option><option value="Akira">Akira Kurasawa</option><option value="Disney">Walt Disney</option><option value="Kubrick">Stanley Kubrick</option></select></div>');
			var formLineJob = ('<div data-role="fieldcontain"   class="itemsListed"><label for="job" data-mini="true">Asset\'s Job:</label><select id="job"   name="job" data-mini="true" class="required validate" data-native-menu="true"><option data-placeholder="true" value="'+job+'">Asset\'s current job is '+job+'.</option><option value="Director">Director</option><option value="Writer">Writer</option><option value="Photographer">Photographer</option><option value="Producer">Producer</option><option value="Editor">Editor</option><option value="Composer">Composer</option><option value="Artist">Artist</option></select></div>');
			members.append(person);
			person.append(formLineName);
			person.append(formLineModel);
			person.append(formLineJob);
			*/
			// Procedure, identify and assign values to each form field.
			// one variable per item, which is then assigned to the value of the default form field options.
			// submit button not a typical form field submit button. It's a jquery "click" function, which simply 
			// sets the item in localstorage with the values input with the date and names-based key, and deletes
			// the item with the original key if the new key is different from the original.
			members.append("<br/>").trigger('create');
			//members.append(person).trigger('create');

			var colDiv = $("<div id='"+n+"' data-theme='e' class="+job+" data-filtertext='"+name+" "+model+" "+job+" "+mission+" "+date+"'></div>'");
			//var h1 = (name);
			members.append(colDiv).trigger('create');
			
			var secretStuff = $('<h1>'+name+'</h1>');
			colDiv.append(secretStuff);
			
			//secretStuff.attr('collapsed', 'true');
			//colDiv.append(h1);
			//html += ("<li data-filtertext='"+name+" "+model+" "+job+" "+mission+" "+date+"'><a href='#' id='"+n+"'>"+name+"</a></li>");
			//html += ("<li id='"+n+"'><a href='#'>"+name+" "+" "+model+" "+job+" "+experience+" "+mission+" "+date+"</a></li>");
			var image = ('<img src="./images/'+job+'.jpg" style="left:-35%;width:50px"></img>');
			var formLineName = ('<div data-role="fieldcontain"  class="itemsListed"><label for="name" id="label">Name:</label><input type="text" value="'+name+'" data-mini="true" class="required" name="name" id="name"  data-mini="true"></input></div>');
			var formLineModel = ('<div data-role="fieldcontain"  class="itemsListed"><label for="model" data-mini="true">Role Model:</label><select id="model"   name="model" data-mini="true" class="required validate" data-native-menu="true"><option data-placeholder="true" value="'+model+'">Asset\'s current role-model is '+model+'</option><option value="Lean">David Lean</option><option value="Hitchcock">Alfred Hitchcock</option><option value="Welles">Orson Welles</option><option value="Lucas">George Lucas</option><option value="Wilder">Billy Wilder</option><option value="Leone">Sergio Leone</option><option value="Spielberg">Steven Spielberg</option><option value="Akira">Akira Kurasawa</option><option value="Disney">Walt Disney</option><option value="Kubrick">Stanley Kubrick</option></select></div>');
			var formLineJob = ('<div data-role="fieldcontain"   class="itemsListed"><label for="job" data-mini="true">Asset\'s Job:</label><select id="job"   name="job" data-mini="true" class="required validate" data-native-menu="true"><option data-placeholder="true" value="'+job+'">Asset\'s current job is '+job+'.</option><option value="Director">Director</option><option value="Writer">Writer</option><option value="Photographer">Photographer</option><option value="Producer">Producer</option><option value="Editor">Editor</option><option value="Composer">Composer</option><option value="Artist">Artist</option></select></div>');
			var formLineMission = ('<div data-role="fieldcontain"><label for="mission" data-mini="true">Asset\'s Motivation:</label><select id="mission" name="mission" data-mini="true" class="required validate" data-native-menu="true"><option data-placeholder="true" value='+mission+'>Asset\'s motivation is currently '+mission+'.</option><option value="informational">informational</option><option value="imperative">imperative</option><option value="interrogatory">interrogatory</option><option value="entertainment">entertainment</option><option value="profit">profit</option><option value="declarative">declarative</option><option value="exclamatory">exclamatory</option></select></div>');
			var saveButton = ('<a href="#" id="save'+n+'" data-mini="true" style="float:right">save settings</a>');
			var formLineDate = ('<label for="date" data-mini="true">Date Of Hire is '+date+'</label><input type="text" id="date" value="'+date+'"data-mini="true" class="required"></input>');
			$('#'+'save'+n).click(function(){
				var data = {}
				data.name = ['name', this.name.val()];
				data.model = ['model', this.model.val()];
				data.job = ['job', this.job.val()];
				data.mission = ['mission', this.mission.val()];
				data.date = ['date', this.date.val()];
				localStorage.setItem(n, JSON.stringify(data))});
			/*
			var butCode0 = ('<script type="text/javascript">');
			var butCode1 = ('var data = {}');
			var butCode2 = ('data["name"] = ["name", '+name+']');
			var butCode3 = ('data["model"] = ["model", '+model+']'); 
			var butCode4 = ('data["job"] = ["job", '+job+']');
			var butCode5 = ('data["mission"] = ["mission", '+mission+']'); 
			var butCode6 = ('data["date"] = ["date", '+date+']');
			var butCode7 = ('</script>');
			*/
			html += image;
			
			html += formLineName;
			html += formLineJob;
			html += formLineModel;
			html += formLineMission;
			html += formLineDate;
			html += saveButton;
			/*
			html += butCode0;
			html += butCode1;
			html += butCode2;
			html += butCode3;
			html += butCode4;
			html += butCode5;
			html += butCode6;
			html += butCode7;
			*/
			colDiv.append(html).trigger('create');
			secretStuff.attr('collapsible', 'true');
			colDiv.attr('data-role', 'collapsible');
			//$("ul.members").append(html).listview("refresh");
			//var html = "";
		}
	}


var showDirectors = function(){
	//console.log("show only directorsx`");
	$('.Editor').hide();
	$('.Composer').hide();
	$('.Producer').hide();
	$('.Writer').hide();
	$('.Artist').hide();
	$('.Photographer').hide();
}
var composers = function(){
	$('.Editor').hide();
	$('.Director').hide();
	$('.Producer').hide();
	$('.Writer').hide();
	$('.Artist').hide();
	$('.Photographer').hide();
}
var editors = function(){
	$('.Composer').hide();
	$('.Director').hide();
	$('.Producer').hide();
	$('.Writer').hide();
	$('.Artist').hide();
	$('.Photographer').hide();
}
var writers = function(){
	$('.Composer').hide();
	$('.Director').hide();
	$('.Producer').hide();
	$('.Editor').hide();
	$('.Artist').hide();
	$('.Photographer').hide();
}
var producers = function(){
	$('.Composer').hide();
	$('.Director').hide();
	$('.Editor').hide();
	$('.Writer').hide();
	$('.Artist').hide();
	$('.Photographer').hide();
}
var showEveryThing = function(){
	$('.Composer').show();
	$('.Director').show();
	$('.Producer').show();
	$('.Writer').show();
	$('.Artist').show();
	$('.Photographer').show();
	$('.Editor').show();
}
$("#date").datepicker(); 
directorFilter = $("#findDirectors");
composerFilter = $("#findComposers");
editorFilter = $("#findEditors");
writerFilter = $("#findWriters");
producerFilter = $("#findProducers");
unfilter = $("#undoFind");

composerFilter.click(composers);
editorFilter.click(editors);
writerFilter.click(writers);
producerFilter.click(producers);
unfilter.click(showEveryThing);
directorFilter.click(showDirectors);
//directorFilter.click(showDirectors);

}




var addPeople = function(){
	alert("addPeople has been clicked");
	
}	

var displayProject = function(){
	alert("viewProject has been clicked");
}


var submitAsset = function(){
alert("asset has been added");
}




$(document).bind("pageinit", function() {

	if (localStorage.length <= 1){
		//$('#members').loadJSON(json.js);
	}

	var assetAdder = $('#assetAdder');
	var memberFormErrors = $('#memberFormErrors');
	$('#checkPeople').click(displayPeople);
	$('#openPeople').click(displayPeople);
	$('#addPeople').click(addPeople);
	$('#viewProject').click(displayProject);
	$('#resetButton').click(resetForm);


assetAdder.validate({
	invalidHandler: function(form, validator){
		var html = "";
		if (pageupdate === true){
			$('#errorDialog').empty(html);
			$('#errorDialog ul').html("ul");	
			var pageupdate = false;
		}
		
		memberFormErrors.click();
		for (var key in validator.submitted) {
			var label = $('label[for^="' + key + '"]').not('[generated]');
			//console.log(label.text());
			//console.log($('label[for^="' + key + '"]'));
			var lineInsert = label.text();
			html = (html += '<li>'+ lineInsert + ' Required Field.</li>');
			//console.log(lineInsert);
			$('#errorDialog ul').html(html);
			var pageupdate = true;


		
		
		

	}

	},
	submitHandler: function(){
		var date = $('#date').datepicker( "getDate" );
		//var data = assetAdder.serializeArray();
		//data.join(',');
		// datepicker is stupid, and I've already got a bunch of plugins 
		//active, so I'll settle for this inelegant solution to the stupid 
		//extraneous data given by datepicker.
		//data = JSON.stringify(data);
		date = JSON.stringify(date);
		var model = $('#model').val();
		var job = $('#job').val();
		var mission = $('#mission').val();
		var name = $('#nameField').val();
		date.split('-');
		var y1 = date[1];
		var y2 = date[2];
		var y3 = date[3];
		var y4 = date[4];
		var year = (y1+y2+y3+y4);
		//console.log(year);
		var m1 = date[6];
		var m2 = date[7];
		var month = (m1+''+m2);
		//console.log(month);
		var d1 = date[9];
		var d2 = date[10];
		var day = (d1+''+d2);
		//console.log(day);
		//console.log(name+model+mission+job);
		parseFormData(data);
		var date = (month+"-"+day+"-"+year);
		
		var m = parseInt(month);
		var d = parseInt(day);
		var y = parseInt(year);
		var m = m *= 100000;
		var d = d *= 1000;
		var y = y *= 1000000000;
		
		var id = (m += d += y + name);
		var data = ("name:"+name+"Model:"+model+"Job:"+job+"Mission:"+mission+"Date:"+date);
		storer(id, name, model, job, mission, date);
		console.log(name);
		submitAsset();
	},
});



//initialisation common to all pages
$("#date").datepicker(); 
$.getJSON('js/json.js', function(data) {
$('#resources').data(data);

});
});
