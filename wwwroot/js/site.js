const contactChats = $("#contact-chat-items");
const currentUser = $("#user-detail .current-user");
const userChat = $("#user-detail .user-chat");
const chatsSection = document.querySelector("#Chats ul");


$(function () {
  //#region Set Scroll : End
  chatsSection.scrollTop = chatsSection.scrollHeight;
  //#endregion
});

function openChat(element) {
  // debugger;
  if (!contactChats.hasClass("disable-element")) {
    contactChats.addClass("disable-element");
    currentUser.addClass("disable-element");
    userChat.removeClass("disable-element");
  }
}

function back() {
  if (contactChats.hasClass("disable-element")) {
    contactChats.removeClass("disable-element");
    currentUser.removeClass("disable-element");
    userChat.addClass("disable-element");
  }
}
