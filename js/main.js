/**
 * Earth Smile — main.js
 * Interactive behaviours:
 *  1. Navbar scroll effect + mobile toggle
 *  2. Hero particle canvas (floating CO₂/heat particles)
 *  3. Hero temperature bar animation
 *  4. Point-of-No-Return SVG clock ring
 *  5. Animated stat counters (Intersection Observer)
 *  6. Impact meter bar animation (Intersection Observer)
 *  7. Contact form validation & mock submit
 *  8. Footer pledge button
 *  9. AOS initialisation
 * 10. Smooth-scroll for all anchor links
 * 11. Hero video modal
 * 12. Language switcher (EN / HI / GU)
 * 13. Eco-Friendly Bags PDF modal on page load
 */

'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const TRANSLATIONS = {
  en: {
    // Nav
    'nav.happening':  "What's Happening",
    'nav.ponr':       'Point of No Return',
    'nav.impact':     'Impact',
    'nav.numbers':    'The Numbers',
    'nav.initiative': 'Initiative',
    'nav.team':       'Our Team',
    'nav.gallery':    'Gallery',
    'nav.join':       'Join Us',

    // Hero
    'hero.badge':     '🌿 Shantigram Plastic-Free Initiative',
    'hero.title1':    'Make Earth',
    'hero.title2':    'Smile Again',
    'hero.subtitle':  'Every piece of plastic we remove is a breath our planet takes freely.<br />Join the movement to restore Shantigram — one action at a time.',
    'hero.cta1':      'Join the Initiative',
    'hero.cta2':      'See the Crisis',
    'hero.watch':     'Watch Video',
    'hero.tempLabel': 'Global Avg. Temp Rise',

    // What's Happening
    'happening.tag':         'Wake Up Call',
    'happening.title':       'What\'s <span class="accent-red">Happening</span> to Our Planet?',
    'happening.desc':        'The Earth is changing — faster than ever before. Here is what our planet looks like through decades of data.',
    'happening.videoLabel':  'Real-time: 50 years of global warming',
    'happening.videoCaption':'NASA visualization: Earth\'s temperature anomalies (1880–2023)',
    'fact1.h3': 'Rising Temperatures',
    'fact1.p':  'The last decade (2011–2020) was the warmest on record. Global average temperatures have already risen <strong>1.1°C</strong> above pre-industrial levels.',
    'fact2.h3': 'Melting Ice Caps',
    'fact2.p':  'Arctic sea ice is declining at <strong>13% per decade</strong>. At current rates, we could see an ice-free Arctic summer by 2035.',
    'fact3.h3': 'Rising Sea Levels',
    'fact3.p':  'Global sea levels are rising at <strong>3.6 mm per year</strong>. Coastal cities face existential threats within this century.',

    // Point of No Return
    'ponr.tag':           'Critical Alert',
    'ponr.title':         'The Point of <span class="accent-red">No Return</span>',
    'ponr.clockLabel':    'Threshold',
    'ponr.p':             'Scientists warn that crossing <strong>1.5°C</strong> of warming triggers irreversible feedback loops — amplifying themselves beyond human control.',
    'ponr.li1':           '<strong>Permafrost Thaw</strong> — releases stored carbon, dramatically accelerating warming',
    'ponr.li2':           '<strong>Amazon Dieback</strong> — the world\'s lungs stop absorbing CO₂',
    'ponr.li3':           '<strong>Ice-Albedo Feedback</strong> — less ice means less solar reflection means more heat',
    'ponr.li4':           '<strong>Coral Reef Collapse</strong> — marine biodiversity crashes irreversibly',
    'ponr.currentLabel':  'We are currently at',
    'ponr.currentSublabel':'and rising',

    // Impact
    'impact.tag':   'The Consequences',
    'impact.title': 'Impact of <span class="accent-orange">Global Warming</span>',
    'impact.desc':  'From melting glaciers to extinct species — the consequences are no longer predictions. They are here.',
    'impact1.h3': 'Extreme Weather',     'impact1.p': 'Hurricanes, droughts, and floods have intensified by 40% in the last two decades, displacing millions annually.',   'impact1.pct': 'Severity: 85%',
    'impact2.h3': 'Biodiversity Loss',   'impact2.p': 'Over 1 million species face extinction due to habitat destruction and rapidly changing climate conditions.',          'impact2.pct': 'Severity: 70%',
    'impact3.h3': 'Water Scarcity',      'impact3.p': 'By 2050, up to 5 billion people could face water shortages due to melting glaciers and altered rainfall patterns.',   'impact3.pct': 'Severity: 78%',
    'impact4.h3': 'Food Insecurity',     'impact4.p': 'Crop yields could decline by 25% by 2050, threatening food security for billions in developing regions.',             'impact4.pct': 'Severity: 60%',
    'impact5.h3': 'Human Health',        'impact5.p': 'Rising temperatures expand the range of malaria, dengue, and other vector-borne diseases into new regions.',          'impact5.pct': 'Severity: 65%',
    'impact6.h3': 'Coastal Cities',      'impact6.p': 'Mumbai, Miami, Jakarta — over 570 coastal cities face significant flooding risks within 30 years.',                  'impact6.pct': 'Severity: 72%',

    // Numbers
    'numbers.tag':   'Hard Facts',
    'numbers.title': 'The <span class="accent-orange">Numbers</span> Don\'t Lie',
    'stat1.label': 'CO₂ Concentration',           'stat1.ctx': 'Highest in 3 million years',
    'stat2.label': 'Plastic in Oceans Yearly',    'stat2.ctx': 'Equivalent to 1 truck/minute',
    'stat3.label': 'Trees Cut Per Year',           'stat3.ctx': 'That\'s 41 million per day',
    'stat4.label': 'Marine Life Lost Since 1970',  'stat4.ctx': 'Half of ocean life, gone',
    'stat5.label': 'To Limit Warming to 1.5°C',   'stat5.ctx': 'Window is closing fast',
    'stat6.label': 'Plastic Removed by Earth Smile','stat6.ctx': 'And counting — join us!',

    // Initiative
    'init.tag':   'Our Action Plan',
    'init.title': 'The <span class="accent-green">Initiative</span>',
    'init.title2':'The Initiative',
    'init.desc':  'Earth Smile is more than awareness — it\'s a structured, community-driven plan to make Shantigram the model for a plastic-free India.',
    'init1.h3': 'Community Awareness Drives',  'init1.p': 'Door-to-door campaigns educating residents about single-use plastic alternatives and their environmental impact.',  'init1.tag': 'Ongoing',
    'init2.h3': 'Plastic Collection Points',   'init2.p': 'Designated collection zones across Shantigram for segregated plastic waste, with verified disposal and recycling partnerships.',  'init2.tag': 'Phase 1',
    'init3.h3': 'School Green Programs',        'init3.p': 'Integrating environmental education into local schools with hands-on activities, eco-competitions, and sustainability pledges.',  'init3.tag': 'Active',
    'init4.h3': 'Tree Plantation Drives',       'init4.p': 'Planting native species across Shantigram to restore biodiversity, reduce urban heat islands, and offset local carbon emissions.',  'init4.tag': 'Phase 2',
    'init5.h3': 'Local Business Partnerships',  'init5.p': 'Partnering with vendors and businesses to transition to eco-friendly packaging and earn certified plastic-free outlet status.',  'init5.tag': 'Upcoming',
    'init6.h3': 'Zero Waste Shantigram 2027',   'init6.p': 'Our flagship goal: make Shantigram 100% plastic-free and establish it as a replicable model for communities across India.',  'init6.tag': 'Target: 2027',

    // Team
    'team.tag':   'People Behind the Planet',
    'team.title': 'Meet Our <span class="accent-green">Team</span>',
    'team.desc':  'Passionate individuals united by one mission — to give Earth a reason to smile.',
    'team1.role': 'Founder & Initiative Head',  'team1.bio': 'Visionary leader driving the Earth Smile initiative with a deep commitment to restoring Shantigram\'s environment for future generations.',
    'team2.role': 'Volunteer',                  'team2.bio': 'Dedicated volunteer contributing time and energy to ground-level activities, cleanups, and community awareness drives across Shantigram.',
    'team3.role': 'Temple Secretary',           'team3.bio': 'Bridges the initiative with the local temple community, mobilising faith-based support and participation for a cleaner, greener Shantigram.',
    'team4.name': 'Can Be You',                 'team4.role': 'Click Here to Be One',  'team4.bio': 'Join our mission — become a volunteer, partner or initiative member. Every hand that joins makes Earth smile a little more.',  'team4.btn': 'Join the Initiative →',

    // Gallery
    'gallery.tag':   'Our Journey',
    'gallery.title': 'Activity <span class="accent-green">Gallery</span>',
    'gallery.desc':  'A visual timeline of our collective action — every cleanup, every tree, every smile counts.',
    'g1.h4': 'Shantigram Riverbank Cleanup Drive',  'g1.p': '200+ volunteers collected 120 kg of plastic waste from the riverbank in a single day.',   'g1.tag': '120 kg removed',
    'g2.h4': '1000 Trees for Shantigram',            'g2.p': 'Native species planted across 5 localities with the Gujarat Forest Department.',           'g2.tag': '1,000 trees planted',
    'g3.h4': 'Green Scholars School Program',        'g3.p': 'Environmental curriculum launched in 12 schools, reaching over 3,500 students.',           'g3.tag': '12 schools reached',
    'g4.h4': 'Plastic-Free Business Pledge',         'g4.p': '85 local businesses committed to biodegradable alternatives across their operations.',      'g4.tag': '85 businesses',
    'g5.h4': 'One Year — One Ton of Plastic Removed','g5.p': 'Earth Smile crossed the 1,000 kg milestone — a celebration and a bigger vision for 2025.', 'g5.tag': '1,000+ kg milestone',  'g5.placeholder': '1-Year Milestone',

    // Contact
    'contact.tag':        'Get Involved',
    'contact.title':      'Join the <span class="accent-green">Movement</span>',
    'contact.p':          'Whether you want to volunteer, partner, or simply spread the word — every action counts. Reach out and let\'s make Shantigram smile together.',
    'contact.locLabel':   'Location',
    'contact.emailLabel': 'Email',
    'contact.followLabel':'Follow Us',
    'contact.contactUs':  'Contact Us',
    'form.nameLabel':     'Your Name',         'form.namePh':          'Aryan Kumar',
    'form.emailLabel':    'Email Address',     'form.emailPh':          'you@example.com',
    'form.interestLabel': 'I want to',         'form.interestDefault':  'Select your interest',
    'form.opt1': 'Volunteer for cleanups',     'form.opt2': 'Support / Donate',
    'form.opt3': 'Partner as a business',      'form.opt4': 'Bring program to my school',
    'form.opt5': 'Media / Press inquiry',      'form.opt6': 'Something else',
    'form.msgLabel': 'Message',                'form.msgPh': 'Tell us how you\'d like to contribute...',
    'form.submit': 'Send Message 🌿',

    // Footer
    'footer.brand':       'The initiative to make Shantigram plastic-free — and inspire the world to follow.',
    'footer.temp':        '🌡️ Today\'s CO₂: <strong>422 ppm</strong> — Let\'s bring it down.',
    'footer.sec1':        'Sections',
    'footer.sec2':        'Get Involved',
    'footer.volunteer':   'Volunteer',
    'footer.partner':     'Partner With Us',
    'footer.pledgeTitle': 'Take the Pledge',
    'footer.pledgeP':     'I pledge to reduce my plastic use and protect our planet for future generations.',
    'footer.pledgeBtn':   '🌿 I Pledge',
    'footer.pledgeCount': '1,247 people have pledged',
    'footer.copy':        '© 2024 Earth Smile Initiative. Made with 💚 for Shantigram.',
    'footer.copy2':       'Built to inspire action, not just awareness.',
  },

  // ── Hindi ─────────────────────────────────
  hi: {
    'nav.happening':  'क्या हो रहा है',
    'nav.ponr':       'वापसी का अंतिम बिंदु',
    'nav.impact':     'प्रभाव',
    'nav.numbers':    'आँकड़े',
    'nav.initiative': 'पहल',
    'nav.team':       'हमारी टीम',
    'nav.gallery':    'गैलरी',
    'nav.join':       'जुड़ें',

    'hero.badge':     '🌿 शांतिग्राम प्लास्टिक-मुक्त पहल',
    'hero.title1':    'पृथ्वी को',
    'hero.title2':    'फिर मुस्कुराएं',
    'hero.subtitle':  'हम जो भी प्लास्टिक हटाते हैं, वह हमारे ग्रह की एक सांस है।<br />शांतिग्राम को जीवंत करने के लिए इस आंदोलन से जुड़ें।',
    'hero.cta1':      'पहल से जुड़ें',
    'hero.cta2':      'संकट देखें',
    'hero.watch':     'वीडियो देखें',
    'hero.tempLabel': 'वैश्विक औसत तापमान वृद्धि',

    'happening.tag':         'जागरण की घड़ी',
    'happening.title':       'हमारे ग्रह के साथ क्या <span class="accent-red">हो रहा है?</span>',
    'happening.desc':        'पृथ्वी बदल रही है — पहले से कहीं तेज़। दशकों के आँकड़ों में देखें हमारा ग्रह कैसा दिखता है।',
    'happening.videoLabel':  '50 साल की ग्लोबल वार्मिंग',
    'happening.videoCaption':'NASA: पृथ्वी के तापमान में बदलाव (1880–2023)',
    'fact1.h3': 'बढ़ता तापमान',     'fact1.p': 'पिछला दशक (2011–2020) अब तक का सबसे गर्म रहा। वैश्विक तापमान <strong>1.1°C</strong> ऊपर जा चुका है।',
    'fact2.h3': 'पिघलती बर्फ',      'fact2.p': 'आर्कटिक बर्फ <strong>प्रति दशक 13%</strong> घट रही है। 2035 तक बर्फ-मुक्त आर्कटिक संभव।',
    'fact3.h3': 'बढ़ता समुद्र स्तर', 'fact3.p': 'समुद्र स्तर <strong>3.6 मिमी/वर्ष</strong> बढ़ रहा है। तटीय शहरों पर अस्तित्व का खतरा।',

    'ponr.tag':           'गंभीर चेतावनी',
    'ponr.title':         'वापसी का <span class="accent-red">अंतिम बिंदु</span>',
    'ponr.clockLabel':    'सीमा',
    'ponr.p':             'वैज्ञानिक चेतावनी देते हैं कि <strong>1.5°C</strong> पार करने पर अपरिवर्तनीय प्रतिक्रियाएं शुरू होती हैं।',
    'ponr.li1':           '<strong>पर्माफ्रॉस्ट पिघलना</strong> — संग्रहीत कार्बन छोड़ता है, वार्मिंग को तेज करता है',
    'ponr.li2':           '<strong>अमेज़न का विनाश</strong> — दुनिया के फेफड़े CO₂ सोखना बंद करते हैं',
    'ponr.li3':           '<strong>आइस-एल्बेडो फीडबैक</strong> — कम बर्फ, कम परावर्तन, अधिक गर्मी',
    'ponr.li4':           '<strong>प्रवाल भित्ति का पतन</strong> — समुद्री जैव विविधता अपरिवर्तनीय रूप से नष्ट',
    'ponr.currentLabel':  'हम अभी',
    'ponr.currentSublabel':'पर हैं और बढ़ रहे हैं',

    'impact.tag':   'परिणाम',
    'impact.title': '<span class="accent-orange">ग्लोबल वार्मिंग</span> का प्रभाव',
    'impact.desc':  'पिघलते ग्लेशियर से विलुप्त होती प्रजातियाँ — अब केवल भविष्यवाणी नहीं, हकीकत है।',
    'impact1.h3': 'चरम मौसम',         'impact1.p': 'तूफान, सूखा और बाढ़ पिछले दो दशकों में 40% तीव्र हुए हैं।',     'impact1.pct': 'गंभीरता: 85%',
    'impact2.h3': 'जैव विविधता हानि', 'impact2.p': '10 लाख+ प्रजातियों पर विलुप्ति का खतरा है।',                   'impact2.pct': 'गंभीरता: 70%',
    'impact3.h3': 'जल संकट',          'impact3.p': '2050 तक 5 अरब लोग जल संकट का सामना कर सकते हैं।',              'impact3.pct': 'गंभीरता: 78%',
    'impact4.h3': 'खाद्य असुरक्षा',   'impact4.p': '2050 तक फसल उत्पादन 25% तक घट सकता है।',                       'impact4.pct': 'गंभीरता: 60%',
    'impact5.h3': 'मानव स्वास्थ्य',   'impact5.p': 'मलेरिया, डेंगू जैसी बीमारियाँ नए क्षेत्रों में फैल रही हैं।', 'impact5.pct': 'गंभीरता: 65%',
    'impact6.h3': 'तटीय शहर',         'impact6.p': '30 वर्षों में 570+ तटीय शहरों पर बाढ़ का खतरा है।',            'impact6.pct': 'गंभीरता: 72%',

    'numbers.tag':   'कठोर तथ्य',
    'numbers.title': '<span class="accent-orange">आँकड़े</span> झूठ नहीं बोलते',
    'stat1.label': 'CO₂ सांद्रता',                   'stat1.ctx': '30 लाख साल में सबसे अधिक',
    'stat2.label': 'प्रति वर्ष महासागरों में प्लास्टिक','stat2.ctx': 'हर मिनट 1 ट्रक के बराबर',
    'stat3.label': 'प्रति वर्ष कटे पेड़',              'stat3.ctx': 'यानी प्रतिदिन 4.1 करोड़',
    'stat4.label': '1970 से समुद्री जीव नुकसान',       'stat4.ctx': 'आधा समुद्री जीवन, खत्म',
    'stat5.label': '1.5°C सीमित करने का समय',          'stat5.ctx': 'खिड़की बंद हो रही है',
    'stat6.label': 'अर्थ स्माइल द्वारा हटाया प्लास्टिक','stat6.ctx': 'और बढ़ रहा है — जुड़ें!',

    'init.tag':   'हमारी कार्य योजना',
    'init.title': 'The <span class="accent-green">पहल</span>',
    'init.title2':'पहल',
    'init.desc':  'अर्थ स्माइल सिर्फ जागरूकता नहीं — शांतिग्राम को प्लास्टिक-मुक्त भारत का मॉडल बनाने की सुव्यवस्थित योजना।',
    'init1.h3': 'सामुदायिक जागरूकता अभियान',  'init1.p': 'निवासियों को सिंगल-यूज़ प्लास्टिक विकल्पों के बारे में घर-घर जाकर शिक्षित करना।',  'init1.tag': 'जारी है',
    'init2.h3': 'प्लास्टिक संग्रह केंद्र',    'init2.p': 'पृथक प्लास्टिक कचरे के लिए निर्धारित संग्रह क्षेत्र, सत्यापित पुनर्चक्रण साझेदारी।',   'init2.tag': 'चरण 1',
    'init3.h3': 'स्कूल हरित कार्यक्रम',        'init3.p': 'स्थानीय स्कूलों में व्यावहारिक गतिविधियों, इको-प्रतियोगिताओं के साथ पर्यावरण शिक्षा।',  'init3.tag': 'सक्रिय',
    'init4.h3': 'वृक्षारोपण अभियान',            'init4.p': 'जैव विविधता बहाल करने और कार्बन उत्सर्जन की भरपाई के लिए देशी प्रजातियाँ लगाना।',        'init4.tag': 'चरण 2',
    'init5.h3': 'स्थानीय व्यापार साझेदारी',    'init5.p': 'व्यवसायों को पर्यावरण-अनुकूल पैकेजिंग अपनाने और प्लास्टिक-मुक्त दर्जा पाने में मदद।',    'init5.tag': 'आगामी',
    'init6.h3': 'ज़ीरो वेस्ट शांतिग्राम 2027', 'init6.p': 'शांतिग्राम को 100% प्लास्टिक-मुक्त बनाना और इसे पूरे भारत के लिए मॉडल के रूप में स्थापित करना।',  'init6.tag': 'लक्ष्य: 2027',

    'team.tag':   'ग्रह के पीछे के लोग',
    'team.title': 'हमारी <span class="accent-green">टीम</span>',
    'team.desc':  'एक मिशन से जुड़े जुनूनी व्यक्ति — पृथ्वी को मुस्कुराने का कारण देना।',
    'team1.role': 'संस्थापक और पहल प्रमुख',  'team1.bio': 'दूरदर्शी नेता जो भावी पीढ़ियों के लिए शांतिग्राम के पर्यावरण को पुनर्स्थापित करने की गहरी प्रतिबद्धता के साथ अर्थ स्माइल का नेतृत्व करते हैं।',
    'team2.role': 'स्वयंसेवक',               'team2.bio': 'समर्पित स्वयंसेवक जो शांतिग्राम में जमीनी गतिविधियों, सफाई अभियानों और सामुदायिक जागरूकता में समय और ऊर्जा लगाते हैं।',
    'team3.role': 'मंदिर सचिव',              'team3.bio': 'स्थानीय मंदिर समुदाय के साथ पहल को जोड़ते हैं और स्वच्छ, हरे शांतिग्राम के लिए आस्था-आधारित समर्थन जुटाते हैं।',
    'team4.name': 'आप हो सकते हैं',          'team4.role': 'यहाँ क्लिक करें',  'team4.bio': 'हमारे मिशन में शामिल हों — स्वयंसेवक, भागीदार या सदस्य बनें। हर हाथ जो जुड़ता है, पृथ्वी को थोड़ा और मुस्कुराता है।',  'team4.btn': 'पहल से जुड़ें →',

    'gallery.tag':   'हमारी यात्रा',
    'gallery.title': 'गतिविधि <span class="accent-green">गैलरी</span>',
    'gallery.desc':  'हमारी सामूहिक कार्रवाई की दृश्य समयरेखा — हर सफाई, हर पेड़, हर मुस्कान मायने रखती है।',
    'g1.h4': 'शांतिग्राम नदी तट सफाई अभियान',    'g1.p': '200+ स्वयंसेवकों ने एक दिन में 120 किलो प्लास्टिक इकट्ठा किया।',        'g1.tag': '120 किलो हटाया',
    'g2.h4': 'शांतिग्राम के लिए 1000 पेड़',        'g2.p': 'गुजरात वन विभाग के सहयोग से 5 इलाकों में देशी प्रजातियाँ लगाई गईं।',  'g2.tag': '1,000 पेड़ लगाए',
    'g3.h4': 'ग्रीन स्कॉलर्स स्कूल कार्यक्रम',    'g3.p': '12 स्कूलों में पर्यावरण पाठ्यक्रम, 3,500+ छात्र शामिल।',              'g3.tag': '12 स्कूल',
    'g4.h4': 'प्लास्टिक-मुक्त व्यापार संकल्प',    'g4.p': '85 व्यवसायों ने जैव-अवक्रमणीय विकल्प अपनाने का संकल्प लिया।',         'g4.tag': '85 व्यवसाय',
    'g5.h4': 'एक साल — एक टन प्लास्टिक हटाया',    'g5.p': 'अर्थ स्माइल ने 1,000 किलो का माइलस्टोन पार किया।',                    'g5.tag': '1,000+ किलो माइलस्टोन',  'g5.placeholder': '1 साल का माइलस्टोन',

    'contact.tag':        'शामिल हों',
    'contact.title':      '<span class="accent-green">आंदोलन</span> में जुड़ें',
    'contact.p':          'चाहे आप स्वयंसेवा करना चाहें, भागीदार बनना चाहें या बस शब्द फैलाना — हर कदम मायने रखता है।',
    'contact.locLabel':   'स्थान',
    'contact.emailLabel': 'ईमेल',
    'contact.followLabel':'हमें फॉलो करें',
    'contact.contactUs':  'संपर्क करें',
    'form.nameLabel':     'आपका नाम',         'form.namePh':         'अर्जुन कुमार',
    'form.emailLabel':    'ईमेल पता',         'form.emailPh':        'aap@udaharan.com',
    'form.interestLabel': 'मैं चाहता/चाहती हूं','form.interestDefault':'अपनी रुचि चुनें',
    'form.opt1': 'सफाई अभियान में स्वयंसेवा',  'form.opt2': 'समर्थन / दान',
    'form.opt3': 'व्यापार साझेदारी',            'form.opt4': 'मेरे स्कूल में कार्यक्रम',
    'form.opt5': 'मीडिया / प्रेस पूछताछ',       'form.opt6': 'कुछ और',
    'form.msgLabel': 'संदेश',                   'form.msgPh': 'बताएं आप कैसे योगदान देना चाहते हैं...',
    'form.submit': 'संदेश भेजें 🌿',

    'footer.brand':       'शांतिग्राम को प्लास्टिक-मुक्त बनाने की पहल — और दुनिया को प्रेरित करना।',
    'footer.temp':        '🌡️ आज का CO₂: <strong>422 ppm</strong> — इसे कम करें।',
    'footer.sec1':        'अनुभाग',
    'footer.sec2':        'शामिल हों',
    'footer.volunteer':   'स्वयंसेवा',
    'footer.partner':     'साझेदार बनें',
    'footer.pledgeTitle': 'संकल्प लें',
    'footer.pledgeP':     'मैं प्रतिज्ञा करता/करती हूं कि अपने प्लास्टिक उपयोग को कम करूंगा।',
    'footer.pledgeBtn':   '🌿 मैं संकल्प लेता/लेती हूं',
    'footer.pledgeCount': '1,247 लोगों ने संकल्प लिया',
    'footer.copy':        '© 2024 अर्थ स्माइल पहल। शांतिग्राम के लिए 💚 के साथ बनाया।',
    'footer.copy2':       'जागरूकता नहीं, कार्रवाई के लिए बनाया गया।',
  },

  // ── Gujarati ──────────────────────────────
  gu: {
    'nav.happening':  'શું થઈ રહ્યું છે',
    'nav.ponr':       'પાછા ન ફરવાનો મુકામ',
    'nav.impact':     'અસર',
    'nav.numbers':    'આંકડા',
    'nav.initiative': 'પહેલ',
    'nav.team':       'અમારી ટીમ',
    'nav.gallery':    'ગૅલેરી',
    'nav.join':       'જોડાઓ',

    'hero.badge':     '🌿 શાંતિગ્રામ પ્લાસ્ટિક-મુક્ત પહેલ',
    'hero.title1':    'પૃથ્વીને',
    'hero.title2':    'ફરી સ્મિત કરો',
    'hero.subtitle':  'આપણે જે પ્લાસ્ટિક દૂર કરીએ છીએ તે ગ્રહ માટે એક શ્વાસ છે।<br />શાંતિગ્રામ સ્વચ્છ કરવા આ ચળવળમાં જોડાઓ।',
    'hero.cta1':      'પહેલ સાથે જોડાઓ',
    'hero.cta2':      'સંકટ જુઓ',
    'hero.watch':     'વિડિઓ જુઓ',
    'hero.tempLabel': 'વૈશ્વિક સરેરાશ તાપમાન વૃદ્ધિ',

    'happening.tag':         'જાગૃતિ',
    'happening.title':       'આપણા ગ્રહ સાથે શું <span class="accent-red">થઈ રહ્યું છે?</span>',
    'happening.desc':        'પૃથ્વી બદલાઈ રહી છે — ઝડપથી. દાયકાઓના ડેટામાં આ ફેરફાર જુઓ.',
    'happening.videoLabel':  '50 વર્ષની ગ્લોબલ વૉર્મિંગ',
    'happening.videoCaption':'NASA: પૃથ્વીના તાપમાનમાં ફેરફાર (1880–2023)',
    'fact1.h3': 'વધતું તાપમાન',       'fact1.p': 'છેલ્લો દાયકો (2011–2020) અત્યાર સુધીનો સૌથી ગરમ. <strong>1.1°C</strong> ઉપર ગઈ ચૂક્યું.',
    'fact2.h3': 'પીગળતો બરફ',          'fact2.p': 'આર્કટિક સમુદ્રી બરફ <strong>દર દાયકે 13%</strong> ઘટી રહ્યો. 2035 સુધીમાં બરફ-મુક્ત ઉનાળો શક્ય.',
    'fact3.h3': 'વધતું દરિયાઈ સ્તર',   'fact3.p': 'સમુદ્ર સ્તર <strong>3.6 મિ.મી./વર્ષ</strong> વધે. દરિયાકાંઠાનાં શહેરો ભય હેઠળ.',

    'ponr.tag':           'ગંભીર ચેતવણી',
    'ponr.title':         'પાછા ન ફરવાનો <span class="accent-red">મુકામ</span>',
    'ponr.clockLabel':    'મર્યાદા',
    'ponr.p':             '<strong>1.5°C</strong> ઓળંગવી અટકાવી ન શકાય તેવી પ્રક્રિયાઓ શરૂ કરે.',
    'ponr.li1':           '<strong>પર્માફ્રૉસ્ટ પીગળવો</strong> — સંગ્રહિત કાર્બન છૂટો, ઉષ્ણતા ઝડપી',
    'ponr.li2':           '<strong>એમેઝૉન નાશ</strong> — ગ્રહના ફેફસાં CO₂ ગ્રહણ બંધ',
    'ponr.li3':           '<strong>આઇસ-આલ્બેડો ફીડબૅક</strong> — ઓછો બરફ, ઓછું પ્રતિબિંબ, વધુ ગરમી',
    'ponr.li4':           '<strong>કોરલ રીફ નાશ</strong> — સમુદ્રી જૈવ વિવિધ ઉલટાવી ન શકાય',
    'ponr.currentLabel':  'આપણે હાલ',
    'ponr.currentSublabel':'પર છીએ અને વધી રહ્યા',

    'impact.tag':   'પરિણામો',
    'impact.title': '<span class="accent-orange">ગ્લોબલ વૉર્મિંગ</span>ની અસર',
    'impact.desc':  'ઓગળતા હિમનદીઓ, લુપ્ત થતી પ્રજાતિઓ — હવે ભવિષ્યવાણી નહીં, સત્ય.',
    'impact1.h3': 'ભારે હવામાન',       'impact1.p': 'વાવાઝોડા, દુષ્કાળ અને પૂર બે દાયકામાં 40% તીવ્ર.',              'impact1.pct': 'ગંભીરતા: 85%',
    'impact2.h3': 'જૈવ વિવિધ હ્રાસ',  'impact2.p': '10 લાખ+ પ્રજાતિઓ લુપ્ત થવાના ભય હેઠળ.',                       'impact2.pct': 'ગંભીરતા: 70%',
    'impact3.h3': 'જળ સંકટ',           'impact3.p': '2050 સુધીમાં 5 અબજ લોકો જળ સંકટ સામે.',                       'impact3.pct': 'ગંભીરતા: 78%',
    'impact4.h3': 'ખોરાક અસુરક્ષા',   'impact4.p': '2050 સુધીમાં પાક ઉત્પાદન 25% ઘટી શકે.',                       'impact4.pct': 'ગંભીરતા: 60%',
    'impact5.h3': 'માનવ સ્વાસ્થ્ય',   'impact5.p': 'ડેન્ગ્યુ, મેલેરિયા જેવા રોગ નવા વિસ્તારોમાં ફેલાય.',         'impact5.pct': 'ગંભીરતા: 65%',
    'impact6.h3': 'દરિયાઈ શહેર',       'impact6.p': '30 વર્ષમાં 570+ શહેરો પૂરના ભારે જોખમ સામે.',                'impact6.pct': 'ગંભીરતા: 72%',

    'numbers.tag':   'સ્પષ્ટ આંકડા',
    'numbers.title': '<span class="accent-orange">આંકડા</span> જૂઠ નહીં',
    'stat1.label': 'CO₂ સ્તર',                              'stat1.ctx': '30 લાખ વર્ષોમાં સૌથી વધુ',
    'stat2.label': 'વાર્ષિક સમુદ્રી પ્લાસ્ટિક',             'stat2.ctx': 'દર મિનિટ 1 ટ્રક જેટલું',
    'stat3.label': 'વાર્ષિક કાપેલા વૃક્ષ',                  'stat3.ctx': 'એટ. 4.1 ક./દ.',
    'stat4.label': '1970 થી દ. નુ.',                         'stat4.ctx': 'અ. સ., ગ.',
    'stat5.label': '1.5°C સ. ક.',                            'stat5.ctx': 'બ. ઝ. બ.',
    'stat6.label': 'અ. સ. દ. પ.',                            'stat6.ctx': 'અ. વ. — જ.!',

    'init.tag':   'અ. ક.',
    'init.title': 'The <span class="accent-green">પ.</span>',
    'init.title2':'પ.',
    'init.desc':  'અ. સ. ફ. જ. — શ. .',
    'init1.h3': 'સ. જ. અ.',  'init1.p': 'ઘ-ઘ. .',  'init1.tag': 'ચ.',
    'init2.h3': 'પ. સ. બ.',   'init2.p': 'ઝ., ચ. .',  'init2.tag': 'ત. 1',
    'init3.h3': 'શ. ગ. ક.',   'init3.p': 'ઇ.-સ. .',  'init3.tag': 'સ.',
    'init4.h3': 'વ. અ.',       'init4.p': 'જ. વ. .',  'init4.tag': 'ત. 2',
    'init5.h3': 'સ. વ. ભ.',   'init5.p': 'વ. .',  'init5.tag': 'આ.',
    'init6.h3': 'ઝ. વ. શ. 2027',  'init6.p': 'શ. 100% .',  'init6.tag': 'ઉ.: 2027',

    'team.tag':   'ગ. પ. લ.',
    'team.title': 'અ. <span class="accent-green">ટ.</span>',
    'team.desc':  'એ. મ., અ. ઉ. મ. — પ. .',
    'team1.role': 'સ. અ. પ. વ.',  'team1.bio': 'ભ. .',
    'team2.role': 'સ.',            'team2.bio': 'ક. .',
    'team3.role': 'મ. સ.',         'team3.bio': 'ધ. .',
    'team4.name': 'આ. .',          'team4.role': 'અ. .',  'team4.bio': 'સ. .',  'team4.btn': 'પ. → ',

    'gallery.tag':   'અ. સ.',
    'gallery.title': 'પ. <span class="accent-green">ગ.</span>',
    'gallery.desc':  'અ. .',
    'g1.h4': 'શ. .',  'g1.p': '200+ .',  'g1.tag': '120 .',
    'g2.h4': 'શ. 1000 .',  'g2.p': '5 .',  'g2.tag': '1,000 .',
    'g3.h4': 'ગ. સ.',  'g3.p': '12 ., 3,500+ .',  'g3.tag': '12 .',
    'g4.h4': 'પ. .',  'g4.p': '85 .',  'g4.tag': '85 .',
    'g5.h4': '1 . 1 .',  'g5.p': '1,000 .',  'g5.tag': '1,000+.', 'g5.placeholder': '1 .',

    'contact.tag':        'ભ. લ.',
    'contact.title':      '<span class="accent-green">ચ.</span>',
    'contact.p':          'સ., ભ., .',
    'contact.locLabel':   'સ.',
    'contact.emailLabel': 'ઈ.',
    'contact.followLabel':'ફ.',
    'contact.contactUs':  'સ.',
    'form.nameLabel':     'ત. .',   'form.namePh':          '.',
    'form.emailLabel':    'ઈ.',     'form.emailPh':          'tum@dakhlo.com',
    'form.interestLabel': 'ઇ.',     'form.interestDefault':  'ઇ.',
    'form.opt1': 'ઇ.',   'form.opt2': 'ઇ.',
    'form.opt3': 'ઇ.',   'form.opt4': 'ઇ.',
    'form.opt5': 'ઇ.',   'form.opt6': 'ઇ.',
    'form.msgLabel': 'ઇ.',          'form.msgPh': 'ઇ.',
    'form.submit': 'ઇ. 🌿',

    'footer.brand':       'ઇ.',
    'footer.temp':        '🌡️ CO₂: <strong>422 ppm</strong>.',
    'footer.sec1':        'ઇ.',
    'footer.sec2':        'ઇ.',
    'footer.volunteer':   'ઇ.',
    'footer.partner':     'ઇ.',
    'footer.pledgeTitle': 'ઇ.',
    'footer.pledgeP':     'ઇ.',
    'footer.pledgeBtn':   '🌿 .',
    'footer.pledgeCount': 'ઇ.',
    'footer.copy':        '© 2024 .',
    'footer.copy2':       'ઇ.',
  },
};

let currentLang = 'en';

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // <select> options via data-i18n-opt
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.getAttribute('data-i18n-opt');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 680,
      easing: 'ease-out-cubic',
      once: true,
      offset: 56,
    });
  }

  initNavbar();
  initParticles();
  initTempBar();
  initClockRing();
  initStatCounters();
  initImpactMeters();
  initContactForm();
  initPledgeButton();
  initSmoothScroll();
  initVideoModal();
  initLangSwitcher();
  initPdfModal();
});


/* ============================================================
   2. NAVBAR — scroll shadow + mobile hamburger
   ============================================================ */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const toggle    = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (!navbar || !toggle || !navLinks) return;

  // Scroll shadow
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}


/* ============================================================
   3. HERO PARTICLE CANVAS
      Floating particles representing CO₂ and heat shimmer.
   ============================================================ */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let rafId;

  const COLORS = ['#52b788', '#f4a261', '#ccd6f6', '#e63946'];
  const COUNT  = 90;

  function resizeCanvas() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function createParticle(randomY = true) {
    return {
      x:       Math.random() * canvas.width,
      y:       randomY ? Math.random() * canvas.height : canvas.height + 10,
      radius:  Math.random() * 1.8 + 0.4,
      speedX:  (Math.random() - 0.5) * 0.35,
      speedY:  -(Math.random() * 0.55 + 0.15),
      opacity: Math.random() * 0.45 + 0.08,
      decay:   Math.random() * 0.0008 + 0.0002,
      color:   COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  }

  resizeCanvas();
  for (let i = 0; i < COUNT; i++) particles.push(createParticle(true));

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeCanvas, 120);
  }, { passive: true });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(p.opacity, 0);
      ctx.fill();

      p.x       += p.speedX;
      p.y       += p.speedY;
      p.opacity -= p.decay;

      if (p.y < -10 || p.opacity <= 0) {
        particles[i] = createParticle(false);
      }
    });

    ctx.globalAlpha = 1;
    rafId = requestAnimationFrame(animate);
  }

  animate();
}


/* ============================================================
   4. HERO TEMPERATURE BAR — animate to 98% on page load
   ============================================================ */
function initTempBar() {
  const fill = document.getElementById('tempFill');
  if (!fill) return;

  // Trigger after a short delay so the user notices the animation
  setTimeout(() => {
    fill.style.width = '98%';
  }, 800);
}


/* ============================================================
   5. POINT-OF-NO-RETURN CLOCK RING
      Animate SVG stroke-dashoffset when section scrolls into view.
   ============================================================ */
function initClockRing() {
  const progress = document.getElementById('clockProgress');
  if (!progress) return;

  const CIRCUMFERENCE = 565.49;
  // 1.48 / 1.5 = 98.67% of the way to the threshold
  const FILL_RATIO    = 1.48 / 1.5;
  const TARGET_OFFSET = CIRCUMFERENCE * (1 - FILL_RATIO); // ~7.35

  const section = progress.closest('section');
  if (!section) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          progress.style.strokeDashoffset = TARGET_OFFSET;
        }, 300);
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
}


/* ============================================================
   6. STAT COUNTERS — count up when card enters viewport
   ============================================================ */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;

  function animateCount(el) {
    const target   = parseInt(el.dataset.count, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 2000;
    const startTs  = performance.now();

    function step(now) {
      const elapsed  = now - startTs;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}


/* ============================================================
   7. IMPACT METERS — animate widths on scroll
   ============================================================ */
function initImpactMeters() {
  const fills = document.querySelectorAll('.impact-fill');
  if (!fills.length) return;

  // Reset to 0 so the CSS transition is visible
  fills.forEach(f => { f.style.width = '0%'; });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el       = entry.target;
        const targetPx = getComputedStyle(el).getPropertyValue('--fill').trim();
        el.style.width = targetPx;
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  fills.forEach(f => observer.observe(f));
}


/* ============================================================
   8. CONTACT FORM — client-side validation + mock submit
   ============================================================ */
function initContactForm() {
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = '';

    const name     = form.name.value.trim();
    const email    = form.email.value.trim();
    const interest = form.interest.value;
    const message  = form.message.value.trim();

    // Validate
    if (!name) {
      showStatus('Please enter your name.', 'error');
      form.name.focus();
      return;
    }
    if (!EMAIL_RE.test(email)) {
      showStatus('Please enter a valid email address.', 'error');
      form.email.focus();
      return;
    }
    if (!interest) {
      showStatus('Please select what you\'d like to do.', 'error');
      form.interest.focus();
      return;
    }
    if (!message) {
      showStatus('Please write a short message.', 'error');
      form.message.focus();
      return;
    }

    // Simulate async submission
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    setTimeout(() => {
      showStatus('🌿 Thank you! We\'ll be in touch soon.', 'success');
      form.reset();
      submitBtn.textContent = 'Send Message 🌿';
      submitBtn.disabled = false;
    }, 1400);
  });

  function showStatus(msg, type) {
    status.textContent = msg;
    status.style.color = type === 'error' ? 'var(--crisis-red)' : 'var(--green-light)';
  }
}


/* ============================================================
   9. PLEDGE BUTTON
   ============================================================ */
function initPledgeButton() {
  const btn   = document.getElementById('pledgeBtn');
  const count = document.getElementById('pledgeCount');
  if (!btn || !count) return;

  let pledged = false;
  let num     = 1247;

  btn.addEventListener('click', () => {
    if (pledged) return;
    pledged = true;
    num++;
    count.textContent = num.toLocaleString('en-IN') + ' people have pledged';
    btn.textContent   = '💚 Pledge Taken!';
    btn.style.cssText += ';background:rgba(82,183,136,0.2);border-color:#52b788;color:#52b788;';
    btn.setAttribute('aria-pressed', 'true');
  });
}


/* ============================================================
   12. LANGUAGE SWITCHER
   ============================================================ */
function initLangSwitcher() {
  const switcher  = document.getElementById('langSwitcher');
  const btn       = document.getElementById('langBtn');
  const dropdown  = document.getElementById('langDropdown');
  const labelEl   = document.getElementById('langCurrent');
  if (!switcher || !btn || !dropdown) return;

  const LABELS = { en: 'EN', hi: 'हि', gu: 'ગુ' };

  function openDropdown() {
    switcher.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    switcher.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  function selectLang(lang) {
    // Update aria-selected
    dropdown.querySelectorAll('li').forEach(li => {
      li.setAttribute('aria-selected', li.dataset.lang === lang ? 'true' : 'false');
    });
    // Update button label
    labelEl.textContent = LABELS[lang] || 'EN';
    // Apply translations
    applyTranslations(lang);
    closeDropdown();
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    switcher.classList.contains('open') ? closeDropdown() : openDropdown();
  });

  dropdown.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => selectLang(li.dataset.lang));
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!switcher.contains(e.target)) closeDropdown();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown();
  });
}


/* ============================================================
   11. HERO VIDEO MODAL
       Opens the hero video with sound + controls in a popup.
   ============================================================ */
function initVideoModal() {
  const playBtn  = document.getElementById('heroPlayBtn');
  const modal    = document.getElementById('videoModal');
  const backdrop = document.getElementById('videoModalBackdrop');
  const closeBtn = document.getElementById('videoModalClose');
  const iframe   = document.getElementById('videoModalIframe');
  if (!playBtn || !modal || !iframe) return;

  const VIDEO_SRC = 'https://www.youtube.com/embed/p7LDk4D3Q3U?autoplay=1&rel=0&modestbranding=1';

  function openModal() {
    iframe.src = VIDEO_SRC;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
    iframe.src = '';           // stops playback
    document.body.style.overflow = '';
    playBtn.focus();
  }

  playBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
  });
}


/* ============================================================
   10. SMOOTH SCROLL for all #anchor links
       Offsets by navbar height so headings aren't hidden.
   ============================================================ */
function initSmoothScroll() {
  const navbar = document.getElementById('navbar');

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href   = anchor.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const offset = navbar ? navbar.offsetHeight : 0;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   13. ECO-FRIENDLY BAGS PDF MODAL
   ============================================================ */
function initPdfModal() {
  const overlay = document.getElementById('pdfModalOverlay');
  const closeBtn = document.getElementById('pdfModalClose');
  const dismissBtn = document.getElementById('pdfModalDismiss');

  if (!overlay) return;

  function closeModal() {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Show after a short delay so the page paints first
  setTimeout(() => {
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }, 800);

  closeBtn.addEventListener('click', closeModal);
  dismissBtn.addEventListener('click', closeModal);

  // Close on backdrop click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      closeModal();
    }
  });
}
