import {
  usersName,
  usersComment,
  buttonSend,
  inputNameError,
  textareaCommentError,
  userDate,
  pForLengthComment,
  addCommentDiv,
  renderComment,
} from "./variables";
const dayjs = require("dayjs");
let currentDate = dayjs();
let correctUserName = null;
let correctUserComment = null;
let correctUserDate = null;
let lenghtComment;

//поле ввода имени
usersName.addEventListener("blur", (event) => {
  if (/[0-9]/.test(usersName.value)) {
    inputNameError.style.display = "block";
    inputNameError.innerHTML = "Имя введено неверно";
  } else if (usersName.value.trim() == "") {
    inputNameError.style.display = "block";
    inputNameError.innerHTML = "Введите имя";
  } else if (usersName.value.split("").length < 2) {
    inputNameError.style.display = "block";
    inputNameError.innerHTML = "Минимальное количество знаков 2";
  } else {
    inputNameError.style.display = "none";
    correctUserName = usersName.value;
  }
});

//поле комментария
usersComment.addEventListener("blur", (event) => {
  if (usersComment.value.trim() == "") {
    textareaCommentError.style.display = "block";
    textareaCommentError.innerHTML = "Напишите комментарий";
  } else if (lenghtComment < 5) {
    textareaCommentError.style.display = "block";
    textareaCommentError.innerHTML = "Минимальное количество знаков 5";
  } else if (lenghtComment > 200) {
    textareaCommentError.style.display = "block";
    textareaCommentError.innerHTML = "Максимальное количество знаков 200";
  } else {
    textareaCommentError.style.display = "none";
    correctUserComment = usersComment.value;
  }
});

//отображение кол-ва знаков в поле комментария
usersComment.addEventListener("input", (event) => {
  pForLengthComment.style.display = "block";
  lenghtComment = event.target.value.split("").length;
  pForLengthComment.innerHTML = `${lenghtComment} / 200`;
});

// проверка введенной даты
userDate.addEventListener("change", (event) => {
  if (event.target.value >= currentDate.format("YYYY-MM-DD")) {
    correctUserDate = [
      "Today",
      dayjs(currentDate).format("HH mm"),
      currentDate.format("DD.MM.YYYY"),
    ];
  } else if (event.target.value <= currentDate.format("YYYY-MM-DD")) {
    correctUserDate = [
      `${dayjs(event.target.value).format("dddd")}`,
      dayjs(currentDate).format("HH mm"),
      dayjs(event.target.value).format("DD.MM.YYYY"),
    ];
    if (
      correctUserDate[2] == currentDate.subtract(1, "day").format("DD.MM.YYYY")
    ) {
      correctUserDate[0] = "Yesterday";
    }
  }
});

//добавление комментария по кнопке
buttonSend.addEventListener("click", (event) => {
  event.preventDefault();
  addNewComment();
});

//добавление комментария по клавише Enter
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addNewComment();
  }
});

//добавление нового комментария
let addNewComment = () => {
  if (correctUserDate === null) {
    correctUserDate = [
      "Today",
      dayjs(currentDate).format("HH mm"),
      currentDate.format("DD.MM.YYYY"),
    ];
  }

  if (correctUserName !== null && correctUserComment !== null) {
    let div = document.createElement("div");
    div.className = "comments";

    div.innerHTML = renderComment(
      correctUserName,
      correctUserComment,
      correctUserDate
    );

    addCommentDiv.append(div);
    usersName.value = "";
    usersComment.value = "";
    pForLengthComment.style.display = "none";
    correctUserDate = null;
    (correctUserName = null), (correctUserComment = null);
  } else if (
    correctUserName == null &&
    correctUserComment == null &&
    usersComment.value == ""
  ) {
    inputNameError.style.display = "block";
    inputNameError.innerHTML = "Введите имя";
    textareaCommentError.style.display = "block";
    textareaCommentError.innerHTML = "Напишите комментарий";
  } else if (usersComment.value.length < 5 && usersComment.value.length > 1) {
    textareaCommentError.style.display = "block";
    textareaCommentError.innerHTML = "Минимальное количество знаков 5";
  } else if (correctUserName == null) {
    inputNameError.style.display = "block";
    inputNameError.innerHTML = "Введите имя";
  } else if (usersComment.value.length >= 5) {
    correctUserComment = usersComment.value;
  } else if (usersName.value.length >= 2) {
    correctUserName = usersName.value;
  }
};
