---
title: Character Demographic Randomiser
---
<script>
function Randomise() {
	var html = "";
	var x;

	html += "<hr>";
	html += "<table>";

	html += "<tr><td>Metatype</td><td>";
	x = Math.random();
	if (x < 0.66) {
		html += "Human";
	} else if (x < (0.66 + 0.11)) {
		html += "Elf";
	} else if (x < (0.66 + 0.11 + 0.05)) {
		html += "Dwarf";
	} else if (x < (0.66 + 0.11 + 0.05 + 0.14)) {
		html += "Ork";
	} else if (x < (0.66 + 0.11 + 0.05 + 0.14 + 0.03)) {
		html += "Troll";
	} else {
		html += "Other";
	}
	html += "</td></tr>";

	html += "<tr><td>Gender</td><td>";
	x = Math.random();
	if (x < 0.5) {
		html += "Male";
	} else {
		html += "Female";
	}
	html += "</td></tr>";

	html += "<tr><td>Ethnicity</td><td>";
	x = Math.random();
	if (x < 0.69) {
		html += "English";
	} else if (x < (0.69 + 0.18)) {
		html += "Celtic";
	} else if (x < (0.69 + 0.18 + 0.04)) {
		html += "Afro-Caribbean";
	} else if (x < (0.69 + 0.18 + 0.04 + 0.04)) {
		html += "Indian";
	} else {
		html += "Other";
	}
	html += "</td></tr>";

	html += "<tr><td>Religion</td><td>";
	x = Math.random();
	if (x < 0.33) {
		html += "Anglican (Church of England)";
	} else if (x < (0.33 + 0.19)) {
		html += "Druidic/Neo-Pagan";
	} else if (x < (0.33 + 0.19 + 0.13)) {
		html += "Roman Catholic";
	} else if (x < (0.33 + 0.19 + 0.13 + 0.14)) {
		html += "Unaffiliated/Other";
	} else {
		html += "-";
	}
	html += "</td></tr>";

	html += "<tr><td>Education</td><td>";
	x = Math.random();
	if (x < 0.13) {
		html += "Less Than 12 Years";
	} else if (x < (0.13 + 0.46)) {
		html += "High School Equivalency";
	} else if (x < (0.13 + 0.46 + 0.29)) {
		html += "College Degrees";
	} else {
		html += "Advanced Degrees";
	}
	html += "</td></tr>";

	html += "<tr><td>Special</td><td>";
	x = Math.random();
	if (x < 0.02) {
		html += "Awakened";
	} else if (x < (0.02 + 0.01)) {
		html += "Technomancer";
	} else {
		html += "-";
	}
	html += "</td></tr>";

	html += "</table>";

	var theDiv = document.getElementById("Character");
	theDiv.innerHTML = html + theDiv.innerHTML;
}
</script>

<button onclick="Randomise()">Randomise</button>

<div id="Character">
</div>
