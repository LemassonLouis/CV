async function download() {

    const downloadButton = document.getElementById("download");
    const cv = document.getElementById("CV");
    const title = document.getElementsByTagName("title")[0].innerText;

    downloadButton.style.display = "none";
    cv.classList.remove("sheet");
    window.scrollTo(0,0);
    
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
            // scale: 4
            scale: 3
            // scale: 2
            // scale: 1
        }
    };

    await html2pdf().set(opt).from(cv).save();

    downloadButton.style.display = "";
    cv.classList.add("sheet");
}