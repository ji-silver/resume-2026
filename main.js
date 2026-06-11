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

// ===== 재직 기간 자동 계산 =====
function initCareerDuration() {
  const careerDuration = document.querySelector('#career-duration');

  if (!careerDuration) {
    return;
  }

  const startYear = 2024;
  const startMonth = 3;
  const today = new Date();
  const totalMonths =
    (today.getFullYear() - startYear) * 12 + (today.getMonth() + 1 - startMonth);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) {
    careerDuration.textContent = `${years}년 ${months}개월`;
    return;
  }

  if (years > 0) {
    careerDuration.textContent = `${years}년`;
    return;
  }

  careerDuration.textContent = `${months}개월`;
}

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initCareerDuration();
});
