document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("confirmationForm");
    const responseList = document.getElementById("responseList");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Ambil data dari form
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;
      const status = document.querySelector("input[name='status']:checked").value;

      // Buat elemen baru untuk ditampilkan
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${name}</strong>: ${message} (${status})`;

      // Tambahkan ke daftar
      responseList.appendChild(listItem);

      // Reset form
      form.reset();
    });
  });
