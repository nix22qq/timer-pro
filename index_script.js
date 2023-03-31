function handleSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const hoursInput = document.getElementById("hours");
  const minutesInput = document.getElementById("minutes");

  const name = nameInput.value;
  const hours = Number(hoursInput.value);
  const minutes = Number(minutesInput.value);

  if (isNaN(hours) || isNaN(minutes)) {
    alert("숫자를 입력해주세요.");
    return;
  }

  if (hours < 0 || hours > 23) {
    alert("시간은 0에서 23 사이의 값이어야 합니다.");
    return;
  }

  if (minutes < 0 || minutes > 59) {
    alert("분은 0에서 59 사이의 값이어야 합니다.");
    return;
  }

  const totalMinutes = hours * 60 + minutes;

  const studyLog = {
    name: name,
    duration: totalMinutes,
    timestamp: new Date().getTime(),
  };

  let savedLogs = localStorage.getItem("studyLogs");
  if (savedLogs) {
    savedLogs = JSON.parse(savedLogs);
    const existingLogIndex = savedLogs.findIndex(log => log.name === name);
    if (existingLogIndex !== -1) {
      savedLogs[existingLogIndex].duration += totalMinutes;
    } else {
      savedLogs.push(studyLog);
    }
  } else {
    savedLogs = [studyLog];
  }

  localStorage.setItem("studyLogs", JSON.stringify(savedLogs));
  localStorage.setItem("studyLogs", JSON.stringify(savedLogs));

  // Display the popup
  alert('시간이 입력되었습니다!');

  displayUsers();
}




const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
