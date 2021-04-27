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
				<option value="common" selected>Common</option>
				<option value="rare">Rare</option>
				<option value="compound">Compound</option>
				<option value="dark">Dark</option>
				<option value="dramatic">Dramatic</option>
				<option value="profound">Profound</option>
			</select>
		</td>
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
	<tr><td colspan="2"><button onclick="GenerateName()">Generate</button></td></tr>
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
	//Get Surnames_Common Data
	$.get(
		"{{ 'JSONs/Surnames_Common.json?v=' | append: site.github.build_revision }}"
		,function(data){
			Surnames_Common = $(data);
		}
	);

	//Get Surnames_Rare Data
	$.get(
		"{{ 'JSONs/Surnames_Rare.json?v=' | append: site.github.build_revision }}"
		,function(data){
			Surnames_Rare = $(data);
		}
	);

	//Get Surnames_Compound Data
	$.get(
		"{{ 'JSONs/Surnames_Compound.json?v=' | append: site.github.build_revision }}"
		,function(data){
			Surnames_Compound = $(data);
		}
	);

	//Get Surnames_Dark Data
	$.get(
		"{{ 'JSONs/Surnames_Dark.json?v=' | append: site.github.build_revision }}"
		,function(data){
			Surnames_Dark = $(data);
		}
	);

	//Get Surnames_Dramatic Data
	$.get(
		"{{ 'JSONs/Surnames_Dramatic.json?v=' | append: site.github.build_revision }}"
		,function(data){
			Surnames_Dramatic = $(data);
		}
	);

	//Get Surnames_Profound Data
	$.get(
		"{{ 'JSONs/Surnames_Profound.json?v=' | append: site.github.build_revision }}"
		,function(data){
			Surnames_Profound = $(data);
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
});
</script>
