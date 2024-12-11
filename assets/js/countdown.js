function updateCountdown() {
    const eventDate = new Date("December 14, 2024 19:00:00").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("countdown").textContent =
        `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
    } else {
      document.getElementById("countdown").textContent = "Acara dimulai!";
    }
  }

  setInterval(updateCountdown, 1000);
