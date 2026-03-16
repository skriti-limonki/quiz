const questions = [
{category:"ФУТБОЛ", question:"Какво най-много ядосва феновете по време на мач?", answer:"Съдийска грешка"},
{category:"ЛИТЕРАТУРА", question:"Кой е най-известният детски писател?", answer:"Ханс Кристиан Андерсен"},
{category:"ФУТБОЛ", question:"Коя позиция на терена е най-трудна?", answer:"Вратар"},
{category:"ЛИТЕРАТУРА", question:"Кой е най-известният български писател?", answer:"Иван Вазов"},
{category:"ФУТБОЛ", question:"Кое е най-вълнуващото нещо във футбола?", answer:"Гол в последната минута"},
{category:"ЛИТЕРАТУРА", question:"Кой е най-известният български поет, изучаван до 7. клас?", answer:"Христо Ботев"},
{category:"ФУТБОЛ", question:"Коя страна е най-силна във футбола?", answer:"Бразилия"},
{category:"ЛИТЕРАТУРА", question:"Кой е най-популярният жанр в литературата?", answer:"Фантастика / фентъзи"},
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
{category:"ФУТБОЛ", question:"Кой е най-известният футболен треньор?", answer:"Пеп Гуардиола"},
{category:"ЛИТЕРАТУРА", question:"Коя книга най-често се превръща във филм?", answer:"Хари Потър"}
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const categoryEl = document.getElementById("category");

const answerBtn = document.getElementById("answerBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

const footballBackground = "https://www.ibackdrop.com/cdn/shop/products/Sports_Green_Grass_Football_Field_Background_Football_Frame_Light_Backdrop_IBD-19756.jpg";
const literatureBackground = "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80";

function setBackground(category){
  document.body.style.backgroundImage = category==="ФУТБОЛ" ? `url(${footballBackground})` : `url(${literatureBackground})`;
}

function loadQuestion(){
  const q = questions[currentQuestion];

  answerEl.classList.remove("show");
  answerBtn.textContent = "ПОКАЖИ ОТГОВОР";
  answerEl.textContent = "";

  categoryEl.textContent = q.category;
  questionEl.textContent = q.question;

  document.getElementById("counter").textContent = `Въпрос ${currentQuestion+1} / ${questions.length}`;

  setBackground(q.category);
}

answerBtn.onclick = () => {
  if(!answerEl.classList.contains("show")){
    answerEl.textContent = questions[currentQuestion].answer;
  }
  answerEl.classList.toggle("show");
  answerBtn.textContent = answerEl.classList.contains("show") ? "СКРИЙ ОТГОВОР" : "ПОКАЖИ ОТГОВОР";
};

nextBtn.onclick = () => {
  currentQuestion = (currentQuestion +1)%questions.length;
  loadQuestion();
};

prevBtn.onclick = () => {
  currentQuestion = (currentQuestion -1 + questions.length)%questions.length;
  loadQuestion();
};

// Fullscreen
fullscreenBtn.onclick = () => {
  const elem = document.documentElement;
  if(!document.fullscreenElement) elem.requestFullscreen?.() || elem.webkitRequestFullscreen?.() || elem.msRequestFullscreen?.();
  else document.exitFullscreen?.() || document.webkitExitFullscreen?.() || document.msExitFullscreen?.();
};

document.addEventListener("fullscreenchange", () => {
  fullscreenBtn.textContent = document.fullscreenElement ? "ИЗХОД ОТ ЦЯЛ ЕКРАН" : "ЦЯЛ ЕКРАН";
});

// клавиши за навигация и space
document.addEventListener("keydown", (e)=>{
  if(e.code==="ArrowRight") nextBtn.click();
  if(e.code==="ArrowLeft") prevBtn.click();
  if(e.code==="Space") { e.preventDefault(); answerBtn.click(); }
});

loadQuestion();