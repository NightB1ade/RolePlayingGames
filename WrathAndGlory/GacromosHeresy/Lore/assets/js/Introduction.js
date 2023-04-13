function OnDocumentLoad() {
	fetch("assets/json/Glossary.json")
		.then(object => object.text())
		.then(data => {
			var glossary = JSON.parse(data);
			var html = "";

			glossary.forEach((entry, i) => {
				html += '<dt class="col-sm-4 col-lg-3 text-end">' + entry.term + '</dt>'
					+ '<dd class="col-sm-8 col-lg-9">';

				entry.description.forEach((item, i) => {
					html += '<p>' + item + '</p>';
				});

				html += '</dd>';
			});

			document.getElementById("Glossary").innerHTML = html;
		});
}
