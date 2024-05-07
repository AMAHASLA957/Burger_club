var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

// Открытие модального окна при нажатии на кнопку
btn.onclick = function() {
  modal.style.display = "block";
}

// Закрытие модального окна при нажатии на (x)
span.onclick = function() {
  modal.style.display = "none";
}

// Закрытие модального окна при нажатии вне его
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto"; // Возвращаем прокрутку
    }
}



