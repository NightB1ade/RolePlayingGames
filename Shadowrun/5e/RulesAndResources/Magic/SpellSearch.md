---
title: Spell Search
---

{% include jQuery.html %}

<table>
<tr>
	<td>Name</td>
	<td><input type="text" name="SpellSearchName" /></td>
</tr>
<tr>
	<td colspan="2">
		<button type="button" onclick="SearchSpells()">Search</button>
	</td>
</tr>
</table>

<div id="SpellSearchResults">
</div>

<script>
var SpellList

function SearchSpells() {
	var SpellSearchName = $("input[name=SpellSearchName]").val().trim();
	$("input[name=SpellSearchName]").val(SpellSearchName);

	var html = "";

	if (
		SpellSearchName == ""
		|| SpellSearchName.length < 3
	) {
		$("#SpellSearchResults").html("");
		alert("Please enter a value of at least length 3 to search for");
		return
	}

	$(SpellList).find("Spell").each(function(){
		if ($(this).find("Name").text().toLowerCase().includes(SpellSearchName.toLowerCase()) == false) {
			return
		}

		var SpellCategory = $(this).find("Category").text();
		var SpellName = $(this).find("Name").text();
		var SpellEffects = $(this).find("Effects").text();
		var SpellType = $(this).find("Type").text();
		var SpellRange = $(this).find("Range").text();
		var SpellDamage = $(this).find("Damage").text();
		var SpellDuration = $(this).find("Duration").text();
		var SpellDrain = $(this).find("Drain").text();
		var SpellSource = $(this).find("Source").text();
		var SpellText = $(this).find("Text").text();

		html += "<hr>"
			+ "<table>"
			+ "<tr><td>Category</td><td>" + SpellCategory + "</td></tr>"
			+ "<tr><td>Name</td><td>" + SpellName + "</td></tr>"
			+ "<tr><td>Effects</td><td>" + SpellEffects + "</td></tr>"
			+ "<tr><td>Type</td><td>" + SpellType + "</td></tr>"
			+ "<tr><td>Range</td><td>" + SpellRange + "</td></tr>"
			+ ((SpellDamage != "") ? "<tr><td>Damage</td><td>" + SpellDamage + "</td></tr>" : "")
			+ "<tr><td>Duration</td><td>" + SpellDuration + "</td></tr>"
			+ "<tr><td>Drain</td><td>" + SpellDrain + "</td></tr>"
			+ "<tr><td>Source</td><td>" + SpellSource + "</td></tr>"
			+ "<tr><td>Text</td><td style='white-space: pre-wrap;'>" + SpellText + "</td></tr>";

		if (SpellCategory == "Combat") {
			if (SpellEffects.includes("Direct")) {
				html += "<tr><td>Casting</td><td>Spellcasting + Magic [Force] vs. ";
				if (SpellType == "P") {
					html += "Body"
				} else if (SpellType == "M") {
					html += "Willpower"
				}
				html += ", no damage resist</td></tr>";
			} else if (SpellEffects.includes("Indirect")) {
				if (SpellRange.includes("(A)")) {
					html += "<tr><td>Casting</td><td>“Grenade” Spellcasting + Magic [Force] (3), scatter 2d6m, -1m per hit if under threshold, DV Force + net hits over 3 hits, AP -(Force), resisted by Body + Armour</td></tr>";
				} else {
					html += "<tr><td>Casting</td><td>Spellcasting + Magic [Force] vs. Reaction + Intuition, DV Force + net hits, AP -(Force), resisted by Body + Armour</td></tr>";
				}
			}
		} else if (SpellCategory == "Detection") {
			if (SpellEffects.includes("Active")) {
				html += "<tr><td>Casting</td><td>Spellcasting + Magic [Force] vs. either Willpower + Logic (+ Counterspelling) [Mental] for living things with auras, (Force ×2) for magical objects, object resistance for mundance objects</td></tr>";
			} else if (SpellEffects.includes("Passive")) {
				html += "<tr><td>Sustained</td><td>Perception Tests using this sense have a limit equal to the net successes from casting of the spell instead of the subject’s Mental limit, Counterspelling cannot be used against a passive sense, but can be dispelled</td></tr>";
			}
			html += "<tr><td>Glitch</td><td>False or misleading information.  Critical Glitch may inflict extra Drain, translate any Drain damage suffered into Physical, temporarily strip the subject of a sense, inexplicably apply the intended sense to others (particularly opponents) in range</td></tr>";
		} else if (SpellCategory == "Health") {
			html += "<tr><td>Casting</td><td>Usually Spellcasting + Magic - Full Essence Points lost [Force]</td></tr>";
		} else if (SpellCategory == "Illusion") {
			if (SpellType.includes("M")) {
				html += "<tr><td>Casting</td><td>Resisted by Logic + Willpower, magical auras give them away as illusions to anyone who makes a successful Assensing Test</td></tr>";
			} else if (SpellType.includes("P")) {
				html += "<tr><td>Casting</td><td>Resisted by Intuition + Logic or Object Resistance</td></tr>";
			}
		} else if (SpellCategory == "Manipulation") {
			if (SpellEffects.includes("Damaging")) {
				html += "<tr><td>Damaging</td><td>DV Force, AP 0, resisted by Body + Armour</td></tr>";
			}
			if (SpellEffects.includes("Mental")) {
				html += "<tr><td>Mental</td><td>Resisted by Logic + Willpower, net hits determine how long it can be sustained, Whilst sustained, the target may take a Complex Action on their turn to resist by making a Logic + Willpower - Force Test, reducing net hits</td></tr>";
			}
			if (SpellEffects.includes("Physical")) {
				html += "<tr><td>Physical</td><td>Usually defended against using Body + Strength or Object Resistance</td></tr>";
			}
		}

		html += "</table>";
	});

	$("#SpellSearchResults").html(html);
}


$(document).ready(function(){
	//Get SpellList Data
	$.get(
		"{{ 'SpellList.xml?v=' | append: site.github.build_revision }}"
		,function(data){
			SpellList = $(data).find("Spells");
		}
	);

	$("button").button();
	$("input[type=text]").addClass("ui-widget ui-widget-content ui-corner-all")
	$("input[name=SpellSearchName]").on("keypress",function(e){
		if (e.which === 13) {
			SearchSpells()
		}
	});
});
</script>
