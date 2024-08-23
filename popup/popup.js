document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myButton").addEventListener("click", lol);
})

function lol() {
    chrome.storage.sync.set({
        mytext: (Math.random() + 1).toString(36).substring(7)
    });
}