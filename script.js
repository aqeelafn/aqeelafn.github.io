/* ═══════════════════════════════════════════════════
   KEYLA PORTFOLIO — SCRIPT
   SPA navigation · Sparkle cursor · Dark mode · i18n
   ═══════════════════════════════════════════════════ */

// ─── TRANSLATIONS ──────────────────────────────────────
const i18n = {
  id: {
    nav_home: 'Home', nav_about: 'Tentang', nav_edu: 'Pendidikan',
    nav_exp: 'Pengalaman', nav_pub: 'Publikasi', nav_proj: 'Proyek',
    nav_skills: 'Keahlian', nav_cert: 'Sertifikat', nav_ach: 'Prestasi',
    nav_contact: 'Kontak',

    home_greeting: 'Halo, saya',
    home_tagline: '"Di mana rasa ingin tahu bertemu data — membangun wawasan, mendorong perubahan."',
    btn_connect: 'Mari Terhubung', btn_projects: 'Lihat Proyek', btn_cv: 'Unduh CV',
    scroll_hint: 'jelajahi lebih',

    about_title: 'Tentang Saya', about_sub: 'Perkenalan singkat',
    about_p1: 'Fresh graduate dari Telkom University dengan gelar Data Science, lulus dengan predikat <strong>Cum Laude</strong> (IPK 3.81/4.00). Perjalanan saya di bidang data science diperkaya dengan pengalaman nyata sebagai Data Analyst Intern di PT Pelita Air Service dan PT Enerma, mengubah data mentah menjadi wawasan yang actionable.',
    about_p2: 'Selama 4 semester menjadi Teaching Assistant, saya membimbing lebih dari 100+ mahasiswa dalam memahami konsep teknis yang kompleks di bidang AI, Sistem Operasi, dan berbagai mata kuliah komputasi dasar.',
    about_p3: 'Di luar kemampuan teknis, saya percaya bahwa data bisa menggerakkan perubahan nyata. Saya telah mempublikasikan 2 makalah internasional tentang aplikasi machine learning di bidang kesehatan dan meraih penghargaan Best Presenter di konferensi internasional.',
    stat_gpa: 'IPK — Cum Laude', stat_pub: 'Publikasi Internasional',
    stat_students: 'Mahasiswa Dibimbing', stat_award: 'Penghargaan Best Presenter',
    interests_title: 'Minat & Passion',

    edu_title: 'Pendidikan', edu_sub: 'Perjalanan akademis',
    edu_degree1: 'Sarjana Data Science (S.Si.D.)',
    edu_laude: 'Cum Laude · IPK 3.81/4.00',
    edu_involvement: 'Keterlibatan Akademis',
    edu_inv1: 'Asisten Pengajaran — 6 mata kuliah',
    edu_inv2: 'Asisten Laboratorium (AI, SO, OOP)',
    edu_inv3: 'Panitia Proyek Capstone',
    edu_inv4: 'Perwakilan Akreditasi',
    edu_inv5: 'Panitia Revisi Paper (2 konferensi)',
    edu_inv6: 'Abdimas di SMAN 12 Bandung',
    edu_achievements: 'Prestasi Akademis',
    edu_ach1: '2 Publikasi Internasional (IEEE & JCSE Scopus)',
    edu_ach2: 'Best Presenter Award — ICICyTA 2024',
    edu_ach3: 'Proyek di ML, Visualisasi Data & BI',
    edu_degree2: 'SMA Negeri 12 Bandung',
    edu_hs: 'Sekolah Menengah Atas — IPA',
    edu_activities: 'Kegiatan',
    edu_act1: 'Organisasi Band & Perkusi',
    edu_act2: 'Berbagai pertunjukan perkusi',
    edu_act3: 'Panitia event & komite PR',
    edu_org_roles: 'Jabatan Organisasi',
    edu_award_text: 'Juara 1 — Lomba Storytelling (PORAK) · "Malin Kundang"',

    exp_title: 'Pengalaman', exp_sub: 'Perjalanan profesional & organisasi',
    tab_pro: '💼 Profesional', tab_org: '🤝 Organisasi',
    exp1_role: 'Magang Data Analyst', exp2_role: 'Magang Data Analyst',
    exp3_role: 'Asisten Praktikum', exp4_role: 'Magang Data Analyst',
    exp5_role: 'Asisten Pengajaran',
    exp1_brief: 'Membangun dashboard KPI otomatis dan mengkonsolidasikan data operasional untuk pelaporan Direksi.',
    exp2_brief: 'Merancang dashboard interaktif untuk divisi keuangan, penjualan & kargo; menganalisis 2.000+ aset IT.',
    exp3_brief: 'Membimbing 100+ mahasiswa di lab AI, SO, dan OOP dengan sesi debugging langsung dan umpan balik terstruktur.',
    exp5_brief: 'Mengajar dan membimbing mahasiswa melalui 6 mata kuliah selama 4 semester dalam dasar-dasar data science.',
    see_more: 'Lihat detail →', see_more2: 'Lihat detail →', see_more3: 'Lihat detail →',
    see_more4: 'Lihat detail →', see_more5: 'Lihat detail →',
    org1_role: 'Anggota ML Path', org2_role: 'Sekretaris I',
    org3_role: 'Anggota Lab — Data Warehouse',
    org4_role: 'Panitia Mahasiswa', org5_role: 'Koordinator Liaison Officer',
    org6_role: 'Liaison Officer', org7_role: 'Penanggung Jawab',
    view_cert: 'Lihat Sertifikat', view_cert2: 'Lihat Sertifikat',
    view_cert3: 'Lihat Sertifikat', view_cert4: 'Lihat Sertifikat', view_cert5: 'Lihat Sertifikat',

    pub_title: 'Publikasi', pub_sub: 'Kontribusi penelitian internasional',
    pub1_title: 'Optimizing Heart Disease Classification Using Random Forest with Evolutionary Boosting',
    pub1_award: '✦ Best Presenter Award',
    pub2_title: 'Enhancing Stunting Prediction for Indonesian Children Using ML with SMOTE Data Balancing',
    pub_ieee: 'IEEE Xplore', pub_doi: 'DOI', pub2_doi: 'DOI', pub2_date: 'Dipublikasikan: 4 Feb 2025',

    proj_title: 'Proyek', proj_sub: 'Solusi nyata yang pernah saya bangun',
    proj1_cat: 'Machine Learning', proj1_name: 'Klasifikasi Penyakit Jantung',
    proj1_desc: 'Random Forest dengan Evolutionary Boosting mencapai akurasi 86.67%. Dipublikasikan di IEEE.',
    proj2_cat: 'Machine Learning', proj2_name: 'Klasifikasi Gizi Anak',
    proj2_desc: 'Model multiclass dengan SMOTE mencapai akurasi 97.59%. Dipublikasikan di JCSE Scopus.',
    proj3_cat: 'Business Intelligence', proj3_name: 'Dashboard BI Pertambangan',
    proj3_desc: 'Dashboard monitoring produksi batu bara real-time untuk PT Kamalindo Sompurna.',
    proj4_cat: 'Desain UI/UX', proj4_name: 'UI/UX Marketplace',
    proj4_desc: 'Desain high-fidelity untuk platform marketplace mahasiswa Telkom University.',
    proj5_cat: 'Data Engineering', proj5_name: 'Optimasi Distribusi LNG',
    proj5_desc: 'Pipeline K-Means clustering untuk mengidentifikasi lokasi gudang sub-pengisian LNG optimal di Jawa Barat.',
    proj_github: 'Lihat semua proyek di GitHub',

    skills_title: 'Keahlian', skills_sub: 'Kemampuan teknis & tools',
    sg_lang: 'Bahasa Pemrograman', sg_ml: 'Machine Learning & AI',
    sg_bi: 'Business Intelligence', sg_other: 'Tools & Lainnya', sg_lang2: 'Bahasa',
    lang_id: 'Indonesia', lang_native: 'Bahasa Ibu', lang_pro: 'Profesional',

    cert_title: 'Sertifikasi', cert_sub: 'Pembelajaran & pengembangan berkelanjutan',
    cert1: 'Tes Kemahiran Bahasa Inggris', cert2: 'Belajar Analisis Data dengan Python',
    cert3: 'Machine Learning Terapan', cert4: 'Belajar Machine Learning untuk Pemula',
    cert5: 'Memulai Pemrograman dengan Python', cert6: 'Belajar Visualisasi Data',
    cert7: 'Foundations of Data Science', cert8: 'Get Started with Python',
    cert_view: 'Lihat', cert_view2: 'Lihat', cert_view3: 'Lihat',
    cert_view4: 'Lihat', cert_view5: 'Lihat', cert_view6: 'Lihat',

    ach_title: 'Prestasi', ach_sub: 'Pencapaian & pengakuan',
    ach1: 'Best Presenter Award',
    ach1_detail: 'Konferensi Internasional ICICyTA 2024 — Penelitian Klasifikasi Penyakit Jantung',
    ach2: 'Lulus Cum Laude',
    ach2_detail: 'Telkom University — IPK 3.81/4.00, Sarjana Data Science',
    ach3: '2 Publikasi Internasional',
    ach3_detail: 'IEEE Xplore & jurnal JCSE Scopus — First Author di keduanya',
    ach4: 'Juara 1 — Lomba Storytelling',
    ach4_detail: 'PORAK (Pekan Kreativitas Siswa) — Membawakan cerita "Malin Kundang"',

    contact_title: 'Mari Terhubung',
    contact_sub: 'Terbuka untuk peluang data analytics, BI, dan management trainee',
    location_label: 'Lokasi',
    contact_msg: 'Saya aktif mencari peluang di bidang data analytics, business intelligence, dan program management trainee. Mari bangun sesuatu yang berarti bersama.',
    btn_cv2: 'Unduh CV ✦',
  },
  en: {
    nav_home: 'Home', nav_about: 'About', nav_edu: 'Education',
    nav_exp: 'Experience', nav_pub: 'Publications', nav_proj: 'Projects',
    nav_skills: 'Skills', nav_cert: 'Certs', nav_ach: 'Awards', nav_contact: 'Contact',

    home_greeting: "Hello, I'm",
    home_tagline: '"Where curiosity meets data — building insights, driving change."',
    btn_connect: "Let's Connect", btn_projects: 'View Projects', btn_cv: 'Download CV',
    scroll_hint: 'explore more',

    about_title: 'About Me', about_sub: 'A brief introduction',
    about_p1: "Fresh graduate from Telkom University with a degree in Data Science, graduating with <strong>Cum Laude</strong> honors (GPA 3.81/4.00). My journey in data science has been enriched by hands-on experience as a Data Analyst Intern at PT Pelita Air Service and PT Enerma.",
    about_p2: "As a Teaching Assistant for 4 semesters, I've guided over 100+ students through complex technical concepts in AI, Operating Systems, and various foundational computing courses.",
    about_p3: "Beyond technical skills, I've published 2 international papers on machine learning applications in healthcare and received the Best Presenter Award at an international conference.",
    stat_gpa: 'GPA — Cum Laude', stat_pub: 'International Publications',
    stat_students: 'Students Guided', stat_award: 'Best Presenter Award',
    interests_title: 'Interests & Passions',

    edu_title: 'Education', edu_sub: 'Academic journey',
    edu_degree1: 'Bachelor of Data Science (S.Si.D.)',
    edu_laude: 'Cum Laude · GPA 3.81/4.00',
    edu_involvement: 'Academic Involvement',
    edu_inv1: 'Teaching Assistant — 6 courses',
    edu_inv2: 'Laboratory Assistant (AI, OS, OOP)',
    edu_inv3: 'Capstone Project Committee',
    edu_inv4: 'Accreditation Representative',
    edu_inv5: 'Paper Revision Committee (2 conferences)',
    edu_inv6: 'Community Service at SMAN 12 Bandung',
    edu_achievements: 'Academic Achievements',
    edu_ach1: '2 International Publications (IEEE & JCSE Scopus)',
    edu_ach2: 'Best Presenter Award — ICICyTA 2024',
    edu_ach3: 'Projects in ML, Data Viz & BI',
    edu_degree2: 'SMA Negeri 12 Bandung',
    edu_hs: 'High School — Natural Science',
    edu_activities: 'Activities',
    edu_act1: 'Band & Percussion Organization',
    edu_act2: 'Multiple percussion performances',
    edu_act3: 'Event organizing & PR committees',
    edu_org_roles: 'Organizational Roles',
    edu_award_text: '1st Place — Storytelling Competition (PORAK) · "Malin Kundang"',

    exp_title: 'Experience', exp_sub: 'Professional & organizational journey',
    tab_pro: '💼 Professional', tab_org: '🤝 Organization',
    exp1_role: 'Data Analyst Intern', exp2_role: 'Data Analyst Intern',
    exp3_role: 'Practicum Assistant', exp4_role: 'Data Analyst Intern',
    exp5_role: 'Teaching Assistant',
    exp1_brief: 'Built automated KPI dashboards and consolidated operational data for Board of Directors reporting.',
    exp2_brief: 'Designed interactive dashboards for finance, sales & cargo; analyzed 2,000+ IT asset records.',
    exp3_brief: 'Guided 100+ students in AI, OS, and OOP lab sessions with live debugging and structured feedback.',
    exp5_brief: 'Taught and mentored students through 6 courses over 4 semesters in data science fundamentals.',
    see_more: 'See details →', see_more2: 'See details →', see_more3: 'See details →',
    see_more4: 'See details →', see_more5: 'See details →',
    org1_role: 'ML Path Member', org2_role: 'Secretary I',
    org3_role: 'Laboratory Member — Data Warehouse',
    org4_role: 'Student Committee', org5_role: 'Coordinator Liaison Officer',
    org6_role: 'Liaison Officer', org7_role: 'Person in Charge',
    view_cert: 'View Cert', view_cert2: 'View Cert',
    view_cert3: 'View Cert', view_cert4: 'View Cert', view_cert5: 'View Cert',

    pub_title: 'Publications', pub_sub: 'International research contributions',
    pub1_title: 'Optimizing Heart Disease Classification Using Random Forest with Evolutionary Boosting',
    pub1_award: '✦ Best Presenter Award',
    pub2_title: 'Enhancing Stunting Prediction for Indonesian Children Using ML with SMOTE Data Balancing',
    pub_ieee: 'IEEE Xplore', pub_doi: 'DOI', pub2_doi: 'DOI', pub2_date: 'Published: Feb 4, 2025',

    proj_title: 'Projects', proj_sub: "Real-world solutions I've built",
    proj1_cat: 'Machine Learning', proj1_name: 'Heart Disease Classification',
    proj1_desc: 'Random Forest with Evolutionary Boosting achieving 86.67% test accuracy. Published at IEEE.',
    proj2_cat: 'Machine Learning', proj2_name: 'Child Nutrition Classification',
    proj2_desc: 'Multiclass model with SMOTE achieving 97.59% accuracy. Published in JCSE Scopus journal.',
    proj3_cat: 'Business Intelligence', proj3_name: 'Mining BI Dashboard',
    proj3_desc: 'Real-time coal production monitoring dashboard for PT Kamalindo Sompurna.',
    proj4_cat: 'UI/UX Design', proj4_name: 'Marketplace UI/UX',
    proj4_desc: 'High-fidelity design for Telkom University students marketplace platform.',
    proj5_cat: 'Data Engineering', proj5_name: 'LNG Distribution Optimizer',
    proj5_desc: 'K-Means clustering pipeline to identify optimal LNG sub-bottling warehouse locations in West Java.',
    proj_github: 'See all projects on GitHub',

    skills_title: 'Skills', skills_sub: 'Technical capabilities & tools',
    sg_lang: 'Programming Languages', sg_ml: 'Machine Learning & AI',
    sg_bi: 'Business Intelligence', sg_other: 'Tools & Others', sg_lang2: 'Languages',
    lang_id: 'Indonesian', lang_native: 'Native', lang_pro: 'Professional',

    cert_title: 'Certifications', cert_sub: 'Continuous learning & development',
    cert1: 'English Proficiency Test', cert2: 'Data Analysis with Python',
    cert3: 'Applied Machine Learning', cert4: 'Machine Learning for Beginners',
    cert5: 'Introduction to Python Programming', cert6: 'Data Visualization',
    cert7: 'Foundations of Data Science', cert8: 'Get Started with Python',
    cert_view: 'View', cert_view2: 'View', cert_view3: 'View',
    cert_view4: 'View', cert_view5: 'View', cert_view6: 'View',

    ach_title: 'Achievements', ach_sub: 'Milestones & recognition',
    ach1: 'Best Presenter Award',
    ach1_detail: 'ICICyTA 2024 International Conference — Heart Disease Classification research',
    ach2: 'Cum Laude Graduate',
    ach2_detail: 'Telkom University — GPA 3.81/4.00, Bachelor of Data Science',
    ach3: '2 International Publications',
    ach3_detail: 'IEEE Xplore & JCSE Scopus-indexed journal — First Author on both',
    ach4: '1st Place — Storytelling Competition',
    ach4_detail: 'PORAK (Pekan Kreativitas Siswa) — Performed "Malin Kundang"',

    contact_title: "Let's Connect",
    contact_sub: 'Open to data analytics, BI, and management trainee opportunities',
    location_label: 'Location',
    contact_msg: "I'm actively looking for opportunities in data analytics, business intelligence, and management trainee programs. Let's build something meaningful together.",
    btn_cv2: 'Download CV ✦',
  }
};

// ─── MODAL CONTENT ─────────────────────────────────────
const modalData = {
  exp1: {
    id: `<h2>🔥 PT Energi Negeri Meusenia (ENERMA)</h2><p><strong>Magang Data Analyst</strong> · Sept 2025 – Present · South Jakarta (Hybrid)</p><h3>Tanggung Jawab & Pencapaian</h3><ul><li><strong>Konsolidasi Data:</strong> Mengumpulkan dan mengkonsolidasikan data operasional dari berbagai wilayah dan departemen untuk mendukung analisis strategis</li><li><strong>Dashboard Otomatis:</strong> Membangun dashboard otomatis yang merangkum KPI komersial, operasional, dan keuangan untuk tinjauan eksekutif</li><li><strong>Analisis Kinerja:</strong> Melakukan analisis kinerja dan mempresentasikan wawasan actionable kepada Direksi, meningkatkan efisiensi pelaporan sebesar 15%</li></ul>`,
    en: `<h2>🔥 PT Energi Negeri Meusenia (ENERMA)</h2><p><strong>Data Analyst Intern</strong> · Sept 2025 – Present · South Jakarta (Hybrid)</p><h3>Responsibilities & Achievements</h3><ul><li><strong>Data Consolidation:</strong> Collected and consolidated operational data across multiple regions for strategic analysis</li><li><strong>Automated Dashboards:</strong> Built automated dashboards summarizing commercial, operational, and financial KPIs for executive review</li><li><strong>Performance Analysis:</strong> Conducted analysis and presented actionable insights to the Board of Directors, improving reporting efficiency by 15%</li></ul>`
  },
  exp2: {
    id: `<h2>✈️ PT Pelita Air Service</h2><p><strong>Magang Data Analyst</strong> · Jul – Sept 2024 · Jakarta Pusat (Onsite)</p><h3>Tanggung Jawab</h3><ul><li><strong>Dashboard Interaktif:</strong> Merancang dan mengimplementasikan dashboard interaktif untuk divisi keuangan, penjualan, dan kargo menggunakan Excel dan Tableau</li><li><strong>Analisis Aset IT:</strong> Menganalisis 2.000+ catatan aset IT untuk menilai siklus hidup peralatan dan kinerja vendor</li><li><strong>Pengumpulan Kebutuhan:</strong> Mengembangkan user stories dan diagram alur untuk menyederhanakan pengumpulan kebutuhan</li><li><strong>Standardisasi Proses:</strong> Menyusun panduan SDLC yang disesuaikan untuk menstandarisasi proses pengembangan internal</li></ul><h3>Teknologi</h3><p>Excel · Tableau · SQL · Documentation Tools</p>`,
    en: `<h2>✈️ PT Pelita Air Service</h2><p><strong>Data Analyst Intern</strong> · Jul – Sept 2024 · Central Jakarta (Onsite)</p><h3>Responsibilities</h3><ul><li><strong>Interactive Dashboards:</strong> Designed interactive dashboards for finance, sales, and cargo divisions using Excel and Tableau</li><li><strong>IT Asset Analysis:</strong> Analyzed 2,000+ IT asset records to assess equipment lifecycle and vendor performance</li><li><strong>Requirements Gathering:</strong> Developed user stories and workflow diagrams to streamline requirements gathering</li><li><strong>Process Standardization:</strong> Drafted tailored SDLC guideline to standardize internal development processes</li></ul><h3>Technologies</h3><p>Excel · Tableau · SQL · Documentation Tools</p>`
  },
  exp3: {
    id: `<h2>💻 Asisten Praktikum — Lab Informatika</h2><p><strong>Telkom University</strong> · Feb 2024 – Jun 2025 · Bandung (Onsite)</p><h3>Mata Kuliah</h3><ul><li><strong>Praktikum Sistem Operasi</strong> — Sept 2024 – Jun 2025 (Xinu OS)</li><li><strong>Praktikum Pemrograman Berorientasi Objek (PBO)</strong> — Feb 2024 – Jan 2025 (Java)</li><li><strong>Praktikum Dasar Kecerdasan Artifisial (DKA)</strong> — Feb 2025 – Jun 2025 (Python)</li></ul><h3>Pencapaian</h3><ul><li>Membimbing 100+ mahasiswa dalam sesi lab mingguan</li><li>Memberikan sesi debugging langsung dan bantuan implementasi hands-on</li><li>Mengevaluasi tugas lab mahasiswa dan memberikan umpan balik terstruktur</li></ul>`,
    en: `<h2>💻 Practicum Assistant — Informatics Lab</h2><p><strong>Telkom University</strong> · Feb 2024 – Jun 2025 · Bandung (Onsite)</p><h3>Courses Assisted</h3><ul><li><strong>Operating System Practicum</strong> — Sept 2024 – Jun 2025 (Xinu OS)</li><li><strong>Object-Oriented Programming Practicum</strong> — Feb 2024 – Jan 2025 (Java)</li><li><strong>Basic Artificial Intelligence Practicum</strong> — Feb 2025 – Jun 2025 (Python)</li></ul><h3>Achievements</h3><ul><li>Guided 100+ students in weekly lab sessions</li><li>Delivered live debugging sessions and hands-on implementation assistance</li><li>Evaluated lab submissions and provided structured, constructive feedback</li></ul>`
  },
  exp4: {
    id: `<h2>✈️ PT Pelita Air Service</h2><p><strong>Magang Data Analyst</strong> · Jan – Feb 2024 · Jakarta Pusat (Onsite)</p><h3>Deskripsi</h3><p>Pengalaman magang awal di PT Pelita Air Service yang menjadi fondasi kemampuan analisis data dan pembuatan laporan dalam lingkungan industri penerbangan.</p>`,
    en: `<h2>✈️ PT Pelita Air Service</h2><p><strong>Data Analyst Intern</strong> · Jan – Feb 2024 · Central Jakarta (Onsite)</p><h3>Overview</h3><p>Initial internship experience at PT Pelita Air Service, building foundational data analysis and reporting skills in an aviation industry environment.</p>`
  },
  exp5: {
    id: `<h2>👩‍🏫 Asisten Pengajaran</h2><p><strong>Telkom University</strong> · Sept 2023 – Jan 2025 · 6 Mata Kuliah, 4 Semester</p><h3>Mata Kuliah</h3><ul><li>Pengantar Ilmu Data</li><li>Pemrograman Python</li><li>Statistika dan Probabilitas</li><li>Basis Data</li><li>Visualisasi Data</li><li>Machine Learning</li></ul><h3>Pencapaian</h3><ul><li>Membimbing mahasiswa dari berbagai angkatan</li><li>Menyiapkan materi pembelajaran dan modul praktikum</li><li>Memberikan bimbingan individual untuk mahasiswa yang membutuhkan</li></ul>`,
    en: `<h2>👩‍🏫 Teaching Assistant</h2><p><strong>Telkom University</strong> · Sept 2023 – Jan 2025 · 6 Courses, 4 Semesters</p><h3>Courses</h3><ul><li>Introduction to Data Science</li><li>Python Programming</li><li>Statistics and Probability</li><li>Database Systems</li><li>Data Visualization</li><li>Machine Learning</li></ul><h3>Achievements</h3><ul><li>Mentored students across multiple cohorts</li><li>Prepared learning materials and practicum modules</li><li>Provided individual guidance for students who needed extra support</li></ul>`
  },
  project1: {
    id: `<h2>❤️ Klasifikasi Penyakit Jantung</h2><p><strong>Dipublikasikan di IEEE · ICICyTA 2024</strong></p><h3>Ikhtisar</h3><p>Penelitian ini mengoptimalkan klasifikasi penyakit jantung menggunakan Random Forest dengan pendekatan Evolutionary Boosting yang inovatif, mencapai akurasi test 86.67%.</p><h3>Metodologi</h3><ul><li>AutoML untuk pemilihan model</li><li>Random Forest sebagai classifier utama</li><li>Evolutionary Boosting untuk optimasi</li><li>Cross-validation 10-fold</li></ul><h3>Hasil</h3><ul><li>Akurasi test: 86.67%</li><li>Diterima di IEEE Xplore</li><li>Best Presenter Award di ICICyTA 2024</li></ul>`,
    en: `<h2>❤️ Heart Disease Classification</h2><p><strong>Published at IEEE · ICICyTA 2024</strong></p><h3>Overview</h3><p>This research optimizes heart disease classification using Random Forest with an innovative Evolutionary Boosting approach, achieving 86.67% test accuracy.</p><h3>Methodology</h3><ul><li>AutoML for model selection</li><li>Random Forest as the primary classifier</li><li>Evolutionary Boosting for optimization</li><li>10-fold cross-validation</li></ul><h3>Results</h3><ul><li>Test Accuracy: 86.67%</li><li>Accepted at IEEE Xplore</li><li>Best Presenter Award at ICICyTA 2024</li></ul>`
  },
  project2: {
    id: `<h2>👶 Klasifikasi Gizi Anak</h2><p><strong>Dipublikasikan di JCSE Scopus · 2025</strong></p><h3>Ikhtisar</h3><p>Model multiclass untuk memprediksi status gizi anak Indonesia menggunakan KNN dengan teknik SMOTE untuk mengatasi ketidakseimbangan kelas, mencapai akurasi 97.59%.</p><h3>Metodologi</h3><ul><li>K-Nearest Neighbors (KNN) classifier</li><li>SMOTE untuk data balancing</li><li>Feature engineering dari data antropometri</li></ul><h3>Hasil</h3><ul><li>Akurasi: 97.59%</li><li>Dipublikasikan di JCSE Scopus Vol. 18, No. 4</li></ul>`,
    en: `<h2>👶 Child Nutrition Classification</h2><p><strong>Published in JCSE Scopus · 2025</strong></p><h3>Overview</h3><p>Multiclass model predicting Indonesian children's nutritional status using KNN with SMOTE technique for class imbalance, achieving 97.59% accuracy.</p><h3>Methodology</h3><ul><li>K-Nearest Neighbors (KNN) classifier</li><li>SMOTE for data balancing</li><li>Feature engineering from anthropometric data</li></ul><h3>Results</h3><ul><li>Accuracy: 97.59%</li><li>Published in JCSE Scopus Vol. 18, No. 4</li></ul>`
  },
  project3: {
    id: `<h2>⛏️ Dashboard BI Pertambangan</h2><p><strong>PT Kamalindo Sompurna · Power BI</strong></p><h3>Ikhtisar</h3><p>Dashboard monitoring produksi batu bara real-time yang memungkinkan manajemen PT Kamalindo Sompurna memantau KPI operasional secara langsung.</p><h3>Fitur</h3><ul><li>Monitoring produksi real-time</li><li>Analisis efisiensi per lokasi tambang</li><li>Laporan harian & bulanan otomatis</li><li>Alert sistem untuk deviasi target</li></ul>`,
    en: `<h2>⛏️ Mining BI Dashboard</h2><p><strong>PT Kamalindo Sompurna · Power BI</strong></p><h3>Overview</h3><p>Real-time coal production monitoring dashboard enabling PT Kamalindo Sompurna management to track operational KPIs live.</p><h3>Features</h3><ul><li>Real-time production monitoring</li><li>Efficiency analysis per mining location</li><li>Automated daily & monthly reports</li><li>Alert system for target deviations</li></ul>`
  },
  project4: {
    id: `<h2>🛒 UI/UX Marketplace</h2><p><strong>Telkom University · Figma</strong></p><h3>Ikhtisar</h3><p>Desain high-fidelity untuk platform marketplace yang memfasilitasi transaksi jual-beli antara mahasiswa Telkom University.</p><h3>Proses</h3><ul><li>User research & persona development</li><li>Information architecture</li><li>Wireframing & prototyping</li><li>High-fidelity mockup di Figma</li><li>Usability testing</li></ul>`,
    en: `<h2>🛒 Marketplace UI/UX</h2><p><strong>Telkom University · Figma</strong></p><h3>Overview</h3><p>High-fidelity design for a marketplace platform facilitating buy/sell transactions between Telkom University students.</p><h3>Process</h3><ul><li>User research & persona development</li><li>Information architecture</li><li>Wireframing & prototyping</li><li>High-fidelity mockup in Figma</li><li>Usability testing</li></ul>`
  },
  project5: {
    id: `<h2>⚡ Optimasi Distribusi LNG</h2><p><strong>Data Engineering · Python</strong></p><h3>Ikhtisar</h3><p>Pipeline data engineering lengkap menggunakan K-Means clustering untuk mengidentifikasi lokasi optimal gudang sub-pengisian LNG di Jawa Barat (Cianjur, Sukabumi, Bandung Barat).</p><h3>Pipeline Teknis</h3><ul><li>Web scraping data SPPG</li><li>Geocoding GPS via Nominatim</li><li>Kalkulasi jarak Haversine ke 3 stasiun pengisian</li><li>Visualisasi peta dengan Folium</li><li>K-Means clustering untuk rekomendasi lokasi</li></ul><h3>Hasil Utama</h3><p>K-Means merekomendasikan Kelurahan Sayang — secara signifikan mengungguli lokasi eksisting yang dipilih secara intuitif (Pasar Gekbrong).</p>`,
    en: `<h2>⚡ LNG Distribution Optimizer</h2><p><strong>Data Engineering · Python</strong></p><h3>Overview</h3><p>Complete data engineering pipeline using K-Means clustering to identify optimal LNG sub-bottling warehouse locations in West Java (Cianjur, Sukabumi, Bandung Barat).</p><h3>Technical Pipeline</h3><ul><li>SPPG web scraping</li><li>GPS geocoding via Nominatim</li><li>Haversine distance calculation to 3 filling stations</li><li>Map visualization with Folium</li><li>K-Means clustering for location recommendation</li></ul><h3>Key Result</h3><p>K-Means recommended Kelurahan Sayang — significantly outperforming the existing gut-feel location (Pasar Gekbrong).</p>`
  },
  org1: {
    id: `<h2>🎓 GDSC Telkom University</h2><p><strong>Anggota ML Path</strong> · Des 2023 – Jun 2025</p><p>Berpartisipasi dalam workshop machine learning dan proyek kolaboratif di Google Developer Student Club. Mempelajari teknik ML terbaru dan best practices dalam pengembangan software.</p>`,
    en: `<h2>🎓 GDSC Telkom University</h2><p><strong>ML Path Member</strong> · Dec 2023 – Jun 2025</p><p>Participated in machine learning workshops and collaborative projects at Google Developer Student Club. Learned latest ML techniques and software development best practices.</p>`
  },
  org2: {
    id: `<h2>📋 PERMIDSI 2024</h2><p><strong>Sekretaris I</strong> · Nov 2023 – Feb 2024</p><p>Mengelola tugas administratif dan koordinasi untuk acara data science tahunan, memastikan semua dokumentasi dan komunikasi berjalan lancar antara divisi.</p>`,
    en: `<h2>📋 PERMIDSI 2024</h2><p><strong>Secretary I</strong> · Nov 2023 – Feb 2024</p><p>Managed administrative tasks and coordination for the annual data science event, ensuring smooth documentation and communication between divisions.</p>`
  },
  org3: {
    id: `<h2>🔬 Big Data Lab</h2><p><strong>Anggota Lab — Data Warehouse</strong> · Agu 2023 – Des 2024</p><p>Melakukan penelitian dan membantu proyek analitik big data di laboratorium, dengan fokus pada data warehousing dan teknik penyimpanan data skala besar.</p>`,
    en: `<h2>🔬 Big Data Lab</h2><p><strong>Laboratory Member — Data Warehouse</strong> · Aug 2023 – Dec 2024</p><p>Conducted research and assisted in big data analytics projects in the lab, focusing on data warehousing and large-scale data storage techniques.</p>`
  }
};

// ─── STATE ──────────────────────────────────────────────
let currentPage = 'home';
let currentLang = 'id';
let currentTheme = localStorage.getItem('theme') || 'light';

// ─── INIT ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  initCursor();
  initSparkle();
  initTypewriter();
  goTo('home', false);

  // Restore lang from storage
  const savedLang = localStorage.getItem('lang') || 'id';
  setLang(savedLang);
});

// ─── NAVIGATION (SPA) ──────────────────────────────────
function goTo(pageId, animate = true) {
  if (currentPage === pageId && animate) return;

  // Deactivate old page
  const oldPage = document.querySelector('.page.active');
  if (oldPage) {
    oldPage.classList.remove('active');
  }

  // Activate new page
  const newPage = document.getElementById('page-' + pageId);
  if (!newPage) return;

  if (animate) {
    newPage.style.opacity = '0';
    newPage.style.transform = 'translateY(20px)';
    newPage.classList.add('active');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        newPage.style.opacity = '';
        newPage.style.transform = '';
      });
    });
  } else {
    newPage.classList.add('active');
  }

  currentPage = pageId;

  // Update sidebar nav
  document.querySelectorAll('.nav-item, .bnav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === pageId);
  });

  // Reset scroll on page
  newPage.scrollTop = 0;

  // Trigger skill bars if skills page
  if (pageId === 'skills') {
    setTimeout(() => {
      document.querySelectorAll('.skill-fill').forEach(el => {
        el.style.animationPlayState = 'running';
      });
    }, 300);
  }
}

// ─── EXPERIENCE TAB ────────────────────────────────────
function switchExpTab(tabName) {
  document.querySelectorAll('.exp-tab').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0 && tabName === 'professional') || (i === 1 && tabName === 'organization'));
  });
  document.querySelectorAll('.exp-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  const panel = document.getElementById('exp-' + tabName);
  if (panel) panel.classList.add('active');
}

// ─── MODAL ─────────────────────────────────────────────
function openExpModal(id) {
  const data = modalData[id];
  if (!data) return;
  const lang = currentLang;
  const content = data[lang] || data.en;
  document.getElementById('modalBody').innerHTML = content;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── DARK / LIGHT MODE ─────────────────────────────────
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
  localStorage.setItem('theme', currentTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  currentTheme = theme;
}

// ─── LANGUAGE ──────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  applyLang(lang);

  // Update button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function applyLang(lang) {
  const t = i18n[lang] || i18n.id;
  document.querySelectorAll('[data-id]').forEach(el => {
    const key = el.dataset.id;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update typewriter
  initTypewriter();
}

// ─── TYPEWRITER ─────────────────────────────────────────
let typewriterInterval;

function initTypewriter() {
  const el = document.getElementById('roleText');
  if (!el) return;

  const roles = currentLang === 'id'
    ? ['Data Analyst', 'Data Scientist', 'BI Enthusiast', 'ML Researcher']
    : ['Data Analyst', 'Data Scientist', 'BI Enthusiast', 'ML Researcher'];

  clearInterval(typewriterInterval);
  let roleIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = roles[roleIdx];
    if (deleting) {
      el.textContent = current.substring(0, charIdx--);
      if (charIdx < 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; charIdx = 0; }
    } else {
      el.textContent = current.substring(0, ++charIdx);
      if (charIdx === current.length) { deleting = true; setTimeout(() => {}, 1200); }
    }
  }

  typewriterInterval = setInterval(() => {
    type();
  }, deleting ? 60 : 100);

  // Better version with pauses
  clearInterval(typewriterInterval);
  let ri = 0, ci = 0, del = false, pausing = false;

  function typeStep() {
    if (pausing) return;
    const role = roles[ri];
    if (!del) {
      el.textContent = role.substring(0, ++ci);
      if (ci === role.length) { pausing = true; setTimeout(() => { del = true; pausing = false; }, 1800); }
    } else {
      el.textContent = role.substring(0, --ci);
      if (ci === 0) { del = false; ri = (ri + 1) % roles.length; }
    }
  }
  typewriterInterval = setInterval(typeStep, del ? 50 : 90);

  // Restart cleanly
  clearInterval(typewriterInterval);
  ri = 0; ci = 0; del = false; pausing = false;
  typewriterInterval = setInterval(typeStep, 90);
}

// ─── CUSTOM CURSOR ─────────────────────────────────────
function initCursor() {
  const ring = document.getElementById('cursorRing');
  if (!ring || window.matchMedia('(max-width: 768px)').matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
  });

  function animateCursor() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .nav-item, .exp-card, .project-card, .org-card, .contact-card').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('cursor-hover'));
  });
}

// ─── SPARKLE CANVAS ────────────────────────────────────
function initSparkle() {
  const canvas = document.getElementById('sparkleCanvas');
  if (!canvas || window.matchMedia('(max-width: 768px)').matches) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const sparkles = [];
  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    if (Math.random() < 0.35) {
      sparkles.push({
        x: mouseX + (Math.random() - 0.5) * 20,
        y: mouseY + (Math.random() - 0.5) * 20,
        size: Math.random() * 3 + 1,
        life: 1,
        decay: Math.random() * 0.03 + 0.02,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -Math.random() * 1.5 - 0.5,
        color: ['#d4897a', '#c9a96e', '#b09fc0', '#e8c5bb'][Math.floor(Math.random() * 4)]
      });
    }
    if (sparkles.length > 80) sparkles.splice(0, 10);
  });

  function drawSparkles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = sparkles.length - 1; i >= 0; i--) {
      const s = sparkles[i];
      s.x += s.vx; s.y += s.vy; s.life -= s.decay;
      if (s.life <= 0) { sparkles.splice(i, 1); continue; }

      ctx.save();
      ctx.globalAlpha = s.life;
      ctx.fillStyle = s.color;

      // Draw star/sparkle shape
      ctx.translate(s.x, s.y);
      ctx.beginPath();
      const spikes = 4, outer = s.size, inner = s.size * 0.4;
      for (let j = 0; j < spikes * 2; j++) {
        const r = j % 2 === 0 ? outer : inner;
        const a = (j / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
        j === 0 ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(drawSparkles);
  }
  drawSparkles();
}