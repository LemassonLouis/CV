async function download() {
    console.log("download()");
    var cv = document.getElementById("CV");
    
    const doc = new jsPDF();

    await html2canvas(cv, {
        allowTaint: true,
        useCORS: false,
        onrendered: function(canvas) {
            console.log(canvas.toDataURL("image/png"));
            doc.addImage(canvas.toDataURL("image/png"), 'PNG', 0, 0, 210, 297);
        }
    });

    doc.save("Document.pdf");

    // doc.html(cv, {
    //     html2canvas: {
    //         useCORS: true
    //     },
    //     callback: function (doc) {
    //         doc.save();
    //     },
    // });

    // doc.fromHTML(cv);
    // doc.save("Document.pdf");

    // var opt = {
    //     margin:       1,
    //     filename:     'myfile.pdf',
    //     image:        { type: 'jpeg', quality: 1 },
    //     html2canvas:  { scale: 2 },
    //     jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    // };

    // // html2pdf().set(opt).from(cv).save();
    // html2pdf().from(cv).save();

}