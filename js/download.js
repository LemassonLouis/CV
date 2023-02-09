async function download() {

    // Retrieve elements
    const cv = document.getElementById("CV").cloneNode(true);
    const title = document.getElementsByTagName("title")[0].innerText;

    // Apply style changes
    cv.classList.remove("sheet");
    window.scrollTo(0, 0);

    // Define margins depend of CV height and window height (to avoid the alignment problem due to the scroll bar)
    let margin = [0, 0, -0.1, 0];
    if(window.innerHeight < document.getElementsByTagName("html")[0].offsetHeight) margin = [0, -2.3, 0, 0];

    // Options for pdf convertion
    const opt = {
        margin: margin,
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
}