// ===== 섹션 페이드인 애니메이션 =====
function initScrollAnimations() {
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  sections.forEach(section => observer.observe(section));
}

// ===== 모달 열기/닫기 (스크롤바 흔들림 방지) =====
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function openModal(btn) {
  const modalId = btn.getAttribute('data-modal');
  const template = document.getElementById(modalId);
  const content = document.getElementById('modalContent');
  const overlay = document.getElementById('modalOverlay');

  if (!template) return;

  // template 내용을 모달에 삽입
  content.innerHTML = '';
  const clone = template.content.cloneNode(true);
  content.appendChild(clone);

  // 스크롤바 너비만큼 padding-right 보상 → 흔들림 방지
  const scrollbarWidth = getScrollbarWidth();
  document.body.style.paddingRight = scrollbarWidth + 'px';
  document.body.style.overflow = 'hidden';

  overlay.classList.add('active');
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
});
