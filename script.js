
console.log("HELLO I M HERE")
const bookAppointmentBtn = document.querySelector('.bookAppointment1');
const popup = document.getElementById('popup');
const byMethodBtns = document.querySelectorAll('.byMethodBtn');

bookAppointmentBtn.addEventListener('click', function() {
  popup.style.display = 'block';
});

popup.addEventListener('click', function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

byMethodBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const method = this.textContent;
    alert(`Appointment booked ${method}!`);
    popup.style.display = 'none';
  });
});


const bookAppointmentBtn2 = document.querySelector('.bookAppointment2');
const popup2 = document.getElementById('popup');
const byMethodBtns2 = document.querySelectorAll('.byMethodBtn');

bookAppointmentBtn2.addEventListener('click', function() {
  popup.style.display = 'block';
});

popup2.addEventListener('click', function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

byMethodBtns2.forEach(btn => {
  btn.addEventListener('click', function() {
    const method = this.textContent;
    alert(`Appointment booked ${method}!`);
    popup.style.display = 'none';
  });
});


const bookAppointmentBtn3 = document.querySelector('.bookAppointment3');
const popup3 = document.getElementById('popup');
const byMethodBtns3 = document.querySelectorAll('.byMethodBtn');

bookAppointmentBtn3.addEventListener('click', function() {
  popup.style.display = 'block';
});

popup3.addEventListener('click', function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

byMethodBtns3.forEach(btn => {
  btn.addEventListener('click', function() {
    const method = this.textContent;
    alert(`Appointment booked ${method}!`);
    popup.style.display = 'none';
  });
});


