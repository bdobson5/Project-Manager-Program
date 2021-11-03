// JavaScript Document
$("#consultant").change(function() {
	if ($(this).val()=="database"){
		$('#database').show();
		$('#design').hide();
		$('#programming').hide();
		$('#writing').hide();
	}
	else {
		$('#database').hide();
	}
}$("#consultant").change(function() {
	if ($(this).val()=="database"){