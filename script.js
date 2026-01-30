/* Kulübe Katıl butonu */
function joinClub(){
  alert("Kulübümüze katıldığın için teşekkürler!");
}

/* Form kontrol */
function formKontrol(){
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || email === ""){
    alert("Lütfen ad ve e-posta alanlarını doldurun!");
    return false;
  }

  alert("Mesajınız gönderildi (demo).");
  return false; // GitHub Pages için formu yenilemesin
}

/* Kartlar scroll ile görünür olsun (animasyon) */
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => observer.observe(card));
