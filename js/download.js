/**
 * Download a file.
 * @param {String} url - String that represent à URL.
 * @param {String} [filename] - String that represent the file name.
 * - Défault : Title page.
 */
function download(url, filename = document.getElementsByTagName("title")[0].innerText) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
}