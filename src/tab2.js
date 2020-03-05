
const tabSecond = (tab, content, card) => {
	  card.classList.add('move');

	  setTimeout((e) => {
	      card.innerHTML = `

wanna know paradise without needing to travel to thailand?
wanna feel the bangkok vibes, khao san road noise ?
miss chiang mai and want to taste again some khao soi?
visit us!

`;
	      content.style.backgroundImage = `url('../imgs/${tab}.jpg')`;
	      card.classList.remove('move');
	  }, 800);
};

export { tabSecond };
