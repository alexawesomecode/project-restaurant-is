function onLoad() {
  const content = document.getElementById('content');
  const central = document.createElement('div');
  content.appendChild(central);
  central.outerHTML = "<nav><div class='logo'><span>sawadika!</span><span> thai food </span></div><div class='tabs'><button class='tab1'> delicious dishes</button><button class='tab2'> visit paradise</button><button class='tab3'> contact</button></div></nav><div id='central'></div>";

  document.getElementById('central').innerHTML = 'We are the bomb, a bomb of flavors, come and taste the richness & and extraordinaries possibilites that offers the real thai food. Welcome to Sawadika!';
}
export default onLoad;
