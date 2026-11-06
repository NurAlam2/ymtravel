/* YM Travel & Services - Main JS (Bootstrap 5 + Swiper.js) */
const T = {
  "en": {
    "n1": "Services",
    "n2": "Why us",
    "n3": "Contact",
    "d": "Discover how we can simplify your journey",
    "h": "Your gateway to China and the world",
    "s": "Travel, business and international logistics, from Douala, Cameroon.",
    "wa": "Chat on WhatsApp",
    "loginBtn": "Login",
    "loginRegNav": "Login / Register",
    "cpBtn": "Client Portal",
    "applyBtn": "Apply / Track Visa",
    "startVisaPortal": "Apply in Client Portal",
    "viewAllNews": "View All News Page",
    "addDailyBtn": "Add Daily Poster / Video",
    "backHome": "Back to Homepage",
    "backNews": "Back to All News",
    "needHelpTitle": "Need assistance with this procedure?",
    "needHelpDesc": "Our Douala team guides you step-by-step for visas, admissions, scholarships, or medical travel.",
    "relatedNews": "Related Publications",
    "authPageTitle": "Client Account — Login, Register & Recovery",
    "authPageSub": "Access your YM Travel & Services account or create a new profile to manage your visa procedure.",
    "portalTitle": "Client Portal & Visa Dashboard",
    "portalSub": "Select your visa category, check required documents, complete your form, upload files, and track status.",
    "loginTab": "Login",
    "regTab": "Create Account",
    "recTab": "Recover",
    "welcomeBack": "Welcome back",
    "loginHint": "Enter your email and password to open your Client Dashboard.",
    "pwLabel": "Password",
    "createAccTitle": "Create Customer Account",
    "createAccSub": "Register to select your visa category, upload documents, and track your application.",
    "prefVisa": "Interested Visa Category",
    "recTitle": "Recover Your Account",
    "recSub": "Experiencing login issues? Enter your registered Email or WhatsApp number to reset your access.",
    "sendRecBtn": "Send Recovery Instructions",
    "pNavOverview": "Status & Updates",
    "pNavReq": "Visa & Required Docs",
    "pNavApp": "Application Form",
    "pNavDocs": "Upload Documents",
    "pNavSettings": "Profile Settings",
    "officeHoursTitle": "🕒 Office Hours",
    "officeHoursText": "Monday – Friday: 08:30 – 18:00 | Saturday: 09:00 – 14:00 (Douala Local Time)",
    "nSub": "Articles, daily posters, and video briefings on Visas, Study in China, Scholarships, and Medical Travel.",
    "st": "Our Services",
    "si": "YM Travel & Services assists individuals, students, entrepreneurs, traders and partner agencies with international travel, visas, business services and logistics between Cameroon, China and other destinations.",
    "wt": "Why choose YM Travel & Services?",
    "wp": "Our goal is to simplify your international procedures through a local point of contact, personalized assistance, and a network of professional partners. Whether you are planning a business trip, a tourist stay, a study project in China, or an import operation, we support you at every stage according to your needs.",
    "tag": "YM Travel & Services — Your gateway to China and the world.",
    "ct": "Contact us",
    "ad": "Bonapriso, Carrefour Hôtel de l’Air, Douala, Cameroon",
    "ft": "Start your procedure",
    "nm": "Medical",
    "ph": "Phone / WhatsApp",
    "em": "Email",
    "sv": "Service",
    "ms": "Message",
    "go": "Send on WhatsApp",
    "ml": "Send by email",
    "nt": "After sending, share your required documents in the WhatsApp chat or by email.",
    "hi": "Hello YM Travel & Services, I would like to start a procedure.",
    "hi2": "Hello, I’m interested in:",
    "wb": "Chat on WhatsApp",
    "wc": "Direct contact",
    "wg": "Hello! 👋 What do you need help with?",
    "mo": "Learn more",
    "ab": "Ask about this",
    "sn": "Start now on WhatsApp",
    "hw": "How it works",
    "nv": "Visas",
    "nu": "Study",
    "nk": "Scholarships",
    "nn": "News",
    "rd": "Ask us",
    "vt": "Chinese visa categories",
    "vi": "Choose the visa that matches your purpose. Click Learn More or Checklist to see the exact documents to provide.",
    "V": [
      [
        "M-3M",
        "Business Visa (3 Months, Single)",
        "Passport (6+ months), CNI/residence card, 4×4 cm photo (white background).",
        "M3"
      ],
      [
        "M-6M",
        "Business Visa (6 Months, Double)",
        "Passport, CNI/residence card, 4×4 cm photo, previous Chinese visa & stamps if available.",
        "M6"
      ],
      [
        "M-1Y",
        "Business Visa (1 Year, Multiple)",
        "Passport, CNI/residence card, 4×4 cm photo, previous Chinese visa & entry/exit stamps.",
        "M12"
      ],
      [
        "L",
        "Tourist Visa",
        "Passport, CNI or residence card, passport-size photo, and birth certificate.",
        "L"
      ],
      [
        "X",
        "Student Visa — Studies in China",
        "Passport, CNI, photo, diplomas, transcripts, criminal record, birth certificate & sponsor ID.",
        "X"
      ],
      [
        "S2",
        "Medical Visa",
        "To find out the required documents and receive personalized assistance, contact us on WhatsApp.",
        "S2"
      ]
    ],
    "ut": "Study in China",
    "ui": "We help students find a university in China, prepare the application file and organize the trip.",
    "U": [
      [
        "🏛️",
        "University admissions",
        "Assistance with admissions at universities in China."
      ],
      [
        "📁",
        "Application files",
        "Support to prepare your complete application file."
      ],
      [
        "🛂",
        "Visa & flights",
        "Student visa procedure and flight reservations."
      ]
    ],
    "us": "How to apply",
    "P": [
      [
        "Share your profile",
        "Tell us your level of study, field and country."
      ],
      [
        "Choose your programs",
        "We help you shortlist suitable universities."
      ],
      [
        "Prepare your file",
        "We guide you on the documents to gather."
      ],
      [
        "Apply and wait",
        "Your file is submitted and you await the admission result."
      ],
      [
        "Visa and departure",
        "Student visa, flight and travel planning."
      ]
    ],
    "kt": "Scholarships",
    "ki": "Scholarships can make studying in China more affordable. Opportunities and dates change often, so contact us for the latest.",
    "K": [
      [
        "Chinese Government Scholarship",
        "Offered by the Chinese government (CSC) to international students."
      ],
      [
        "Provincial and city scholarships",
        "Offered by regional governments to students joining local universities."
      ],
      [
        "University scholarships",
        "Offered directly by universities to attract international students."
      ]
    ],
    "ke": "General eligibility",
    "kl": [
      "Non-Chinese citizen in good health",
      "Academic level required by the program",
      "Language level required by the program",
      "Complete application file"
    ],
    "kd": "Deadline",
    "kv": "varies by program — contact us for current dates",
    "mt": "Medical travel",
    "mi": "Organizing a medical trip to China takes planning. We coordinate the travel side so you can focus on your health.",
    "M": [
      [
        "🛂",
        "Medical S2 visa",
        "Assistance with your Medical S2 visa procedure."
      ],
      [
        "✈️",
        "Flight reservations",
        "Booking your flights to China."
      ],
      [
        "🗺️",
        "Travel planning",
        "Help organizing and planning the whole trip."
      ],
      [
        "💳",
        "Payments in China",
        "Cash, Orange Money, MTN Money, WeChat, Alipay & Bank."
      ]
    ],
    "mn": "YM Travel & Services is a travel agency, not a medical provider. Please consult your doctor and the receiving hospital for medical decisions.",
    "mp": "Read medical travel publications",
    "nt2": "News & Publications",
    "F": [
      "All",
      "Visas",
      "Study in China",
      "Scholarships",
      "Medical Travel"
    ],
    "A": [
      {
        "id": 101,
        "cat": 1,
        "date": "Daily Poster 🖼️",
        "type": "Required Papers",
        "img": "https://placehold.co/800x480/1b4fb8/ffffff?text=Required+Documents+Chinese+Visas",
        "title": "Official Required Documents for Chinese Visas (Business, Tourist, Student & Medical)",
        "excerpt": "Check the exact papers required for 3-Month, 6-Month, 1-Year Business Visas, Tourist Visas, and Studies in China.",
        "body": "<p class=\"lead fw-semibold\">Here is the official YM Travel & Services checklist of documents to provide for your visa procedure:</p>\n                   <h5>1. Business Visa — 3 months, single entry</h5>\n                   <ul><li>Passport valid for at least 6 months.</li><li>National identity card (CNI) or residence card.</li><li>Passport-size photo, 4 × 4 cm, on a white background.</li></ul>\n                   <h5>2. Business Visa — 6 months (double entry) & 1 year (multiple-entry)</h5>\n                   <ul><li>Passport & National identity card (CNI) or residence card.</li><li>Passport-size photo, 4 × 4 cm.</li><li>Previous Chinese visa & Chinese entry/exit stamps in the passport, if available.</li></ul>\n                   <h5>3. Tourist Visa</h5>\n                   <ul><li>Passport, National identity card (CNI) or residence card, Passport-size photo, and Birth certificate.</li></ul>\n                   <h5>4. Student Visa — Studies in China</h5>\n                   <ul><li>Passport, CNI, Passport-size photo, Diploma(s) obtained, Academic transcripts, English test (optional), Criminal record certificate, Birth certificate, Guarantor/sponsor's ID (CNI or passport) and occupation.</li></ul>\n                   <h5>5. Accepted Payment Methods</h5>\n                   <p><strong>Cash, Orange Money, MTN Money, WeChat, Alipay, and Bank</strong> are all accepted.</p>"
      },
      {
        "id": 102,
        "cat": 1,
        "date": "Video Briefing 🎥",
        "type": "Video Briefing 🎥",
        "img": "https://placehold.co/800x480/f26a1b/ffffff?text=Canton+Fair+Business+Visa",
        "hasVideo": true,
        "title": "Preparing for the Canton Fair in Guangzhou from Cameroon",
        "excerpt": "How to prepare your 3-month, 6-month, or 1-year Business Visa file and set up WeChat/Alipay payments.",
        "body": "<p class=\"lead fw-semibold\">Every spring and autumn, traders and business owners from Cameroon travel to Guangzhou for the China Import and Export Fair (Canton Fair).</p>\n                   <p>Bring your Passport (valid at least 6 months), CNI/residence card, and 4 × 4 cm white-background photo. Payments can be made via Cash, Orange Money, MTN Money, WeChat, Alipay, or Bank.</p>"
      },
      {
        "id": 103,
        "cat": 2,
        "date": "Student Guide",
        "type": "Student Checklist",
        "img": "https://placehold.co/800x480/12275a/ffffff?text=Study+in+China+Required+Papers",
        "title": "Studying in China: Complete List of Required Documents",
        "excerpt": "Passport, CNI, diplomas, academic transcripts, criminal record, birth certificate, and guarantor documents.",
        "body": "<p class=\"lead fw-semibold\">To apply for your Student Visa (Studies in China), please prepare the following documents:</p>\n                   <ul>\n                     <li>Passport & National identity card (CNI).</li>\n                     <li>Passport-size photo.</li>\n                     <li>Diploma(s) obtained & Academic transcripts.</li>\n                     <li>English test (optional, depending on the program and institution).</li>\n                     <li>Criminal record certificate & Birth certificate.</li>\n                     <li>Guarantor or sponsor's identity document (CNI or passport) & occupation.</li>\n                   </ul>"
      },
      {
        "id": 104,
        "cat": 2,
        "date": "Daily Video 🎥",
        "type": "Video Guide 🎥",
        "img": "https://placehold.co/800x480/2a7be8/ffffff?text=Student+Life+in+China",
        "hasVideo": true,
        "title": "Campus Life, Accommodation & Easy Payments (Orange/MTN/Alipay)",
        "excerpt": "What Cameroonian students need to know about university dormitories, residence permits, and Alipay/WeChat Pay.",
        "body": "<p class=\"lead fw-semibold\">Moving to China for university is an exciting milestone. YM Travel supports you with admissions, visa papers, and currency top-ups.</p>"
      },
      {
        "id": 105,
        "cat": 3,
        "date": "Daily Poster 🖼️",
        "type": "Scholarship Alert",
        "img": "https://placehold.co/800x480/d62718/ffffff?text=CSC+%26+University+Scholarships",
        "title": "Scholarships in China: Prepare Your Transcripts & Diplomas Early",
        "excerpt": "Scholarship files need complete documents and must respect strict deadlines. Contact us for current opportunities.",
        "body": "<p class=\"lead fw-semibold\">Chinese Government (CSC), Provincial, and University scholarships help cover tuition, dormitory, and living stipends.</p>"
      },
      {
        "id": 106,
        "cat": 4,
        "date": "Medical Update",
        "type": "Medical Travel",
        "img": "https://placehold.co/800x480/0b3d91/ffffff?text=Medical+Visa+Personalized+Help",
        "title": "Medical Visa for China: Personalized Assistance on WhatsApp",
        "excerpt": "To find out the required documents for a Medical Visa and receive personalized assistance, contact us on WhatsApp.",
        "body": "<p class=\"lead fw-semibold\">Medical travel requires tailored coordination based on the receiving hospital in China.</p>\n                   <p>To find out the exact required documents and receive personalized assistance for your Medical Visa, please contact our Douala team directly on WhatsApp.</p>"
      }
    ],
    "H": [
      [
        "Contact us",
        "Reach us on WhatsApp, by email or through the online form and tell us about your project."
      ],
      [
        "Send your documents",
        "Provide your Passport, CNI, 4×4 cm photo and category papers via the Client Portal or WhatsApp."
      ],
      [
        "We handle the rest",
        "Pay easily via Cash, Orange Money, MTN Money, WeChat, Alipay, or Bank while we track your file."
      ]
    ],
    "I": [
      "Required Papers: Passport (valid 6+ months), CNI or residence card, 4×4 cm photo (white background), plus previous visa/stamps (for 6M/1Y), Birth Certificate (Tourist), or Diplomas/Transcripts/Sponsor ID (Student).",
      "Reserved for partner agencies: complete invitation files for tourist and company trips to China, and invitation letters for Turkey.",
      "We coordinate your international transport, vehicle imports and customs clearance, with shipment tracking and licensed partners.",
      "Accepted Payment Methods: Cash, Orange Money, MTN Money, WeChat, Alipay, and Bank transfer are all available.",
      "Required Papers for Studies in China: Passport, CNI, Photo, Diploma(s), Academic transcripts, English test (optional), Criminal record, Birth certificate, and Guarantor ID & occupation."
    ],
    "S": [
      [
        "Chinese Visas (Business, Tourist, Student, Medical)",
        [
          "Business 3M Single: Passport (6m+), CNI/Residence card, 4×4cm white bg photo",
          "Business 6M Double & 1Y Multiple: + Previous Chinese visa & entry/exit stamps",
          "Tourist Visa: Passport, CNI/Residence card, Photo & Birth certificate",
          "Medical Visa: Contact us on WhatsApp for personalized document assistance"
        ]
      ],
      [
        "Invitation Letters for China — Agencies only",
        [
          "Tourist letters: business license, embassy email, letter, itinerary, hotel and flight booking",
          "Company letters with complete company documentation",
          "Invitation letters for Turkey"
        ]
      ],
      [
        "Supply Chain, Import-Export & Customs",
        [
          "International transport and logistics coordination",
          "Purchase and import of cars, trucks and commercial vehicles",
          "Customs procedures and shipment tracking",
          "Coordination with licensed logistics partners"
        ]
      ],
      [
        "Payments & Top-Ups (Cash, Mobile & Bank)",
        [
          "Cash, Orange Money & MTN Money accepted",
          "WeChat Pay & Alipay top-ups",
          "Bank account transfer & top-up services"
        ]
      ],
      [
        "Student Visa — Studies in China",
        [
          "Passport, CNI & Passport-size photo",
          "Diploma(s) obtained, Academic transcripts & optional English test",
          "Criminal record certificate & Birth certificate",
          "Guarantor/sponsor ID (CNI or passport) & occupation"
        ]
      ]
    ]
  },
  "fr": {
    "n1": "Services",
    "n2": "Pourquoi nous",
    "n3": "Contact",
    "d": "Découvrez comment simplifier vos démarches",
    "h": "Votre passerelle vers la Chine et le monde",
    "s": "Voyages, affaires et logistique internationale, depuis Douala, Cameroun.",
    "wa": "Écrire sur WhatsApp",
    "loginBtn": "Connexion",
    "loginRegNav": "Connexion / Inscription",
    "cpBtn": "Portail Client",
    "applyBtn": "Postuler / Suivi Visa",
    "startVisaPortal": "Demander un Visa (Portail)",
    "viewAllNews": "Voir toutes les actualités",
    "addDailyBtn": "Ajouter Affiche / Vidéo",
    "backHome": "Retour à l’accueil",
    "backNews": "Retour aux actualités",
    "needHelpTitle": "Besoin d’aide pour cette démarche ?",
    "needHelpDesc": "Notre équipe à Douala vous accompagne étape par étape pour vos visas, admissions, bourses ou voyages médicaux.",
    "relatedNews": "Publications similaires",
    "authPageTitle": "Compte Client — Connexion, Inscription & Récupération",
    "authPageSub": "Accédez à votre espace YM Travel & Services ou créez un compte pour suivre votre demande de visa.",
    "portalTitle": "Portail Client & Tableau de Bord Visa",
    "portalSub": "Choisissez votre catégorie de visa, consultez les pièces requises, remplissez le formulaire, téléversez vos documents et suivez votre dossier.",
    "loginTab": "Connexion",
    "regTab": "Créer un compte",
    "recTab": "Récupérer",
    "welcomeBack": "Bon retour",
    "loginHint": "Entrez vos identifiants pour accéder directement au Tableau de Bord Client.",
    "pwLabel": "Mot de passe",
    "createAccTitle": "Créer un compte client",
    "createAccSub": "Inscrivez-vous pour sélectionner votre visa, envoyer vos pièces et suivre votre dossier.",
    "prefVisa": "Catégorie de visa souhaitée",
    "recTitle": "Récupération de compte",
    "recSub": "Problème de connexion ? Entrez votre e-mail ou numéro WhatsApp pour réinitialiser votre accès.",
    "sendRecBtn": "Envoyer les instructions",
    "pNavOverview": "Statut & Mises à jour",
    "pNavReq": "Visas & Pièces requises",
    "pNavApp": "Formulaire de demande",
    "pNavDocs": "Téléverser mes documents",
    "pNavSettings": "Paramètres du profil",
    "officeHoursTitle": "🕒 Horaires d’ouverture",
    "officeHoursText": "Lundi – Vendredi : 08h30 – 18h00 | Samedi : 09h00 – 14h00 (Heure de Douala)",
    "nSub": "Articles, affiches quotidiennes et vidéos sur les Visas, Études en Chine, Bourses et Voyages médicaux.",
    "st": "Nos Services",
    "si": "YM Travel & Services accompagne particuliers, étudiants, entrepreneurs, commerçants et agences partenaires dans leurs voyages internationaux, visas, services aux entreprises et logistique entre le Cameroun, la Chine et d’autres destinations.",
    "wt": "Pourquoi choisir YM Travel & Services ?",
    "wp": "Notre objectif est de faciliter vos démarches internationales grâce à un interlocuteur de proximité, une assistance personnalisée et un réseau de partenaires professionnels. Que vous prépariez un voyage d’affaires, un séjour touristique, un projet d’études en Chine ou une opération d’importation, nous vous accompagnons à chaque étape selon vos besoins.",
    "tag": "YM Travel & Services — Votre passerelle vers la Chine et le monde.",
    "ct": "Contactez-nous",
    "ad": "Bonapriso, Carrefour Hôtel de l’Air, Douala, Cameroun",
    "ft": "Commencez votre démarche",
    "nm": "Médical",
    "ph": "Téléphone / WhatsApp",
    "em": "E-mail",
    "sv": "Service",
    "ms": "Message",
    "go": "Envoyer sur WhatsApp",
    "ml": "Envoyer par e-mail",
    "nt": "Après l’envoi, partagez les documents requis sur WhatsApp ou par e-mail.",
    "hi": "Bonjour YM Travel & Services, je souhaite commencer une démarche.",
    "hi2": "Bonjour, je suis intéressé(e) par :",
    "wb": "Écrivez-nous sur WhatsApp",
    "wc": "Contact direct",
    "wg": "Bonjour ! 👋 De quoi avez-vous besoin ?",
    "mo": "En savoir plus",
    "ab": "Se renseigner",
    "sn": "Commencer sur WhatsApp",
    "hw": "Comment ça marche",
    "nv": "Visas",
    "nu": "Études",
    "nk": "Bourses",
    "nn": "Actualités",
    "rd": "Nous contacter",
    "vt": "Catégories de visas & documents requis",
    "vi": "Choisissez le visa qui correspond à votre projet et consultez la liste exacte des pièces à fournir.",
    "V": [
      [
        "M-3M",
        "Visa d’affaires (3 mois, 1 entrée)",
        "Passeport (valide 6+ mois), CNI/carte de séjour, photo 4×4 cm fond blanc.",
        "M3"
      ],
      [
        "M-6M",
        "Visa d’affaires (6 mois, 2 entrées)",
        "Passeport, CNI/séjour, photo 4×4 cm, ancien visa chinois et cachets d’entrée/sortie.",
        "M6"
      ],
      [
        "M-1A",
        "Visa d’affaires (1 an, entrées multiples)",
        "Passeport, CNI/séjour, photo 4×4 cm, ancien visa chinois et cachets d’entrée/sortie.",
        "M12"
      ],
      [
        "L",
        "Visa touristique",
        "Passeport, CNI ou carte de séjour, photo format passeport et acte de naissance.",
        "L"
      ],
      [
        "X",
        "Visa étudiant — Études en Chine",
        "Passeport, CNI, photo, diplômes, relevés, casier judiciaire, acte de naissance & garant.",
        "X"
      ],
      [
        "S2",
        "Visa médical",
        "Pour connaître les documents requis et bénéficier d’un accompagnement personnalisé, contactez-nous sur WhatsApp.",
        "S2"
      ]
    ],
    "ut": "Étudier en Chine",
    "ui": "Nous aidons les étudiants à trouver une université en Chine, à préparer leur dossier et à organiser leur voyage.",
    "U": [
      [
        "🏛️",
        "Admissions universitaires",
        "Assistance aux admissions dans les universités chinoises."
      ],
      [
        "📁",
        "Dossiers de candidature",
        "Accompagnement pour préparer votre dossier complet."
      ],
      [
        "🛂",
        "Visa et billets d’avion",
        "Démarche de visa étudiant et réservation de billets."
      ]
    ],
    "us": "Comment postuler",
    "P": [
      [
        "Partagez votre profil",
        "Indiquez-nous votre niveau, votre domaine et votre pays."
      ],
      [
        "Choisissez vos programmes",
        "Nous vous aidons à présélectionner des universités adaptées."
      ],
      [
        "Préparez votre dossier",
        "Nous vous guidons sur les documents à réunir."
      ],
      [
        "Postulez et patientez",
        "Votre dossier est déposé et vous attendez la réponse d’admission."
      ],
      [
        "Visa et départ",
        "Visa étudiant, billet d’avion et organisation du voyage."
      ]
    ],
    "kt": "Bourses d’études",
    "ki": "Les bourses peuvent rendre les études en Chine plus accessibles. Les opportunités et les dates changent souvent : contactez-nous pour les dernières informations.",
    "K": [
      [
        "Bourse du gouvernement chinois",
        "Proposée par le gouvernement chinois (CSC) aux étudiants internationaux."
      ],
      [
        "Bourses provinciales et municipales",
        "Proposées par les gouvernements régionaux aux étudiants des universités locales."
      ],
      [
        "Bourses des universités",
        "Proposées directement par les universités pour attirer des étudiants internationaux."
      ]
    ],
    "ke": "Conditions générales d’éligibilité",
    "kl": [
      "Être de nationalité non chinoise et en bonne santé",
      "Avoir le niveau d’études exigé par le programme",
      "Avoir le niveau de langue exigé par le programme",
      "Constituer un dossier de candidature complet"
    ],
    "kd": "Date limite",
    "kv": "variable selon le programme — contactez-nous pour les dates en cours",
    "mt": "Voyage médical",
    "mi": "Organiser un voyage médical en Chine demande de la préparation. Nous coordonnons la partie voyage pour que vous puissiez vous concentrer sur votre santé.",
    "M": [
      [
        "🛂",
        "Visa médical S2",
        "Assistance personnalisée sur WhatsApp pour votre visa médical."
      ],
      [
        "✈️",
        "Billets d’avion",
        "Réservation de vos vols vers la Chine."
      ],
      [
        "🗺️",
        "Organisation du voyage",
        "Aide à l’organisation et à la planification de tout le séjour."
      ],
      [
        "💳",
        "Moyens de paiement",
        "Espèces (Cash), Orange Money, MTN Money, WeChat, Alipay & Banque."
      ]
    ],
    "mn": "YM Travel & Services est une agence de voyage et non un prestataire médical. Consultez votre médecin et l’hôpital d’accueil pour toute décision médicale.",
    "mp": "Lire les publications de voyage médical",
    "nt2": "Actualités et publications",
    "F": [
      "Tout",
      "Visas",
      "Études en Chine",
      "Bourses",
      "Voyage médical"
    ],
    "A": [
      {
        "id": 101,
        "cat": 1,
        "date": "Affiche du jour 🖼️",
        "type": "Documents Requis",
        "img": "https://placehold.co/800x480/1b4fb8/ffffff?text=Documents+Requis+Visas+Chine",
        "title": "Liste officielle des documents requis pour les Visas Chinois",
        "excerpt": "Découvrez les pièces à fournir pour les visas d’affaires (3 mois, 6 mois, 1 an), tourisme, études et médical.",
        "body": "<p class=\"lead fw-semibold\">Voici la liste officielle des documents à fournir chez YM Travel & Services :</p>\n                   <h5>1. Visa d'affaires (3 mois, 6 mois, 1 an)</h5>\n                   <ul><li>Passeport (valide au moins 6 mois), CNI ou carte de séjour, Photo 4×4 cm sur fond blanc (+ ancien visa et cachets pour 6 mois et 1 an).</li></ul>\n                   <h5>2. Visa Touristique & Visa Étudiant</h5>\n                   <ul><li>Tourisme : Passeport, CNI/séjour, photo, acte de naissance.</li><li>Étudiant : + Diplômes, relevés de notes, casier judiciaire, CNI/passeport et profession du garant.</li></ul>\n                   <h5>3. Moyens de paiement acceptés</h5>\n                   <p><strong>Cash, Orange Money, MTN Money, WeChat, Alipay et Banque</strong>.</p>"
      },
      {
        "id": 102,
        "cat": 1,
        "date": "Vidéo 🎥",
        "type": "Vidéo 🎥",
        "img": "https://placehold.co/800x480/f26a1b/ffffff?text=Foire+de+Canton+Visa+M",
        "hasVideo": true,
        "title": "Préparer la Foire de Canton à Guangzhou depuis le Cameroun",
        "excerpt": "Documents requis pour votre visa d’affaires et paiements via Orange Money, MTN Money, WeChat ou Alipay.",
        "body": "<p class=\"lead fw-semibold\">Chaque saison, nous accompagnons les entrepreneurs camerounais vers Guangzhou et Yiwu.</p>"
      },
      {
        "id": 103,
        "cat": 2,
        "date": "Guide Étudiant",
        "type": "Dossier Étudiant",
        "img": "https://placehold.co/800x480/12275a/ffffff?text=Etudier+en+Chine",
        "title": "Étudier en Chine : tous les documents à fournir",
        "excerpt": "Passeport, CNI, photo, diplômes, relevés, casier judiciaire, acte de naissance et justificatifs du garant.",
        "body": "<p class=\"lead fw-semibold\">Nous vous guidons de la sélection du programme jusqu'à l'obtention du visa étudiant.</p>"
      },
      {
        "id": 104,
        "cat": 2,
        "date": "Vidéo 🎥",
        "type": "Vidéo 🎥",
        "img": "https://placehold.co/800x480/2a7be8/ffffff?text=Vie+Etudiante+en+Chine",
        "hasVideo": true,
        "title": "Vie sur le campus, logement et paiements mobiles en Chine",
        "excerpt": "Tout savoir sur les dortoirs universitaires, le permis de résident et Alipay.",
        "body": "<p class=\"lead fw-semibold\">Préparez sereinement votre installation universitaire en Chine avec nos conseils pratiques.</p>"
      },
      {
        "id": 105,
        "cat": 3,
        "date": "Affiche 🖼️",
        "type": "Bourses d’études",
        "img": "https://placehold.co/800x480/d62718/ffffff?text=Bourses+CSC+Chine",
        "title": "Bourses : préparez-vous tôt pour les bourses CSC et provinciales",
        "excerpt": "Les dossiers de bourse exigent des documents complets et le respect strict des dates limites.",
        "body": "<p class=\"lead fw-semibold\">Les bourses gouvernementales et universitaires permettent de réduire considérablement le coût des études en Chine.</p>"
      },
      {
        "id": 106,
        "cat": 4,
        "date": "Voyage Médical",
        "type": "Voyage Médical",
        "img": "https://placehold.co/800x480/0b3d91/ffffff?text=Voyage+Medical+Visa+S2",
        "title": "Visa Médical pour la Chine : accompagnement personnalisé sur WhatsApp",
        "excerpt": "Pour connaître les documents requis et recevoir une assistance personnalisée, contactez-nous sur WhatsApp.",
        "body": "<p class=\"lead fw-semibold\">Contactez directement notre agence sur WhatsApp pour connaître les pièces médicales adaptées à votre situation.</p>"
      }
    ],
    "H": [
      [
        "Contactez-nous",
        "Écrivez-nous sur WhatsApp, par e-mail ou via le formulaire en ligne et décrivez votre projet."
      ],
      [
        "Fournissez vos pièces",
        "Transmettez votre passeport, CNI, photo 4×4 cm et documents requis via le Portail Client ou WhatsApp."
      ],
      [
        "Paiement & suivi simple",
        "Réglez par Cash, Orange Money, MTN Money, WeChat, Alipay ou Banque et suivez votre dossier."
      ]
    ],
    "I": [
      "Documents à fournir : Passeport (valide 6+ mois), CNI ou carte de séjour, photo 4×4 cm fond blanc, + ancien visa/cachets (6 mois/1 an), acte de naissance (Tourisme) ou diplômes/relevés/garant (Études).",
      "Réservé aux agences partenaires : dossiers d’invitation complets pour les voyages touristiques et d’entreprise en Chine, ainsi que pour la Turquie.",
      "Nous coordonnons votre transport international, l’importation de véhicules et le dédouanement, avec suivi des expéditions et partenaires agréés.",
      "Moyens de paiement acceptés : Cash, Orange Money, MTN Money, WeChat, Alipay et Banque.",
      "Documents requis Études en Chine : Passeport, CNI, photo, diplômes obtenus, relevés de notes, test d’anglais (optionnel), casier judiciaire, acte de naissance, pièce d’identité et profession du garant."
    ],
    "S": [
      [
        "Visas pour la Chine (Affaires, Tourisme, Études, Médical)",
        [
          "Affaires 3 mois (1 entrée) : Passeport (6m+), CNI/séjour, photo 4×4 cm fond blanc",
          "Affaires 6 mois (2 entrées) & 1 an (multiples) : + Ancien visa chinois & cachets",
          "Visa Touristique : Passeport, CNI/séjour, photo & acte de naissance",
          "Visa Médical : Assistance personnalisée sur WhatsApp"
        ]
      ],
      [
        "Lettres d’invitation pour la Chine — Réservées aux agences",
        [
          "Lettres touristiques : licence commerciale, e-mail à l’ambassade, lettre, itinéraire, réservation d’hôtel et de billet d’avion",
          "Lettres de société avec les documents complets de l’entreprise",
          "Lettres d’invitation pour la Turquie"
        ]
      ],
      [
        "Chaîne d’approvisionnement, import-export et dédouanement",
        [
          "Coordination du transport et de la logistique internationale",
          "Achat et importation de voitures, camions et véhicules utilitaires",
          "Formalités douanières et suivi des expéditions",
          "Coordination avec des partenaires agréés"
        ]
      ],
      [
        "Paiements & Recharges (Cash, Mobile Money & Banque)",
        [
          "Cash, Orange Money & MTN Money acceptés",
          "Recharges Alipay et WeChat Pay",
          "Virement et rechargement de comptes bancaires"
        ]
      ],
      [
        "Visa Étudiant — Études en Chine",
        [
          "Passeport, CNI & Photo format passeport",
          "Diplôme(s) obtenu(s), relevés de notes & test d’anglais (optionnel)",
          "Extrait de casier judiciaire & Acte de naissance",
          "CNI/passeport et profession du garant ou sponsor"
        ]
      ]
    ]
  }
};
const VISA_REQUIREMENTS = {
  "M3": {
    "name": "1. Business Visa — 3 months, single entry",
    "docs": [
      "Passport valid for at least 6 months.",
      "National identity card (CNI) or residence card.",
      "Passport-size photo, 4 × 4 cm, on a white background."
    ]
  },
  "M6": {
    "name": "2. Business Visa — 6 months, double entry",
    "docs": [
      "Passport.",
      "National identity card (CNI) or residence card.",
      "Passport-size photo, 4 × 4 cm.",
      "Previous Chinese visa, if available.",
      "Chinese entry and exit stamps in the passport, if available."
    ]
  },
  "M12": {
    "name": "3. Business Visa — 1 year, multiple-entry",
    "docs": [
      "Passport.",
      "National identity card (CNI) or residence card.",
      "Passport-size photo, 4 × 4 cm.",
      "Previous Chinese visa, if available.",
      "Chinese entry and exit stamps in the passport, if available."
    ]
  },
  "L": {
    "name": "4. Tourist Visa",
    "docs": [
      "Passport.",
      "National identity card (CNI) or residence card.",
      "Passport-size photo.",
      "Birth certificate."
    ]
  },
  "X": {
    "name": "5. Student Visa — Studies in China",
    "docs": [
      "Passport.",
      "National identity card (CNI).",
      "Passport-size photo.",
      "Diploma(s) obtained.",
      "Academic transcripts.",
      "English test (optional, depending on the program and institution).",
      "Criminal record certificate.",
      "Birth certificate.",
      "Guarantor or sponsor's identity document: CNI or passport.",
      "Guarantor or sponsor's occupation."
    ]
  },
  "S2": {
    "name": "6. Medical Visa",
    "isMedical": true,
    "docs": [
      "To find out the required documents and receive personalized assistance, please contact us on WhatsApp (+237 695 679 191)."
    ]
  }
};
const WA = 'https://wa.me/237695679191';
const TN = [
  ['#4d94ff', '#1b4fb8'],
  ['#ffb15c', '#e2540f'],
  ['#6b8bff', '#12275a'],
  ['#ffd35a', '#f29a1b'],
  ['#ff7b6b', '#b81f13']
];

let L = localStorage.getItem('ym_lang') || ((navigator.language || 'en').startsWith('fr') ? 'fr' : 'en');
let serviceSwiperInstance = null;
let activeNewsFilter = 0;
let currentModalIndex = 0;

function initSwiper() {
  var swEl = document.getElementById('serviceSwiper');
  if (!swEl || typeof Swiper === 'undefined') return;
  if (serviceSwiperInstance) serviceSwiperInstance.destroy(true, true);
  var wrapperEl = document.getElementById('swiperWrapper');
  if (wrapperEl) wrapperEl.removeAttribute('style');

  function applyCardTilt() {
    var cards = document.querySelectorAll('#serviceSwiper .service-card');
    var vw = window.innerWidth || 1200;
    cards.forEach(function(c) {
      if (vw < 768) { c.style.transform = ''; return; }
      var r = c.getBoundingClientRect();
      var centerDiff = (r.left + r.width / 2 - vw / 2) / (vw / 2);
      var d = Math.max(-1.35, Math.min(1.35, centerDiff));
      c.style.transform = 'perspective(1100px) rotateY(' + (-d * 16) + 'deg) rotateZ(' + (d * 2.8) + 'deg) translateY(' + (Math.abs(d) * 14) + 'px) scale(' + (1 - Math.abs(d) * 0.035) + ')';
    });
  }

  function getEdgeOffset() {
    var vw = window.innerWidth || 1200;
    var containerEl = document.querySelector('#s .container');
    if (containerEl) {
      var rect = containerEl.getBoundingClientRect();
      return Math.max(16, Math.round(rect.left + 12));
    }
    return vw >= 1400 ? Math.max(40, Math.round((vw - 1320) / 2)) : 24;
  }

  var edgeOffset = getEdgeOffset();
  serviceSwiperInstance = new Swiper('#serviceSwiper', {
    initialSlide: 0,
    slidesPerView: 1.15,
    spaceBetween: 20,
    centeredSlides: false,
    grabCursor: true,
    watchSlidesProgress: true,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    observer: true,
    observeParents: true,
    autoplay: { delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '#srvNext', prevEl: '#srvPrev' },
    breakpoints: {
      576: { slidesPerView: 1.6, spaceBetween: 20, slidesOffsetBefore: 24, slidesOffsetAfter: 24 },
      768: { slidesPerView: 2.2, spaceBetween: 22, slidesOffsetBefore: edgeOffset, slidesOffsetAfter: 32 },
      992: { slidesPerView: 2.9, spaceBetween: 24, slidesOffsetBefore: edgeOffset, slidesOffsetAfter: 40 },
      1200: { slidesPerView: 3.6, spaceBetween: 24, slidesOffsetBefore: edgeOffset, slidesOffsetAfter: 48 },
      1440: { slidesPerView: 4.35, spaceBetween: 26, slidesOffsetBefore: edgeOffset, slidesOffsetAfter: 56 }
    },
    on: {
      init: function() { setTimeout(applyCardTilt, 50); },
      sliderMove: applyCardTilt,
      setTranslate: applyCardTilt,
      transitionEnd: applyCardTilt,
      resize: function() { applyCardTilt(); }
    }
  });
  serviceSwiperInstance.slideTo(0, 0);
  setTimeout(applyCardTilt, 80);
}

function openServiceModal(i, dir) {
  var md = document.getElementById('md');
  var mb = document.getElementById('mb');
  if (!md || !mb) return;
  var t = T[L];
  var s = t.S[i];
  var n = t.S.length;
  var ic = ['🛂', '✉️', '🚢', '💳', '🎓'];
  currentModalIndex = i;
  mb.innerHTML = '<div class="sw-modal ' + (dir || 'n') + '" style="--t:' + TN[i][0] + ';--u:' + TN[i][1] + '">' +
    '<button class="mx-close" id="mx" type="button">×</button>' +
    '<div class="sl-info">' +
      '<small>0' + (i + 1) + ' / 0' + n + '</small>' +
      '<h3>' + s[0] + '</h3>' +
      '<p>' + t.I[i] + '</p>' +
      '<ul class="sr-list">' +
        s[1].map(function(x) {
          return '<li><span>' + x + '</span><a target="_blank" rel="noopener" href="' + WA + '?text=' + encodeURIComponent(t.hi2 + ' ' + s[0] + ' — ' + x) + '">' + t.ab + ' ↗</a></li>';
        }).join('') +
      '</ul>' +
      '<div class="d-flex align-items-center gap-2 flex-wrap">' +
        '<a class="ym-btn" target="_blank" rel="noopener" href="' + WA + '?text=' + encodeURIComponent(t.hi2 + ' ' + s[0]) + '">' + t.sn + '</a>' +
        '<button class="ar-nav" type="button" data-d="-1">←</button>' +
        '<button class="ar-nav" type="button" data-d="1">→</button>' +
      '</div>' +
    '</div>' +
    '<div class="ss-sphere">' +
      '<div class="sd-wrap"><div class="sc-back"></div><div class="sb-front"><i>' + ic[i] + '</i></div></div>' +
      [1, 2, 3].map(function(k) {
        var j = (i + k) % n;
        return '<div class="qd-orb" data-j="' + j + '" style="--t:' + TN[j][0] + ';--u:' + TN[j][1] + '"><i>' + ic[j] + '</i></div>';
      }).join('') +
    '</div>' +
  '</div>';
  md.classList.add('on');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  var md = document.getElementById('md');
  if (md) md.classList.remove('on');
  document.body.style.overflow = '';
}

function renderNewsCards() {
  var t = T[L];
  var searchEl = document.getElementById('newsSearchInput');
  var q = searchEl ? searchEl.value.trim().toLowerCase() : '';

  var filterHtml = t.F.map(function(f, i) {
    return '<button type="button" class="' + (i === activeNewsFilter ? 'on' : '') + '" data-f="' + i + '">' + f + '</button>';
  }).join('');

  ['tbHome', 'tbPage'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = filterHtml;
  });

  var list = t.A.filter(function(a) {
    var mCat = !activeNewsFilter || a.cat === activeNewsFilter;
    var mQ = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
    return mCat && mQ;
  });

  var cardsHtml = list.map(function(a) {
    return '<div class="col-12 col-md-6 col-lg-4">' +
      '<div class="ym-card">' +
        '<a href="news-details.html?id=' + a.id + '" class="mv-thumb text-decoration-none" style="--t:' + TN[a.cat][0] + ';--u:' + TN[a.cat][1] + '">' +
          '<img src="' + a.img + '" alt="' + a.title + '">' +
          '<span class="mv-badge">' + a.type + '</span>' +
        '</a>' +
        '<div class="d-flex justify-content-between align-items-center">' +
          '<small class="tg-cat">' + t.F[a.cat] + '</small>' +
          '<small class="text-muted fw-semibold" style="font-size:12px">' + a.date + '</small>' +
        '</div>' +
        '<h4><a href="news-details.html?id=' + a.id + '" class="text-decoration-none text-reset">' + a.title + '</a></h4>' +
        '<p>' + a.excerpt + '</p>' +
        '<div class="mt-auto pt-3 d-flex justify-content-between align-items-center border-top">' +
          '<a class="lk-action p-0" href="news-details.html?id=' + a.id + '">📖 ' + t.mo + ' →</a>' +
          '<a class="lk-action p-0 text-success" target="_blank" rel="noopener" href="' + WA + '?text=' + encodeURIComponent(t.hi2 + ' ' + a.title) + '">WhatsApp ↗</a>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  var ngHome = document.getElementById('ngHome');
  if (ngHome) ngHome.innerHTML = cardsHtml;
  var ngPage = document.getElementById('ngPage');
  if (ngPage) ngPage.innerHTML = cardsHtml;
}

function renderNewsDetailPage() {
  var detailBox = document.getElementById('detailContentBox');
  if (!detailBox) return;
  var t = T[L];
  var params = new URLSearchParams(window.location.search);
  var id = parseInt(params.get('id') || '101', 10);
  var art = t.A.find(function(x) { return x.id === id; }) || t.A[0];

  var badge = document.getElementById('detailCatBadge');
  if (badge) badge.textContent = t.F[art.cat] + ' • ' + art.type;
  var title = document.getElementById('detailTitle');
  if (title) title.textContent = art.title;
  var waBtn = document.getElementById('detailWaBtn');
  if (waBtn) waBtn.href = WA + '?text=' + encodeURIComponent(t.hi2 + ' ' + art.title);

  detailBox.innerHTML = '<img src="' + art.img + '" alt="' + art.title + '" class="w-100 rounded-4 mb-4" style="max-height:380px;object-fit:cover">' +
    '<div class="fs-6 lh-lg">' + art.body + '</div>';

  var rel = document.getElementById('relatedNewsList');
  if (rel) {
    rel.innerHTML = t.A.filter(function(x) { return x.id !== art.id; }).slice(0, 3).map(function(r) {
      return '<a href="news-details.html?id=' + r.id + '" class="p-3 rounded-4 bg-white border shadow-sm text-decoration-none text-dark d-block">' +
        '<small class="tg-cat d-block mb-1">' + t.F[r.cat] + '</small>' +
        '<div class="fw-bolder small">' + r.title + '</div>' +
      '</a>';
    }).join('');
  }
}

function renderAllContent() {
  var t = T[L];
  document.documentElement.lang = L;
  document.querySelectorAll('[data-t]').forEach(function(el) {
    if (t[el.dataset.t]) el.textContent = t[el.dataset.t];
  });
  document.querySelectorAll('.lang-switch button').forEach(function(b) {
    b.classList.toggle('on', b.dataset.l === L);
  });

  var swWrap = document.getElementById('swiperWrapper');
  if (swWrap) {
    var icons = ['🛂', '✉️', '🚢', '💳', '🎓'];
    swWrap.innerHTML = t.S.map(function(s, i) {
      return '<div class="swiper-slide">' +
        '<div class="service-card k' + i + '" data-i="' + i + '">' +
          '<b class="num-watermark">0' + (i + 1) + '</b>' +
          '<i class="ic">' + icons[i] + '</i>' +
          '<h3>' + s[0] + '</h3>' +
          '<ul>' + s[1].map(function(x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
          '<em class="more-pill">' + t.mo + ' →</em>' +
        '</div>' +
      '</div>';
    }).join('');
    initSwiper();
  }

  var lk = function(tObj, x) {
    return '<a class="lk-action" target="_blank" rel="noopener" href="' + WA + '?text=' + encodeURIComponent(tObj.hi2 + ' ' + x) + '">' + tObj.rd + ' ↗</a>';
  };

  var stGrid = document.getElementById('stGrid');
  if (stGrid) {
    stGrid.innerHTML = t.H.map(function(h, i) {
      return '<div class="col-12 col-md-4"><div class="step-card"><b class="step-num">' + (i + 1) + '</b><h4>' + h[0] + '</h4><p>' + h[1] + '</p></div></div>';
    }).join('');
  }

  var vgGrid = document.getElementById('vgGrid');
  if (vgGrid) {
    vgGrid.innerHTML = t.V.map(function(v) {
      return '<div class="col-12 col-sm-6 col-lg-4"><div class="ym-card"><div class="cb-icon" style="width:auto;align-self:flex-start;padding:0 16px;font-size:16px">' + v[0] + '</div><h4>' + v[1] + '</h4><p>' + v[2] + '</p>' +
        '<div class="mt-auto pt-3 d-flex justify-content-between align-items-center border-top">' +
          '<a class="lk-action p-0" href="client-portal.html?visa=' + (v[3] || 'M3') + '">📋 ' + t.mo + ' / Docs →</a>' +
          '<a class="lk-action p-0 text-success" target="_blank" rel="noopener" href="' + WA + '?text=' + encodeURIComponent(t.hi2 + ' ' + v[1]) + '">WhatsApp ↗</a>' +
        '</div></div></div>';
    }).join('');
  }

  var ugGrid = document.getElementById('ugGrid');
  if (ugGrid) {
    ugGrid.innerHTML = t.U.map(function(u) {
      return '<div class="col-12 col-md-4"><div class="ym-card"><div class="cb-icon">' + u[0] + '</div><h4>' + u[1] + '</h4><p>' + u[2] + '</p></div></div>';
    }).join('');
  }

  var ustGrid = document.getElementById('ustGrid');
  if (ustGrid) {
    ustGrid.innerHTML = t.P.map(function(h, i) {
      return '<div class="col-12 col-sm-6 col-lg-4"><div class="step-card"><b class="step-num">' + (i + 1) + '</b><h4>' + h[0] + '</h4><p>' + h[1] + '</p></div></div>';
    }).join('');
  }

  var kgGrid = document.getElementById('kgGrid');
  if (kgGrid) {
    kgGrid.innerHTML = t.K.map(function(k) {
      return '<div class="col-12 col-md-6 col-lg-3"><div class="ym-card"><div class="cb-icon">🏅</div><h4>' + k[0] + '</h4><p>' + k[1] + '</p><p class="dl"><b>' + t.kd + ':</b> ' + t.kv + '</p>' + lk(t, k[0]) + '</div></div>';
    }).join('') + '<div class="col-12 col-md-6 col-lg-3"><div class="ym-card"><div class="cb-icon">✅</div><h4>' + t.ke + '</h4><ul class="ps-3 mb-0 small opacity-90">' + t.kl.map(function(x) { return '<li class="mb-1">' + x + '</li>'; }).join('') + '</ul></div></div>';
  }

  var mgGrid = document.getElementById('mgGrid');
  if (mgGrid) {
    mgGrid.innerHTML = t.M.map(function(u) {
      return '<div class="col-12 col-sm-6 col-lg-3"><div class="ym-card"><div class="cb-icon">' + u[0] + '</div><h4>' + u[1] + '</h4><p>' + u[2] + '</p></div></div>';
    }).join('');
  }

  var vSel = document.getElementById('v');
  if (vSel) vSel.innerHTML = t.S.map(function(s) { return '<option>' + s[0] + '</option>'; }).join('');

  var wl = document.getElementById('wl');
  if (wl) {
    wl.innerHTML = t.S.map(function(s) {
      return '<a target="_blank" rel="noopener" href="' + WA + '?text=' + encodeURIComponent(t.hi2 + ' ' + s[0]) + '">' + s[0] + '</a>';
    }).join('');
  }

  var wp = document.getElementById('wp');
  if (wp) wp.innerHTML = t.wp.split(' ').map(function(w) { return '<span class="on">' + w + '</span>'; }).join(' ');

  renderNewsCards();
  renderNewsDetailPage();
}

// Portal Tab & Interactive Helper Functions for Standalone client-portal.html
window.switchPortalTab = function(tabId) {
  document.querySelectorAll('.portal-nav-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.ptab === tabId);
  });
  document.querySelectorAll('.portal-tab-pane').forEach(function(p) {
    p.classList.add('d-none');
  });
  var target = document.getElementById('ptab-' + tabId);
  if (target) target.classList.remove('d-none');
};

window.changePortalVisaCategory = function(visaCode) {
  var visaInfo = VISA_REQUIREMENTS[visaCode] || VISA_REQUIREMENTS.M3;
  var titleEl = document.getElementById('dashSelectedVisaTitle');
  if (titleEl) titleEl.textContent = visaInfo.name;
  var reqTitle = document.getElementById('reqChecklistTitle');
  if (reqTitle) reqTitle.textContent = visaInfo.name;
  var reqList = document.getElementById('reqDocumentsList');
  if (reqList) {
    reqList.innerHTML = visaInfo.docs.map(function(d) {
      return '<li class="list-group-item d-flex flex-wrap justify-content-between align-items-center gap-2 py-3">' +
        '<span>📄 <strong>' + d + '</strong></span>' +
        (visaInfo.isMedical
          ? '<a class="btn btn-sm btn-success rounded-pill fw-bold" target="_blank" href="' + WA + '">💬 Contact on WhatsApp</a>'
          : '<span class="badge bg-light text-dark border rounded-pill">Required</span>') +
      '</li>';
    }).join('');
  }
};

window.handlePortalAppSubmit = function(e) {
  e.preventDefault();
  var b = document.getElementById('appSavedBadge');
  if (b) b.textContent = '✅ Application Saved!';
};

window.handleProfileSave = function(e) {
  e.preventDefault();
  var name = document.getElementById('profName').value;
  var email = document.getElementById('profEmail').value;
  var phone = document.getElementById('profPhone').value;
  var wa = document.getElementById('profWhatsapp').value;
  if (document.getElementById('portalUserNameDisplay')) document.getElementById('portalUserNameDisplay').textContent = name;
  if (document.getElementById('portalUserEmailDisplay')) document.getElementById('portalUserEmailDisplay').textContent = email;
  if (document.getElementById('portalUserPhoneDisplay')) document.getElementById('portalUserPhoneDisplay').textContent = '📞 ' + phone + ' • 💬 ' + wa;
  var badge = document.getElementById('profileSavedBadge');
  if (badge) {
    badge.classList.remove('d-none');
    setTimeout(function() { badge.classList.add('d-none'); }, 3000);
  }
};

window.handleDocumentUpload = function() {
  var sel = document.getElementById('docUploadTypeSelect');
  var fileIn = document.getElementById('docFileInput');
  var tbody = document.getElementById('portalDocsTableBody');
  if (!sel || !tbody) return;
  var docName = sel.value;
  var fName = (fileIn && fileIn.files && fileIn.files[0]) ? fileIn.files[0].name : 'uploaded_document.pdf';
  var tr = document.createElement('tr');
  tr.innerHTML = '<td class="fw-bold small">' + docName + '</td><td class="text-muted small font-monospace">' + fName + '</td><td><span class="badge bg-warning text-dark rounded-pill">Uploaded (In Review)</span></td><td class="text-end"><span class="text-success fw-bold small">✓ Provided</span></td>';
  tbody.appendChild(tr);
};

document.addEventListener('DOMContentLoaded', function() {
  renderAllContent();

  // Language switcher
  document.querySelectorAll('.lang-switch button').forEach(function(b) {
    b.addEventListener('click', function() {
      L = b.dataset.l;
      localStorage.setItem('ym_lang', L);
      renderAllContent();
    });
  });

  // Service Card Click -> Open 3D Modal
  var swWrap = document.getElementById('swiperWrapper');
  if (swWrap) {
    swWrap.addEventListener('click', function(e) {
      var card = e.target.closest('.service-card');
      if (card) openServiceModal(parseInt(card.dataset.i, 10));
    });
  }

  // Modal Navigation & Close
  var md = document.getElementById('md');
  if (md) {
    md.addEventListener('click', function(e) {
      var a = e.target.closest('.ar-nav');
      var q = e.target.closest('.qd-orb');
      if (e.target === md || e.target.id === 'mx') closeServiceModal();
      else if (a) {
        var n = T[L].S.length;
        var d = parseInt(a.dataset.d, 10);
        openServiceModal((currentModalIndex + d + n) % n, d > 0 ? 'n' : 'p');
      } else if (q) {
        openServiceModal(parseInt(q.dataset.j, 10), 'n');
      }
    });
  }

  // News Filter Click
  ['tbHome', 'tbPage'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', function(e) {
        var b = e.target.closest('button');
        if (b) {
          activeNewsFilter = parseInt(b.dataset.f, 10);
          renderNewsCards();
        }
      });
    }
  });

  var searchEl = document.getElementById('newsSearchInput');
  if (searchEl) searchEl.addEventListener('input', renderNewsCards);

  // Header Scrollspy & Active Link Highlighting
  var hd = document.getElementById('siteHeader');
  var secIds = ['s', 'vs', 'su', 'sk', 'sm', 'nw', 'c'];
  var desktopLinks = document.querySelectorAll('header.site-header nav.desktop-nav a[data-sec]');

  desktopLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      desktopLinks.forEach(function(l) { l.classList.remove('active-link'); });
      link.classList.add('active-link');
    });
  });

  // Close mobile offcanvas when clicking an anchor link
  document.querySelectorAll('#mobileOffcanvas a.nav-link-mobile').forEach(function(mLink) {
    mLink.addEventListener('click', function() {
      var offEl = document.getElementById('mobileOffcanvas');
      if (offEl && typeof bootstrap !== 'undefined') {
        var inst = bootstrap.Offcanvas.getInstance(offEl);
        if (inst) inst.hide();
      }
    });
  });

  window.addEventListener('scroll', function() {
    if (hd) hd.classList.toggle('sm', window.scrollY > 40);
    if (desktopLinks.length && document.getElementById('s')) {
      var k = 0;
      secIds.forEach(function(id, i) {
        var el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.42) k = i;
      });
      desktopLinks.forEach(function(a, i) {
        a.classList.toggle('active-link', i === k);
      });
    }
  }, { passive: true });

  // Contact Form Submit
  var form = document.getElementById('f');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var m = T[L].hi + '\n' + document.getElementById('n').value + '\n' + document.getElementById('p').value + '\n' + document.getElementById('e').value + '\n' + document.getElementById('v').value + '\n' + document.getElementById('m').value;
      window.open(WA + '?text=' + encodeURIComponent(m), '_blank');
    });
  }

  // WhatsApp Quick Popup
  var wq = document.getElementById('wq');
  var bx = document.getElementById('bx');
  if (wq) setTimeout(function() { wq.classList.add('on'); }, 4500);
  if (bx && wq) bx.addEventListener('click', function() { wq.classList.remove('on'); });
});
