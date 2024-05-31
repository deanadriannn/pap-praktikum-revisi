<script src="script.js"></script>
    <script src="../swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
      // Fungsi untuk generate Random Number
      function getRandomData(numItems, min, max) {
        const data = [];
        for (let i = 0; i < numItems; i++) {
          data.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return data;
      }

      // Mengambil element canvas
      const ctx = document.getElementById("statistikProvinsi").getContext("2d");

      // Generate random data
      const randomData = getRandomData(9, 1, 100000); //  items, nilai antara 1 sampai 100

      // Membuat bar chart
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Aceh",
            "Sumatera Utara",
            "Sumatera Barat",
            "Riau",
            "Kepulauan Riau",
            "Jambi",
            "Bengkulu",
            "Sumatera Selatan",
            "Bangka Belitung",
          ],
          datasets: [
            {
              label: "Pemilih",
              data: randomData,
              backgroundColor: ["rgba(234, 91, 91, 1.0)"],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    </script>

    <script>
      // Fungsi untuk generate Random Number
      function getRandomData(numItems, min, max) {
        const data = [];
        for (let i = 0; i < numItems; i++) {
          data.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return data;
      }

      // Mengambil element canvas
      const ctx4 = document
        .getElementById("statistikProvinsi3")
        .getContext("2d");

      // Generate random data
      const randomDatasss = getRandomData(6, 1, 100000); // 6 items, nilai antara 1 sampai 275,5 JT

      // Membuat bar chart
      new Chart(ctx4, {
        type: "bar",
        data: {
          labels: [
            "Sulawesi Utara",
            "Sulawesi Tengah",
            "Sulawesi Selatan",
            "Sulawesi Tenggara",
            "Sulawesi Barat",
            "Gorontalo",
          ],
          datasets: [
            {
              label: "Pemilih",
              data: randomDatasss,
              backgroundColor: ["rgba(234, 91, 91, 1.0)"],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    </script>

    <script>
      // Fungsi untuk generate Random Number
      function getRandomData(numItems, min, max) {
        const data = [];
        for (let i = 0; i < numItems; i++) {
          data.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return data;
      }

      // Mengambil element canvas
      const ctx3 = document
        .getElementById("statistikProvinsi2")
        .getContext("2d");

      // Generate random data
      const randomDatass = getRandomData(6, 1, 100000); // 9 items, nilai antara 1 sampai 100

      // Membuat bar chart
      new Chart(ctx3, {
        type: "bar",
        data: {
          labels: [
            "Banten",
            "Jawa Barat",
            "DKI Jakarta",
            "Jawa Tengah",
            "DI Yogyakarta",
            "Jawa Timur",
          ],
          datasets: [
            {
              label: "Pemilih",
              data: randomDatass,
              backgroundColor: ["rgba(234, 91, 91, 1.0)"],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    </script>

    <script>
      // Fungsi untuk generate Random Number
      function getRandomData(numItems, min, max) {
        const data = [];
        for (let i = 0; i < numItems; i++) {
          data.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return data;
      }

      // Mengambil element canvas
      const ctx2 = document.getElementById("statistikPemilih").getContext("2d");

      // Generate random data
      const randomDatas = getRandomData(2, 1, 275500000); // 9 items, nilai antara 1 sampai 275,5 JT

      new Chart(ctx2, {
        type: "doughnut",
        data: {
          labels: ["Sudah", "Belum"],
          datasets: [
            {
              label: "Pemilih",
              data: randomDatas,
              backgroundColor: [
                "rgba(234, 91, 91, 1.0)",
                "rgba(212, 212, 212, 1.0)",
              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    </script>


    <script src="https://website-widgets.pages.dev/dist/sienna.min.js" defer></script>
