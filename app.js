// Selectors
const buttons = document.querySelectorAll(".card-toggle-description");

// Adding event listeners to buttons
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.preventDefault();
		// console.log(e.target.id);
		console.log(document.querySelector(`#paragraph-${e.target.id}`));
		document
			.querySelector(`#paragraph-${e.target.id}`)
			.classList.toggle("show");
	});
});
