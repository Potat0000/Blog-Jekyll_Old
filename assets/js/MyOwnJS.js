function EnterPress(e) {
	var e = e || window.event;
	if (e.keyCode == 13) {
		var child = document.getElementById("password");
		if ($("#password").text() == "{{ page.possword }}") {
			$("#password").remove();
		} else {
			$("#password").text() = "";
		}
	}
}