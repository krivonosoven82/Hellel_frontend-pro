let lengthDocumentElement = document.body.childNodes.length;

console.log(`Длина = ${lengthDocumentElement}`);

for(let i = 0; i < lengthDocumentElement; i++){
    console.log(document.body.childNodes[i]);
}