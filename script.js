const reveal = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); reveal.unobserve(entry.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));

const cursor=document.querySelector('.cursor-dot');
if(cursor && matchMedia('(pointer:fine)').matches){
  addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';cursor.style.opacity='1'});
  document.querySelectorAll('a,button,summary').forEach(el=>{
    el.addEventListener('mouseenter',()=>cursor.classList.add('active'));
    el.addEventListener('mouseleave',()=>cursor.classList.remove('active'));
  });
}

document.querySelectorAll('[data-youtube]').forEach(card=>{
  const id=card.dataset.youtube;
  const poster=card.querySelector('.video-poster');
  if(!poster) return;
  poster.addEventListener('click',()=>{
    const iframe=document.createElement('iframe');
    iframe.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
    iframe.title='MBA Studio project video'; iframe.allow='autoplay; encrypted-media; picture-in-picture'; iframe.allowFullscreen=true;
    iframe.style.cssText='width:100%;height:100%;border:0;display:block';
    poster.replaceWith(iframe);
  });
});
