---
title: Name Generator
jQueryHead: true
layout: default_old
---

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
				<option>Loading…</option>
			</select>
		</td>
		<td rowspan="2" id="GivenNameTypeExplanation"></td>
	</tr>
	<tr>
		<td>Given Name</td>
		<td>
			<select name="GivenNameType" id="GivenNameType">
				<option>Loading…</option>
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

	//Get GivenNames Data
	$.get(
		"{{ 'JSONs/GivenNames.json?v=' | append: site.github.build_revision }}"
		,function(data){
			GivenNamesFullList = $(data).toArray();

			GivenNameCreate();
		}
	);
});
</script>
