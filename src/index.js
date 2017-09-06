import _ from 'lodash';
import './style.css';
import icon from './icon.png';
import data from './data.xml';
import printMe from './print.js';
import { cube } from './math.js';

function component() {

  console.log('carlos', data);

  var component = document.createElement('div');
  var container = document.createElement('div');
  var image = document.createElement('img');
  var cubeResult = document.createElement('div');
  var btn = document.createElement('button');
  var footer = document.createElement('footer');

  // Lodash, now imported by this script
  component.innerHTML = '<h1 class="hello">' + _.join(['Hello', 'Webpack'], ' ') + '</h1>';
  
  image.src = icon;
  component.appendChild(image);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  component.appendChild(btn);

  cubeResult.innerHTML = '5 cubed is equal to ' + cube(5);
  component.appendChild(cubeResult);

  footer.innerHTML = 'footer';
  component.appendChild(footer);

  container.classList.add('container');
  container.appendChild(component);

  return container;

}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accpepting the update of printMe module');
    printMe();
  })
}