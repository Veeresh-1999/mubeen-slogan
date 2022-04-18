
function dilogbox(){
    
let dialog = document.getElementById("confirmation-dialog");


// Show the dialog when clicking "Delete everything"
document.getElementById("delete").addEventListener("click", function() {
    dialog.showModal();
});

document.getElementById("cancel-delete").addEventListener("click", function() {
    dialog.close();
   
});
document.getElementById("confirm-delete").addEventListener("click", function() {
    dialog.close();
   
});

}

