
/*var loadDefaultData = function(){
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
*/
$(document).bind("pageinit", function() {

});

var loadXML = function() {
	$('#targetAlpha').empty();
	$.ajax({
	url: 'xhr/xml.xml',
	type: 'GET',
	dataType: 'xml',
	success: function(results) {
	    $(results).find("person").each(function() {
		var name = $(this).find('name').text();
		var model = $(this).find('model').text();
		var job = $(this).find('job').text();
		$(''+
		  '<div>'+ 
		  '<li>'+name+'</li>'+
		  '<li>'+model+'</li>'+
		  '<li>'+job+'</li>'+
		  '</div>').appendTo('#targetAlpha');
});
}
});
}
var loadJSON = function(){
	console.log("response");
	$('#targetAlpha').empty()
$.ajax({
	url: "xhr/json.json",
	type: "GET",
	contentType: "application/json; charset=utf-8",
	dataType: "text",
	success: function(response){
			
		
		
		var entry = JSON.stringify(response);
		//var entry = JSON.parse(entry);
		var name = $(this).find('name').text();
		var model = $(this).find('model').text();
		var job = $(this).find('job').text();
		var entry = entry.replace(/\\/g, '');
		var entry = entry.replace(/ttnt/g, '');
		var entry = entry.replace(/\{/g, '');
		var entry = entry.replace(/\}/g, '');
		var entry = entry.replace(/\ntntt/g, '');
		var entry = entry.replace(/\": "/g, ':');
		var entry = entry.replace(/\":/g, ':');
		var entry = entry.replace(/\ntntt/g, '');
		var entry = entry.replace(/\tnt/g, '');
		var entry = entry.replace(/\'" "/g, '');
		var entry = entry.replace(/\"n"/g, '');
		var entry = entry.replace(/\"nt,ntntt"/g, '');

		var entry = entry.replace(/\"tntntntt"/g, '');
		var entry = entry.replace(/\"tnt,ntntt"/g, '');
		var entry = entry.replace(/\",ntntt"/g, '');
		var entry = entry.replace(/",ntt"/g, '<br/>');
		var entry = entry.replace(/name/g, '<br/><br/>name');
		var entry = entry.replace(/":"/g, ":");
		var entry = entry.replace(/tnt},nt{ntt"": "/g, '');
		var entry = entry.replace(/_id/g, '');
		var entry = entry.replace('ntt', " ");
		var entry = entry.replace('nt', " ");
		var entry = entry.replace(/\"/g, '');
		
		$('#targetAlpha').append(entry);

		//$('#targetAlpha').append(response);
		//var entrya = (name + " " + job + " " + model + " ");
		//$('#targetAlpha').append(entrya);
	}
});
}
var csv;
var outPut = function(){
	console.log(csv);
}
var loadCSV = function() {
	$('#targetAlpha').empty();
    $.ajax({
	url: 'xhr/csv.csv',
	type: 'GET',
	dataType: 'text',
	success: function(data){
	    var line = data.split('\n');
	    for(var i=0, j=line.length; i<j; i++){
		var thing = line[i];
		var items = thing.split(',');
		$('' +
		  '<div>' + 
		  '<li>' + items[0] + '</li>' + 
		  '<li>' + items[1] + '</li>' +
		  '<li>' + items[2] + '</li>' +
		  '</div><br/>' 
		  ).appendTo('#targetAlpha');


	    };
	}
    });
}
































$('#XML').click(loadXML);
$('#JSON').click(loadJSON);
$('#CSV').click(loadCSV);

