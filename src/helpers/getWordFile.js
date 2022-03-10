const getWordFile = (text) => {
    // Create an empty Word object:
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "application/ms-word"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.doc";
        document.body.appendChild(element);
        element.click();

}

module.exports = getWordFile;