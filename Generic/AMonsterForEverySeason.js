function FilterUpdate() {
	var filterText = document.getElementById("Filter").value.toLowerCase();
	var tokenSection = document.getElementsByClassName("TokenSection");
	var tokenRows = document.getElementsByClassName("TokenRow");

	for (i = 0; i < tokenSection.length; i++) {
		var match = 0;
		var names = tokenSection[i].getElementsByClassName("TokenName");

		for (j = 0; j < names.length; j++) {
			var name = names[j].textContent;

			if (name.toLowerCase().indexOf(filterText) > -1) {
				match = 1;
				break
			}
		}

		if (match == 1) {
			tokenSection[i].style.display = "";
		} else {
			tokenSection[i].style.display = "none";
		}
	}

	for (i = 0; i < tokenRows.length; i++) {
		var td = tokenRows[i].getElementsByTagName("td")[0];

		if (td) {
			var txt = td.textContent;

			if (txt.toLowerCase().indexOf(filterText) > -1) {
				tokenRows[i].style.display = "";
			} else {
				tokenRows[i].style.display = "none";
			}
		}
	}
}
