"use strict;"

// console.log(document);

const body = document.body;
// console.log(body);

const unorderedList = body.firstElementChild;
// console.log(unorderedList);

const listItems = unorderedList.children;
const listItemsWithTextNodes = unorderedList.childNodes;

const lastItem = listItems[listItems.length - 1];
// console.log(lastItem.textContent);

const para = unorderedList.nextElementSibling;
// console.log(para)

const script = body.lastElementChild;
// console.log(script)


// CSS Selectors

const listWithId = document.querySelector('#menu');

// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '22px';
// console.log(listWithId);

const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const menuItemsAsChild = listWithClass.children; 
// console.log(menuItemsAsChild)

const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// firstMenuItem.style.backgroundColor = 'slateblue';
// console.log(firstMenuItem);


const paragraph = document.querySelector('.para');
// console.log(paragraph.value);

// listWithId.classList.add('xyz');
// listWithId.classList.toggle('xyz');
// console.log(listWithId.classList)

// console.log(listWithId.classList.contains('ipsum'))


const saveBtn = document.querySelector('.editor button[data-action="XXXsave"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => {
  console.log(dish.dataset);
});

/**
 * Creating elements
 */


const rootDiv = document.querySelector('div');

const headerTag = document.createElement("h2");
headerTag.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reprehenderit esse nostrum soluta. Magni minus voluptates nostrum, aspernatur vitae explicabo perspiciatis sint quidem totam ex tempore quae, necessitatibus at fugiat qui amet nam cupiditate neque temporibus ducimus eaque? Doloremque blanditiis error dolorum delectus corporis beatae aspernatur voluptas eos minima est in temporibus exercitationem aperiam cupiditate, quasi libero quis similique corrupti ipsam qui nulla perferendis omnis nobis. Possimus eaque ipsum magni nemo saepe quod eligendi mollitia dicta ab asperiores. Reiciendis, modi asperiores blanditiis veniam quo ullam dolor! Sequi obcaecati reiciendis nisi error culpa sunt perferendis nihil quas magnam. Corporis ad labore quas in sit soluta praesentium minima velit, incidunt sapiente, eaque autem facilis inventore et voluptatibus tempore dignissimos repellat illum nisi! Ipsa dicta non sint, amet quas magnam natus deserunt. Autem consequuntur atque veniam vel alias ducimus at ipsum illum, odit id! At, id. Possimus dignissimos, esse illum rem dolorum maiores sed nemo ipsa ut distinctio fuga tempora nihil placeat inventore voluptatum mollitia accusantium doloribus commodi et ratione molestias? Explicabo id deleniti nemo quod doloremque dolores voluptatem sint asperiores, minus architecto provident velit labore, nesciunt porro animi suscipit consequatur quidem reprehenderit. Iusto, aliquid modi? Ipsa quidem animi assumenda, voluptatem distinctio suscipit!"


rootDiv.appendChild(headerTag);

const newEl = document.createElement("p");
const newEl2 = document.createElement("p");
newEl.textContent = "lorem ipsum";
newEl2.textContent = "lorem ipsum doler set amet";

rootDiv.prepend(newEl2);

rootDiv.append(newEl);

rootDiv.after(newEl);


newEl2.remove();
