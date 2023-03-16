export let form = document.forms.comment;
export let usersName = form.elements.userName;
export let usersComment = form.elements.comment;
export let buttonSend = document.getElementById("send-button");
export let formDiv = document.querySelector(".comment-form");
export let inputNameError = document.querySelector(".input-error");
export let textareaCommentError = document.querySelector(".textarea-error");
export let userDate = document.getElementById("date");
export let userTime = document.getElementById("time");
export let pForLengthComment = document.querySelector(".lengthComment");
const dayjs = require("dayjs");
export let currentDate = dayjs();
export let addCommentDiv = document.querySelector("main");

//отрисовка каждого блока оставленного комментария
export let renderComment = (userName, userComment, date) => {
  return `<h2 class="newCommentName">${userName}</h2>
    <p class="newComment">${userComment}</p>
    <p class="newCommentDate">${date[0]} ${date[1]} </p>
    <p class="newCommentDate">${date[2]} </p>
    <div class="div-button-like">
      <button class="button-like">  </button>
      <p class="count-like"></p>
    </div>
    <div class="div-button-delete">
    <button class="button-delete" id="button-delete"> </delete>
    <div>
  `;
};
