const questions = [
  {category:"ФУТБОЛ", question:"Какво най-много ядосва феновете по време на мач?", answer:"Съдийска грешка"},
  {category:"ЛИТЕРАТУРА", question:"Кой е най-известният детски писател?", answer:"Ханс Кристиан Андерсен"},
  {category:"ФУТБОЛ", question:"Коя позиция на терена е най-трудна?", answer:"Вратар"},
  {category:"ЛИТЕРАТУРА", question:"Кой е най-известният български писател?", answer:"Иван Вазов"},
  {category:"ЛИТЕРАТУРА", question:"Коя книга най-често се превръща във филм?", answer:"Хари Потър"},
  {category:"ФУТБОЛ", question:"Кое е най-вълнуващото нещо във футбола?", answer:"Гол в последната минута"},
  {category:"ЛИТЕРАТУРА", question:"Кой е най-известният български поет, изучаван до 7. клас?", answer:"Христо Ботев"},
  {category:"ФУТБОЛ", question:"Коя страна е най-силна във футбола?", answer:"Бразилия"},
  {category:"ЛИТЕРАТУРА", question:"Кой е най-популярният жанр в литературата?", answer:"Фантастика/фентъзи"},
  {category:"ФУТБОЛ", question:"Кой е най-добрият футболист в историята?", answer:"Лионел Меси"},
  {category:"ЛИТЕРАТУРА", question:"Кой е най-известният роман, изучаван до 7. клас?", answer:"Под игото"},
  {category:"ФУТБОЛ", question:"Кой е най-популярният футболен клуб в света?", answer:"Реал Мадрид"},
  {category:"ЛИТЕРАТУРА", question:"Кой герой от българската литература е хитър и комичен?", answer:"Бай Ганьо"},
  {category:"ФУТБОЛ", question:"Кой е най-известният стадион в света?", answer:"Камп Ноу"},
  {category:"ЛИТЕРАТУРА", question:"Коя приказка е най-популярна?", answer:"Пепеляшка"},
  {category:"ФУТБОЛ", question:"Кой е най-добрият млад футболист в последните години?", answer:"Ламин Ямал"},
  {category:"ЛИТЕРАТУРА", question:"Кой е най-известният детектив от книги?", answer:"Шерлок Холмс"},
  {category:"ФУТБОЛ", question:"Кой е най-добрият вратар в последните години?", answer:"Мануел Нойер"},
  {category:"ЛИТЕРАТУРА", question:"Коя е най-известната любовна история в литературата?", answer:"Ромео и Жулиета"},
  {category:"ФУТБОЛ", question:"Кой е най-известният футболен треньор?", answer:"Пеп Гуардиола"}
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const categoryEl = document.getElementById("category");

const answerBtn = document.getElementById("answerBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

const footballBackground = "https://images.unsplash.com/photo-1508098682722-e99c643e7f8a?w=800";
const literatureBackground = "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800";

function setBackground(category) {
  if(category === "ФУТБОЛ") document.body.style.backgroundImage = `url(${footballBackground})`;
  else if(category === "ЛИТЕРАТУРА") document.body.style.backgroundImage = `url(${literatureBackground})`;
}

function loadQuestion() {
  const q = questions[currentQuestion];
  categoryEl.textContent = q.category;
  questionEl.textContent = q.question;
  answerEl.textContent = q.answer;
  answerEl.classList.remove("show"); // винаги скриваме отговора при смяна

  document.getElementById("counter").textContent =
    `Въпрос ${currentQuestion+1} / ${questions.length}`;

  setBackground(q.category);
}

answerBtn.onclick = () => {
  answerEl.classList.toggle("show");
  answerBtn.textContent = answerEl.classList.contains("show") ? "СКРИЙ ОТГОВОР" : "ПОКАЖИ ОТГОВОР";
};

nextBtn.onclick = () => {
  currentQuestion = (currentQuestion + 1) % questions.length;
  loadQuestion();
};

prevBtn.onclick = () => {
  currentQuestion = (currentQuestion - 1 + questions.length) % questions.length;
  loadQuestion();
};

// Клавиатурни shortcuts: стрелки и Space
document.addEventListener("keydown", e => {
  if(e.code === "ArrowRight") nextBtn.click();
  if(e.code === "ArrowLeft") prevBtn.click();
  if(e.code === "Space") answerBtn.click();
  if(e.code === "Escape" && document.fullscreenElement) document.exitFullscreen();
});

// Fullscreen бутон
fullscreenBtn.onclick = () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen();
  else document.exitFullscreen();
};

loadQuestion();