import dayjs from "dayjs";
import { addCommentDiv, currentDate } from "./variables";
let config = {
  childList: true,
  attributes: true,
  characterData: true,
  characterDataOldValue: true,
};

//Добавление текущей даты в начальный комментарий на странице
document.querySelector(".newCommentDate").innerHTML = `Today
  ${dayjs(currentDate).format("HH:MM")} <br> ${dayjs(currentDate).format(
  "DD MM YYYY"
)}`;

// кнопки удаления и лайка для каждого комментария
let countComments = addCommentDiv.children;
let updateComments = () => {
  countComments = addCommentDiv.children;
  for (let i = 0; i < countComments.length; i++) {
    let buttonLike = countComments[i].querySelector(".button-like");
    let btnDelete = countComments[i].querySelector(".button-delete");
    // click on like button

    buttonLike.onclick = function (e) {
      e.target.classList.toggle("clicked");
    };
    // click on a delete button
    btnDelete.onclick = function (e) {
      countComments[i].remove();
    };
  }
};

updateComments();

let observer = new MutationObserver(updateComments);
observer.observe(addCommentDiv, config);
