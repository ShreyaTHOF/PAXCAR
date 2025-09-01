// Tiny helpers
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Owner modal
const modal = document.getElementById('ownerModal');
const ownerName = document.getElementById('ownerName');
document.querySelectorAll('.reveal').forEach(btn => {
  btn.addEventListener('click', () => {
    ownerName.textContent = btn.dataset.owner || 'Owner';
    if(typeof modal.showModal === 'function'){ modal.showModal(); } else { modal.setAttribute('open',''); }
  });
});
document.querySelector('#ownerModal .close').addEventListener('click', () => {
  if(typeof modal.close === 'function'){ modal.close(); } else { modal.removeAttribute('open'); }
});

// Embed switcher
const btns = document.querySelectorAll('.embed-btn');
const panes = {
  google: document.getElementById('embed-google'),
  appsheet: document.getElementById('embed-appsheet'),
  beehiiv: document.getElementById('embed-beehiiv')
};
btns.forEach(b => b.addEventListener('click', () => {
  btns.forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  Object.values(panes).forEach(p => p.style.display = 'none');
  panes[b.dataset.target].style.display = 'block';
}));
