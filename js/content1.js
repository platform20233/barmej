const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const allAnswers = document.querySelectorAll(".faq-answer");

    // Close all other menus
    allAnswers.forEach((otherAnswer) => {
      if (otherAnswer !== answer && otherAnswer.style.display === "block") {
        otherAnswer.style.display = "none";
      }
    });

    // Open or close the clicked menu
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

const changeVideoBtn1 = document.getElementById("change-video1");
const changeVideoBtn2 = document.getElementById("change-video2");
const changeVideoBtn3 = document.getElementById("change-video3");
const changeVideoBtn4 = document.getElementById("change-video4");
const changeVideoBtn5 = document.getElementById("change-video5");
const changeVideoBtn6 = document.getElementById("change-video6");
const changeVideoBtn7 = document.getElementById("change-video7");
const changeVideoBtn8 = document.getElementById("change-video8");
const changeVideoBtn9 = document.getElementById("change-video9");
const changeVideoBtn10 = document.getElementById("change-video10");
const changeVideoBtn11 = document.getElementById("change-video11");
const changeVideoBtn12 = document.getElementById("change-video12");
const videoPlayer = document.getElementById("video-player");

changeVideoBtn1.addEventListener("click", function () {
  videoPlayer.src = "https://www.youtube.com/embed/xNTMiv58N8g";
});

changeVideoBtn2.addEventListener("click", function () {
  videoPlayer.src = "https://www.youtube.com/embed/It91I590cmI";
});

changeVideoBtn3.addEventListener("click", function () {
  videoPlayer.src = "https://www.youtube.com/embed/4pH2XZUcsu4";
});

changeVideoBtn4.addEventListener("click", function () {
  videoPlayer.src = "https://www.youtube.com/embed/IBW-E91JNNk";
});

changeVideoBtn5.addEventListener("click", function () {
  videoPlayer.src = "https://www.youtube.com/embed/s_-h-LQyPCA";
});

changeVideoBtn6.addEventListener("click", function () {
  videoPlayer.src = "https://www.youtube.com/embed/pcv1FTFDYQM";
});

changeVideoBtn7.addEventListener("click", function () {
  videoPlayer.src = "https://www.youtube.com/embed/mre4Htmush8";
});

changeVideoBtn8.addEventListener("click", function () {
  videoPlayer.src = "https://www.youtube.com/embed/bDOAj3-tWbQ";
});

changeVideoBtn9.addEventListener("click", function () {
  videoPlayer.src = "https://www.youtube.com/embed/GwdnOp_Yhks";
});

changeVideoBtn10.addEventListener("click", function () {
  videoPlayer.src = "https://www.youtube.com/embed/GR88sxAnxcA";
});

changeVideoBtn11.addEventListener("click", function () {
  videoPlayer.src = "https://www.youtube.com/embed/ZbAHCoEXQ68";
});

changeVideoBtn12.addEventListener("click", function () {
  videoPlayer.src = "https://www.youtube.com/embed/jlFTdGMUCD8";
});
