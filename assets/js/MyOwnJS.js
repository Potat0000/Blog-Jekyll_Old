function EnterPress(e) {
	var e = e || window.event;
	if (e.keyCode == 13) {
		var child = document.getElementById("password");
		if ($("#password").val() == "1234") {
			$("#password").remove();
		} else {
			$("#password").val() = "";
		}
	}
}