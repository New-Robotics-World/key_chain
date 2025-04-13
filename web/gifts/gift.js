function checkPassword(giftNumber) {
    const input = document.getElementById('password').value.trim().toLowerCase();
    const openBtn = document.getElementById('openGiftBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    const correctPasswords = {
      1: 'school',
      2: 'coffee',
      21: 'loosu',
      3: 'sunset'
    };
  
    if (input === correctPasswords[giftNumber]) {
      openBtn.style.display = 'block';
      if (nextBtn) nextBtn.style.display = 'inline-block';
    } else {
      alert('Wrong password! Try again.');
      openBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
    }
  }
  