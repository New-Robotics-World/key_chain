function checkPassword(giftNumber) {
    const input = document.getElementById('password').value.trim().toLowerCase();
    const openBtn = document.getElementById('openGiftBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    const correctPasswords = {
      1: 'rose',
      2: 'nee',
      21: 'happy',
      3: 'birthday'
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
  
