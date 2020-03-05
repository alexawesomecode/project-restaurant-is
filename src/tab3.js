
const tabThird = (tab, content, card) => {
  card.classList.add('move');

	  setTimeout((e) => {
	      card.innerHTML = `


We are ubicated at San Pepin Road #202-3
Next to DiamondSutra Mall


`;
	      content.style.backgroundImage = `url('../imgs/${tab}.jpg')`;
	      card.classList.remove('move');
	  }, 800);
};

export { tabThird };
