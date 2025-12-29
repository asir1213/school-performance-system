// تمييز الصفحة الحالية
const links = document.querySelectorAll('.nav-item');
const page = window.location.pathname.split('/').pop();

links.forEach(link=>{
  if(link.getAttribute('href') === page){
    link.classList.add('active');
  }
});

// انتقال ناعم
links.forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.body.style.opacity='0';
    setTimeout(()=>{
      window.location.href = link.href;
    },200);
  });
});
