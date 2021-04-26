var Titles_Daoist;

var Nicknames_Daoist;

function GenerateName() {
	var GenerateNumber = $("#GenerateNumber").spinner("value");
	var GenerateHTML = "";

	for (i=0 ; i < GenerateNumber ; i++) {
		var Title = Titles_Daoist[Math.floor(Math.random() * Titles_Daoist.length)];
		var Nickname = Nicknames_Daoist[Math.floor(Math.random() * Nicknames_Daoist.length)];

		GenerateHTML = GenerateHTML
			+ "<tr><td nowrap style='text-align:center'>"
			+ Nickname.traditional + Title.traditional
			+ "</td><td nowrap style='text-align:center'>"
			+ Nickname.simplified + Title.simplified
			+ "</td><td style='text-align:center'>"
			+ Nickname.gender + " (nickname) / " + Title.gender + " (title)"
			+ "</td><td>"
			+ Title.english + " " + Nickname.english
			+ "</td><td nowrap>"
			+ Nickname.pinyin + " " + Title.pinyin
			+ "</td><td nowrap>"
			+ Nickname.jyutping + " " + Title.jyutping
			+ "</td><td>"
			+ Title.meaning
			+ "</td><td>"
			+ Nickname.meaning
			+ "</td></tr>";
	}

	$("#ResultsTable tbody").html(GenerateHTML);
}




function ClearResults() {
	$("#ResultsTable tbody").html("");
}



function GivenNameCategoryChange() {
	if ($("#GivenNameCategory option:selected").val() == "thematic") {
		$("#GivenNameType").html(
			'<option value="thematic_common" selected>Common</option>'
			+ '<option value="thematic_uncommon">Uncommon</option>'
		);
	} else if ($("#GivenNameCategory option:selected").val() == "occupation") {
		$("#GivenNameType").html(
			'<option value="occupation_artisan" selected>Artisan</option>'
			+ '<option value="occupation_assassin">Assassin</option>'
		);
	} else if ($("#GivenNameCategory option:selected").val() == "religious") {
		$("#GivenNameType").html(
			'<option value="religious_buddhist" selected>Buddhist Monk/Nun</option>'
			+ '<option value="religious_daoist">Daoist Priest/Nun</option>'
		);
	}

	$("#GivenNameType").selectmenu("refresh");
	ClearResults();
}




function SelectMenuChange() {
	ClearResults();
}




$(document).ready(function() {
	$("select").selectmenu({
		change: SelectMenuChange
	});
	$("#GivenNameCategory").selectmenu({
		change: GivenNameCategoryChange
	});
	$("input.spinner").spinner();
	$("button").button();

	GivenNameCategoryChange();
});
