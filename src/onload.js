function onLoad() {
  // content styling

  const content = document.getElementById('content');
  console.log(content);
  content.style.cssText = `

 	 background-image: url("../imgs/auth.jpg");
	 background-size: cover;
	 background-repeat: no-repeat;
	 height: 100%;
	 width: 100%;

  
`;
  // child creation and styling

  const central = document.createElement('div');
  content.appendChild(central);
  central.outerHTML = `
      <nav>
	<div class="logo">
	  <span>sawadika!</span>
	   <span> thai food </span>
	</div>
	<div class="tabs">
	  <button class="tab1"> delicious dishes</button>
	  <button class="tab2"> visit paradise</button>
	  <button class="tab3"> contact</button>
	</div>
      </nav>
      <div id="central"></div>
      `;


  document.getElementById('central').style.cssText = `

   background: yellow;
   width: 70%;
	 margin: 7% auto;
	 height: 28%;
	 text-align:center;
font-size: 20px;
font-family: Mono;
padding-top:5%;

  

    `;
  document.getElementById('central').innerHTML = 'We are the bomb, a bomb of flavors, come and taste the richness & and extraordinaries possibilites that offers the real thai food. Welcome to Sawadika!';

  document.querySelectorAll('button').forEach((elem) => {
	 elem.style.cssText = `
border:none;
   color: white;
   text-decoration: none;
   background-color: transparent;
	 text-transform: uppercase;
	 font-weight: bold;
	 font-size: 22px;
	 margin-top: 3%;;
      padding:16px;
`;
  });

  document.querySelector('nav').style.cssText = `
	 display:flex;
	 flex:1;
	 justify-content: space-between;

    `;

  document.querySelector('span').style.cssText = ` 	 display:block;
	 color: white;
	 font-size: 2rem;
	 font-weight: bold;
	 font-family: monospace;
	 line-height: 29px;
    `;

  document.querySelector('.logo').style.cssText = ` width: 20%;
    background: black;
    padding: 3%;
    margin: 2%;
    text-align:center;
    `;
  document.querySelector('body').style.backgroundColor = 'yellow';
}
export { onLoad };
