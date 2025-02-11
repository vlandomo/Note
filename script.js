//   document.getElementById('openFile').addEventListener('click', function(event) {
//         event.preventDefault();
//         document.getElementById('fileInput').click();
//     });

//     document.getElementById('fileInput').addEventListener('change', function() {
//         const file = this.files[0];
//         if (file) {
//             alert('تم اختيار الملف: ' + file.name);
//         }
//     });

function showSideBarMenu(){
    console.log('menu');
}
function showBobUp(){
    console.log('bobup');
}
function greatNewFolder(){
    console.log('folder');
}
function greatNewNote(){
    location.href = "note.html";
}
function openSettings(){
    console.log('settings');
}

const toolbar = document.getElementById("toolbar");
const inputField = document.getElementById("inputField");

inputField.addEventListener("focus", () => {
    toolbar.style.bottom = "50px"; // فوق لوحة المفاتيح
});

inputField.addEventListener("blur", () => {
    toolbar.style.bottom = "-60px"; // يخفي الشريط عند فقدان التركيز
});