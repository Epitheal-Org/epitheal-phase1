(function () {
	var toggle = document.querySelector(".nav-toggle");
	var panel = document.getElementById("mobile-nav-panel");
	if (!toggle || !panel) return;

	function closePanel() {
		panel.classList.remove("open");
		panel.setAttribute("aria-hidden", "true");
		panel.setAttribute("inert", "");
		toggle.setAttribute("aria-expanded", "false");
		toggle.setAttribute("aria-label", "Open menu");
		toggle.classList.remove("open");
	}

	function openPanel() {
		panel.classList.add("open");
		panel.setAttribute("aria-hidden", "false");
		panel.removeAttribute("inert");
		toggle.setAttribute("aria-expanded", "true");
		toggle.setAttribute("aria-label", "Close menu");
		toggle.classList.add("open");
	}

	toggle.addEventListener("click", function () {
		var isOpen = panel.classList.contains("open");
		if (isOpen) { closePanel(); } else { openPanel(); }
	});

	panel.querySelectorAll("a").forEach(function (a) {
		a.addEventListener("click", closePanel);
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape") closePanel();
	});

	window.addEventListener("resize", function () {
		if (window.innerWidth > 768) closePanel();
	});
})();
