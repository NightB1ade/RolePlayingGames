var SurnamesList;
var GivenNamesList;




function ClearResults() {
	document.getElementById("ResultsTable").innerHTML = "";
}




function ExplanationUpdate() {
	var form = document.getElementById("Configuration_Form");

	document.getElementById("SurnameTypeExplanation").innerText = SurnamesList[form.SurnameType.value].explanation;
	document.getElementById("GivenNameTypeExplanation").innerText = GivenNamesList[form.GivenNameCategory.value].type[form.GivenNameType.value].explanation;
	ClearResults();
}




function GenerateNames() {
	var html = "";

	var form = document.getElementById("Configuration_Form");

	var surnames = SurnamesList[form.SurnameType.value].surnames;
	var givenNames = GivenNamesList[form.GivenNameCategory.value].type[form.GivenNameType.value].givenNames;

	for (i=0 ; i < form.NumNames.value ; i++) {
		var surname = surnames[Math.floor(Math.random() * surnames.length)];
		var givenName = givenNames[Math.floor(Math.random() * givenNames.length)];
		var givenNameRomanisations = givenName.romanisations.length;

		html += "<tr>"
				+ '<td class="text-center" rowspan="' + givenNameRomanisations + '" nowrap>'
					+ surname.traditional + givenName.traditional
				+ "</td>"
				+ '<td class="text-center" rowspan="' + givenNameRomanisations + '" nowrap>'
					+ surname.simplified + givenName.simplified
				+ "</td>"
				+ '<td class="text-center" rowspan="' + givenNameRomanisations + '" nowrap>'
					+ givenName.gender
				+ "</td>"
				+ "<td rowspan='" + givenNameRomanisations + "'>" + surname.englishMandarin + "</td>"
				+ "<td>" + givenName.romanisations[0].englishMandarin + "</td>"
				+ "<td rowspan='" + givenNameRomanisations + "' nowrap>" + surname.pinyin + " " + givenName.pinyin + "</td>"
				+ "<td rowspan='" + givenNameRomanisations + "' nowrap>" + surname.jyutping + " " + givenName.jyutping + "</td>"
				+ "<td rowspan='" + givenNameRomanisations + "'>" + surname.meaning + "</td>"
				+ "<td>" + givenName.romanisations[0].meaning + "</td>"
			+ "</tr>";

		for (j=1 ; j < givenNameRomanisations ; j++) {
			html += "<tr>"
					+ "<td>" + givenName.romanisations[j].englishMandarin + "</td>"
					+ "<td>" + givenName.romanisations[j].meaning + "</td>"
				+ "</tr>";
		}
	}

	document.getElementById("ResultsTable").innerHTML = html;
}




function GivenNameListUpdate(i) {
	var html = "";

	Array.from(GivenNamesList[i].type).forEach((item, i) => {
		html += '<option value="' + i + '">' + item.title + '</option>';
	});

	document.getElementById("Configuration_Form").GivenNameType.innerHTML = html;
}




function OnDocumentLoad() {
	fetch("json/Surnames.json")
		.then(x => x.text())
		.then(y => {
			var html = "";

			SurnamesList = JSON.parse(y);

			SurnamesList.forEach((item, i) => {
				html += '<option value="' + i + '">' + item.title + '</option>';
			});

			document.getElementById("Configuration_Form").SurnameType.innerHTML = html;
		});

	fetch("json/GivenNames.json")
		.then(x => x.text())
		.then(y => {
			var html = "";

			GivenNamesList = JSON.parse(y)

			GivenNamesList.forEach((item, i) => {
				html += '<option value="' + i + '">' + item.category + '</option>';
			});

			document.getElementById("Configuration_Form").GivenNameCategory.innerHTML = html;

			GivenNameListUpdate(0);

			ExplanationUpdate();
		});
}
