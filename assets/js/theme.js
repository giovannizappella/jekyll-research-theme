(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  function setTheme(t){
    if(t==='dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('site-theme', t);
    toggle && toggle.setAttribute('aria-pressed', t==='dark');
  }
  const saved = localStorage.getItem('site-theme');
  if(saved) setTheme(saved);
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
  toggle && toggle.addEventListener('click', ()=>{
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark? 'light' : 'dark');
  });
})();
