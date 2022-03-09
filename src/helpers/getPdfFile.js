import jsPDF from "jspdf";


export const getPdfFile = (text) => {
  const pdf = new jsPDF();
  console.log(text)
  pdf.text(text, 8, 40)
  pdf.save("pdf");

}

