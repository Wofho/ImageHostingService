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
			$("#div1").html('</br><input type="button" id="hideCat" value="Hide categories"/></br>'+title);
			$("#hideCat").click(function(){
				$("#div1").html('');
			});
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
					image += "<br/>" + this['title'] + "<br/>" + this['hashtag'] + "<br/>" +'<img src="'+this["content"]+'">' + "<br/>" + '<input type="button" id="delete'+this["id"]+'" value="Delete"/>' + "<br/>" + this["map"] + "<br/>";
				});
				$("#div2").html('</br><input type="button" id="hideAll" value="Hide all images"/></br>'+image);
				$("#hideAll").click(function(){
					$("#div2").html('');
				});
				$("#delete1").click(function(){
					var user = $("#user").val()
					var pass = $("#pass").val()
					if (user=="admin"&&pass=="root") {
						$.ajax({		
							url: "http://private-31331-ihs1.apiary-mock.com/images/1",
							method: "DELETE",
							success: function(result4){
								alert("Image successfully deleted.");
							}
						});
					} else {
						alert("You don't have admin rights.");
					}
				});
				$("#delete2").click(function(){
					var user = $("#user").val()
					var pass = $("#pass").val()
					if (user=="admin"&&pass=="root") {
						$.ajax({		
							url: "http://private-31331-ihs1.apiary-mock.com/images/1",
							method: "DELETE",
							success: function(result4){
								alert("Image successfully deleted.");
							}
						});
					} else {
						alert("You don't have admin rights.");
					}
				});
				$("#delete3").click(function(){
					var user = $("#user").val()
					var pass = $("#pass").val()
					if (user=="admin"&&pass=="root") {
						$.ajax({		
							url: "http://private-31331-ihs1.apiary-mock.com/images/1",
							method: "DELETE",
							success: function(result4){
								alert("Image successfully deleted.");
							}
						});
					} else {
						alert("You don't have admin rights.");
					}
				});
				
				
			}
		});
	});
	
	$("#searchByHash").click(function(){
		var searchText = $("#searchText").val()
		if (searchText.length<=0) {
			alert("You must enter a hashtag.");
			return false;
		}
		$.ajax({
			url: "http://private-31331-ihs1.apiary-mock.com/images/1",
			method: "GET",
			success: function(result5){
				var obj2 = $.parseJSON(JSON.stringify(result5));
				var image2 = '';
				$.each(obj2, function() {
					if(searchText==this['hashtag']){
						image2 += "<br/>" + this['title'] + "<br/>" + this['hashtag'] + "<br/>" +'<img src="'+this["content"]+'">' + "<br/>" + '<input type="button" id="delete'+this["id"]+'" value="Delete"/>' + "<br/>" + this["map"] + "<br/>";
					}
				});
				if(image2 != '') {
					$("#div3").html('</br><input type="button" id="hideAllHash" value="Hide all images"/></br>'+image2);
				} else {
					alert("No images found with this hashtag.");
				}
				$("#hideAllHash").click(function(){
					$("#div3").html('');
				});
				
				$("#delete1").click(function(){
					var user = $("#user").val()
					var pass = $("#pass").val()
					if (user=="admin"&&pass=="root") {
						$.ajax({		
							url: "http://private-31331-ihs1.apiary-mock.com/images/1",
							method: "DELETE",
							success: function(result4){
								alert("Image successfully deleted.");
							}
						});
					} else {
						alert("You don't have admin rights.");
					}
				});
				$("#delete2").click(function(){
					var user = $("#user").val()
					var pass = $("#pass").val()
					if (user=="admin"&&pass=="root") {
						$.ajax({		
							url: "http://private-31331-ihs1.apiary-mock.com/images/1",
							method: "DELETE",
							success: function(result4){
								alert("Image successfully deleted.");
							}
						});
					} else {
						alert("You don't have admin rights.");
					}
				});
				$("#delete3").click(function(){
					var user = $("#user").val()
					var pass = $("#pass").val()
					if (user=="admin"&&pass=="root") {
						$.ajax({		
							url: "http://private-31331-ihs1.apiary-mock.com/images/1",
							method: "DELETE",
							success: function(result4){
								alert("Image successfully deleted.");
							}
						});
					} else {
						alert("You don't have admin rights.");
					}
				});					
							
					
			}
		});
	});

	
	


});