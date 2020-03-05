
const tabFirst = (tab, content, card) => {
	  card.classList.add('move');

	  setTimeout((e) => {
	      card.innerHTML = `

we serve delicious dishes, the best imported food

`;
	      content.style.backgroundImage = `url('../imgs/${tab}.jpg')`;
	      card.classList.remove('move');
	  }, 800);
};

export { tabFirst };
