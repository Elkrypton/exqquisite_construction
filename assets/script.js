// Simple interactivity: mobile drawer and reveal on scroll
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('#hambtn');
  const drawer=document.querySelector('#drawer');
  if(btn && drawer){
    btn.addEventListener('click',()=> drawer.classList.toggle('open'));
  }

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible');
    })
  },{threshold:0.12});
  document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el));

  // simple form handler: mailto fallback
  const form=document.querySelector('form[data-mailto]');
  if(form){
    form.addEventListener('submit', (ev)=>{
      ev.preventDefault();
      const data=new FormData(form);
      const name=data.get('name')||'No name';
      const email=data.get('email')||'';
      const phone=data.get('phone')||'';
      const details=data.get('details')||'';
      const subject=encodeURIComponent('Website Quote Request from '+name);
      const body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nPhone: '+phone+'\n\nProject details:\n'+details);
      const mailto = `mailto:Akenyatta3@aol.com?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    });
  }
});
