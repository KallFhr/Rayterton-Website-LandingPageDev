document.addEventListener('DOMContentLoaded', () => {

    // --- THEME SWITCHER ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
        }
    };

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);


    // --- LANGUAGE SWITCHER ---
    const langSwitcher = document.getElementById('lang-switcher');
    const translations = {
        'en': {
            'nav_about': 'About Us', 'nav_strengths': 'Strengths', 'nav_software': 'Software', 'nav_industries': 'Industries', 'nav_contact': 'Contact',
            'hero_title': 'Rayterton International Solution', 'hero_subtitle': 'Technology Solution (Server, Hardware, Internet of Things, etc..)',
            'about_title': 'About Us', 'about_text': 'Established in 2003, Rayterton provides IT software, server, hardware products and technology solution to many enterprise. Rayterton is a software principle for Rayterton Apps Software and Rayterton Cloud. Rayterton also provides technology, hardware, server and infrastructure supporting these software. Rayterton also provides IT and Management Consulting as well.',
            'bu_title': 'Our Business Units', 'bu_card1_caption': 'Rayterton Apps Software (on-Premise and Cloud Solution)', 'bu_card2_caption': 'Technology Solution (Server, Hardware, Internet of Things, etc..)', 'bu_card3_caption': 'IT Consulting', 'bu_card4_caption': 'Management Consulting', 'bu_card5_caption': 'Rayterton Academy',
            'strengths_title': 'Our Competitive Strengths', 'strength1': '100% risk free', 'strength2': 'Easy to customize', 'strength3': 'Software Ownership', 'strength4': 'Best Fit to Client Requirements', 'strength5': 'No Change Request (CR) Fee during Maintenance',
            'software_title': 'Our Best Selling Software', 'software_subtitle': '(From 20 Software Group and 70 Software Modules)',
            'industries_title': 'Industries We Serve', 'industries_subtitle': '(Cross Business Sector)',
            'footer_col1_title': 'Rayterton International', 'footer_col1_text': 'Your trusted partner in technology and innovation since 2003.', 'footer_col2_title': 'Quick Links',
            'nav_about_footer': 'About Us', 'nav_strengths_footer': 'Strengths', 'nav_software_footer': 'Software', 'nav_industries_footer': 'Industries',
            'contact_address_line1': 'Menteng Square Tower A 3rd Floor unit AO-09',
            'contact_address_line2': 'Jl. Matraman Raya 30E, Central Jakarta',
            'footer_col3_title': 'Contact Us', 'footer_col4_title': 'Follow Us', 'footer_copyright': '© 2025 Rayterton International Solution. All Rights Reserved.'
        },
        'id': {
            'nav_about': 'Tentang Kami', 'nav_strengths': 'Keunggulan', 'nav_software': 'Software', 'nav_industries': 'Industri', 'nav_contact': 'Kontak',
            'hero_title': 'Solusi Internasional Rayterton', 'hero_subtitle': 'Solusi Teknologi (Server, Perangkat Keras, Internet of Things, dll..)',
            'about_title': 'Tentang Kami', 'about_text': 'Didirikan pada tahun 2003, Rayterton menyediakan perangkat lunak TI, server, produk perangkat keras, dan solusi teknologi untuk banyak perusahaan. Rayterton adalah prinsipal perangkat lunak untuk Rayterton Apps Software dan Rayterton Cloud. Rayterton juga menyediakan teknologi, perangkat keras, server, dan infrastruktur yang mendukung perangkat lunak ini. Rayterton juga menyediakan Konsultasi TI dan Manajemen.',
            'bu_title': 'Unit Bisnis Kami', 'bu_card1_caption': 'Software Aplikasi Rayterton (Solusi on-Premise dan Cloud)', 'bu_card2_caption': 'Solusi Teknologi (Server, Perangkat Keras, IoT, dll..)', 'bu_card3_caption': 'Konsultasi TI', 'bu_card4_caption': 'Konsultasi Manajemen', 'bu_card5_caption': 'Akademi Rayterton',
            'strengths_title': 'Keunggulan Kompetitif Kami', 'strength1': '100% bebas risiko', 'strength2': 'Mudah disesuaikan', 'strength3': 'Kepemilikan Perangkat Lunak', 'strength4': 'Sesuai dengan Kebutuhan Klien', 'strength5': 'Tanpa Biaya Change Request (CR) selama Maintenance',
            'software_title': 'Software Terlaris Kami', 'software_subtitle': '(Dari 20 Grup Software dan 70 Modul Software)',
            'industries_title': 'Industri yang Kami Layani', 'industries_subtitle': '(Lintas Sektor Bisnis)',
            'footer_col1_title': 'Rayterton International', 'footer_col1_text': 'Mitra terpercaya Anda dalam teknologi dan inovasi sejak 2003.', 'footer_col2_title': 'Tautan Cepat',
            'nav_about_footer': 'Tentang Kami', 'nav_strengths_footer': 'Keunggulan', 'nav_software_footer': 'Software', 'nav_industries_footer': 'Industri',
            'contact_address_line1': 'Menteng Square Tower A Lantai 3 unit AO-09',
            'contact_address_line2': 'Jl. Matraman Raya 30E, Jakarta Pusat',
            'footer_col3_title': 'Kontak Kami', 'footer_col4_title': 'Ikuti Kami', 'footer_copyright': '© 2025 Solusi Internasional Rayterton. Hak Cipta Dilindungi.'
        },
        'ms': {
            'nav_about': 'Tentang Kami', 'nav_strengths': 'Kekuatan', 'nav_software': 'Perisian', 'nav_industries': 'Industri', 'nav_contact': 'Hubungi Kami',
            'hero_title': 'Penyelesaian Antarabangsa Rayterton', 'hero_subtitle': 'Penyelesaian Teknologi (Pelayan, Perkakasan, Internet Kebendaan, dll..)',
            'about_title': 'Tentang Kami', 'about_text': 'Ditubuhkan pada tahun 2003, Rayterton menyediakan perisian IT, pelayan, produk perkakasan dan penyelesaian teknologi kepada banyak perusahaan. Rayterton adalah prinsipal perisian untuk Rayterton Apps Software dan Rayterton Cloud. Rayterton juga menyediakan teknologi, perkakasan, pelayan dan infrastruktur yang menyokong perisian ini. Rayterton juga menyediakan Perundingan IT dan Pengurusan.',
            'bu_title': 'Unit Perniagaan Kami', 'bu_card1_caption': 'Perisian Aplikasi Rayterton (Penyelesaian On-Premise dan Awan)', 'bu_card2_caption': 'Penyelesaian Teknologi (Pelayan, Perkakasan, IoT, dll..)', 'bu_card3_caption': 'Perundingan IT', 'bu_card4_caption': 'Perundingan Pengurusan', 'bu_card5_caption': 'Akademi Rayterton',
            'strengths_title': 'Kekuatan Kompetitif Kami', 'strength1': '100% bebas risiko', 'strength2': 'Mudah disesuaikan', 'strength3': 'Pemilikan Perisian', 'strength4': 'Paling Sesuai dengan Keperluan Pelanggan', 'strength5': 'Tiada Bayaran Permintaan Perubahan (CR) semasa Penyelenggaraan',
            'software_title': 'Perisian Terlaris Kami', 'software_subtitle': '(Dari 20 Kumpulan Perisian dan 70 Modul Perisian)',
            'industries_title': 'Industri yang Kami Layani', 'industries_subtitle': '(Rentasan Sektor Perniagaan)',
            'footer_col1_title': 'Rayterton International', 'footer_col1_text': 'Rakan kongsi anda yang dipercayai dalam teknologi dan inovasi sejak 2003.', 'footer_col2_title': 'Pautan Pantas',
            'nav_about_footer': 'Tentang Kami', 'nav_strengths_footer': 'Kekuatan', 'nav_software_footer': 'Perisian', 'nav_industries_footer': 'Industri',
            'contact_address_line1': 'Menteng Square Tower A Tingkat 3 unit AO-09',
            'contact_address_line2': 'Jl. Matraman Raya 30E, Jakarta Pusat',
            'footer_col3_title': 'Hubungi Kami', 'footer_col4_title': 'Ikuti Kami', 'footer_copyright': '© 2025 Penyelesaian Antarabangsa Rayterton. Hak Cipta Terpelihara.'
        },
        'th': {
            'nav_about': 'เกี่ยวกับเรา', 'nav_strengths': 'จุดแข็ง', 'nav_software': 'ซอฟต์แวร์', 'nav_industries': 'อุตสาหกรรม', 'nav_contact': 'ติดต่อ',
            'hero_title': 'เรย์เตอร์ตัน อินเตอร์เนชั่นแนล โซลูชั่น', 'hero_subtitle': 'โซลูชั่นเทคโนโลยี (เซิร์ฟเวอร์, ฮาร์ดแวร์, อินเทอร์เน็ตของสรรพสิ่ง, ฯลฯ)',
            'about_title': 'เกี่ยวกับเรา', 'about_text': 'ก่อตั้งขึ้นในปี 2003 Rayterton ให้บริการซอฟต์แวร์ IT, เซิร์ฟเวอร์, ผลิตภัณฑ์ฮาร์ดแวร์ และโซลูชั่นเทคโนโลยีแก่หลายองค์กร Rayterton เป็นผู้พัฒนาซอฟต์แวร์หลักสำหรับ Rayterton Apps Software และ Rayterton Cloud Rayterton ยังให้บริการเทคโนโลยี, ฮาร์ดแวร์, เซิร์ฟเวอร์ และโครงสร้างพื้นฐานที่สนับสนุนซอฟต์แวร์เหล่านี้ Rayterton ยังให้บริการให้คำปรึกษาด้าน IT และการจัดการด้วย',
            'bu_title': 'หน่วยธุรกิจของเรา', 'bu_card1_caption': 'ซอฟต์แวร์ Rayterton Apps (โซลูชั่น On-Premise และ Cloud)', 'bu_card2_caption': 'โซลูชั่นเทคโนโลยี (เซิร์ฟเวอร์, ฮาร์ดแวร์, IoT, ฯลฯ)',
            'bu_card3_caption': 'ที่ปรึกษา IT', 'bu_card4_caption': 'ที่ปรึกษาด้านการจัดการ', 'bu_card5_caption': 'Rayterton Academy',
            'strengths_title': 'จุดแข็งในการแข่งขันของเรา', 'strength1': 'ปราศจากความเสี่ยง 100%', 'strength2': 'ปรับแต่งง่าย', 'strength3': 'กรรมสิทธิ์ซอฟต์แฮร์', 'strength4': 'เหมาะสมกับความต้องการของลูกค้าที่สุด', 'strength5': 'ไม่มีค่าธรรมเนียมการขอเปลี่ยนแปลง (CR) ระหว่างการบำรุงรักษา',
            'software_title': 'ซอฟต์แวร์ขายดีที่สุดของเรา', 'software_subtitle': '(จาก 20 กลุ่มซอฟต์แวร์และ 70 โมดูลซอฟต์แวร์)',
            'industries_title': 'อุตสาหกรรมที่เราให้บริการ', 'industries_subtitle': '(ข้ามภาคธุรกิจ)',
            'footer_col1_title': 'เรย์เตอร์ตัน อินเตอร์เนชั่นแนล', 'footer_col1_text': 'พันธมิตรที่เชื่อถือได้ของคุณในด้านเทคโนโลยีและนวัตกรรมตั้งแต่ปี 2003', 'footer_col2_title': 'ลิงก์ด่วน',
            'nav_about_footer': 'เกี่ยวกับเรา', 'nav_strengths_footer': 'จุดแข็ง', 'nav_software_footer': 'ซอฟต์แวร์', 'nav_industries_footer': 'อุตสาหกรรม',
            'contact_address_line1': 'เมนเต็ง สแควร์ ทาวเวอร์ เอ ชั้น 3 ห้อง AO-09',
            'contact_address_line2': 'Jl. Matraman Raya 30E, จาการ์ตาตอนกลาง',
            'footer_col3_title': 'ติดต่อเรา', 'footer_col4_title': 'ติดตามเรา', 'footer_copyright': '© 2025 เรย์เตอร์ตัน อินเตอร์เนชั่นแนล โซลูชั่น สงวนลิขสิทธิ์.'
        },
        'hi': {
            'nav_about': 'हमारे बारे में', 'nav_strengths': 'शक्तियां', 'nav_software': 'सॉफ्टवेयर', 'nav_industries': 'उद्योग', 'nav_contact': 'संपर्क करें',
            'hero_title': 'रेयर्टन इंटरनेशनल सॉल्यूशन', 'hero_subtitle': 'प्रौद्योगिकी समाधान (सर्वर, हार्डवेयर, इंटरनेट ऑफ थिंग्स, आदि..)',
            'about_title': 'हमारे बारे में', 'about_text': '2003 में स्थापित, रेयर्टन कई उद्यमों को आईटी सॉफ्टवेयर, सर्वर, हार्डवेयर उत्पाद और प्रौद्योगिकी समाधान प्रदान करता है। रेयर्टन, रेयर्टन ऐप्स सॉफ्टवेयर और रेयर्टन क्लाउड के लिए एक सॉफ्टवेयर प्रिंसिपल है। रेयर्टन इन सॉफ्टवेयरों का समर्थन करने वाली प्रौद्योगिकी, हार्डवेयर, सर्वर और बुनियादी ढांचा भी प्रदान करता है। रेयर्टन आईटी और प्रबंधन परामर्श भी प्रदान करता है।',
            'bu_title': 'हमारे व्यवसायिक इकाइयां', 'bu_card1_caption': 'रेयर्टन ऐप्स सॉफ्टवेयर (ऑन-प्रिमाइसेस और क्लाउड सॉल्यूशन)', 'bu_card2_caption': 'प्रौद्योगिकी समाधान (सर्वर, हार्डवेयर, IoT, आदि..)', 'bu_card3_caption': 'आईटी परामर्श', 'bu_card4_caption': 'प्रबंधन परामर्श', 'bu_card5_caption': 'रेयर्टन अकादमी',
            'strengths_title': 'हमारी प्रतिस्पर्धी शक्तियां', 'strength1': '100% जोखिम मुक्त', 'strength2': 'अनुकूलित करने में आसान', 'strength3': 'सॉफ्टवेयर स्वामित्व', 'strength4': 'ग्राहक आवश्यकताओं के लिए सबसे उपयुक्त', 'strength5': 'रखरखाव के दौरान कोई परिवर्तन अनुरोध (CR) शुल्क नहीं',
            'software_title': 'हमारा सबसे अधिक बिकने वाला सॉफ्टवेयर', 'software_subtitle': '(20 सॉफ्टवेयर समूह और 70 सॉफ्टवेयर मॉड्यूल से)',
            'industries_title': 'जिन उद्योगों को हम सेवा प्रदान करते हैं', 'industries_subtitle': '(क्रॉस बिजनेस सेक्टर)',
            'footer_col1_title': 'रेयर्टन इंटरनेशनल', 'footer_col1_text': '2003 से प्रौद्योगिकी और नवाचार में आपका विश्वसनीय भागीदार।', 'footer_col2_title': 'त्वरित लिंक',
            'nav_about_footer': 'हमारे बारे में', 'nav_strengths_footer': 'शक्तियां', 'nav_software_footer': 'सॉफ्टवेयर', 'nav_industries_footer': 'उद्योग',
            'contact_address_line1': 'मेंटेंग स्क्वायर टावर ए तीसरी मंजिल यूनिट एओ-09',
            'contact_address_line2': 'जेएल. मातरमण राया 30ई, सेंट्रल जकार्ता',
            'footer_col3_title': 'हमसे संपर्क करें', 'footer_col4_title': 'हमें फॉलो करें', 'footer_copyright': '© 2025 रेयर्टन इंटरनेशनल सॉल्यूशन। सर्वाधिकार सुरक्षित।'
        },
        'ko': {
            'nav_about': '회사 소개', 'nav_strengths': '강점', 'nav_software': '소프트웨어', 'nav_industries': '산업', 'nav_contact': '연락처',
            'hero_title': '레이터턴 국제 솔루션', 'hero_subtitle': '기술 솔루션 (서버, 하드웨어, 사물 인터넷 등)',
            'about_title': '회사 소개', 'about_text': '2003년에 설립된 레이터턴은 많은 기업에 IT 소프트웨어, 서버, 하드웨어 제품 및 기술 솔루션을 제공합니다. 레이터턴은 레이터턴 앱 소프트웨어 및 레이터턴 클라우드의 소프트웨어 원칙입니다. 레이터턴은 또한 이러한 소프트웨어를 지원하는 기술, 하드웨어, 서버 및 인프라를 제공합니다. 레이터턴은 IT 및 경영 컨설팅도 제공합니다.',
            'bu_title': '우리의 사업 부문', 'bu_card1_caption': '레이터턴 앱 소프트웨어 (온프레미스 및 클라우드 솔루션)', 'bu_card2_caption': '기술 솔루션 (서버, 하드웨어, IoT 등)', 'bu_card3_caption': 'IT 컨설팅', 'bu_card4_caption': '경영 컨설팅', 'bu_card5_caption': '레이터턴 아카데미',
            'strengths_title': '우리의 경쟁 강점', 'strength1': '100% 위험 부담 없음', 'strength2': '쉽게 맞춤 설정 가능', 'strength3': '소프트웨어 소유권', 'strength4': '고객 요구 사항에 최적합', 'strength5': '유지 보수 중 변경 요청 (CR) 수수료 없음',
            'software_title': '가장 많이 팔리는 소프트웨어', 'software_subtitle': '(20개 소프트웨어 그룹 및 70개 소프트웨어 모듈)',
            'industries_title': '우리가 서비스하는 산업', 'industries_subtitle': '(교차 비즈니스 부문)',
            'footer_col1_title': '레이터턴 국제', 'footer_col1_text': '2003년부터 기술 및 혁신 분야의 신뢰할 수 있는 파트너입니다.', 'footer_col2_title': '빠른 링크',
            'nav_about_footer': '회사 소개', 'nav_strengths_footer': '강점', 'nav_software_footer': '소프트웨어', 'nav_industries_footer': '산업',
            'contact_address_line1': '멘텡 스퀘어 타워 A 3층 유닛 AO-09',
            'contact_address_line2': 'Jl. Matraman Raya 30E, 중앙 자카르타',
            'footer_col3_title': '연락처', 'footer_col4_title': '팔로우하기', 'footer_copyright': '© 2025 레이터턴 국제 솔루션. 모든 권리 보유.'
        },
        'ja': {
            'nav_about': '会社概要', 'nav_strengths': '強み', 'nav_software': 'ソフトウェア', 'nav_industries': '産業', 'nav_contact': 'お問い合わせ',
            'hero_title': 'レイタートン インターナショナル ソリューション', 'hero_subtitle': 'テクノロジーソリューション（サーバー、ハードウェア、モノのインターネットなど）',
            'about_title': '会社概要', 'about_text': '2003年に設立されたレイタートンは、多くの企業にITソフトウェア、サーバー、ハードウェア製品、テクノロジーソリューションを提供しています。レイタートンは、レイタートン・アプリ・ソフトウェアおよびレイタートン・クラウドのソフトウェアプリンシパルです。レイタートンは、これらのソフトウェアをサポートするテクノロジー、ハードウェア、サーバー、インフラストラクチャも提供しています。また、ITおよび経営コンサルティングも提供しています。',
            'bu_title': '当社の事業部門', 'bu_card1_caption': 'レイタートン・アプリ・ソフトウェア（オンプレミスおよびクラウドソリューション）', 'bu_card2_caption': 'テクノロジーソリューション（サーバー、ハードウェア、IoTなど）', 'bu_card3_caption': 'ITコンサルティング', 'bu_card4_caption': '経営コンサルティング', 'bu_card5_caption': 'レイタートン・アカデミー',
            'strengths_title': '当社の競争力', 'strength1': '100%リスクフリー', 'strength2': 'カスタマイズが容易', 'strength3': 'ソフトウェア所有権', 'strength4': 'お客様の要件に最適', 'strength5': '保守中の変更要求（CR）費用なし',
            'software_title': '当社のベストセラーソフトウェア', 'software_subtitle': '（20のソフトウェアグループと70のソフトウェアモジュールから）',
            'industries_title': 'サービスを提供する産業', 'industries_subtitle': '（異業種対応）',
            'footer_col1_title': 'レイタートン インターナショナル', 'footer_col1_text': '2003年以来、テクノロジーとイノベーションにおける信頼できるパートナーです。', 'footer_col2_title': 'クイックリンク',
            'nav_about_footer': '会社概要', 'nav_strengths_footer': '強み', 'nav_software_footer': 'ソフトウェア', 'nav_industries_footer': '産業',
            'contact_address_line1': 'メンテン・スクエア・タワーA 3階 AO-09号室',
            'contact_address_line2': 'Jl. Matraman Raya 30E, 中央ジャカルタ',
            'footer_col3_title': 'お問い合わせ', 'footer_col4_title': 'フォローする', 'footer_copyright': '© 2025 レイタートン インターナショナル ソリューション. 全著作権所有.'
        },
        'vi': {
            'nav_about': 'Về chúng tôi', 'nav_strengths': 'Điểm mạnh', 'nav_software': 'Phần mềm', 'nav_industries': 'Ngành nghề', 'nav_contact': 'Liên hệ',
            'hero_title': 'Giải pháp quốc tế Rayterton', 'hero_subtitle': 'Giải pháp công nghệ (Máy chủ, Phần cứng, Internet of Things, v.v.)',
            'about_title': 'Về chúng tôi', 'about_text': 'Được thành lập vào năm 2003, Rayterton cung cấp phần mềm IT, máy chủ, sản phẩm phần cứng và giải pháp công nghệ cho nhiều doanh nghiệp. Rayterton là nhà cung cấp chính cho Phần mềm Rayterton Apps và Rayterton Cloud. Rayterton cũng cung cấp công nghệ, phần cứng, máy chủ và cơ sở hạ tầng hỗ trợ các phần mềm này. Ngoài ra, Rayterton còn cung cấp dịch vụ Tư vấn IT và Tư vấn Quản lý.',
            'bu_title': 'Các đơn vị kinh doanh của chúng tôi', 'bu_card1_caption': 'Phần mềm ứng dụng Rayterton (Giải pháp tại chỗ và đám mây)', 'bu_card2_caption': 'Giải pháp công nghệ (Máy chủ, Phần cứng, IoT, v.v.)', 'bu_card3_caption': 'Tư vấn IT', 'bu_card4_caption': 'Tư vấn quản lý', 'bu_card5_caption': 'Học viện Rayterton',
            'strengths_title': 'Điểm mạnh cạnh tranh của chúng tôi', 'strength1': '100% không rủi ro', 'strength2': 'Dễ dàng tùy chỉnh', 'strength3': 'Quyền sở hữu phần mềm', 'strength4': 'Phù hợp nhất với yêu cầu của khách hàng', 'strength5': 'Không phí yêu cầu thay đổi (CR) trong quá trình bảo trì',
            'software_title': 'Phần mềm bán chạy nhất của chúng tôi', 'software_subtitle': '(Từ 20 nhóm phần mềm và 70 mô-đun phần mềm)',
            'industries_title': 'Các ngành chúng tôi phục vụ', 'industries_subtitle': '(Đa lĩnh vực kinh doanh)',
            'footer_col1_title': 'Rayterton International', 'footer_col1_text': 'Đối tác đáng tin cậy của bạn trong công nghệ và đổi mới từ năm 2003.', 'footer_col2_title': 'Liên kết nhanh',
            'nav_about_footer': 'Về chúng tôi', 'nav_strengths_footer': 'Điểm mạnh', 'nav_software_footer': 'Phần mềm', 'nav_industries_footer': 'Ngành nghề',
            'contact_address_line1': 'Menteng Square Tower A Tầng 3 đơn vị AO-09',
            'contact_address_line2': 'Jl. Matraman Raya 30E, Trung tâm Jakarta',
            'footer_col3_title': 'Liên hệ với chúng tôi', 'footer_col4_title': 'Theo dõi chúng tôi', 'footer_copyright': '© 2025 Giải pháp quốc tế Rayterton. Đã đăng ký Bản quyền.'
        }
    };

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        localStorage.setItem('language', lang);
    };

    langSwitcher.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    const savedLanguage = localStorage.getItem('language') || 'en'; // Default to English
    langSwitcher.value = savedLanguage;
    setLanguage(savedLanguage);


// --- HERO SLIDER ---
    const slides = document.querySelectorAll('.hero-slider .slide');
    let currentSlide = 0;

    const activateSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        activateSlide(currentSlide);
    };

    // Initial activation
    activateSlide(currentSlide);

    // Set interval for auto-play (e.g., every 5 seconds)
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // --- MOBILE NAVIGATION TOGGLE ---
    const navToggle = document.querySelector('.nav-toggle'); // Get the new toggle button
    const navMenu = document.querySelector('.nav-menu'); // Get the navigation menu

    if (navToggle && navMenu) { // Ensure elements exist before adding listeners
        navToggle.addEventListener('click', () => { //
            navMenu.classList.toggle('active'); // Toggle 'active' class on menu
        });

        // Close mobile menu when a nav link is clicked
        document.querySelectorAll('.nav-menu a').forEach(item => { //
            item.addEventListener('click', () => { //
                if (navMenu.classList.contains('active')) { // Check if menu is active
                    navMenu.classList.remove('active'); // Remove 'active' class to close menu
                }
            });
        });
    }
});