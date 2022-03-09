

const getTextFile = (text) => {
    // Create an empty Word object:
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();

}

module.exports = getTextFile;
