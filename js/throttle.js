const controls = document.querySelector('#controls').children;

const input = controls[0];
const createBoxesButton = controls[1];
const removeAllBoxesButton = controls[2];


const boxField = document.querySelector('#boxes');

let boxCount = 0;

input.addEventListener("change", (e) => {
    boxCount = e.target.value;
});

createBoxesButton.addEventListener("click", (e) => {
    e.stopPropagation();
    // console.log(e, boxCount);
    if (boxCount > 0) {
        createBoxes(boxCount);
    }
})

function createBoxes(amount) {

    for (let idx = 0; idx < amount; idx++) {

        // Create the BOX
        const box = document.createElement('div');
        box.style.width = "30px";
        box.style.height = "30px";
        box.style.background = "slateblue";
        box.style.margin = '10px';
        
        // Add to existing boxes
        boxField.append(box);
    }


}

removeAllBoxesButton.addEventListener('click', () => {
    const allChuld = boxField.children;
    const allBoxes = boxField.children.length;

    for (let index = 0; index < allBoxes; index++) {
        const current = allChuld[index];
        current.remove();
    }

})



