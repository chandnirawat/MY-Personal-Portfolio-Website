// SCROLL ANIMATION
const sections = document.querySelectorAll('.section, .skills');

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.2});

sections.forEach(sec=>observer.observe(sec));


// EMAILJS INIT
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // 👈 yaha EmailJS key dalni hai
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }).then(()=>{
    alert("Email sent successfully!");
  });
});