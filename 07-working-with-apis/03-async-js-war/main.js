const cardBtn = document.getElementById("cardBtn");

cardBtn.addEventListener("click", (e) => {
	fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
		.then((res) => res.json())
		.then((data) => console.log(data));
});
