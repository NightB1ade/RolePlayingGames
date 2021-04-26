---
title: Daoist Priest/Nun Generator
---

{% include jQuery.html %}

<table>
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
	<th>繁</th>
	<th>简</th>
	<th>Gender</th>
	<th>English</th>
	<th>Pinyin</th>
	<th>Jyutping</th>
	<th>Title Meaning</th>
	<th>Nickname Meaning</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<script src="{{ 'DaoistGenerator.js?v=' | append: site.github.build_revision }}"></script>

<script>
$(document).ready(function() {
	//Get Titles_Daoist Data
	$.get(
		"{{ 'Titles_Daoist.json?v=' | append: site.github.build_revision }}"
		,function(data){
			Titles_Daoist = $(data);
		}
	);

	//Get Nicknames_Daoist Data
	$.get(
		"{{ 'Nicknames_Daoist.json?v=' | append: site.github.build_revision }}"
		,function(data){
			Nicknames_Daoist = $(data);
		}
	);
});
</script>
