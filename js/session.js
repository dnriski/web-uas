let session_class = [
  {
    id: 1,
    title: "1. Dasar Pemrograman",
    link_video: "https://www.youtube.com/embed/jGyYuQf-GeE?si=ojRu13bqsvg-Bjnd",
    description:
      "Pemrograman dasar adalah tahap awal dalam pembelajaran pemrograman komputer. Ini melibatkan pengenalan konsep-konsep dasar yang diperlukan untuk mulai menulis dan memahami kode. Berikut adalah beberapa aspek kunci dari pemrograman dasar:",
    is_success: true,
  },
  {
    id: 2,
    title: "2. Sejarah Pemrograman",
    link_video: "https://www.youtube.com/embed/ZDuwL9qGtuI?si=X1pgMHPgoypbyred",
    description:
      "Mengenal sejarah pemrograman seperti algoritma, logika pemrograman, dan prinsip dasar pemrograman. Kursus ini membantu Anda memahami fondasi yang diperlukan sebelum mempelajari bahasa pemrograman spesifik.",
    is_success: true,
  },
  {
    id: 3,
    title: "3. Roadmap Belajar Pemrograman",
    link_video: "https://www.youtube.com/embed/OEhw6GqQDts?si=CwoqHev6bQp947HD",
    description:
      "Mempelajari roadmap belajar pemrograman yang efektif. Kursus ini memberikan panduan tentang bagaimana memulai belajar pemrograman, memilih bahasa pemrograman, dan langkah-langkah yang harus diambil untuk menjadi seorang pemrogram.",
    is_success: false,
  },
  {
    id: 4,
    title: "1. Pendahuluan HTML",
    link_video: "https://www.youtube.com/embed/mMoURb4deCk?si=1zw5NQxE83Z2RbFy",
    description:
      "Html adalah tahap awal dalam pembelajaran pemrograman komputer. Ini melibatkan pengenalan konsep-konsep dasar yang diperlukan untuk mulai menulis dan memahami kode. Berikut adalah beberapa aspek kunci dari pemrograman dasar:",
    is_success: false,
  },
  {
    id: 5,
    title: "2. Hello World",
    link_video: "https://www.youtube.com/embed/Qmj1aPS2hNE?si=KYJ96O8k3hz4ngwA",
    description:
      "Mencoba menampilkan hello world pada browser. Kursus ini membantu Anda memahami fondasi yang diperlukan sebelum mempelajari bahasa pemrograman spesifik.",
    is_success: false,
  },
  {
    id: 6,
    title: "3. Tag HTML",
    link_video: "https://www.youtube.com/embed/-PH5tz1d46Y?si=3v_9ehZpoQ_dBnxE",
    description:
      "Mempelajari tag html. Kursus ini memberikan panduan tentang bagaimana memulai belajar pemrograman, memilih bahasa pemrograman, dan langkah-langkah yang harus diambil untuk menjadi seorang pemrogram.",
    is_success: false,
  },
  {
    id: 7,
    title: " 1. Pendahuluan CSS",
    link_video: "https://www.youtube.com/embed/CleFk3BZB3g?si=BiuDHArziwYPgenA",
    description:
      "Html adalah tahap awal dalam pembelajaran pemrograman komputer. Ini melibatkan pengenalan konsep-konsep dasar yang diperlukan untuk mulai menulis dan memahami kode. Berikut adalah beberapa aspek kunci dari pemrograman dasar:",
    is_success: false,
  },
  {
    id: 8,
    title: "2. Penempatan CSS",
    link_video: "https://www.youtube.com/embed/91RxnRUabz4?si=XkVtRao8xxAcK_GV",
    description:
      "Mencoba menampilkan hello world pada browser. Kursus ini membantu Anda memahami fondasi yang diperlukan sebelum mempelajari bahasa pemrograman spesifik.",
    is_success: false,
  },
  {
    id: 9,
    title: "3. Font Styling",
    link_video: "https://www.youtube.com/embed/MnyCbILmtOY?si=uA6NgGSynYI_21M1",
    description:
      "Mempelajari tag html. Kursus ini memberikan panduan tentang bagaimana memulai belajar pemrograman, memilih bahasa pemrograman, dan langkah-langkah yang harus diambil untuk menjadi seorang pemrogram.",
    is_success: false,
  },
];

function changeVideo(index) {
  document.getElementById("videoFrame").src = session_class[index].link_video;
  document.getElementById("materi").innerText =
    session_class[index].description;
  document.getElementById("id_session").innerText = session_class[index].id;
  document.getElementById("button-clear").name = session_class[index].id;
}

function doneSession() {
  let pElement = document.getElementById("id_session");
  // Mengambil teks dari elemen p
  let text = pElement.innerText || null;
  if (text == null || text == undefined) {
    Swal.fire({
      title: "Good job!",
      text: "Semangat!! Silakan melanjutkan belajar di sesi 1",
      icon: "success",
    });
  }
  console.log(text);
  const data = session_class.find((item) => item.id == text);
  if (data) {
    data.is_success = !data.is_success;
    updateDisplay();
  }
}

function updateDisplay() {
  console.log(session_class);
  session_class.forEach((item) => {
    const element = document.getElementById(item.id);
    if (element) {
      if (element.id == item.id && item.is_success) {
        console.log(element);
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
        console.log(element);
      }
    }
  });
}

// Panggil fungsi untuk memperbarui tampilan elemen saat halaman dimuat
updateDisplay();
