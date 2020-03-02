import { onLoad } from './onload.js'

onLoad();


    let changeTabs = (elem) => {
	
	const content = document.getElementById('content');
	console.log(elem);
	const card = document.getElementById('central');
	card.classList.add('move');
	let tab = elem.toElement.className;

	setTimeout((e) => {

	    card.innerHTML = "HOLA";
	    content.style.backgroundImage = `url('../imgs/${tab}.jpg')`;
	    card.classList.remove('move');

	}, 800);
	
    };
    


const tabs = document.querySelectorAll('button');

tabs.forEach((elem) => elem.addEventListener('click', changeTabs));
