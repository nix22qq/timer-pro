function displayUsers() {
  const savedLogs = JSON.parse(localStorage.getItem("studyLogs") || "[]");
  const sortedLogs = savedLogs.sort((a, b) => b.duration - a.duration);

  const result = document.getElementById("result");
  result.innerHTML = "";

  function ordinalSuffix(i) {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  sortedLogs.forEach((log, index) => {
    const hoursString = Math.floor(log.duration / 60).toString().padStart(2, "0");
    const minutesString = (log.duration % 60).toString().padStart(2, "0");
    const listItem = document.createElement("li");
    listItem.textContent = `${ordinalSuffix(index + 1)}. ${log.name}님은 ${hoursString}시간 ${minutesString}분 동안 공부했습니다.`;
    result.appendChild(listItem);
  });
}


function handleResetRanking() {
  localStorage.removeItem("studyLogs");
  displayUsers();
}

const resetRankingButton = document.getElementById("resetRanking");
resetRankingButton.addEventListener("click", handleResetRanking);

displayUsers();

const checkPasswordButton = document.getElementById("checkPassword");
const passwordInput = document.getElementById("password");
const correctPassword = "0000"; // Replace this with the correct password

checkPasswordButton.addEventListener("click", function () {
  if (passwordInput.value === correctPassword) {
    resetRankingButton.style.display = "block";
  } else {
    resetRankingButton.style.display = "none";
    alert("비밀번호가 틀립니다.");
  }
});
