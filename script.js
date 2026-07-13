const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('.menu').addEventListener('click',e=>{const links=document.querySelector('.nav-links');links.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',links.classList.contains('open'))});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav-links').classList.remove('open')));
window.addEventListener('scroll',()=>document.querySelector('.nav-wrap').classList.toggle('scrolled',scrollY>20));
document.getElementById('year').textContent=new Date().getFullYear();

const modal=document.querySelector('.case-modal');
const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')};
document.querySelectorAll('.portfolio-card').forEach(card=>card.addEventListener('click',()=>{
  document.getElementById('case-title').textContent=card.dataset.title;
  document.getElementById('case-desc').textContent=card.dataset.desc;
  document.getElementById('case-tools').textContent=card.dataset.tools;
  const image=document.getElementById('case-image');image.src=card.dataset.image;image.alt=`${card.dataset.title} project illustration`;
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
}));
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal()});
