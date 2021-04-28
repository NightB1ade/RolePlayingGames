var SurnamesFullList;

var GivenNamesFullList;

function GenerateName() {
	var GenerateNumber = $("#GenerateNumber").spinner("value");
	var GenerateHTML = "";

	var Surnames = SurnamesFullList[$("#SurnameType option:selected").val()].surnames;

	var GivenNames = GivenNamesFullList[$("#GivenNameCategory option:selected").val()].type[$("#GivenNameType option:selected").val()].givenNames;

	for (i=0 ; i < GenerateNumber ; i++) {
		var Surname = Surnames[Math.floor(Math.random() * Surnames.length)];
		var GivenName = GivenNames[Math.floor(Math.random() * GivenNames.length)];
		var GivenNameRomanisations = GivenName.romanisations.length;

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
			+ GivenName.romanisations[0].englishMandarin
			+ "</td><td rowspan='" + GivenNameRomanisations + "' nowrap>"
			+ Surname.pinyin + " " + GivenName.pinyin
			+ "</td><td rowspan='" + GivenNameRomanisations + "' nowrap>"
			+ Surname.jyutping + " " + GivenName.jyutping
			+ "</td><td rowspan='" + GivenNameRomanisations + "'>"
			+ Surname.meaning
			+ "</td><td>"
			+ GivenName.romanisations[0].meaning
			+ "</td></tr>";

		for (j=1 ; j < GivenNameRomanisations ; j++) {
			GenerateHTML = GenerateHTML
			+ "<tr><td>"
			+ GivenName.romanisations[j].englishMandarin
			+ "</td><td>"
			+ GivenName.romanisations[j].meaning
			+ "</td></tr>";
		}
	}

	$("#ResultsTable tbody").html(GenerateHTML);
}




function ClearResults() {
	$("#ResultsTable tbody").html("");
}



function GivenNameCategoryChange() {
	var GivenNameHTML = "";

	$(GivenNamesFullList[$("#GivenNameCategory option:selected").val()].type).toArray().forEach((item, i) => {
		GivenNameHTML = GivenNameHTML
			+ '<option value="' + i + '">' + item.title + '</option>';
	});

	$("#GivenNameType").html(GivenNameHTML).selectmenu("refresh");
	GivenNameTypeChange();
}




function GivenNameTypeChange() {
	$("#GivenNameTypeExplanation").html(GivenNamesFullList[$("#GivenNameCategory option:selected").val()].type[$("#GivenNameType option:selected").val()].explanation);

	SelectMenuChange();
}




function GivenNameCreate() {
	var GivenNameCategoryHTML = "";

	GivenNamesFullList.forEach((item, i) => {
		GivenNameCategoryHTML = GivenNameCategoryHTML
			+ '<option value="' + i + '">' + item.category + '</option>';
	});

	$("#GivenNameCategory").html(GivenNameCategoryHTML).selectmenu("refresh");

	GivenNameCategoryChange();
}




function SelectMenuChange() {
	ClearResults();
}




function SurnameTypeCreate() {
	var SurnameHTML = "";

	SurnamesFullList.forEach((item, i) => {
		SurnameHTML = SurnameHTML
			+ '<option value="' + i + '">' + item.title + '</option>';
	});

	$("#SurnameType").html(SurnameHTML).selectmenu("refresh");
	SurnameTypeChange();
}




function SurnameTypeChange() {
	$("#SurnameTypeExplanation").html(SurnamesFullList[$("#SurnameType option:selected").val()].explanation);
	SelectMenuChange();
}




$(document).ready(function() {
	$("select").selectmenu();
	$("#SurnameType").selectmenu({
		change: SurnameTypeChange
	})
	$("#GivenNameCategory").selectmenu({
		change: GivenNameCategoryChange
	});
	$("#GivenNameType").selectmenu({
		change: GivenNameTypeChange
	})
	$("input.spinner").spinner();
	$("button").button();
});
