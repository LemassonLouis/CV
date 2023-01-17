async function download() {

    // Retrieve elements
    const downloadButton = document.getElementById("download");
    const cv = document.getElementById("CV").cloneNode(true);
    const title = document.getElementsByTagName("title")[0].innerText;

    // Apply style changes
    downloadButton.style.display = "none";
    cv.classList.remove("sheet");
    window.scrollTo(0, 0);

    // Options for pdf convertion
    const opt = {
        margin: [0, -2.3, 0, 0],
        filename: `${title}.pdf`,
        image: {
            type: 'jpeg',
            quality: 1
        },
        html2canvas: {
            // scale: 6
            // scale: 5
            scale: 4
            // scale: 3
            // scale: 2
            // scale: 1
        }
    };

    // Convert to pdf
    await html2pdf().set(opt).from(cv).save();

    // Undo style changes
    downloadButton.style.display = "";
}