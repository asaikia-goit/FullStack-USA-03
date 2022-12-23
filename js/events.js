const button = document.querySelector(".my-button");

const handleClick = (e) => {
    console.log("Button was clicked", e.currentTarget);

};

// button.addEventListener("click", handleClick);

/**
 * DEFAULT FORM ACTION
 */
// const form = document.querySelector(".register-form");

// const clickHandler= (e) => {
//     e.preventDefault();
    
//     const {
//         elements: { username, password }
//     } = e.currentTarget;
//     console.log(e);
// }

// form.addEventListener("auxclick", clickHandler);

// document.body.onclick = (e) => {
//     console.log(e)
// }

// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });


// document.addEventListener("keydown", event => {
//     event.preventDefault();

//     if (event.ctrlKey && event.code === 'KeyS') {
        
//         console.log(event);
//     }
    

// });


const textArea = document.querySelector(".textarea-test");

document.body.addEventListener("keydown", (e) => {
    console.log("TEXT CHANGE: ", e);
})