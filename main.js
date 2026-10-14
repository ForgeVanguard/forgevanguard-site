const b=document.querySelector('.menu-btn'),n=document.getElementById('nav-links');
if(b){b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu');});
n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b.setAttribute('aria-expanded',false);}));}
const y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
