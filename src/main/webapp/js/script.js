$(document).ready(function() {
	"use strict"
	
	$("#categories").click(function(){
		$.ajax({
			url: "http://localhost:9090/tanov/rest/category",
			method: "GET",
			headers: {          
				 "Accept" : "application/json; charset=utf-8",         
			},
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
		var hash = $("#hash").val();
		var mapsloc1 = $("#mapsloc").val();
		if (name.length<=0 || url.length<=0 || hash.length<=0 || mapsloc.length<=0) {
			alert("You must enter all parameters for this image.");
			return false;
		}
			
		$.ajax({
			url: "http://localhost:9090/tanov/rest/image/123",
			method: "POST",
			headers: {          
				"Content-Type": "application/json"   
			},			
			data: {
				"id": "123",
				"content": "url",
				"hashtag": "hash",
				"map": "mapsloc1",
				"title": "name"
			},
			success: function(result1){
				alert("CECO");
			},
			error: function(result2){
				alert("CECI");
			}			
		});
	//return false;	
	});

	$("#list").click(function(){
		$.ajax({
			url: "http://localhost:9090/tanov/rest/image",
			method: "GET",
			headers: {          
				 "Accept" : "application/json; charset=utf-8",         
				"Content-Type": "application/json; charset=utf-8"   
			},
			success: function(result3){
				var obj1 = $.parseJSON(JSON.stringify(result3));
				var image = '';
				$.each(obj1, function() {
					image += "<br/>" + this['title'] + "<br/>" + this['hashtag'] + "<br/>" +'<img src="'+this["content"]+'">' + "<br/>" + this["map"] + "<br/>" + '<input type="button" id="delete'+this["id"]+'" class="btn btn-danger" data-id='+this["id"]+' value="Delete"/>' + "<br/>";
				});
				$("#div2").html('</br><input type="button" id="hideAll" value="Hide all images"/></br>'+image);
				$("#hideAll").click(function(){
					$("#div2").html('');
				});
				$(".btn-danger").click(function(){
					var user = $("#user").val()
					var pass = $("#pass").val()
					if (user=="admin"&&pass=="root") {
						$.ajax({		
							url: "http://localhost:9090/tanov/rest/image/"+($(this).data('id')),
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
			url: "http://localhost:9090/tanov/rest/image",
			method: "GET",
			headers: {          
				 "Accept" : "application/json; charset=utf-8",         
				"Content-Type": "application/json; charset=utf-8"   
			},			
			success: function(result5){
				var obj2 = $.parseJSON(JSON.stringify(result5));
				var image2 = '';
				$.each(obj2, function() {
					if(searchText==this['hashtag']){
						image2 += "<br/>" + this['title'] + "<br/>" + this['hashtag'] + "<br/>" +'<img src="'+this["content"]+'">' + "<br/>" + this["map"] + "<br/>" + '<input type="button" id="delete'+this["id"]+'" class="btn btn-danger" data-id='+this["id"]+' value="Delete"/>' + "<br/>";
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
				$(".btn-danger").click(function(){
					var user = $("#user").val()
					var pass = $("#pass").val()
					if (user=="admin"&&pass=="root") {
						$.ajax({		
							url: "http://localhost:9090/tanov/rest/image/"+($(this).data('id')),
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