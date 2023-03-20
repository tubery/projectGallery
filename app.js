// Selectors
const buttons = document.querySelectorAll(".card-toggle-description");

// Adding event listeners to buttons
// Toggle class for description
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.preventDefault();
		document
			.querySelector(`#paragraph-${e.target.id}`)
			.classList.toggle("show");
	});
});
