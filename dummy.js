let courses = [
  {
    id: 1,
    title: "Pemrograman Dasar",
    instructor: "Mr. John Doe",
    description:
      "Kursus ini mencakup dasar-dasar pemrograman dengan bahasa pemrograman populer. Anda akan belajar tentang variabel, kontrol alur, dan struktur data dasar.",
    is_ready: true,
    level: "Pemula",
  },
  {
    id: 2,
    title: "Pengembangan Web Front-End",
    instructor: "Ms. Jane Smith",
    description:
      "Kursus ini memperkenalkan Anda pada pengembangan web front-end menggunakan HTML, CSS, dan JavaScript. Anda akan belajar membuat antarmuka pengguna yang responsif dan interaktif.",
    is_ready: false,
    level: "Menengah",
  },
  {
    id: 3,
    title: "Pengembangan Web Back-End",
    instructor: "Dr. Robert Brown",
    description:
      "Kursus ini membahas pengembangan web back-end menggunakan Node.js dan Express. Fokus pada pengelolaan server, API, dan basis data.",
    is_ready: false,
    level: "Lanjutan",
  },
];

let course_session = [
  {
    id: 1,
    id_course: 1,
    title: "Sesi 1 - Dasar Pemrograman",
  },
  {
    id: 2,
    id_course: 1,
    title: "Sesi 2 - HTML dasar",
  },
  {
    id: 3,
    id_course: 1,
    title: "Sesi 3 - CSS dasar",
  },
];

let session_class = [
  {
    id: 1,
    id_session: 1,
    title: "1. Dasar Pemrograman",
    link_video:
      "https://www.youtube.com/watch?v=jGyYuQf-GeE&list=PLFIM0718LjIWonBxVAM2NgNuW0YxQverx",
    description:
      "Pemrograman dasar adalah tahap awal dalam pembelajaran pemrograman komputer. Ini melibatkan pengenalan konsep-konsep dasar yang diperlukan untuk mulai menulis dan memahami kode. Berikut adalah beberapa aspek kunci dari pemrograman dasar:",
    is_success: true,
  },
  {
    id: 2,
    id_session: 1,
    title: "2. Roadmap Belajar Pemrograman",
    link_video: "https://www.youtube.com/watch?v=EXAMPLE2",
    description:
      "Mempelajari roadmap belajar pemrograman yang efektif. Kursus ini memberikan panduan tentang bagaimana memulai belajar pemrograman, memilih bahasa pemrograman, dan langkah-langkah yang harus diambil untuk menjadi seorang pemrogram.",
    is_success: true,
  },
  {
    id: 3,
    id_session: 1,
    title: "3. Konsep Dasar Pemrograman",
    link_video: "https://www.youtube.com/watch?v=EXAMPLE3",
    description:
      "Mengenal konsep dasar pemrograman seperti algoritma, logika pemrograman, dan prinsip dasar pemrograman. Kursus ini membantu Anda memahami fondasi yang diperlukan sebelum mempelajari bahasa pemrograman spesifik.",
    is_success: false,
  },
  {
    id: 4,
    id_session: 1,
    title: "4. Karir dalam Pemrograman",
    link_video: "https://www.youtube.com/watch?v=EXAMPLE4",
    description:
      "Memahami berbagai jalur karir dalam dunia pemrograman. Kursus ini membahas berbagai peran yang ada untuk programmer, seperti pengembang perangkat lunak, insinyur data, dan analis sistem.",
    is_success: false,
  },
  {
    id: 5,
    id_session: 2,
    title: "1. Pengenalan HTML",
    link_video: "https://www.youtube.com/watch?v=2f2pS-mECqQ",
    description:
      "Kursus ini memperkenalkan dasar-dasar HTML (HyperText Markup Language). Anda akan belajar tentang struktur dasar HTML, elemen-elemen penting, dan cara membuat halaman web sederhana.",
    is_success: true,
  },
  {
    id: 6,
    id_session: 2,
    title: "2. Struktur Dokumen HTML",
    link_video: "https://www.youtube.com/watch?v=8Nf2pI7yRgk",
    description:
      "Mempelajari bagaimana mengatur struktur dokumen HTML menggunakan tag seperti `<header>`, `<main>`, `<footer>`, dan `<article>`. Sesi ini membahas cara mengorganisir konten halaman web dengan benar.",
    is_success: true,
  },
  {
    id: 7,
    id_session: 2,
    title: "3. Formulir HTML dan Input",
    link_video: "https://www.youtube.com/watch?v=2pOwZXs7tZA",
    description:
      "Belajar tentang elemen formulir HTML seperti `<form>`, `<input>`, `<select>`, dan `<textarea>`. Kursus ini menjelaskan cara membuat formulir interaktif dan menangani input pengguna.",
    is_success: false,
  },
  {
    id: 8,
    id_session: 3,
    title: "1. Pengenalan CSS",
    link_video: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
    description:
      "Kursus ini memperkenalkan dasar-dasar CSS (Cascading Style Sheets). Anda akan mempelajari cara menerapkan gaya pada elemen HTML dan dasar-dasar sintaks CSS.",
    is_success: true,
  },
  {
    id: 9,
    id_session: 3,
    title: "2. Selektor dan Properti CSS",
    link_video: "https://www.youtube.com/watch?v=qioNHsGd6F8",
    description:
      "Mempelajari berbagai selektor CSS seperti selektor ID, kelas, dan atribut. Kursus ini juga membahas properti CSS yang sering digunakan untuk styling elemen halaman web.",
    is_success: true,
  },
  {
    id: 10,
    id_session: 3,
    title: "3. Layout dan Responsivitas",
    link_video: "https://www.youtube.com/watch?v=2x6V8pMQYOo",
    description:
      "Belajar tentang teknik layout CSS seperti Flexbox dan Grid. Sesi ini juga mencakup cara membuat desain responsif yang menyesuaikan dengan berbagai ukuran layar.",
    is_success: false,
  },
];
