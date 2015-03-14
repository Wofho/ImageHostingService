$(document).ready(function() {
	"use strict"
	
	
	$("#categories").click(function(){
		$.ajax({
			url: "http://private-31331-ihs1.apiary-mock.com/categories",
			method: "GET",
			success: function(result){
				var obj = $.parseJSON(JSON.stringify(result));
				var title = '';
				$.each(obj, function() {
					title += "<br/>" + this['title'];
				});
			$("#div1").html(title);
			}
		});
	});

	$("#upload").click(function(){
		var name = $("#name").val();
		var url = $("#url").val();

		if (name.length<=0 || url.length<=0) {
			alert("You must enter a name/URL for this image.");
			return false;
		}
			
		$.ajax({
			url: "http://private-31331-ihs1.apiary-mock.com/images/2",
			method: "POST",
			data: {
				id: 2,
				title: name,
				content: url,
			},
			success: function(result1){
				alert("Image successfully uploaded.");
			},
			error: function(result2){
				alert("Image not uploaded.");
			}
		});
	});

	$("#list").click(function(){
		$.ajax({
			url: "http://private-31331-ihs1.apiary-mock.com/images/1",
			method: "GET",
			success: function(result3){
				var obj1 = $.parseJSON(JSON.stringify(result3));
				var image = '';
				$.each(obj1, function() {
					image += "<br/>" + this['title'] + "<br/>" + this["content"] + "<br/>";
				});
				$("#div2").html(image);
			}
		});
	});	
	
	$("#delete").click(function(){
		var del = $("#del").val()
		if (del.length<=0) {
			alert("You must enter an ID.");
			return false;
		}
			$.ajax({		
				url: "http://private-31331-ihs1.apiary-mock.com/images/1",
				method: "DELETE",
				success: function(result4){
					alert("Image successfully deleted.");
				}
			});
	});	

});