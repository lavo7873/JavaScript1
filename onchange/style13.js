// function do_somthing(){
//     var selectedValue = document.getElementById("mySelect").value;
//     alert(selectedValue);
// }
var selectedElement = document.getElementById("mySelect");
selectedElement.addEventListener("change",changeFuntion);
function changeFuntion(){
    var selectValue = document.getElementById("mySelect").value;
    alert(selectValue)
}