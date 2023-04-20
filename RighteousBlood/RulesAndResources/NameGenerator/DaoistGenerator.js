var Titles_Daoist;
var Nicknames_Daoist;




function ClearResults() {
	document.getElementById("ResultsTable").innerHTML = "";
}




function GenerateNames() {
	var num = document.getElementById("Parameter_Form").NumNames.value;
	var html = "";

	for (i=0 ; i < num ; i++) {
		var title = Titles_Daoist[Math.floor(Math.random() * Titles_Daoist.length)];
		var nickname = Nicknames_Daoist[Math.floor(Math.random() * Nicknames_Daoist.length)];

		html += "<tr>"
				+ '<td class="text-center" nowrap>' + nickname.traditional + title.traditional + "</td>"
				+ '<td class="text-center" nowrap>' + nickname.simplified + title.simplified + "</td>"
				+ '<td class="text-center">' + nickname.gender + " (nickname) / " + title.gender + " (title)" + "</td>"
				+ "<td>" + title.english + " " + nickname.english + "</td>"
				+ "<td nowrap>" + nickname.pinyin + " " + title.pinyin + "</td>"
				+ "<td nowrap>" + nickname.jyutping + " " + title.jyutping + "</td>"
				+ "<td>" + title.meaning + "</td>"
				+ "<td>" + nickname.meaning + "</td>"
			+ "</tr>";
	}

	document.getElementById("ResultsTable").innerHTML = html;
}




function DocumentLoad() {
	fetch("json/Titles_Daoist.json")
		.then(x => x.text())
		.then(y => Titles_Daoist = JSON.parse(y));

	fetch("json/Nicknames_Daoist.json")
		.then(x => x.text())
		.then(y => Nicknames_Daoist = JSON.parse(y));
}
