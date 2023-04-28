var SpellList




function SearchSpells() {
	var form = document.getElementById("SpellSearchForm");
	form.Name.value = form.Name.value.trim();
	var SpellSearchName = new RegExp(form.Name.value,"i");
	var html = "";

	SpellList.forEach((item, i) => {
		if(item.Name.search(SpellSearchName) != -1) {
			html += "<hr>"
				+ '<table class="table table-dark table-striped table-hover w-auto">'
				+ "<tr><td>Category</td><td>" + item.Category + "</td></tr>"
				+ "<tr><td>Name</td><td>" + item.Name + "</td></tr>"
				+ "<tr><td>Effects</td><td>" + item.Effects + "</td></tr>"
				+ "<tr><td>Type</td><td>" + item.Type + "</td></tr>"
				+ "<tr><td>Range</td><td>" + item.Range + "</td></tr>"
				+ ((item.Damage != "") ? "<tr><td>Damage</td><td>" + item.Damage + "</td></tr>" : "")
				+ "<tr><td>Duration</td><td>" + item.Duration + "</td></tr>"
				+ "<tr><td>Drain</td><td>" + item.Drain + "</td></tr>"
				+ "<tr><td>Source</td><td>" + item.Source + "</td></tr>"
				+ "<tr><td>Text</td><td>" + item.Text + "</td></tr>";

			if (item.Category == "Combat") {
				if (item.Effects.includes("Direct")) {
					html += "<tr><td>Casting</td><td>Spellcasting + Magic [Force] vs. ";

					if (item.Type == "P") {
						html += "Body"
					} else if (item.Type == "M") {
						html += "Willpower"
					}

					html += ", no damage resist</td></tr>";
				} else if (item.Effects.includes("Indirect")) {
					if (item.Range.includes("(A)")) {
						html += "<tr><td>Casting</td><td>“Grenade” Spellcasting + Magic [Force] (3), scatter 2d6m, -1m per hit if under threshold, DV Force + net hits over 3 hits, AP -(Force), resisted by Body + Armour</td></tr>";
					} else {
						html += "<tr><td>Casting</td><td>Spellcasting + Magic [Force] vs. Reaction + Intuition, DV Force + net hits, AP -(Force), resisted by Body + Armour</td></tr>";
					}
				}
			} else if (item.Category == "Detection") {
				if (item.Effects.includes("Active")) {
					html += "<tr><td>Casting</td><td>Spellcasting + Magic [Force] vs. either Willpower + Logic (+ Counterspelling) [Mental] for living things with auras, (Force ×2) for magical objects, object resistance for mundance objects</td></tr>";
				} else if (item.Effects.includes("Passive")) {
					html += "<tr><td>Sustained</td><td>Perception Tests using this sense have a limit equal to the net successes from casting of the spell instead of the subject’s Mental limit, Counterspelling cannot be used against a passive sense, but can be dispelled</td></tr>";
				}

				html += "<tr><td>Glitch</td><td>False or misleading information.  Critical Glitch may inflict extra Drain, translate any Drain damage suffered into Physical, temporarily strip the subject of a sense, inexplicably apply the intended sense to others (particularly opponents) in range</td></tr>";
			} else if (item.Category == "Health") {
				html += "<tr><td>Casting</td><td>Usually Spellcasting + Magic - Full Essence Points lost [Force]</td></tr>";
			} else if (item.Category == "Illusion") {
				if (item.Type.includes("M")) {
					html += "<tr><td>Casting</td><td>Resisted by Logic + Willpower, magical auras give them away as illusions to anyone who makes a successful Assensing Test</td></tr>";
				} else if (item.Type.includes("P")) {
					html += "<tr><td>Casting</td><td>Resisted by Intuition + Logic or Object Resistance</td></tr>";
				}
			} else if (item.Category == "Manipulation") {
				if (item.Effects.includes("Damaging")) {
					html += "<tr><td>Damaging</td><td>DV Force, AP 0, resisted by Body + Armour</td></tr>";
				}
				if (item.Effects.includes("Mental")) {
					html += "<tr><td>Mental</td><td>Resisted by Logic + Willpower, net hits determine how long it can be sustained, Whilst sustained, the target may take a Complex Action on their turn to resist by making a Logic + Willpower - Force Test, reducing net hits</td></tr>";
				}
				if (item.Effects.includes("Physical")) {
					html += "<tr><td>Physical</td><td>Usually defended against using Body + Strength or Object Resistance</td></tr>";
				}
			}

			html += "</table>";
		}
	});

	document.getElementById("SpellSearchResults").innerHTML = html;
}




function OnDocumentLoad() {
	fetch("json/SpellList.json")
		.then(x => x.text())
		.then(y => SpellList = JSON.parse(y));
}
