let textArea = document.querySelector("#text-area");

let bold = document.querySelector("#bold");

let italic = document.querySelector("#Italic");
let leftalign = document.querySelector("#left-align");
let center = document.querySelector("#align-justify");
let right = document.querySelector("#right-align");

let upper = document.querySelector("#uppercase");
let lower = document.querySelector("#lowercase");
let clear = document.querySelector("#clear-text");
let capitalize = document.querySelector("#capitalize")



let boldcontent = () => {
    if (textArea.classList.contains("bold")) {
        textArea.classList.remove("bold")
    } else {

        textArea.classList.add("bold");

    }
}
bold.addEventListener("click", boldcontent);



let italicContent = () => {

    if (textArea.classList.contains("italic")) {
        textArea.classList.remove("italic")
    } else {

        textArea.classList.add("italic");

    }

}
italic.addEventListener("click", italicContent);



let left_Align = () => {
    textArea.style.textAlign = "left";
}
leftalign.addEventListener("click", left_Align);



let centerAlign = () => {
    textArea.style.textAlign = "center";
}

center.addEventListener("click", centerAlign);





let rightAlign = () => {

    textArea.style.textAlign = "right";
}

right.addEventListener("click", rightAlign);


let upperCase = () => {

    textArea.style.textTransform = "uppercase";
}

upper.addEventListener("click", upperCase);


let lowerCase = () => {

    textArea.style.textTransform = "lowercase";
}

lower.addEventListener("click", lowerCase);


let clearText = () => {
    textArea.value = "";
}
clear.addEventListener("click", clearText);

let capital = () => {

    textArea.style.textTransform = "capitalize";
}
capitalize.addEventListener("click", capital);


// let textArea = document.querySelector("#text-area");
let downloadBtn = document.querySelector("#download");

downloadBtn.addEventListener("click", () => {
    // Get the text content from the textarea
    let textContent = textArea.value;

    // Create a Blob object containing the text content
    let blob = new Blob([textContent], { type: 'text/plain' });

    // Create a temporary anchor element
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'text_content.txt'; // Set the file name for download

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link after the download is initiated
    link.remove();
});



