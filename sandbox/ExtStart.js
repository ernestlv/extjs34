
Ext.onReady(function() {

	// Note: For the purposes of following along with the tutorial, all 
	// new code should be placed inside this method.  Delete the following
	// line after you have verified that Ext is installed correctly.
	
	var myDiv = Ext.get('myDiv');
	myDiv.highlight();
	myDiv.addClass('red');
	myDiv.center();
	myDiv.setOpacity(.25);
	Ext.select('p').highlight();
	Ext.get('myButton').on('click', function(){
		alert('you clicked the button');	
	});
	Ext.select('p').on('click', function(){
		alert('you clicked the paragraph');
	});
});