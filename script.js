const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'ಮೆನು ಮುಚ್ಚಿರಿ' : 'ಮೆನು ತೆರೆಯಿರಿ');
  nav.classList.toggle('open', open);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-link]').forEach((link) => {
  const url = window.NAMMA_NADI?.[link.dataset.link]?.trim();
  if (url) {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.addEventListener('click', (event) => event.preventDefault());
    if (link.dataset.link === 'whatsapp' || link.dataset.link === 'survey') link.setAttribute('aria-disabled', 'true');
  }
});

const embeds = document.querySelector('#social-embeds');
const addEmbed = (title, src, label, aspect = 'wide') => {
  if (!src) return;
  const figure = document.createElement('figure');
  figure.className = `embed-card ${aspect}`;
  const caption = document.createElement('figcaption');
  caption.textContent = title;
  const frame = document.createElement('iframe');
  frame.src = src;
  frame.title = label;
  frame.loading = 'lazy';
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  figure.append(caption, frame);
  embeds.append(figure);
};

const settings = window.NAMMA_NADI || {};
const instagramPost = settings.instagramEmbed?.trim();
const instagramEmbedUrl = instagramPost ? `${instagramPost.replace(/\/$/, '')}/embed` : '';
const facebookPage = settings.facebookPage?.trim();
const facebookEmbedUrl = facebookPage
  ? `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookPage)}&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`
  : '';
const youtubeEmbedUrl = settings.youtubeEmbedUrl?.trim();
addEmbed('Instagram · ಆಯ್ದ ಪೋಸ್ಟ್', instagramEmbedUrl, 'Instagram ಪೋಸ್ಟ್', 'portrait');
addEmbed('Facebook · ಪುಟದ ಅಪ್‌ಡೇಟ್‌ಗಳು', facebookEmbedUrl, 'Facebook ಪುಟದ ಅಪ್‌ಡೇಟ್‌ಗಳು', 'portrait');
addEmbed('YouTube · ವೀಡಿಯೊಗಳು', youtubeEmbedUrl, 'YouTube ವೀಡಿಯೊಗಳು', 'wide');
