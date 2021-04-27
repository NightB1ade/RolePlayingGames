---
title: Name Generator
---

{% include jQuery.html %}

# Configuration

<table>
	<tr>
		<td>Surname</td>
		<td>
			<select name="SurnameType" id="SurnameType">
				<option>Loading…</option>
			</select>
		</td>
		<td id="SurnameTypeExplanation"></td>
	</tr>
	<tr>
		<td>Given Name Category</td>
		<td>
			<select name="GivenNameCategory" id="GivenNameCategory">
				<option value="thematic" selected>Thematic</option>
				<option value="occupation">By Occupation</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Given Name</td>
		<td>
			<select name="GivenNameType" id="GivenNameType">
			</select>
		</td>
	</tr>
	<tr>
		<td>Number</td>
		<td><input class="spinner" id="GenerateNumber" min="1" max="50" value="5"></td>
	</tr>
	<tr><td></td><td><button onclick="GenerateName()">Generate</button></td></tr>
</table>

# Results

<table id="ResultsTable">
<thead>
<tr>
	<th style="text-align:center">繁</th>
	<th style="text-align:center">简</th>
	<th style="text-align:center">Gender</th>
	<th colspan="2">English</th>
	<th>Pinyin</th>
	<th>Jyutping</th>
	<th>Surname Meaning</th>
	<th>Given Name Meaning</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<script src="{{ 'NameGenerator.js?v=' | append: site.github.build_revision }}"></script>

<script>
$(document).ready(function() {
	//Get Surnames Data
	$.get(
		"{{ 'JSONs/Surnames.json?v=' | append: site.github.build_revision }}"
		,function(data){
			SurnamesFullList = $(data).toArray();

			SurnameTypeCreate();
		}
	);




	//Get GivenNames_Thematic_Common Data
	$.get(
		"{{ 'JSONs/GivenNames_Thematic_Common.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Thematic_Common = $(data);
		}
	);

	//Get GivenNames_Thematic_Uncommon Data
	$.get(
		"{{ 'JSONs/GivenNames_Thematic_Uncommon.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Thematic_Uncommon = $(data);
		}
	);

	//Get GivenNames_Thematic_Dark Data
	$.get(
		"{{ 'JSONs/GivenNames_Thematic_Dark.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Thematic_Dark = $(data);
		}
	);

	//Get GivenNames_Thematic_Righteous Data
	$.get(
		"{{ 'JSONs/GivenNames_Thematic_Righteous.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Thematic_Righteous = $(data);
		}
	);

	//Get GivenNames_Thematic_Dramatic Data
	$.get(
		"{{ 'JSONs/GivenNames_Thematic_Dramatic.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Thematic_Dramatic = $(data);
		}
	);

	//Get GivenNames_Thematic_BeautifulAttractive Data
	$.get(
		"{{ 'JSONs/GivenNames_Thematic_BeautifulAttractive.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Thematic_BeautifulAttractive = $(data);
		}
	);

	//Get GivenNames_Thematic_Masculine Data
	$.get(
		"{{ 'JSONs/GivenNames_Thematic_Masculine.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Thematic_Masculine = $(data);
		}
	);

	//Get GivenNames_Thematic_Feminine Data
	$.get(
		"{{ 'JSONs/GivenNames_Thematic_Feminine.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Thematic_Feminine = $(data);
		}
	);

	//Get GivenNames_Thematic_GenderNeutral Data
	$.get(
		"{{ 'JSONs/GivenNames_Thematic_GenderNeutral.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Thematic_GenderNeutral = $(data);
		}
	);




	//Get GivenNames_Occupation_Artisan Data
	$.get(
		"{{ 'JSONs/GivenNames_Occupation_Artisan.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Occupation_Artisan = $(data);
		}
	);

	//Get GivenNames_Occupation_Assassin Data
	$.get(
		"{{ 'JSONs/GivenNames_Occupation_Assassin.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Occupation_Assassin = $(data);
		}
	);

	//Get GivenNames_Occupation_Bandit Data
	$.get(
		"{{ 'JSONs/GivenNames_Occupation_Bandit.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Occupation_Bandit = $(data);
		}
	);

	//Get GivenNames_Occupation_Beggar Data
	$.get(
		"{{ 'JSONs/GivenNames_Occupation_Beggar.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNames_Occupation_Beggar = $(data);
		}
	);
});
</script>
