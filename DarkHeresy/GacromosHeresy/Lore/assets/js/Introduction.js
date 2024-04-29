function InitialiseNewPopovers() {
	var popovers = Array.from(document.getElementsByClassName("popover"));
	var drillDowns = [];

	popovers.forEach((item, i) => {
		Array.from(item.getElementsByClassName("popover_Uninitialised")).forEach((item, i) => {
			drillDowns.push(item);
		});
	});

	var allowList = bootstrap.Tooltip.Default.allowList;
	allowList.a.push("data-bs-toggle");
	allowList.a.push("data-bs-content-id");

	InitialisePopovers(drillDowns,true);
}




function InitialisePopovers(popovers,removeClass) {
	var allowList = bootstrap.Tooltip.Default.allowList;
	allowList.a.push("data-bs-toggle");
	allowList.a.push("data-bs-content-id");

	popovers.map((el) => {
		var opts = {};

		if (el.hasAttribute("data-bs-content-id")) {
			opts.allowList = allowList
			,opts.content = document.getElementById(el.getAttribute("data-bs-content-id")).innerHTML
			,opts.html = true
		}

		new bootstrap.Popover(el,opts);
		if (removeClass == true) {
			el.classList.remove("popover_Uninitialised");
		}

		el.addEventListener("inserted.bs.popover",(item) => {
			InitialiseNewPopovers();
		});

		el.addEventListener("hide.bs.popover",(item) => {
			var id = item.target.getAttribute("aria-describedby");
			var popovers = Array.from(document.getElementById(id).querySelectorAll("a"));

			popovers.forEach((item, i) => {
				bootstrap.Popover.getInstance(item).hide();
			});
		});
	});
}




function OnDocumentLoad() {
	fetch("assets/json/Glossary.json")
		.then(object => object.text())
		.then(data => {
			var glossary = JSON.parse(data);
			var html = "";

			glossary.forEach((entry, i) => {
				var entryTerm = '<dt class="col-sm-4 col-lg-3 text-end">' + entry.term + '</dt>';
				var entryDesc = '<dd class="col-sm-8 col-lg-9">';
				var entryPopover = "";

				entry.description.forEach((item, j) => {
					entryDesc += '<p>' + item + '</p>';
				});
				entryDesc += '</dd>';

				entryPopover += '<div class="d-none" id="GlossaryEntry_' + i + '">';
				entry.description.forEach((item, k) => {
					entryPopover += (k == entry.description.length - 1 ? '<p class="mb-0">' : '<p>') + item + '</p>';
				});
				entryPopover += '</div>';

				glossary.forEach((compare, l) => {
					if (i != l) {
						entryDesc = entryDesc.replace(new RegExp(compare.term,"i"),function(x) {
							return '<a tabindex="0" class="link-underline-secondary" data-bs-toggle="popover" data-bs-content-id="GlossaryEntry_' + l + '">' + x + '</a>'
						});

						entryPopover = entryPopover.replace(new RegExp(compare.term,"i"),function(x) {
							return '<a tabindex="0" class="link-underline-secondary popover_Uninitialised" data-bs-toggle="popover" data-bs-content-id="GlossaryEntry_' + l + '">' + x + '</a>'
						});
					}
				});

				html += entryTerm + entryDesc + entryPopover;
			});

			document.getElementById("GlossaryList").innerHTML = html;

			Array.from(document.getElementById("main").getElementsByTagName("p")).forEach((item, i) => {
				var newHtml = item.innerHTML;

				glossary.forEach((entry, i) => {
					newHtml = newHtml.replace(new RegExp(entry.term,"i"),function(x) {
						return '<a tabindex="0" class="link-underline-secondary" data-bs-toggle="popover" data-bs-content-id="GlossaryEntry_' + i + '">' + x + '</a>'
					});
				});

				item.innerHTML = newHtml;
			});

			InitialisePopovers([].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')),false);
		});
}
