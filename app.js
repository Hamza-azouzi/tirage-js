const names = document.getElementById("name");
const subject = document.getElementById("subject");
const list = document.getElementById("list");
const DisplayList = document.getElementById("DisplayList");
const fullName = document.getElementById("FullName");
const Subject = document.getElementById("Subject");
const Time = document.getElementById("Time");
const Tourage = document.getElementById("Tourage");
const DateInput = document.getElementById("Date");
let randomInt = null;
let SkipRandom = [];
let randomdate = null;
let studentData = "";
let rndTime = "";
let Students = [];
let year = "";
let month = "";
let day = "";

function save() {
  Students.push({ fullName: names.value, subject: subject.value, time: "" });
  names.value = "";
  subject.value = "";
}

const DisplayListStudens = (Students) => {
  let divFullNmae = document.createElement("div");
  let divSubject = document.createElement("div");
  let divTime = document.createElement("div");
  fullName.innerHTML = "";
  Subject.innerHTML = "";
  Time.innerHTML = "";
  divFullNmae.innerHTML = "FullName";
  divFullNmae.classList.add("fullName");

  divSubject.innerHTML = "Subject";
  divSubject.classList.add("subject");

  divTime.innerHTML = "Time";
  divTime.classList.add("time");
  Students.map((e) => {
    divFullNmae.innerHTML += `
            <span>${e.fullName}</span>
        `;

    divSubject.innerHTML += `
        <span>${e.subject}</span>
        `;

    divTime.innerHTML += `
        <span>${e.time ? e.time : "Pending"}</span>
        `;
  });

  fullName.appendChild(divFullNmae);
  Subject.appendChild(divSubject);
  Time.appendChild(divTime);
};

list.addEventListener("click", () => {
  DisplayListStudens(Students);
});

Tourage.addEventListener("click", () => {
  let cuurDate = new Date(DateInput.value);
  Students.forEach((elm, idx) => {
    let studentData = elm;
    console.log('ana hna ',cuurDate.getDay() );
    if (cuurDate.getDay() == 6) {
      studentData.time = new Date(
        cuurDate.setDate(cuurDate.getDate() + 2)
      ).toLocaleDateString();
    } else if (cuurDate.getDay() == 0) {
      studentData.time = new Date(
        cuurDate.setDate(cuurDate.getDate() + 1)
      ).toLocaleDateString();
    } else {
      studentData.time = new Date(
        cuurDate.setDate(cuurDate.getDate() + (idx === 0 ? 0 : 1))
      ).toLocaleDateString();
    }

    console.log("cuurData", cuurDate);
    console.log(studentData);
    DisplayListStudens(Students);
  });


});



function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
