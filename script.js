// ── Bản đăng kí sự kiện ──
function openModal(eventName, eventDate) {
  document.getElementById('modal-event-name').textContent = eventName;
  document.getElementById('modal-event-date').textContent = '📅 ' + eventDate;
  ['reg-name','reg-email','reg-phone','reg-note'].forEach(function(id) {
    document.getElementById(id).value = '';
  });
  var btn = document.querySelector('.modal-submit');
  btn.textContent = 'Đăng ký ngay 🎶';
  btn.style.backgroundColor = '';
  document.getElementById('registerModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('registerModal').classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('registerModal')) closeModal();
}

function submitRegister(button) {
  var name  = document.getElementById('reg-name').value.trim();
  var email = document.getElementById('reg-email').value.trim();
  if (!name || !email) {
    button.textContent = '⚠️ Vui lòng điền họ tên và email!';
    button.style.backgroundColor = '#e74c3c';
    setTimeout(function() {
      button.textContent = 'Đăng ký ngay 🎶';
      button.style.backgroundColor = '';
    }, 2500);
    return;
  }
  button.textContent = '✓ Đăng ký thành công!';
  button.style.backgroundColor = '#27ae60';
  setTimeout(function() { closeModal(); }, 1800);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// ── Hamburger menu toggle ──
function toggleMenu(btn) {
  btn.classList.toggle('open');
  var links = btn.nextElementSibling;
  links.classList.toggle('open');
}

// Đóng menu khi click vào link (mobile)
document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var links = document.querySelector('.nav-links');
      var btn   = document.querySelector('.hamburger');
      if (links) links.classList.remove('open');
      if (btn)   btn.classList.remove('open');
    });
  });
});

// ── Kiểm tra form khi bấm Send Message ──
function sendMessage(button) {
  var name    = document.getElementById('input-name').value.trim();
  var email   = document.getElementById('input-email').value.trim();
  var message = document.getElementById('input-msg').value.trim();

  if (name === '' || email === '' || message === '') {
    button.textContent = '⚠️ Bạn chưa điền đầy đủ thông tin!';
    button.style.backgroundColor = '#e74c3c';
    setTimeout(function () {
      button.textContent = 'Send Message';
      button.style.backgroundColor = '';
    }, 3000);
    return;
  }

  button.textContent = '✓ Sent! We will reply soon.';
  button.style.backgroundColor = '#27ae60';
  setTimeout(function () {
    button.textContent = 'Send Message';
    button.style.backgroundColor = '';
  }, 3000);
} 
