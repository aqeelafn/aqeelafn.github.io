/* ═══════════════════════════════════════════════════
   KEYLA PORTFOLIO v3 — SCRIPT
   Constellation BG · Fast Cursor · Tabs · Modal · i18n
   ═══════════════════════════════════════════════════ */

// ─── TRANSLATIONS ────────────────────────────────────────
const i18n = {
  id: {
    nav_home:'Home', nav_about:'Tentang', nav_journey:'Perjalanan',
    nav_exp:'Pengalaman', nav_works:'Karya', nav_sc:'Skills & Sertifikat', nav_contact:'Kontak',
    home_greeting:'Halo, saya', role_prefix:'Saya mengolah ',
    home_tagline:'"Di mana rasa ingin tahu bertemu data — membangun wawasan, mendorong perubahan."',
    btn_connect:'Mari Terhubung', btn_works:'Lihat Karya', btn_cv:'CV ↓', btn_cv2:'Unduh CV',
    scroll_hint:'jelajahi',
    about_eyebrow:'Tentang Saya', about_title:'About Me',
    about_p1:'Fresh graduate dari Telkom University dengan gelar Data Science, lulus <strong>Cum Laude</strong> (IPK 3.81/4.00). Kini berkarir sebagai Officer Development Program (ODP) IT di PT Bank Mandiri Tbk.',
    about_p2:'Pengalaman profesional mencakup full-time di PT Enerma (LNG energy) — dashboard eksekutif, konsolidasi data 3 kantor regional, dan analisis geospasial 100+ lokasi SPPG.',
    about_p3:'Mempublikasikan 2 makalah internasional terindeks Scopus dan meraih Best Presenter Award di ICICyTA 2024.',
    stat_gpa:'IPK — Cum Laude', stat_pub:'Publikasi Scopus', stat_students:'Mahasiswa Dibimbing', stat_award:'Best Presenter',
    interests_title:'Minat & Passion',
    journey_eyebrow:'Perjalanan', journey_title:'Journey',
    jtab_edu:'🎓 Education', jtab_ach:'✦ Achievements',
    edu_degree1:'Sarjana Data Science (S.Si.D.)', edu_laude:'Cum Laude · IPK 3.81/4.00',
    edu_involvement:'Keterlibatan', edu_inv1:'Asisten Pengajaran — 6 MK, 4 semester',
    edu_inv2:'Asisten Lab (AI, SO, OOP)', edu_inv3:'Panitia Capstone Project',
    edu_inv4:'Perwakilan Akreditasi', edu_inv5:'Panitia Revisi Paper (2 konferensi)',
    edu_inv6:'Abdimas di SMAN 12 Bandung', edu_achievements:'Pencapaian',
    edu_ach1:'2 Publikasi Scopus (IEEE & JCSE)', edu_ach2:'Best Presenter — ICICyTA 2024',
    edu_ach3:'Proyek ML, Data Viz, BI, Geospasial',
    edu_degree2:'SMA Negeri 12 Bandung', edu_hs:'SMA — IPA · Bandung',
    edu_activities:'Kegiatan', edu_act1:'Organisasi Band & Perkusi',
    edu_act2:'Pertunjukan panggung', edu_act3:'Panitia event & komite PR',
    edu_org_roles:'Jabatan', edu_award_text:'Juara 1 — Lomba Storytelling (PORAK) · "Malin Kundang"',
    ach1:'Best Presenter Award', ach1_detail:'ICICyTA 2024 — Penelitian Klasifikasi Penyakit Jantung',
    ach2:'ODP — PT Bank Mandiri Tbk', ach2_detail:'Terpilih dalam Officer Development Program IT di bank BUMN terbesar Indonesia',
    ach3:'Lulus Cum Laude', ach3_detail:'Telkom University — IPK 3.81/4.00, Sarjana Data Science',
    ach4:'2 Publikasi Internasional Terindeks Scopus', ach4_detail:'IEEE Xplore & JCSE journal — First Author di keduanya',
    ach5:'Juara 1 — Lomba Storytelling', ach5_detail:'PORAK — Membawakan "Malin Kundang"',
    exp_eyebrow:'Perjalanan Karir', exp_title:'Experience',
    tab_pro:'💼 Profesional', tab_org:'🤝 Organisasi',
    exp0_role:'Officer Development Program — IT',
    exp0_brief:'Program ODP IT dengan pelatihan Fundamental Banking in-class — operasi, produk, regulasi, dan layanan keuangan.',
    exp1_role:'Data Analyst — BDSP',
    exp1_brief:'Konsolidasi data 3 kantor regional, dashboard KPI eksekutif (+15% efisiensi), analisis geospasial 100+ lokasi SPPG.',
    exp2_role:'Data Analyst Intern — ICT',
    exp2_brief:'Dashboard BI Finance, Cargo & Sales (+30% efisiensi). Analisis 2.000+ aset IT. Dokumentasi SDLC.',
    exp3_role:'Data Analyst Intern',
    exp3_brief:'Olah 1.500+ catatan pelatihan, dashboard KPI sertifikasi, identifikasi 20% sesi overbooked.',
    exp4_role:'Teaching Assistant',
    exp4_brief:'6 mata kuliah komputasi & matematika. Peningkatan nilai rata-rata mahasiswa 8–12%.',
    exp5_role:'Practicum Assistant',
    exp5_brief:'5 semester praktikum — tingkat kelulusan >90% melalui mentoring dan sesi teknis terstruktur.',
    exp6_role:'Logistics Operations Assistant',
    exp6_brief:'Validasi 100+ catatan pengiriman/hari, database pengiriman, koordinasi tim operasional.',
    org1_role:'Anggota ML Path', org2_role:'Sekretaris I', org3_role:'Anggota Lab — Data Warehouse',
    org4_role:'Panitia Mahasiswa', org5_role:'Koordinator Liaison Officer',
    org6_role:'Liaison Officer', org7_role:'Penanggung Jawab',
    view_cert:'Sertifikat', view_cert2:'Sertifikat', view_cert3:'Sertifikat', view_cert4:'Sertifikat',
    gal_add:'Tambah foto', gal_add2:'Tambah foto', gal_add3:'Tambah foto', gal_add4:'Tambah foto',
    gal_add5:'Tambah foto', gal_add6:'Tambah foto', gal_add7:'Tambah foto',
    gal_org1:'Tambah foto', gal_org2:'Tambah foto', gal_org3:'Tambah foto', gal_org4:'Tambah foto',
    works_eyebrow:'Riset & Rekayasa', works_title:'Works',
    wtab_proj:'⚙ Proyek', wtab_pub:'📄 Publikasi',
    proj1_cat:'Machine Learning', proj1_name:'Klasifikasi Penyakit Jantung',
    proj1_desc:'Random Forest + Evolutionary Boosting → akurasi 86.67%. Dipublikasikan di IEEE ICICyTA 2024.',
    proj2_cat:'Machine Learning', proj2_name:'Klasifikasi Gizi Anak',
    proj2_desc:'KNN + SMOTE → akurasi 97.59%. Dipublikasikan di JCSE Scopus.',
    proj5_cat:'Data Engineering', proj5_name:'Optimasi Distribusi LNG',
    proj5_desc:'K-Means pipeline lokasi gudang LNG optimal di Jawa Barat.',
    proj3_cat:'Business Intelligence', proj3_name:'Dashboard BI Pertambangan',
    proj3_desc:'Monitoring produksi batu bara real-time untuk PT Kamalindo Sompurna.',
    proj4_cat:'Desain UI/UX', proj4_name:'UI/UX Marketplace',
    proj4_desc:'Desain high-fidelity marketplace mahasiswa Telkom University.',
    proj_github:'Semua proyek di GitHub',
    pub1_title:'Optimizing Heart Disease Classification Using Random Forest with Evolutionary Boosting',
    pub1_award:'✦ Best Presenter Award', pub_ieee:'IEEE Xplore ↗',
    pub2_title:'Enhancing Stunting Prediction for Indonesian Children Using ML with SMOTE Data Balancing',
    pub2_date:'Dipublikasikan: 4 Feb 2025',
    sc_eyebrow:'Kemampuan & Sertifikasi', sc_title:'Skills & Certs',
    sctab_skills:'⚙ Skills', sctab_certs:'🏅 Sertifikasi',
    sg_lang:'Bahasa Pemrograman', sg_ml:'Machine Learning & AI',
    sg_bi:'Business Intelligence', sg_data:'Data & Cloud', sg_other:'Tools & Lainnya', sg_lang2:'Bahasa',
    lang_id:'Indonesia', lang_native:'Bahasa Ibu', lang_pro:'Profesional',
    cert1:'Tes Kemahiran Bahasa Inggris', cert2:'Belajar Analisis Data dengan Python',
    cert3:'Machine Learning Terapan', cert4:'Belajar Machine Learning untuk Pemula',
    cert5:'Memulai Pemrograman dengan Python', cert6:'Belajar Visualisasi Data',
    cert7:'Foundations of Data Science', cert8:'Get Started with Python', cert_view:'Lihat',
    contact_eyebrow:'Hubungi Saya', contact_title:"Let's Connect",
    location_label:'Lokasi',
    contact_msg:'Aktif mencari peluang di data analytics, business intelligence, dan management trainee. Mari berkolaborasi.',
  },
  en: {
    nav_home:'Home', nav_about:'About', nav_journey:'Journey',
    nav_exp:'Experience', nav_works:'Works', nav_sc:'Skills & Certs', nav_contact:'Contact',
    home_greeting:"Hello, I'm", role_prefix:'I craft ',
    home_tagline:'"Where curiosity meets data — building insights, driving change."',
    btn_connect:"Let's Connect", btn_works:'View Works', btn_cv:'CV ↓', btn_cv2:'Download CV',
    scroll_hint:'explore',
    about_eyebrow:'Who I Am', about_title:'About Me',
    about_p1:'Fresh graduate from Telkom University with a Data Science degree, graduating <strong>Cum Laude</strong> (GPA 3.81/4.00). Currently in the ODP IT program at PT Bank Mandiri Tbk.',
    about_p2:'Professional experience includes a full-time role at PT Enerma (LNG energy) — executive dashboards, data consolidation across 3 regional offices, and geospatial analysis of 100+ SPPG locations.',
    about_p3:'Published 2 Scopus-indexed international papers and received Best Presenter Award at ICICyTA 2024.',
    stat_gpa:'GPA — Cum Laude', stat_pub:'Scopus Publications', stat_students:'Students Mentored', stat_award:'Best Presenter',
    interests_title:'Interests & Passions',
    journey_eyebrow:'Journey', journey_title:'Journey',
    jtab_edu:'🎓 Education', jtab_ach:'✦ Achievements',
    edu_degree1:'Bachelor of Data Science (S.Si.D.)', edu_laude:'Cum Laude · GPA 3.81/4.00',
    edu_involvement:'Involvement', edu_inv1:'Teaching Assistant — 6 courses, 4 semesters',
    edu_inv2:'Lab Assistant (AI, OS, OOP)', edu_inv3:'Capstone Project Committee',
    edu_inv4:'Accreditation Representative', edu_inv5:'Paper Revision Committee (2 conferences)',
    edu_inv6:'Community Service at SMAN 12 Bandung', edu_achievements:'Highlights',
    edu_ach1:'2 Scopus publications (IEEE & JCSE)', edu_ach2:'Best Presenter — ICICyTA 2024',
    edu_ach3:'ML, Data Viz, BI, and Geospatial projects',
    edu_degree2:'SMA Negeri 12 Bandung', edu_hs:'High School — Natural Science · Bandung',
    edu_activities:'Activities', edu_act1:'Band & Percussion Organization',
    edu_act2:'Stage performances', edu_act3:'Event organizing & PR committees',
    edu_org_roles:'Roles', edu_award_text:'1st Place — Storytelling Competition (PORAK) · "Malin Kundang"',
    ach1:'Best Presenter Award', ach1_detail:'ICICyTA 2024 — Heart Disease Classification research',
    ach2:'ODP — PT Bank Mandiri Tbk', ach2_detail:"Selected for ODP IT at Indonesia's largest state-owned bank",
    ach3:'Cum Laude Graduate', ach3_detail:'Telkom University — GPA 3.81/4.00, Bachelor of Data Science',
    ach4:'2 Scopus-indexed International Publications', ach4_detail:'IEEE Xplore & JCSE journal — First Author on both',
    ach5:'1st Place — Storytelling Competition', ach5_detail:'PORAK — Performed "Malin Kundang"',
    exp_eyebrow:'Career Path', exp_title:'Experience',
    tab_pro:'💼 Professional', tab_org:'🤝 Organization',
    exp0_role:'Officer Development Program — IT',
    exp0_brief:'ODP IT program with in-class Fundamental Banking training — operations, products, regulations, and financial services.',
    exp1_role:'Data Analyst — BDSP',
    exp1_brief:'Consolidated 3 regional offices data, executive KPI dashboards (+15% efficiency), geospatial analysis of 100+ SPPG locations.',
    exp2_role:'Data Analyst Intern — ICT',
    exp2_brief:'BI dashboards for Finance, Cargo & Sales (+30% efficiency). Analyzed 2,000+ IT assets. SDLC documentation.',
    exp3_role:'Data Analyst Intern',
    exp3_brief:'Processed 1,500+ training records, KPI dashboards, identified 20% overbooked sessions.',
    exp4_role:'Teaching Assistant',
    exp4_brief:'6 computing & math courses. Contributed to 8–12% improvement in average student performance.',
    exp5_role:'Practicum Assistant',
    exp5_brief:'5 semesters of practicum — 90%+ pass rate through mentoring and structured technical support.',
    exp6_role:'Logistics Operations Assistant',
    exp6_brief:'Validated 100+ shipment records/day, maintained databases, coordinated with operations teams.',
    org1_role:'ML Path Member', org2_role:'Secretary I', org3_role:'Lab Member — Data Warehouse',
    org4_role:'Student Committee', org5_role:'Coordinator Liaison Officer',
    org6_role:'Liaison Officer', org7_role:'Person in Charge',
    view_cert:'Cert', view_cert2:'Cert', view_cert3:'Cert', view_cert4:'Cert',
    gal_add:'Add photo', gal_add2:'Add photo', gal_add3:'Add photo', gal_add4:'Add photo',
    gal_add5:'Add photo', gal_add6:'Add photo', gal_add7:'Add photo',
    gal_org1:'Add photo', gal_org2:'Add photo', gal_org3:'Add photo', gal_org4:'Add photo',
    works_eyebrow:'Research & Engineering', works_title:'Works',
    wtab_proj:'⚙ Projects', wtab_pub:'📄 Publications',
    proj1_cat:'Machine Learning', proj1_name:'Heart Disease Classification',
    proj1_desc:'Random Forest + Evolutionary Boosting → 86.67% accuracy. Published at IEEE ICICyTA 2024.',
    proj2_cat:'Machine Learning', proj2_name:'Child Nutrition Classification',
    proj2_desc:'KNN + SMOTE → 97.59% accuracy. Published in JCSE Scopus.',
    proj5_cat:'Data Engineering', proj5_name:'LNG Distribution Optimizer',
    proj5_desc:'K-Means pipeline for optimal LNG warehouse locations in West Java.',
    proj3_cat:'Business Intelligence', proj3_name:'Mining BI Dashboard',
    proj3_desc:'Real-time coal production monitoring for PT Kamalindo Sompurna.',
    proj4_cat:'UI/UX Design', proj4_name:'Marketplace UI/UX',
    proj4_desc:'High-fidelity marketplace design for Telkom University students.',
    proj_github:'See all on GitHub',
    pub1_title:'Optimizing Heart Disease Classification Using Random Forest with Evolutionary Boosting',
    pub1_award:'✦ Best Presenter Award', pub_ieee:'IEEE Xplore ↗',
    pub2_title:'Enhancing Stunting Prediction for Indonesian Children Using ML with SMOTE Data Balancing',
    pub2_date:'Published: Feb 4, 2025',
    sc_eyebrow:'Capabilities & Certifications', sc_title:'Skills & Certs',
    sctab_skills:'⚙ Skills', sctab_certs:'🏅 Certifications',
    sg_lang:'Programming Languages', sg_ml:'Machine Learning & AI',
    sg_bi:'Business Intelligence', sg_data:'Data & Cloud', sg_other:'Tools & Others', sg_lang2:'Languages',
    lang_id:'Indonesian', lang_native:'Native', lang_pro:'Professional',
    cert1:'English Proficiency Test', cert2:'Data Analysis with Python',
    cert3:'Applied Machine Learning', cert4:'Machine Learning for Beginners',
    cert5:'Introduction to Python Programming', cert6:'Data Visualization',
    cert7:'Foundations of Data Science', cert8:'Get Started with Python', cert_view:'View',
    contact_eyebrow:'Get In Touch', contact_title:"Let's Connect",
    location_label:'Location',
    contact_msg:"Actively seeking opportunities in data analytics, BI, and management trainee programs. Let's build something meaningful together.",
  }
};

// ─── MODAL DATA ───────────────────────────────────────────
const modals = {
  exp_mandiri:{
    id:`<h2>🏦 PT Bank Mandiri Tbk</h2><p><strong>Officer Development Program — IT</strong> · West Jakarta · Jul 2026 – Present</p><h3>Program</h3><ul><li>Program ODP IT bergengsi di bank BUMN terbesar Indonesia</li><li>Pelatihan Fundamental Banking in-class: operasi perbankan, produk, regulasi, layanan keuangan</li><li>Membangun fondasi kuat dalam sistem perbankan digital dan manajemen proses bisnis</li></ul><h3>Tech Stack</h3><div class="tech"><span>Banking Systems</span><span>Digital Banking</span><span>Business Process Management</span><span>Data Analytics</span></div>`,
    en:`<h2>🏦 PT Bank Mandiri Tbk</h2><p><strong>Officer Development Program — IT</strong> · West Jakarta · Jul 2026 – Present</p><h3>Program</h3><ul><li>Prestigious ODP IT program at Indonesia's largest state-owned bank</li><li>In-class Fundamental Banking training: operations, products, regulations, financial services</li><li>Building strong foundation in digital banking systems and BPM</li></ul><h3>Tech Stack</h3><div class="tech"><span>Banking Systems</span><span>Digital Banking</span><span>Business Process Management</span><span>Data Analytics</span></div>`
  },
  exp_enerma:{
    id:`<h2>⚡ PT Energi Negeri Meusenia (ENERMA)</h2><p><strong>Data Analyst — BDSP</strong> · South Jakarta · Sept 2025 – Jun 2026</p><h3>Pencapaian Utama</h3><ul><li>Konsolidasikan data dari <strong>3 kantor regional</strong> dan 4+ departemen ke master data terpusat</li><li>Dashboard KPI eksekutif otomatis untuk Direksi — efisiensi laporan <strong>+15%</strong></li><li>Analisis performa bisnis, segmentasi pelanggan, dan tren KPI untuk ekspansi LNG</li><li>Desain struktur master data dan data governance workflows</li><li>Analisis geospasial <strong>100+ lokasi SPPG</strong> — identifikasi area ekspansi berpotensi tinggi</li></ul><h3>Tech Stack</h3><div class="tech"><span>Python</span><span>BigQuery</span><span>Looker</span><span>Excel</span><span>AppSheet</span></div>`,
    en:`<h2>⚡ PT Energi Negeri Meusenia (ENERMA)</h2><p><strong>Data Analyst — BDSP</strong> · South Jakarta · Sept 2025 – Jun 2026</p><h3>Key Achievements</h3><ul><li>Consolidated data from <strong>3 regional offices</strong> and 4+ departments into centralized master data</li><li>Built automated executive KPI dashboards for Board of Directors — reporting efficiency <strong>+15%</strong></li><li>Analyzed business performance, customer segmentation, and KPI trends for LNG market expansion</li><li>Designed master data structures and data governance workflows</li><li>Geospatial analysis across <strong>100+ SPPG locations</strong> for feasibility studies</li></ul><h3>Tech Stack</h3><div class="tech"><span>Python</span><span>BigQuery</span><span>Looker</span><span>Excel</span><span>AppSheet</span></div>`
  },
  exp_pas2:{
    id:`<h2>✈️ PT Pelita Air Service</h2><p><strong>Data Analyst Intern — ICT Division</strong> · Central Jakarta · Jul – Sept 2024</p><h3>Pencapaian</h3><ul><li>Dashboard BI interaktif Finance, Cargo & Sales — efisiensi laporan <strong>+30%</strong></li><li>Analisis <strong>2.000+ catatan aset IT</strong>: siklus hidup, performa vendor, efisiensi distribusi</li><li>User stories dan business process flows untuk sistem manajemen aset IT</li><li>Dokumentasi SDLC: DFD, system requirements, arsitektur dashboard untuk transformasi digital</li></ul><h3>Tech Stack</h3><div class="tech"><span>Tableau</span><span>PostgreSQL</span><span>Oracle Database</span><span>Excel</span><span>Draw.io</span></div>`,
    en:`<h2>✈️ PT Pelita Air Service</h2><p><strong>Data Analyst Intern — ICT Division</strong> · Central Jakarta · Jul – Sept 2024</p><h3>Achievements</h3><ul><li>Interactive BI dashboards for Finance, Cargo & Sales — reporting efficiency <strong>+30%</strong></li><li>Analyzed <strong>2,000+ IT asset records</strong>: lifecycle, vendor performance, distribution efficiency</li><li>User stories and business process flows for IT asset management system</li><li>SDLC documentation: DFD, system requirements, dashboard architecture for digital transformation</li></ul><h3>Tech Stack</h3><div class="tech"><span>Tableau</span><span>PostgreSQL</span><span>Oracle Database</span><span>Excel</span><span>Draw.io</span></div>`
  },
  exp_pas1:{
    id:`<h2>✈️ PT Pelita Air Service (PATC)</h2><p><strong>Data Analyst Intern</strong> · Central Jakarta · Jan – Feb 2024</p><h3>Pencapaian</h3><ul><li>Olah & standardisasi <strong>1.500+ catatan pelatihan</strong> — validasi, cleansing, dedup</li><li>Dashboard KPI: tren sertifikasi, distribusi peserta, performa vendor, metrik keuangan</li><li>Identifikasi <strong>20% sesi overbooked</strong> dan 15% kelas underutilized</li><li>Insights analitis untuk alokasi anggaran dan evaluasi efektivitas pelatihan</li></ul><h3>Tech Stack</h3><div class="tech"><span>Looker Studio</span><span>Excel</span></div>`,
    en:`<h2>✈️ PT Pelita Air Service (PATC)</h2><p><strong>Data Analyst Intern</strong> · Central Jakarta · Jan – Feb 2024</p><h3>Achievements</h3><ul><li>Processed & standardized <strong>1,500+ training records</strong> — validation, cleansing, dedup</li><li>KPI dashboards: certification trends, participant distribution, vendor performance, financial metrics</li><li>Identified <strong>20% overbooked sessions</strong> and 15% underutilized classes</li><li>Analytical insights for budget allocation and training effectiveness evaluation</li></ul><h3>Tech Stack</h3><div class="tech"><span>Looker Studio</span><span>Excel</span></div>`
  },
  exp_ta:{
    id:`<h2>📚 Telkom University</h2><p><strong>Teaching Assistant</strong> · Bandung · Sept 2023 – Jan 2025</p><h3>Mata Kuliah</h3><ul><li>Logika Matematika (2 semester)</li><li>ICT Global Insight</li><li>Sistem Digital</li><li>Matematika Diskrit</li><li>Organisasi dan Arsitektur Komputer</li></ul><h3>Dampak</h3><ul><li>50–90 mahasiswa per kelas</li><li>Peningkatan rata-rata nilai <strong>8–12%</strong></li><li>Evaluasi tugas, kuis, dan ujian</li></ul><h3>Tech Stack</h3><div class="tech"><span>Microsoft Office</span><span>LMS</span><span>Academic Administration</span></div>`,
    en:`<h2>📚 Telkom University</h2><p><strong>Teaching Assistant</strong> · Bandung · Sept 2023 – Jan 2025</p><h3>Courses</h3><ul><li>Mathematical Logic (2 semesters)</li><li>ICT Global Insight</li><li>Digital Systems</li><li>Discrete Mathematics</li><li>Computer Organization and Architecture</li></ul><h3>Impact</h3><ul><li>50–90 students per class</li><li><strong>8–12% improvement</strong> in average student performance</li><li>Evaluated assignments, quizzes, and exams</li></ul><h3>Tech Stack</h3><div class="tech"><span>Microsoft Office</span><span>LMS</span><span>Academic Administration</span></div>`
  },
  exp_lab:{
    id:`<h2>🔬 Informatics Lab, Telkom University</h2><p><strong>Practicum Assistant</strong> · Bandung · Feb 2023 – Jun 2025</p><h3>Praktikum</h3><ul><li>Sistem Operasi (Sept 2024–Jun 2025) — Xinu OS</li><li>Pemrograman Berorientasi Objek (Feb 2024–Jan 2025) — Java</li><li>Dasar Kecerdasan Artifisial (Feb 2025–Jun 2025) — Python</li></ul><h3>Dampak</h3><ul><li><strong>5 semester</strong>, 100+ mahasiswa</li><li>~5 kelas/minggu, ~40 mahasiswa/kelas</li><li>Tingkat kelulusan <strong>>90%</strong></li><li>Administrasi LMS dan pelaporan nilai</li></ul><h3>Tech Stack</h3><div class="tech"><span>Java</span><span>Python</span><span>Xinu OS</span><span>Excel</span><span>LMS</span></div>`,
    en:`<h2>🔬 Informatics Lab, Telkom University</h2><p><strong>Practicum Assistant</strong> · Bandung · Feb 2023 – Jun 2025</p><h3>Courses</h3><ul><li>Operating System Practicum (Sept 2024–Jun 2025) — Xinu OS</li><li>OOP Practicum (Feb 2024–Jan 2025) — Java</li><li>Basic AI Practicum (Feb 2025–Jun 2025) — Python</li></ul><h3>Impact</h3><ul><li><strong>5 semesters</strong>, 100+ students</li><li>~5 classes/week, ~40 students/class</li><li><strong>90%+ pass rate</strong></li><li>LMS administration and grade reporting</li></ul><h3>Tech Stack</h3><div class="tech"><span>Java</span><span>Python</span><span>Xinu OS</span><span>Excel</span><span>LMS</span></div>`
  },
  exp_logistics:{
    id:`<h2>📦 PT Wahana Prestasi Logistik</h2><p><strong>Logistics Operations Assistant</strong> · Bandung · Sept 2020 – Jul 2021</p><h3>Tanggung Jawab</h3><ul><li>Validasi <strong>100+ catatan pengiriman/hari</strong> — pengirim, penerima, alamat, paket</li><li>Kelola database pengiriman dan laporan operasional harian</li><li>Koordinasi dengan tim operasional dan kurir</li><li>Memperkuat kemampuan akurasi administratif di lingkungan volume tinggi</li></ul><h3>Tech Stack</h3><div class="tech"><span>Spreadsheet</span><span>Logistics IS</span><span>Data Entry</span><span>Operational Reporting</span></div>`,
    en:`<h2>📦 PT Wahana Prestasi Logistik</h2><p><strong>Logistics Operations Assistant</strong> · Bandung · Sept 2020 – Jul 2021</p><h3>Responsibilities</h3><ul><li>Validated <strong>100+ shipment records/day</strong> — sender, recipient, address, package</li><li>Maintained shipment databases and daily operational reports</li><li>Coordinated with operations teams and couriers</li><li>Strengthened administrative accuracy in a high-volume environment</li></ul><h3>Tech Stack</h3><div class="tech"><span>Spreadsheet</span><span>Logistics IS</span><span>Data Entry</span><span>Operational Reporting</span></div>`
  },
  proj_heart:{
    id:`<h2>❤️ Klasifikasi Penyakit Jantung</h2><p><strong>IEEE · ICICyTA 2024</strong></p><h3>Metodologi</h3><ul><li>AutoML untuk pemilihan model</li><li>Random Forest + Evolutionary Boosting</li><li>Cross-validation 10-fold</li></ul><h3>Hasil</h3><ul><li>Akurasi test: <strong>86.67%</strong></li><li><strong>Best Presenter Award</strong> — ICICyTA 2024</li></ul><h3>Links</h3><div class="tech"><a href="https://ieeexplore.ieee.org/document/10912991" target="_blank" style="color:var(--rose);text-decoration:none">IEEE Xplore ↗</a><a href="https://doi.org/10.1109/ICICYTA64807.2024.10912991" target="_blank" style="color:var(--rose);text-decoration:none">DOI ↗</a></div>`,
    en:`<h2>❤️ Heart Disease Classification</h2><p><strong>IEEE · ICICyTA 2024</strong></p><h3>Methodology</h3><ul><li>AutoML for model selection</li><li>Random Forest + Evolutionary Boosting</li><li>10-fold cross-validation</li></ul><h3>Results</h3><ul><li>Test Accuracy: <strong>86.67%</strong></li><li><strong>Best Presenter Award</strong> — ICICyTA 2024</li></ul><h3>Links</h3><div class="tech"><a href="https://ieeexplore.ieee.org/document/10912991" target="_blank" style="color:var(--rose);text-decoration:none">IEEE Xplore ↗</a><a href="https://doi.org/10.1109/ICICYTA64807.2024.10912991" target="_blank" style="color:var(--rose);text-decoration:none">DOI ↗</a></div>`
  },
  proj_stunting:{
    id:`<h2>👶 Klasifikasi Gizi Anak</h2><p><strong>JCSE Scopus · 2025</strong></p><h3>Metodologi</h3><ul><li>K-Nearest Neighbors (KNN)</li><li>SMOTE untuk class imbalance</li><li>Feature engineering antropometri</li></ul><h3>Hasil</h3><ul><li>Akurasi: <strong>97.59%</strong></li><li>JCSE Vol. 18, No. 4 · pp. 203–213</li></ul><h3>Links</h3><div class="tech"><a href="https://doi.org/10.5626/JCSE.2024.18.4.203" target="_blank" style="color:var(--rose);text-decoration:none">DOI ↗</a></div>`,
    en:`<h2>👶 Child Nutrition Classification</h2><p><strong>JCSE Scopus · 2025</strong></p><h3>Methodology</h3><ul><li>K-Nearest Neighbors (KNN)</li><li>SMOTE for class imbalance</li><li>Anthropometric feature engineering</li></ul><h3>Results</h3><ul><li>Accuracy: <strong>97.59%</strong></li><li>JCSE Vol. 18, No. 4 · pp. 203–213</li></ul><h3>Links</h3><div class="tech"><a href="https://doi.org/10.5626/JCSE.2024.18.4.203" target="_blank" style="color:var(--rose);text-decoration:none">DOI ↗</a></div>`
  },
  proj_lng:{
    id:`<h2>⚡ Optimasi Distribusi LNG</h2><p><strong>Python · K-Means · Geospatial</strong></p><h3>Pipeline</h3><ul><li>Web scraping data SPPG</li><li>Geocoding via Nominatim API</li><li>Kalkulasi jarak Haversine ke 3 stasiun pengisian</li><li>Visualisasi peta interaktif Folium</li><li>K-Means clustering (Elbow Method)</li></ul><h3>Hasil</h3><ul><li>Rekomendasi: <strong>Kelurahan Sayang</strong></li><li>Mengungguli lokasi eksisting (Pasar Gekbrong) secara signifikan</li></ul><h3>Tech Stack</h3><div class="tech"><span>Python</span><span>K-Means</span><span>Folium</span><span>Haversine</span><span>Pandas</span></div>`,
    en:`<h2>⚡ LNG Distribution Optimizer</h2><p><strong>Python · K-Means · Geospatial</strong></p><h3>Pipeline</h3><ul><li>SPPG web scraping</li><li>GPS geocoding via Nominatim API</li><li>Haversine distance to 3 filling stations</li><li>Interactive Folium map visualization</li><li>K-Means clustering (Elbow Method)</li></ul><h3>Result</h3><ul><li>Recommendation: <strong>Kelurahan Sayang</strong></li><li>Significantly outperformed existing gut-feel location (Pasar Gekbrong)</li></ul><h3>Tech Stack</h3><div class="tech"><span>Python</span><span>K-Means</span><span>Folium</span><span>Haversine</span><span>Pandas</span></div>`
  },
  proj_mining:{
    id:`<h2>⛏️ Dashboard BI Pertambangan</h2><p><strong>PT Kamalindo Sompurna · Power BI</strong></p><h3>Fitur</h3><ul><li>Monitoring produksi real-time per lokasi tambang</li><li>Analisis efisiensi: target vs aktual</li><li>Laporan otomatis harian & bulanan (DAX)</li><li>Alert sistem untuk deviasi target</li></ul><h3>Tech Stack</h3><div class="tech"><span>Power BI</span><span>DAX</span><span>Real-time Dashboard</span></div>`,
    en:`<h2>⛏️ Mining BI Dashboard</h2><p><strong>PT Kamalindo Sompurna · Power BI</strong></p><h3>Features</h3><ul><li>Real-time production monitoring per mining location</li><li>Efficiency analysis: target vs actual</li><li>Automated daily & monthly reports (DAX)</li><li>Alert system for production target deviations</li></ul><h3>Tech Stack</h3><div class="tech"><span>Power BI</span><span>DAX</span><span>Real-time Dashboard</span></div>`
  },
  proj_ux:{
    id:`<h2>🛒 UI/UX Marketplace</h2><p><strong>Telkom University · Figma</strong></p><h3>Proses</h3><ul><li>User research & persona development</li><li>Information architecture & sitemap</li><li>Low-fidelity wireframing</li><li>High-fidelity mockup</li><li>Interactive prototyping & usability testing</li></ul><h3>Tech Stack</h3><div class="tech"><span>Figma</span><span>Prototyping</span><span>User Research</span></div>`,
    en:`<h2>🛒 Marketplace UI/UX</h2><p><strong>Telkom University · Figma</strong></p><h3>Process</h3><ul><li>User research & persona development</li><li>Information architecture & sitemap</li><li>Low-fidelity wireframing</li><li>High-fidelity mockup</li><li>Interactive prototyping & usability testing</li></ul><h3>Tech Stack</h3><div class="tech"><span>Figma</span><span>Prototyping</span><span>User Research</span></div>`
  }
};

// ─── STATE ────────────────────────────────────────────────
let currentPage = 'home';
let currentLang = localStorage.getItem('lang') || 'id';
let currentTheme = localStorage.getItem('theme') || 'light';
let twTimer = null;

// ─── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  goTo('home', false);
  initCursor();
  initSparkle();
  initConstellation();
  initTypewriter();
});

// ─── NAVIGATION ───────────────────────────────────────────
function goTo(id, animate = true) {
  document.querySelector('.page.active')?.classList.remove('active');
  const el = document.getElementById('page-' + id);
  if (!el) return;
  el.classList.add('active');
  currentPage = id;
  el.scrollTop = 0;
  document.querySelectorAll('[data-page]').forEach(n =>
    n.classList.toggle('active', n.dataset.page === id)
  );
  if (id === 'skillscerts') {
    setTimeout(() => {
      el.querySelectorAll('.skill-fill').forEach(b => {
        b.style.animation = 'none';
        b.offsetHeight;
        b.style.animation = '';
      });
    }, 100);
  }
}

// ─── GENERIC TAB SWITCHER ─────────────────────────────────
function switchTab(group, name) {
  // Buttons: find within the relevant section
  const page = document.getElementById('page-' + currentPage);
  if (!page) return;

  // Update buttons
  const btnGroups = {
    journey: ['education','achievements'],
    exp:     ['professional','organization'],
    works:   ['projects','publications'],
    sc:      ['skills','certs']
  };
  const opts = btnGroups[group] || [];
  const allBtns = page.querySelectorAll('.tab-btn, .journey-tabs .tab-btn, .exp-tabs .tab-btn, .works-tabs .tab-btn, .sc-tabs .tab-btn');
  // simpler: toggle active on all tab-btns in page based on their onclick
  page.querySelectorAll('.tab-btn').forEach(btn => {
    const fn = btn.getAttribute('onclick') || '';
    btn.classList.toggle('active', fn.includes(`'${name}'`));
  });

  // Update panels
  const prefixes = { journey:'journey-', exp:'exp-', works:'works-', sc:'sc-' };
  const prefix = prefixes[group] || group + '-';
  opts.forEach(opt => {
    const p = document.getElementById(prefix + opt);
    if (p) p.classList.toggle('active', opt === name);
  });
}

// ─── MODAL ────────────────────────────────────────────────
function openModal(id) {
  const d = modals[id];
  if (!d) return;
  document.getElementById('modalBody').innerHTML = d[currentLang] || d.en;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeLightbox(); } });

// ─── LIGHTBOX ─────────────────────────────────────────────
function openLightbox(src) {
  document.getElementById('lbImg').src = src;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}
// Wire up gallery images on click
document.addEventListener('click', e => {
  if (e.target.classList.contains('exp-gal-img') || e.target.classList.contains('mg-img')) {
    openLightbox(e.target.src);
  }
});

// ─── THEME ────────────────────────────────────────────────
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
  localStorage.setItem('theme', currentTheme);
}
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  currentTheme = t;
}

// ─── LANGUAGE ─────────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  applyLang(lang);
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
}
function applyLang(lang) {
  const t = i18n[lang] || i18n.id;
  document.querySelectorAll('[data-id]').forEach(el => {
    const v = t[el.dataset.id];
    if (v !== undefined) el.innerHTML = v;
  });
  initTypewriter();
}

// ─── TYPEWRITER ───────────────────────────────────────────
function initTypewriter() {
  const el = document.getElementById('roleText');
  if (!el) return;
  clearInterval(twTimer);
  const roles = ['data stories', 'ML models', 'BI dashboards', 'insights'];
  let ri = 0, ci = 0, del = false, pausing = false;
  function step() {
    if (pausing) return;
    const r = roles[ri];
    if (!del) {
      el.textContent = r.substring(0, ++ci);
      if (ci === r.length) { pausing = true; setTimeout(() => { del = true; pausing = false; }, 1600); }
    } else {
      el.textContent = r.substring(0, --ci);
      if (ci === 0) { del = false; ri = (ri + 1) % roles.length; }
    }
  }
  twTimer = setInterval(step, 85);
}

// ─── CURSOR (fast, no lag) ────────────────────────────────
function initCursor() {
  const ring = document.getElementById('cursorRing');
  if (!ring || window.matchMedia('(max-width:768px)').matches) return;
  // Direct positioning — no lerp for speed
  document.addEventListener('mousemove', e => {
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  });
  const hoverSel = 'a,button,.nav-item,.exp-card,.proj-card,.org-card,.c-card,.stat-card,.cert-card,.ach-item,.pub-card,.ipill,.see-more-card,.tab-btn,.skill-group';
  document.querySelectorAll(hoverSel).forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('h'));
    el.addEventListener('mouseleave', () => ring.classList.remove('h'));
  });
}

// ─── SPARKLE TRAIL ────────────────────────────────────────
function initSparkle() {
  const canvas = document.getElementById('sparkleCanvas');
  if (!canvas || window.matchMedia('(max-width:768px)').matches) return;
  const ctx = canvas.getContext('2d');
  const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
  resize(); window.addEventListener('resize', resize);
  const sparks = [];
  const cols = ['#c87060','#c8a058','#a088c0','#f0c8c0','#f0e0b8'];
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (Math.random() < 0.45) {
      sparks.push({
        x: mx + (Math.random()-.5)*16, y: my + (Math.random()-.5)*16,
        sz: Math.random()*3+.8, life:1,
        decay: Math.random()*.032+.018,
        vx:(Math.random()-.5)*1.6, vy:-Math.random()*1.8-.3,
        col: cols[Math.floor(Math.random()*cols.length)],
        rot: Math.random()*Math.PI*2
      });
      if (sparks.length > 80) sparks.splice(0,12);
    }
  });
  (function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = sparks.length-1; i >= 0; i--) {
      const s = sparks[i];
      s.x += s.vx; s.y += s.vy; s.life -= s.decay; s.rot += .12;
      if (s.life <= 0) { sparks.splice(i,1); continue; }
      ctx.save();
      ctx.globalAlpha = s.life * .8;
      ctx.fillStyle = s.col;
      ctx.translate(s.x, s.y); ctx.rotate(s.rot);
      // 4-point star
      ctx.beginPath();
      for (let j=0;j<8;j++) {
        const r = j%2===0 ? s.sz : s.sz*.35;
        const a = (j/8)*Math.PI*2 - Math.PI/2;
        j===0 ? ctx.moveTo(Math.cos(a)*r,Math.sin(a)*r) : ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r);
      }
      ctx.closePath(); ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(draw);
  })();
}

// ─── CONSTELLATION BACKGROUND ─────────────────────────────
function initConstellation() {
  const canvas = document.getElementById('constellationCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
  resize(); window.addEventListener('resize', resize);

  const COUNT = 90;
  let stars = [];

  function makeStars() {
    stars = Array.from({length: COUNT}, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + .3,
      vx: (Math.random()-.5) * .22,
      vy: (Math.random()-.5) * .22,
      opacity: Math.random() * .5 + .1,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * .02 + .008,
      col: ['#c87060','#a088c0','#c8a058','#f0d0c8'][Math.floor(Math.random()*4)]
    }));
  }
  makeStars();
  window.addEventListener('resize', () => { resize(); makeStars(); });

  const CONNECT_DIST = 140;

  (function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const alphaMultiplier = isDark ? 0.7 : 0.45;

    // Update + draw stars
    stars.forEach(s => {
      s.x += s.vx; s.y += s.vy;
      s.twinkle += s.twinkleSpeed;
      if (s.x < 0) s.x = canvas.width;
      if (s.x > canvas.width) s.x = 0;
      if (s.y < 0) s.y = canvas.height;
      if (s.y > canvas.height) s.y = 0;

      const twinkled = s.opacity * (.7 + .3 * Math.sin(s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.col;
      ctx.globalAlpha = twinkled * alphaMultiplier;
      ctx.fill();
    });

    // Draw constellation lines
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < CONNECT_DIST) {
          const lineAlpha = (1 - dist / CONNECT_DIST) * .12 * alphaMultiplier;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.strokeStyle = '#c87060';
          ctx.globalAlpha = lineAlpha;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  })();
}