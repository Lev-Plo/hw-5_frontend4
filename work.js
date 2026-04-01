// Завдання 1
const keys = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let currentKeyIndex = 0;

const keyEl = document.getElementById('key');
const newGameBtn = document.getElementById('new-game');

keyEl.textContent = keys[currentKeyIndex];

window.addEventListener('keydown', (event) => {
  const pressedKey = event.key.toUpperCase();

  if (pressedKey === keys[currentKeyIndex]) {

    PNotify.success({
      text: 'Правильно!'
    });

    currentKeyIndex++;

    if (currentKeyIndex >= keys.length) {
      PNotify.success({
        text: 'Ви виграли!'
      });
      return;
    }

    keyEl.textContent = keys[currentKeyIndex];

  } else {
    PNotify.error({
      text: `Помилка! Потрібно: ${keys[currentKeyIndex]}`
    });
  }
});

window.addEventListener('keypress', (e) => {
  e.preventDefault();
});

newGameBtn.addEventListener('click', () => {
  currentKeyIndex = 0;
  keyEl.textContent = keys[currentKeyIndex];

  PNotify.notice({
    text: 'Нова гра почалась!'
  });
});


// Завдання 2
const chartData = {
  labels: ["1","2","3","4","5","6","7","8","9","10",
           "11","12","13","14","15","16","17","18","19","20",
           "21","22","23","24","25","26","27","28","29","30"],
  datasets: [{
    label: "Продажі за останній місяць",
    data: [150,220,180,200,250,300,280,350,400,380,
           420,450,500,550,600,650,700,750,800,850,
           900,950,1000,1050,1100,1150,1200,1250,1300,1350],
    borderColor: "#2196f3",
    backgroundColor: "#2196f3",
    borderWidth: 2,
    fill: false
  }]
};

const ctx = document.getElementById('sales-chart');

if (ctx && typeof Chart !== 'undefined') {
  new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
} else {
  console.error('Chart.js не підключений!');
}