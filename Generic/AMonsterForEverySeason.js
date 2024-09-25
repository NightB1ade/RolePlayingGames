function FilterUpdate() {
	var filterText = document.getElementById("Filter").value.toLowerCase();
	var tokenSection = document.getElementsByClassName("TokenSection");

	for (i = 0; i < tokenSection.length; i++) {
		var match = 0;
		var tokenRows = tokenSection[i].getElementsByClassName("TokenRow");

		if (
			tokenSection[i].getElementsByTagName("h1")[0].textContent
				.toLowerCase().indexOf(filterText) > -1
		) {
			tokenSection[i].style.display = "";

			for (j = 0; j < tokenRows.length; j++) {
				tokenRows[j].style.display = "";
			}
		} else {
			for (j = 0; j < tokenRows.length; j++) {
				var tokenRow = tokenRows[j];
				var name = tokenRow.getElementsByTagName("td")[0].textContent;

				if (name.toLowerCase().indexOf(filterText) > -1) {
					tokenRow.style.display = "";
					match = 1;
				} else {
					tokenRow.style.display = "none";
				}
			}

			if (match == 1) {
				tokenSection[i].style.display = "";
			} else {
				tokenSection[i].style.display = "none";
			}
		}
	}
}
