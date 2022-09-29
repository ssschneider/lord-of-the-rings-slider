const btnNext = document.getElementById("btn-next");
const btnBack = document.getElementById("btn-back");
const cards = document.querySelectorAll(".card");
let currentCard = 0;

function hideCurrentCard() {
	const selectedCard = document.querySelector(".selected");
	selectedCard.classList.remove("selected");
}

function showCard(indexCard) {
	cards[indexCard].classList.add("selected");
}

btnNext.addEventListener("click", function () {
	if (currentCard === cards.length - 1) {
		currentCard = -1;
	}
	hideCurrentCard();
	currentCard++;
	showCard(currentCard);
});

btnBack.addEventListener("click", function () {
	if (currentCard === 0) {
		currentCard = cards.length;
	}
	hideCurrentCard();
	currentCard--;
	showCard(currentCard);
});
