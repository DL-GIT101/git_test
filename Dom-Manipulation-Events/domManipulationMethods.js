const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redP = document.createElement('p');
redP.classList.add('redP');
redP.textContent = "Hey I'm red";
redP.style.color = 'red';

const headingThree = document.createElement('h3');
headingThree.classList.add('headingThree');
headingThree.textContent = "I'm a blue h3";
headingThree.style.color = 'blue';

const blkpnk = document.createElement('div');
blkpnk.classList.add('blkpnk');
blkpnk.style.cssText = "border: 5px solid black; background-color: pink;"

    const inDivHOne = document.createElement('h1');
    inDivHOne.classList.toggle('inDivHOne');
    inDivHOne.textContent = " I'm in a div";
    blkpnk.appendChild(inDivHOne);

    const meToop = document.createElement('p');
    meToop.classList.toggle('meToop');
    meToop.textContent = " ME TOO!";
    blkpnk.appendChild(meToop);


container.appendChild(content);
container.appendChild(redP);
container.appendChild(headingThree);
container.appendChild(blkpnk);