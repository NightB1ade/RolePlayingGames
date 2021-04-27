var Surnames_Common;
var Surnames_Rare;
var Surnames_Compound;
var Surnames_Dark;
var Surnames_Dramatic;
var Surnames_Profound;

var GivenNames_Thematic_Common;
var GivenNames_Thematic_Uncommon;
var GivenNames_Thematic_Dark;
var GivenNames_Thematic_Righteous;

var GivenNames_Occupation_Artisan;
var GivenNames_Occupation_Assassin;

function GenerateName() {
	var GenerateNumber = $("#GenerateNumber").spinner("value");
	var GenerateHTML = "";

	var Surnames
		= ($("#SurnameType option:selected").val() == "common")
		? Surnames_Common
		: ($("#SurnameType option:selected").val() == "rare")
		? Surnames_Rare
		: ($("#SurnameType option:selected").val() == "compound")
		? Surnames_Compound
		: ($("#SurnameType option:selected").val() == "dark")
		? Surnames_Dark
		: ($("#SurnameType option:selected").val() == "dramatic")
		? Surnames_Dramatic
		: ($("#SurnameType option:selected").val() == "profound")
		? Surnames_Profound
		: "";

	var GivenNames
		= ($("#GivenNameType option:selected").val() == "thematic_common")
		? GivenNames_Thematic_Common
		: ($("#GivenNameType option:selected").val() == "thematic_uncommon")
		? GivenNames_Thematic_Uncommon
		: ($("#GivenNameType option:selected").val() == "thematic_dark")
		? GivenNames_Thematic_Dark
		: ($("#GivenNameType option:selected").val() == "thematic_righteous")
		? GivenNames_Thematic_Righteous
		: ($("#GivenNameType option:selected").val() == "occupation_artisan")
		? GivenNames_Occupation_Artisan
		: ($("#GivenNameType option:selected").val() == "occupation_assassin")
		? GivenNames_Occupation_Assassin
		: "";

	for (i=0 ; i < GenerateNumber ; i++) {
		var Surname = Surnames[Math.floor(Math.random() * Surnames.length)];
		var GivenName = GivenNames[Math.floor(Math.random() * GivenNames.length)];
		var GivenNameRomanisations = GivenName.romanisation.length;

		GenerateHTML = GenerateHTML
			+ "<tr><td rowspan='" + GivenNameRomanisations + "' nowrap style='text-align:center'>"
			+ Surname.traditional + GivenName.traditional
			+ "</td><td rowspan='" + GivenNameRomanisations + "' nowrap style='text-align:center'>"
			+ Surname.simplified + GivenName.simplified
			+ "</td><td rowspan='" + GivenNameRomanisations + "' nowrap style='text-align:center'>"
			+ GivenName.gender
			+ "</td><td rowspan='" + GivenNameRomanisations + "'>"
			+ Surname.englishMandarin
			+ "</td><td>"
			+ GivenName.romanisation[0].englishMandarin
			+ "</td><td rowspan='" + GivenNameRomanisations + "' nowrap>"
			+ Surname.pinyin + " " + GivenName.pinyin
			+ "</td><td rowspan='" + GivenNameRomanisations + "' nowrap>"
			+ Surname.jyutping + " " + GivenName.jyutping
			+ "</td><td rowspan='" + GivenNameRomanisations + "'>"
			+ Surname.meaning
			+ "</td><td>"
			+ GivenName.romanisation[0].meaning
			+ "</td></tr>";

		for (j=1 ; j < GivenNameRomanisations ; j++) {
			GenerateHTML = GenerateHTML
			+ "<tr><td>"
			+ GivenName.romanisation[j].englishMandarin
			+ "</td><td>"
			+ GivenName.romanisation[j].meaning
			+ "</td></tr>";
		}
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
			+ '<option value="thematic_dark">Dark</option>'
			+ '<option value="thematic_righteous">Righteous</option>'
		);
	} else if ($("#GivenNameCategory option:selected").val() == "occupation") {
		$("#GivenNameType").html(
			'<option value="occupation_artisan" selected>Artisan</option>'
			+ '<option value="occupation_assassin">Assassin</option>'
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
