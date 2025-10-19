const APP_STORE_URL = "https://apps.apple.com/ru/app/glowlab-ai/id6753652691";

(function redirectSafariToAppStore() {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return;
  }
  try {
    const ua = navigator.userAgent || "";
    const isIOS = /iP(hone|od|ad)/i.test(ua);
    const isSafari =
      /safari/i.test(ua) &&
      !/crios/i.test(ua) &&
      !/fxios/i.test(ua) &&
      !/opios/i.test(ua) &&
      !/edgios/i.test(ua);
    const alreadyRedirected = window.sessionStorage.getItem("glowlab-appstore-redirected");
    if (isIOS && isSafari && !alreadyRedirected) {
      window.sessionStorage.setItem("glowlab-appstore-redirected", "1");
      window.location.replace(APP_STORE_URL);
    }
  } catch (error) {
    console.warn("App Store redirect skipped", error);
  }
})();

const translations = {
  common: {
    en: {
      navPrivacy: "Privacy",
      navSupport: "Support",
      navCopyright: "Copyright",
      navTerms: "Terms",
      languageLabel: "Language selector",
      footerNote: "© 2025 GlowLab AI. All rights reserved.",
      footerSupport: "Support: smfedorov.iosdev@gmail.com"
    },
    es: {
      navPrivacy: "Privacidad",
      navSupport: "Soporte",
      navCopyright: "Derechos de autor",
      navTerms: "Términos",
      languageLabel: "Selector de idioma",
      footerNote: "© 2025 GlowLab AI. Todos los derechos reservados.",
      footerSupport: "Soporte: smfedorov.iosdev@gmail.com"
    },
    ru: {
      navPrivacy: "Конфиденциальность",
      navSupport: "Поддержка",
      navCopyright: "Авторские права",
      navTerms: "Условия",
      languageLabel: "Выбор языка",
      footerNote: "© 2025 GlowLab AI. Все права защищены.",
      footerSupport: "Поддержка: smfedorov.iosdev@gmail.com"
    },
    de: {
      navPrivacy: "Datenschutz",
      navSupport: "Support",
      navCopyright: "Urheberrecht",
      navTerms: "Nutzungsbedingungen",
      languageLabel: "Sprachauswahl",
      footerNote: "© 2025 GlowLab AI. Alle Rechte vorbehalten.",
      footerSupport: "Support: smfedorov.iosdev@gmail.com"
    },
    it: {
      navPrivacy: "Privacy",
      navSupport: "Supporto",
      navCopyright: "Copyright",
      navTerms: "Termini",
      languageLabel: "Selettore lingua",
      footerNote: "© 2025 GlowLab AI. Tutti i diritti riservati.",
      footerSupport: "Supporto: smfedorov.iosdev@gmail.com"
    },
    fr: {
      navPrivacy: "Confidentialité",
      navSupport: "Support",
      navCopyright: "Droits d'auteur",
      navTerms: "Conditions",
      languageLabel: "Sélecteur de langue",
      footerNote: "© 2025 GlowLab AI. Tous droits réservés.",
      footerSupport: "Support : smfedorov.iosdev@gmail.com"
    }
  },
  terms: {
    en: {
      termsBadge: "Effective October 2025",
      termsTitle: "GlowLab AI - Terms of Use",
      termsLead: "Please read these terms carefully before using the app.",
      termsOverviewTitle: "1. Overview",
      termsOverviewTextPart1: "GlowLab AI (App) is provided for iPhone, iPad, and Apple Watch. By using the App, you agree to these Terms of Use and our",
      termsPrivacyLink: "Privacy Policy",
      termsOverviewTextPart2: "The App offers AI lullabies, calming visuals, and bedtime tools to support baby sleep.",
      termsIAPTitle: "2. In-App Purchases",
      termsIAPText: "Purchases are processed by Apple through your App Store account. Available products include Lifetime Premium (one-time payment for permanent access) and Monthly Premium (auto-renewable subscription billed monthly). You can manage or cancel subscriptions in Settings > Apple ID > Subscriptions.",
      termsContentTitle: "3. Premium content",
      termsContentText: "Premium unlocks unlimited access to the full lullaby library, AI-crafted sound mixes, unlimited personal recordings, analytics dashboards, nursery themes, and custom app icons. Lifetime Premium grants permanent access; Monthly Premium remains active while the subscription is paid.",
      termsRefundsTitle: "4. Payments and refunds",
      termsRefundsText: "All billing, renewals, and refunds are governed by Apple's Media Services Terms and Conditions. The developer does not process payments or refunds directly.",
      termsPrivacyTitle: "5. Privacy",
      termsPrivacyTextPart1: "The App does not collect personal data. Sounds, bedtime settings, and recordings stay on your device.",
      termsPrivacyInlineLink: "Privacy Policy",
      termsPrivacyTextPart2: "explains how we protect your family's information.",
      termsIPTitle: "6. Intellectual property",
      termsIPText: "All App content, designs, and branding are owned by the developer. You may not copy, modify, or redistribute the App or its assets without prior written permission.",
      termsTerminationTitle: "7. Termination and changes",
      termsTerminationText: "You may stop using the App at any time by deleting it from your device. We may update or change features in future versions. These Terms may also be updated from time to time.",
      termsContactTitle: "8. Contact",
      termsContactText: "For questions about these Terms, contact us:",
      termsContactEmail: "smfedorov.iosdev@gmail.com",
      termsSummaryTitle: "9. Local summary",
      termsSummaryText: "GlowLab AI Baby Sleep runs on iPhone, iPad, and Apple Watch. Lifetime Premium is a single purchase; Monthly Premium renews each month until cancelled in Apple settings. The app stores lullabies, recordings, and settings on your device and does not keep personal baby data. Questions? Email smfedorov.iosdev@gmail.com."
    },
    es: {
      termsBadge: "Vigente desde octubre de 2025",
      termsTitle: "GlowLab AI - Términos de uso",
      termsLead: "Lee atentamente estos términos antes de usar la app.",
      termsOverviewTitle: "1. Información general",
      termsOverviewTextPart1: "GlowLab AI (App) está disponible para iPhone, iPad y Apple Watch. Al usar la App aceptas estos Términos de uso y nuestra",
      termsPrivacyLink: "Política de privacidad",
      termsOverviewTextPart2: "La App ofrece nanas con IA, visuales calmantes y herramientas nocturnas para ayudar al sueño del bebé.",
      termsIAPTitle: "2. Compras integradas",
      termsIAPText: "Las compras se procesan mediante Apple a través de tu cuenta de App Store. Los productos disponibles son Lifetime Premium (pago único con acceso permanente) y Monthly Premium (suscripción mensual renovable automáticamente). Puedes gestionar o cancelar suscripciones en Ajustes > Apple ID > Suscripciones.",
      termsContentTitle: "3. Contenido Premium",
      termsContentText: "Premium desbloquea acceso ilimitado a toda la biblioteca de nanas, mezclas generadas por IA, grabaciones personales ilimitadas, paneles de análisis, temas para la habitación y iconos personalizados. Lifetime Premium concede acceso permanente; Monthly Premium se mantiene activo mientras la suscripción esté pagada.",
      termsRefundsTitle: "4. Pagos y reembolsos",
      termsRefundsText: "La facturación, renovaciones y reembolsos se rigen por los Términos y condiciones de los servicios multimedia de Apple. El desarrollador no gestiona pagos ni reembolsos directamente.",
      termsPrivacyTitle: "5. Privacidad",
      termsPrivacyTextPart1: "La App no recopila datos personales. Las nanas, ajustes de la hora de dormir y grabaciones permanecen en tu dispositivo.",
      termsPrivacyInlineLink: "Política de privacidad",
      termsPrivacyTextPart2: "explica cómo protegemos la información de tu familia.",
      termsIPTitle: "6. Propiedad intelectual",
      termsIPText: "Todo el contenido, diseño y marca de la App pertenece al desarrollador. No puedes copiar, modificar ni redistribuir la App o sus recursos sin permiso escrito.",
      termsTerminationTitle: "7. Cambios y finalización",
      termsTerminationText: "Puedes dejar de usar la App en cualquier momento eliminándola del dispositivo. Podemos actualizar funciones en versiones futuras y estos Términos pueden cambiar ocasionalmente.",
      termsContactTitle: "8. Contacto",
      termsContactText: "Si tienes dudas sobre estos Términos, escríbenos:",
      termsContactEmail: "smfedorov.iosdev@gmail.com",
      termsSummaryTitle: "9. Resumen local",
      termsSummaryText: "GlowLab AI Baby Sleep funciona en iPhone, iPad y Apple Watch. Lifetime Premium es una compra única; Monthly Premium se renueva cada mes hasta cancelarlo en los ajustes de Apple. La app guarda nanas, grabaciones y configuraciones en tu dispositivo y no conserva datos personales del bebé. ¿Dudas? Escríbenos a smfedorov.iosdev@gmail.com."
    },
    ru: {
      termsBadge: "Действует с октября 2025 года",
      termsTitle: "GlowLab AI - Условия использования",
      termsLead: "Пожалуйста, внимательно прочитайте условия перед использованием приложения.",
      termsOverviewTitle: "1. Общие положения",
      termsOverviewTextPart1: "Приложение GlowLab AI (Приложение) доступно для iPhone, iPad и Apple Watch. Используя Приложение, вы соглашаетесь с настоящими Условиями и нашей",
      termsPrivacyLink: "Политикой конфиденциальности",
      termsOverviewTextPart2: "Приложение предлагает ИИ-колыбельные, мягкие визуальные эффекты и инструменты для детского сна.",
      termsIAPTitle: "2. Покупки внутри приложения",
      termsIAPText: "Покупки обрабатываются Apple через ваш аккаунт App Store. Доступны Lifetime Premium (разовый платеж с постоянным доступом) и Monthly Premium (подписка с ежемесячным автопродлением). Управляйте подпиской в Настройки > Apple ID > Подписки.",
      termsContentTitle: "3. Премиум-контент",
      termsContentText: "Премиум открывает безлимитный доступ к библиотеке колыбельных, ИИ-миксам, неограниченным записям, аналитике, темам оформления и альтернативным иконкам. Lifetime Premium предоставляет доступ навсегда; Monthly Premium действует, пока оплачена подписка.",
      termsRefundsTitle: "4. Платежи и возвраты",
      termsRefundsText: "Все платежи, продления и возвраты регулируются правилами Apple Media Services. Разработчик напрямую платежи и возвраты не обрабатывает.",
      termsPrivacyTitle: "5. Конфиденциальность",
      termsPrivacyTextPart1: "Приложение не собирает персональные данные. Колыбельные, настройки сна и записи хранятся на вашем устройстве.",
      termsPrivacyInlineLink: "Политика конфиденциальности",
      termsPrivacyTextPart2: "подробно описывает, как мы защищаем данные вашей семьи.",
      termsIPTitle: "6. Интеллектуальная собственность",
      termsIPText: "Все материалы Приложения, дизайн и бренд принадлежат разработчику. Нельзя копировать, изменять или распространять Приложение без письменного разрешения.",
      termsTerminationTitle: "7. Изменения и прекращение использования",
      termsTerminationText: "Вы можете прекратить использование в любой момент, удалив Приложение. Мы можем обновлять функции и периодически менять Условия.",
      termsContactTitle: "8. Контакты",
      termsContactText: "По вопросам, связанным с Условиями, пишите:",
      termsContactEmail: "smfedorov.iosdev@gmail.com",
      termsSummaryTitle: "9. Краткое резюме",
      termsSummaryText: "GlowLab AI Baby Sleep работает на iPhone, iPad и Apple Watch. Lifetime Premium - разовая покупка; Monthly Premium продлевается ежемесячно, пока вы не отмените подписку в настройках Apple. Приложение хранит колыбельные, записи и настройки на вашем устройстве и не собирает данные о ребёнке. Вопросы? smfedorov.iosdev@gmail.com."
    },
    de: {
      termsBadge: "Gültig ab Oktober 2025",
      termsTitle: "GlowLab AI - Nutzungsbedingungen",
      termsLead: "Bitte lies diese Bedingungen sorgfältig, bevor du die App nutzt.",
      termsOverviewTitle: "1. Überblick",
      termsOverviewTextPart1: "GlowLab AI (App) steht für iPhone, iPad und Apple Watch bereit. Mit der Nutzung stimmst du diesen Bedingungen und unserer",
      termsPrivacyLink: "Datenschutzerklärung",
      termsOverviewTextPart2: "zu. Die App bietet KI-Nanas, beruhigende Visuals und Tools für den Babyschlaf.",
      termsIAPTitle: "2. In-App-Käufe",
      termsIAPText: "Käufe werden von Apple über dein App-Store-Konto abgewickelt. Verfügbar sind Lifetime Premium (Einmalzahlung für dauerhaften Zugriff) und Monthly Premium (monatlich automatisch verlängerndes Abo). Verwalte oder kündige das Abo unter Einstellungen > Apple ID > Abos.",
      termsContentTitle: "3. Premium-Inhalte",
      termsContentText: "Premium schaltet unbegrenzten Zugriff auf die komplette Nanalibrary, KI-Mixe, unbegrenzte Aufnahmen, Analyse-Dashboards, Zimmer-Themes und individuelle App-Icons frei. Lifetime Premium bleibt dauerhaft aktiv; Monthly Premium läuft, solange das Abo bezahlt wird.",
      termsRefundsTitle: "4. Zahlungen und Rückerstattungen",
      termsRefundsText: "Abrechnung, Verlängerungen und Rückerstattungen unterliegen den Apple Media Services-Bedingungen. Der Entwickler bearbeitet keine Zahlungen oder Rückerstattungen direkt.",
      termsPrivacyTitle: "5. Datenschutz",
      termsPrivacyTextPart1: "Die App sammelt keine personenbezogenen Daten. Nanas, Schlaf-Einstellungen und Aufnahmen bleiben auf deinem Gerät.",
      termsPrivacyInlineLink: "Datenschutzerklärung",
      termsPrivacyTextPart2: "erklärt, wie wir eure Informationen schützen.",
      termsIPTitle: "6. Geistiges Eigentum",
      termsIPText: "Sämtliche Inhalte, Designs und Marken der App gehören dem Entwickler. Eine Vervielfältigung, Änderung oder Weitergabe ist ohne schriftliche Genehmigung untersagt.",
      termsTerminationTitle: "7. Beendigung und Änderungen",
      termsTerminationText: "Du kannst die App jederzeit löschen und nicht weiter nutzen. Funktionen und diese Bedingungen können gelegentlich aktualisiert werden.",
      termsContactTitle: "8. Kontakt",
      termsContactText: "Fragen zu den Bedingungen? Schreib uns:",
      termsContactEmail: "smfedorov.iosdev@gmail.com",
      termsSummaryTitle: "9. Kurzfassung",
      termsSummaryText: "GlowLab AI Baby Sleep läuft auf iPhone, iPad und Apple Watch. Lifetime Premium ist ein einmaliger Kauf; Monthly Premium verlängert sich monatlich, bis es in den Apple-Einstellungen gekündigt wird. Die App speichert Nanas, Aufnahmen und Einstellungen lokal und sammelt keine Baby-Daten. Fragen? smfedorov.iosdev@gmail.com."
    },
    it: {
      termsBadge: "In vigore da ottobre 2025",
      termsTitle: "GlowLab AI - Termini di utilizzo",
      termsLead: "Leggi attentamente questi termini prima di usare l'app.",
      termsOverviewTitle: "1. Panoramica",
      termsOverviewTextPart1: "GlowLab AI (App) è disponibile per iPhone, iPad e Apple Watch. Usando l'App accetti questi Termini e la nostra",
      termsPrivacyLink: "Informativa sulla privacy",
      termsOverviewTextPart2: "L'App offre ninne nanne con IA, visual rilassanti e strumenti per la nanna.",
      termsIAPTitle: "2. Acquisti in-app",
      termsIAPText: "Gli acquisti sono gestiti da Apple tramite il tuo account App Store. I prodotti disponibili sono Lifetime Premium (pagamento unico con accesso permanente) e Monthly Premium (abbonamento mensile con rinnovo automatico). Puoi gestire o annullare l'abbonamento in Impostazioni > Apple ID > Abbonamenti.",
      termsContentTitle: "3. Contenuti Premium",
      termsContentText: "Premium sblocca accesso illimitato alla libreria di ninne nanne, mix generati dall'IA, registrazioni personali illimitate, analisi, temi per la cameretta e icone personalizzate. Lifetime Premium resta attivo per sempre; Monthly Premium rimane attivo finché l'abbonamento è pagato.",
      termsRefundsTitle: "4. Pagamenti e rimborsi",
      termsRefundsText: "Fatturazione, rinnovi e rimborsi seguono i Termini e condizioni dei servizi multimediali di Apple. Lo sviluppatore non gestisce pagamenti o rimborsi direttamente.",
      termsPrivacyTitle: "5. Privacy",
      termsPrivacyTextPart1: "L'App non raccoglie dati personali. Ninne nanne, impostazioni e registrazioni restano sul tuo dispositivo.",
      termsPrivacyInlineLink: "Informativa sulla privacy",
      termsPrivacyTextPart2: "spiega come proteggiamo le informazioni della tua famiglia.",
      termsIPTitle: "6. Proprietà intellettuale",
      termsIPText: "Tutti i contenuti, il design e il marchio dell'App sono di proprietà dello sviluppatore. Non puoi copiare, modificare o ridistribuire l'App senza autorizzazione scritta.",
      termsTerminationTitle: "7. Modifiche e cessazione",
      termsTerminationText: "Puoi smettere di usare l'App in qualsiasi momento eliminandola dal dispositivo. Potremmo aggiornare funzioni e termini in futuro.",
      termsContactTitle: "8. Contatti",
      termsContactText: "Per domande su questi Termini, contattaci:",
      termsContactEmail: "smfedorov.iosdev@gmail.com",
      termsSummaryTitle: "9. Riassunto locale",
      termsSummaryText: "GlowLab AI Baby Sleep funziona su iPhone, iPad e Apple Watch. Lifetime Premium è un acquisto unico; Monthly Premium si rinnova ogni mese finché non lo annulli nelle impostazioni Apple. L'app conserva ninne nanne, registrazioni e impostazioni sul dispositivo e non raccoglie dati del bebè. Dubbi? smfedorov.iosdev@gmail.com."
    },
    fr: {
      termsBadge: "En vigueur depuis octobre 2025",
      termsTitle: "GlowLab AI - Conditions d'utilisation",
      termsLead: "Veuillez lire ces conditions avant d'utiliser l'application.",
      termsOverviewTitle: "1. Présentation",
      termsOverviewTextPart1: "GlowLab AI (App) est proposée pour iPhone, iPad et Apple Watch. En utilisant l'App, vous acceptez ces Conditions et notre",
      termsPrivacyLink: "Politique de confidentialité",
      termsOverviewTextPart2: "L'App propose des berceuses IA, des visuels apaisants et des outils pour le sommeil de bébé.",
      termsIAPTitle: "2. Achats intégrés",
      termsIAPText: "Les achats sont traités par Apple via votre compte App Store. Les produits disponibles sont Lifetime Premium (paiement unique pour un accès permanent) et Monthly Premium (abonnement mensuel à renouvellement automatique). Gérez ou annulez l'abonnement dans Réglages > Identifiant Apple > Abonnements.",
      termsContentTitle: "3. Contenu Premium",
      termsContentText: "Premium donne un accès illimité à toute la bibliothèque de berceuses, aux mix IA, aux enregistrements personnels illimités, aux tableaux d'analyses, aux thèmes de chambre et aux icônes personnalisées. Lifetime Premium reste actif définitivement ; Monthly Premium reste actif tant que l'abonnement est payé.",
      termsRefundsTitle: "4. Paiements et remboursements",
      termsRefundsText: "La facturation, les renouvellements et les remboursements sont régis par les Conditions des services multimédias d'Apple. Le développeur ne traite pas les paiements ou remboursements directement.",
      termsPrivacyTitle: "5. Confidentialité",
      termsPrivacyTextPart1: "L'App ne collecte aucune donnée personnelle. Les berceuses, réglages du coucher et enregistrements restent sur votre appareil.",
      termsPrivacyInlineLink: "Politique de confidentialité",
      termsPrivacyTextPart2: "détaille la protection des informations de votre famille.",
      termsIPTitle: "6. Propriété intellectuelle",
      termsIPText: "Tout le contenu, le design et la marque de l'App appartiennent au développeur. Vous ne pouvez pas copier, modifier ou redistribuer l'App sans autorisation écrite.",
      termsTerminationTitle: "7. Fin et modifications",
      termsTerminationText: "Vous pouvez arrêter d'utiliser l'App à tout moment en la supprimant. Nous pouvons mettre à jour des fonctionnalités et ces Conditions périodiquement.",
      termsContactTitle: "8. Contact",
      termsContactText: "Pour toute question concernant ces Conditions, contactez-nous :",
      termsContactEmail: "smfedorov.iosdev@gmail.com",
      termsSummaryTitle: "9. Résumé local",
      termsSummaryText: "GlowLab AI Baby Sleep fonctionne sur iPhone, iPad et Apple Watch. Lifetime Premium est un achat unique ; Monthly Premium se renouvelle chaque mois jusqu'à annulation dans les réglages Apple. L'app stocke les berceuses, enregistrements et réglages sur votre appareil et ne conserve aucune donnée personnelle de bébé. Questions ? smfedorov.iosdev@gmail.com."
    }
  },
  home: {
    en: {
      heroBadge: "Sleep support for little dreamers",
      heroTitle: "Soothe your baby with GlowLab AI",
      heroSubtitle: "GlowLab AI blends AI lullabies with calming visuals so babies fall asleep faster and stay asleep longer.",
      heroPrimaryCta: "Download on the App Store",
      heroSecondaryCta: "Contact support",
      heroNote: "GlowLab AI is available on the App Store.",
      heroPointOne: "Start comforting loops with one tap, no ads or sign-ups.",
      heroPointTwo: "Gentle crossfades keep lullabies seamless through the night.",
      heroPointThree: "Automatic timer and Apple Watch controls for middle-of-the-night tweaks.",
      featuresTitle: "Baby sleep essentials",
      feature1Title: "Adaptive AI lullabies",
      feature1Body: "Let GlowLab mix white noise, shushing, and melodies based on your baby's mood.",
      feature2Title: "Soft nursery visuals",
      feature2Body: "Project pastel animations that calm the room without overstimulation.",
      feature3Title: "Smart sleep timer",
      feature3Body: "Fade lullabies when your little one drifts off or keep gentle noise overnight.",
      feature4Title: "Apple Watch companion",
      feature4Body: "Soothe from your wrist with haptic cues while holding your baby.",
      screenshotsTitle: "Inside GlowLab AI",
      screenshotsSubtitle: "Preview the baby sleep experience before you download.",
      screenshotsPhoneTitle: "iPhone",
      screenshotsWatchTitle: "Apple Watch",
      screenshotsIpadTitle: "iPad"
    },
    es: {
      heroBadge: "Sueño tranquilo para bebés",
      heroTitle: "Calma a tu bebé con GlowLab AI",
      heroSubtitle: "GlowLab AI combina nanas generadas con IA y visuales calmantes para que los bebés se duerman antes y duerman más tiempo.",
      heroPrimaryCta: "Descargar en App Store",
      heroSecondaryCta: "Contactar soporte",
      heroNote: "GlowLab AI ya está disponible en App Store.",
      heroPointOne: "Activa bucles reconfortantes con un toque, sin anuncios ni registros.",
      heroPointTwo: "Fundidos suaves mantienen las nanas sin interrupciones toda la noche.",
      heroPointThree: "Temporizador automático y controles desde Apple Watch para ajustar en mitad de la noche.",
      featuresTitle: "Claves para el sueño del bebé",
      feature1Title: "Nanas adaptativas con IA",
      feature1Body: "Deja que GlowLab combine ruido blanco, shh y melodías según el estado de tu bebé.",
      feature2Title: "Visuales suaves para la habitación",
      feature2Body: "Proyecta animaciones en tonos pastel que relajan sin sobreestimular.",
      feature3Title: "Temporizador inteligente",
      feature3Body: "Atenúa las nanas cuando el pequeño se duerma o mantén ruido suave toda la noche.",
      feature4Title: "Compañero Apple Watch",
      feature4Body: "Calma desde tu muñeca con señales hápticas mientras sostienes al bebé.",
      screenshotsTitle: "Dentro de GlowLab AI",
      screenshotsSubtitle: "Descubre la experiencia pensada para la hora de dormir.",
      screenshotsPhoneTitle: "iPhone",
      screenshotsWatchTitle: "Apple Watch",
      screenshotsIpadTitle: "iPad"
    },
    ru: {
      heroBadge: "Спокойный сон для малышей",
      heroTitle: "Укладывайте малыша с GlowLab AI",
      heroSubtitle: "GlowLab AI сочетает ИИ-колыбельные и мягкие визуальные эффекты, чтобы дети засыпали быстрее и спали дольше.",
      heroPrimaryCta: "Скачать в App Store",
      heroSecondaryCta: "Связаться с поддержкой",
      heroNote: "GlowLab AI уже доступно в App Store.",
      heroPointOne: "Запускайте успокаивающие петли в одно касание - без рекламы и регистрации.",
      heroPointTwo: "Плавные перетекания удерживают колыбельные без пауз всю ночь.",
      heroPointThree: "Автоматический таймер и управление с Apple Watch помогают незаметно корректировать звук ночью.",
      featuresTitle: "Преимущества для детского сна",
      feature1Title: "Адаптивные ИИ-колыбельные",
      feature1Body: "GlowLab смешивает белый шум, шипение и мелодии по настроению малыша.",
      feature2Title: "Нежные визуализации для комнаты",
      feature2Body: "Показывайте пастельные анимации, которые успокаивают без переизбытка стимулов.",
      feature3Title: "Умный таймер сна",
      feature3Body: "Плавно приглушайте звук, когда малыш заснёт, или оставьте тихий фон на всю ночь.",
      feature4Title: "Компаньон Apple Watch",
      feature4Body: "Управляйте со запястья с мягкой тактильной отдачей, пока держите ребёнка.",
      screenshotsTitle: "Интерфейс GlowLab AI",
      screenshotsSubtitle: "Посмотрите, как приложение помогает укладывать малыша.",
      screenshotsPhoneTitle: "iPhone",
      screenshotsWatchTitle: "Apple Watch",
      screenshotsIpadTitle: "iPad"
    },
    de: {
      heroBadge: "Sanfter Babyschlaf mit System",
      heroTitle: "Beruhige dein Baby mit GlowLab AI",
      heroSubtitle: "GlowLab AI kombiniert KI-Nanas und beruhigende Visuals, damit Babys schneller einschlafen und länger durchschlafen.",
      heroPrimaryCta: "Im App Store laden",
      heroSecondaryCta: "Support kontaktieren",
      heroNote: "GlowLab AI ist jetzt im App Store verfügbar.",
      heroPointOne: "Starte beruhigende Loops mit einem Tipp - ohne Werbung oder Registrierung.",
      heroPointTwo: "Sanfte Überblendungen halten die Nanas die ganze Nacht nahtlos.",
      heroPointThree: "Automatischer Timer und Apple-Watch-Steuerung für Anpassungen mitten in der Nacht.",
      featuresTitle: "Highlights für besseren Babyschlaf",
      feature1Title: "Adaptive KI-Nanas",
      feature1Body: "GlowLab mischt Weißrauschen, Shushing und Melodien passend zur Stimmung deines Babys.",
      feature2Title: "Weiche Nursery-Visuals",
      feature2Body: "Projiziere pastellige Animationen, die beruhigen, ohne zu überreizen.",
      feature3Title: "Intelligenter Schlaf-Timer",
      feature3Body: "Blendet die Nanas aus, wenn dein Baby einschläft, oder sorgt für leisen Hintergrund die ganze Nacht.",
      feature4Title: "Apple-Watch-Begleiter",
      feature4Body: "Beruhige vom Handgelenk mit sanften Haptics, während du dein Baby hältst.",
      screenshotsTitle: "Einblick in GlowLab AI",
      screenshotsSubtitle: "Sieh dir die Einschlafhilfe für die Kleinsten an.",
      screenshotsPhoneTitle: "iPhone",
      screenshotsWatchTitle: "Apple Watch",
      screenshotsIpadTitle: "iPad"
    },
    it: {
      heroBadge: "Sonno sereno per i più piccoli",
      heroTitle: "Calma il tuo bambino con GlowLab AI",
      heroSubtitle: "GlowLab AI unisce ninne nanne generate dall'IA e visual rilassanti per aiutare i bebè ad addormentarsi prima e dormire più a lungo.",
      heroPrimaryCta: "Scarica su App Store",
      heroSecondaryCta: "Contatta il supporto",
      heroNote: "GlowLab AI è disponibile su App Store.",
      heroPointOne: "Avvia loop rassicuranti con un tocco, senza pubblicità né registrazioni.",
      heroPointTwo: "Dolci dissolvenze mantengono le ninne nanne senza interruzioni tutta la notte.",
      heroPointThree: "Timer automatico e controlli Apple Watch per regolazioni notturne.",
      featuresTitle: "Punti di forza per il sonno del bebè",
      feature1Title: "Ninne nanne adattive con IA",
      feature1Body: "GlowLab combina rumore bianco, shhh e melodie in base all'umore del tuo bambino.",
      feature2Title: "Visual morbidi per la cameretta",
      feature2Body: "Proietta animazioni pastello che rilassano senza sovrastimolare.",
      feature3Title: "Timer intelligente per la nanna",
      feature3Body: "Sfuma le ninne nanne quando il piccolo si addormenta o mantieni un rumore leggero tutta la notte.",
      feature4Title: "Compagno Apple Watch",
      feature4Body: "Calma dal polso con feedback aptici mentre tieni il bebè in braccio.",
      screenshotsTitle: "Dentro GlowLab AI",
      screenshotsSubtitle: "Scopri l'esperienza pensata per la nanna.",
      screenshotsPhoneTitle: "iPhone",
      screenshotsWatchTitle: "Apple Watch",
      screenshotsIpadTitle: "iPad"
    },
    fr: {
      heroBadge: "Sommeil paisible pour bébé",
      heroTitle: "Apaisez votre bébé avec GlowLab AI",
      heroSubtitle: "GlowLab AI associe berceuses générées par IA et visuels apaisants pour aider les bébés à s'endormir plus vite et dormir plus longtemps.",
      heroPrimaryCta: "Télécharger sur l'App Store",
      heroSecondaryCta: "Contacter le support",
      heroNote: "GlowLab AI est disponible sur l'App Store.",
      heroPointOne: "Lancez des boucles rassurantes en un geste, sans publicité ni inscription.",
      heroPointTwo: "Des fondus doux maintiennent les berceuses sans interruption toute la nuit.",
      heroPointThree: "Minuterie automatique et contrôles Apple Watch pour ajuster en pleine nuit.",
      featuresTitle: "Atouts pour le sommeil de bébé",
      feature1Title: "Berceuses adaptatives IA",
      feature1Body: "GlowLab mêle bruit blanc, chuchotements et mélodies selon l'humeur de votre bébé.",
      feature2Title: "Visuels doux pour la chambre",
      feature2Body: "Diffusez des animations pastel qui apaisent sans surstimuler.",
      feature3Title: "Minuterie intelligente",
      feature3Body: "Atténuez la berceuse quand bébé s'endort ou gardez un fond sonore léger toute la nuit.",
      feature4Title: "Compagnon Apple Watch",
      feature4Body: "Apaisez depuis votre poignet avec des retours haptiques tout en tenant votre bébé.",
      screenshotsTitle: "À l'intérieur de GlowLab AI",
      screenshotsSubtitle: "Découvrez l'aide au coucher avant de la télécharger.",
      screenshotsPhoneTitle: "iPhone",
      screenshotsWatchTitle: "Apple Watch",
      screenshotsIpadTitle: "iPad"
    }
  },
  privacy: {
    en: {
      privacyBadge: "Effective March 2025",
      privacyTitle: "GlowLab AI Privacy Policy",
      privacyLead: "We keep your family's bedtime moments private and on your device.",
      privacyOverviewTitle: "1. What this policy covers",
      privacyOverviewText: "This privacy policy explains how GlowLab AI Baby Sleep handles information within the iOS and watchOS applications and any companion websites.",
      privacyDataTitle: "2. Data GlowLab AI does not collect",
      privacyDataText: "GlowLab AI does not require you to create an account and does not collect personal data about you or your baby. Lullaby choices, timers, and nursery preferences remain on your device.",
      privacyOnDeviceTitle: "3. On-device processing",
      privacyOnDeviceText: "Custom mixes, playback states, and night-light visuals are stored in Apple-protected storage on your device. If you delete the app, iOS removes these items automatically. GlowLab AI does not transmit audio or baby information to external servers.",
      privacyPurchasesTitle: "4. Purchases and subscriptions",
      privacyPurchasesText: "If you choose to buy GlowLab AI Premium, the transaction is handled by Apple using your App Store account. We receive confirmation of the purchase status only; no billing or payment details are shared with us.",
      privacyAnalyticsTitle: "5. Diagnostics and analytics",
      privacyAnalyticsText: "We rely on aggregated, anonymous analytics provided by Apple, such as crash reports and basic usage trends, to understand app performance. You can disable sharing diagnostics with developers in iOS Settings > Privacy & Security > Analytics & Improvements.",
      privacyRightsTitle: "6. Your choices",
      privacyRightsText: "You can clear bedtime history and reset settings at any time inside the app. Removing GlowLab AI from your device deletes all related data. Contact us if you want to request additional privacy actions.",
      privacyContactTitle: "7. Contact",
      privacyContactText: "Email our privacy team:",
      privacyContactEmail: "smfedorov.iosdev@gmail.com",
      privacyContactResponse: "We typically respond within two business days.",
      privacyTermsButton: "Terms of Usage"
    },
    es: {
      privacyBadge: "Vigente desde marzo de 2025",
      privacyTitle: "Política de privacidad de GlowLab AI",
      privacyLead: "Protegemos los momentos de sueño de tu familia en tu propio dispositivo.",
      privacyOverviewTitle: "1. Qué cubre esta política",
      privacyOverviewText: "Esta política de privacidad explica cómo GlowLab AI Baby Sleep maneja la información dentro de las aplicaciones para iOS y watchOS y cualquier sitio web complementario.",
      privacyDataTitle: "2. Datos que GlowLab AI no recopila",
      privacyDataText: "GlowLab AI no requiere que crees una cuenta ni recopila datos personales sobre ti o tu bebé. Las nanas elegidas, los temporizadores y los ajustes de la habitación permanecen en tu dispositivo.",
      privacyOnDeviceTitle: "3. Procesamiento en el dispositivo",
      privacyOnDeviceText: "Las mezclas personalizadas, estados de reproducción y visuales nocturnos se guardan en el almacenamiento protegido de Apple. Si eliminas la app, iOS borra estos datos automáticamente. GlowLab AI no envía audio ni información del bebé a servidores externos.",
      privacyPurchasesTitle: "4. Compras y suscripciones",
      privacyPurchasesText: "Si compras GlowLab AI Premium, la transacción la gestiona Apple con tu cuenta de App Store. Solo recibimos la confirmación del estado de la compra; no se comparten datos de facturación ni pagos.",
      privacyAnalyticsTitle: "5. Diagnósticos y analíticas",
      privacyAnalyticsText: "Usamos analíticas agregadas y anónimas de Apple, como informes de fallos y tendencias básicas, para entender el rendimiento. Puedes desactivar Compartir análisis con desarrolladores en Ajustes > Privacidad y seguridad > Análisis y mejoras.",
      privacyRightsTitle: "6. Tus opciones",
      privacyRightsText: "Puedes borrar el historial de sueño y restablecer la app en cualquier momento. Al eliminar GlowLab AI de tu dispositivo se borran todos los datos relacionados. Escríbenos si necesitas acciones adicionales de privacidad.",
      privacyContactTitle: "7. Contacto",
      privacyContactText: "Envía un correo a nuestro equipo de privacidad:",
      privacyContactEmail: "smfedorov.iosdev@gmail.com",
      privacyContactResponse: "Respondemos normalmente en un plazo de dos días hábiles.",
      privacyTermsButton: "Términos de uso"
    },
    ru: {
      privacyBadge: "Актуально с марта 2025 года",
      privacyTitle: "Политика конфиденциальности GlowLab AI",
      privacyLead: "Мы защищаем ваши семейные ритуалы засыпания и храним данные на устройстве.",
      privacyOverviewTitle: "1. Что охватывает эта политика",
      privacyOverviewText: "Эта политика конфиденциальности объясняет, как GlowLab AI Baby Sleep обрабатывает информацию в приложениях для iOS и watchOS, а также на связанных веб-сайтах.",
      privacyDataTitle: "2. Данные, которые GlowLab AI не собирает",
      privacyDataText: "GlowLab AI не требует регистрации и не собирает персональные данные о вас или вашем малыше. Выбор колыбельных, таймеров и оформление комнаты остаются на вашем устройстве.",
      privacyOnDeviceTitle: "3. Обработка на устройстве",
      privacyOnDeviceText: "Персональные миксы, состояния воспроизведения и ночные визуализации хранятся в защищенном хранилище Apple на вашем устройстве. При удалении приложения iOS автоматически стирает эти данные. GlowLab AI не передает аудио или сведения о ребёнке на внешние серверы.",
      privacyPurchasesTitle: "4. Покупки и подписки",
      privacyPurchasesText: "Если вы покупаете GlowLab AI Premium, платеж обрабатывается Apple через ваш аккаунт App Store. Мы получаем только информацию о статусе покупки; платежные данные нам не передаются.",
      privacyAnalyticsTitle: "5. Диагностика и аналитика",
      privacyAnalyticsText: "Мы используем агрегированные анонимные данные Apple - отчеты о сбоях и базовые тенденции использования - чтобы понимать работу приложения. Вы можете отключить 'Делиться аналитикой с разработчиками' в Настройки iOS > Конфиденциальность и безопасность > Аналитика и улучшения.",
      privacyRightsTitle: "6. Ваши возможности",
      privacyRightsText: "Вы можете очистить историю сна и сбросить настройки в приложении в любой момент. Удаление GlowLab AI с устройства стирает все связанные данные. Свяжитесь с нами для дополнительных запросов по конфиденциальности.",
      privacyContactTitle: "7. Контакты",
      privacyContactText: "Напишите нашей команде по конфиденциальности:",
      privacyContactEmail: "smfedorov.iosdev@gmail.com",
      privacyContactResponse: "Обычно отвечаем в течение двух рабочих дней.",
      privacyTermsButton: "Условия использования"
    },
    de: {
      privacyBadge: "Gültig ab März 2025",
      privacyTitle: "GlowLab AI Datenschutzrichtlinie",
      privacyLead: "Wir schützen eure Einschlafmomente und speichern Daten nur auf deinem Gerät.",
      privacyOverviewTitle: "1. Umfang dieser Richtlinie",
      privacyOverviewText: "Diese Datenschutzrichtlinie erklärt, wie GlowLab AI Baby Sleep Informationen in den iOS- und watchOS-Apps sowie auf zugehörigen Websites verarbeitet.",
      privacyDataTitle: "2. Daten, die GlowLab AI nicht sammelt",
      privacyDataText: "GlowLab AI verlangt kein Konto und sammelt keine personenbezogenen Daten über dich oder dein Baby. Alle Lullaby-Auswahlen, Timer und Raumeinstellungen bleiben auf deinem Gerät.",
      privacyOnDeviceTitle: "3. Verarbeitung auf dem Gerät",
      privacyOnDeviceText: "Individuelle Mixes, Wiedergabestatus und Nachtlicht-Visuals werden im von Apple geschützten Speicher deines Geräts gespeichert. Wenn du die App löschst, entfernt iOS diese Daten automatisch. GlowLab AI überträgt keine Audios oder Babyinformationen an externe Server.",
      privacyPurchasesTitle: "4. Käufe und Abonnements",
      privacyPurchasesText: "Wenn du GlowLab AI Premium kaufst, wird die Transaktion von Apple über deinen App-Store-Account abgewickelt. Wir erhalten nur die Bestätigung über den Kaufstatus; Zahlungsdaten werden nicht an uns weitergegeben.",
      privacyAnalyticsTitle: "5. Diagnosen und Analysen",
      privacyAnalyticsText: "Wir stützen uns auf aggregierte, anonyme Analysen von Apple, z. B. Absturzberichte und grundlegende Nutzungstrends, um die Leistung zu verstehen. Du kannst das Teilen von Analysen unter Einstellungen > Datenschutz & Sicherheit > Analyse & Verbesserungen deaktivieren.",
      privacyRightsTitle: "6. Deine Wahlmöglichkeiten",
      privacyRightsText: "Du kannst Schlafverläufe löschen und die Einstellungen jederzeit in der App zurücksetzen. Durch das Entfernen von GlowLab AI vom Gerät werden alle zugehörigen Daten gelöscht. Kontaktiere uns für weitere Datenschutzanfragen.",
      privacyContactTitle: "7. Kontakt",
      privacyContactText: "Schreibe an unser Datenschutzteam:",
      privacyContactEmail: "smfedorov.iosdev@gmail.com",
      privacyContactResponse: "Wir antworten in der Regel innerhalb von zwei Werktagen.",
      privacyTermsButton: "Nutzungsbedingungen"
    },
    it: {
      privacyBadge: "In vigore da marzo 2025",
      privacyTitle: "Informativa sulla privacy di GlowLab AI",
      privacyLead: "Proteggiamo i momenti della nanna della tua famiglia sul tuo dispositivo.",
      privacyOverviewTitle: "1. Ambito di questa informativa",
      privacyOverviewText: "Questa informativa spiega come GlowLab AI Baby Sleep gestisce le informazioni nelle app iOS e watchOS e nei siti web collegati.",
      privacyDataTitle: "2. Dati che GlowLab AI non raccoglie",
      privacyDataText: "GlowLab AI non richiede la creazione di un account e non raccoglie dati personali su di te o sul tuo bambino. Scelte di ninne nanne, timer e impostazioni della cameretta restano sul dispositivo.",
      privacyOnDeviceTitle: "3. Elaborazione sul dispositivo",
      privacyOnDeviceText: "Mix personalizzati, stato di riproduzione e visual notturni sono archiviati nello spazio protetto da Apple sul tuo dispositivo. Eliminando l'app, iOS rimuove automaticamente questi dati. GlowLab AI non invia audio né informazioni sul bebè a server esterni.",
      privacyPurchasesTitle: "4. Acquisti e abbonamenti",
      privacyPurchasesText: "Se acquisti GlowLab AI Premium, la transazione è gestita da Apple tramite il tuo account App Store. Riceviamo solo la conferma dello stato dell'acquisto; i dettagli di pagamento non ci vengono comunicati.",
      privacyAnalyticsTitle: "5. Diagnostica e analisi",
      privacyAnalyticsText: "Ci basiamo su analisi aggregate e anonime fornite da Apple, come report sugli arresti anomali e tendenze d'uso, per comprendere le prestazioni. Puoi disattivare Condividi analisi con gli sviluppatori in Impostazioni > Privacy e sicurezza > Analisi e miglioramenti.",
      privacyRightsTitle: "6. Le tue scelte",
      privacyRightsText: "Puoi cancellare la cronologia del sonno e ripristinare le impostazioni in qualsiasi momento. Rimuovendo GlowLab AI dal dispositivo elimini tutti i dati associati. Contattaci per eventuali richieste aggiuntive sulla privacy.",
      privacyContactTitle: "7. Contatti",
      privacyContactText: "Scrivi al nostro team privacy:",
      privacyContactEmail: "smfedorov.iosdev@gmail.com",
      privacyContactResponse: "Rispondiamo di solito entro due giorni lavorativi.",
      privacyTermsButton: "Termini di utilizzo"
    },
    fr: {
      privacyBadge: "En vigueur depuis mars 2025",
      privacyTitle: "Politique de confidentialité de GlowLab AI",
      privacyLead: "Nous préservons vos moments de coucher en famille directement sur votre appareil.",
      privacyOverviewTitle: "1. Portée de cette politique",
      privacyOverviewText: "Cette politique de confidentialité explique comment GlowLab AI Baby Sleep gère les informations dans les applications iOS et watchOS ainsi que sur les sites associés.",
      privacyDataTitle: "2. Données que GlowLab AI ne collecte pas",
      privacyDataText: "GlowLab AI ne nécessite pas de créer un compte et ne collecte aucune donnée personnelle sur vous ou votre bébé. Les berceuses choisies, les minuteries et les réglages de la chambre restent sur votre appareil.",
      privacyOnDeviceTitle: "3. Traitement sur l'appareil",
      privacyOnDeviceText: "Les mixes personnalisés, l'état de lecture et les visuels nocturnes sont stockés dans l'espace protégé par Apple de votre appareil. Si vous supprimez l'app, iOS efface automatiquement ces données. GlowLab AI n'envoie aucun audio ni information sur bébé à des serveurs externes.",
      privacyPurchasesTitle: "4. Achats et abonnements",
      privacyPurchasesText: "Si vous achetez GlowLab AI Premium, la transaction est gérée par Apple via votre compte App Store. Nous recevons uniquement la confirmation de l'état d'achat ; aucun détail de paiement ne nous est transmis.",
      privacyAnalyticsTitle: "5. Diagnostics et analyses",
      privacyAnalyticsText: "Nous utilisons les analyses agrégées et anonymes fournies par Apple, comme les rapports de plantage et les tendances d'usage, pour comprendre les performances. Vous pouvez désactiver Partager les analyses avec les développeurs dans Réglages > Confidentialité et sécurité > Analyses et améliorations.",
      privacyRightsTitle: "6. Vos choix",
      privacyRightsText: "Vous pouvez effacer l'historique de coucher et réinitialiser les réglages à tout moment. La suppression de GlowLab AI de votre appareil efface toutes les données associées. Contactez-nous pour toute demande supplémentaire.",
      privacyContactTitle: "7. Contact",
      privacyContactText: "Envoyez un e-mail à notre équipe confidentialité :",
      privacyContactEmail: "smfedorov.iosdev@gmail.com",
      privacyContactResponse: "Nous répondons généralement sous deux jours ouvrables.",
      privacyTermsButton: "Conditions d'utilisation"
    }
  },
  support: {
    en: {
      supportBadge: "Need bedtime help?",
      supportTitle: "GlowLab AI Support",
      supportLead: "Find quick fixes, bedtime tips, or contact the team directly.",
      supportCard1Title: "If lullabies are silent",
      supportCard1Body: "Bring the sound back before your baby wakes.",
      supportCard1Step1: "Make sure the device isn't muted and system volume is above 50%.",
      supportCard1Step2: "Open GlowLab AI, pause the lullaby, wait three seconds, then press play.",
      supportCard1Step3: "Restart your device if audio is missing in other apps too.",
      supportCard2Title: "Restore Premium lullabies",
      supportCard2Body: "Use App Store purchase history to unlock existing purchases.",
      supportCard2Step1: "Open GlowLab AI -> Settings -> Premium.",
      supportCard2Step2: "Tap \"Restore purchases\" and confirm with your Apple ID.",
      supportCard2Step3: "Ensure you are signed in with the same Apple ID used for the original purchase.",
      supportCard3Title: "Suggest baby sleep sounds",
      supportCard3Body: "Your feedback helps us create better bedtime content.",
      supportCard3Step1: "Tell us which noises or melodies calm your baby best.",
      supportCard3Step2: "Include your device model and iOS version for context.",
      supportCard3Step3: "Attach a short video or note about your bedtime routine if that helps.",
      supportContactTitle: "Contact us",
      supportContactText: "Email our support team with a description of the bedtime issue or idea.",
      supportContactEmail: "smfedorov.iosdev@gmail.com",
      supportMetaTime: "We reply within two business days.",
      supportMetaLanguages: "Support available in English, Spanish, and Russian."
    },
    es: {
      supportBadge: "¿Necesitas ayuda con la hora de dormir?",
      supportTitle: "Soporte de GlowLab AI",
      supportLead: "Encuentra soluciones rápidas, consejos para la hora de dormir o contacta al equipo.",
      supportCard1Title: "Si las nanas no suenan",
      supportCard1Body: "Recupera el audio antes de que tu bebé despierte.",
      supportCard1Step1: "Verifica que el dispositivo no esté en silencio y que el volumen supere el 50%.",
      supportCard1Step2: "Abre GlowLab AI, pausa la nana, espera tres segundos y vuelve a reproducir.",
      supportCard1Step3: "Reinicia el dispositivo si el audio falta también en otras apps.",
      supportCard2Title: "Restaurar nanas Premium",
      supportCard2Body: "Usa el historial de compras de App Store para recuperar tus compras.",
      supportCard2Step1: "Abre GlowLab AI -> Ajustes -> Premium.",
      supportCard2Step2: "Toca \"Restaurar compras\" y confirma con tu Apple ID.",
      supportCard2Step3: "Verifica que usas el mismo Apple ID de la compra original.",
      supportCard3Title: "Propón nuevos sonidos para bebés",
      supportCard3Body: "Tu opinión nos ayuda a crear mejor contenido para la noche.",
      supportCard3Step1: "Cuéntanos qué ruidos o melodías calman más a tu bebé.",
      supportCard3Step2: "Incluye el modelo de tu dispositivo y la versión de iOS como referencia.",
      supportCard3Step3: "Adjunta un video corto o notas sobre tu rutina si ayuda a explicar la idea.",
      supportContactTitle: "Contáctanos",
      supportContactText: "Escribe al equipo con una descripción del problema o idea para la hora de dormir.",
      supportContactEmail: "smfedorov.iosdev@gmail.com",
      supportMetaTime: "Respondemos en un plazo de dos días hábiles.",
      supportMetaLanguages: "Soporte disponible en inglés, español y ruso."
    },
    ru: {
      supportBadge: "Нужна помощь с укладыванием?",
      supportTitle: "Поддержка GlowLab AI",
      supportLead: "Найдите быстрые решения, советы по укладыванию или свяжитесь с командой напрямую.",
      supportCard1Title: "Если колыбельные молчат",
      supportCard1Body: "Верните звук, пока малыш не проснулся.",
      supportCard1Step1: "Убедитесь, что устройство не в беззвучном режиме и громкость выше 50%.",
      supportCard1Step2: "Откройте GlowLab AI, поставьте колыбельную на паузу, подождите три секунды и запустите вновь.",
      supportCard1Step3: "Перезагрузите устройство, если звук пропал и в других приложениях.",
      supportCard2Title: "Восстановить Premium-колыбельные",
      supportCard2Body: "Используйте историю покупок App Store, чтобы вернуть доступ.",
      supportCard2Step1: "Откройте GlowLab AI -> Настройки -> Premium.",
      supportCard2Step2: "Нажмите \"Восстановить покупки\" и подтвердите Apple ID.",
      supportCard2Step3: "Убедитесь, что вы вошли под тем же Apple ID, что и при покупке.",
      supportCard3Title: "Предложите звуки для сна малыша",
      supportCard3Body: "Ваши идеи помогают делать приложение лучше для ночного ухода.",
      supportCard3Step1: "Расскажите, какие шумы или мелодии лучше всего успокаивают вашего ребёнка.",
      supportCard3Step2: "Укажите модель устройства и версию iOS для контекста.",
      supportCard3Step3: "Прикрепите короткое видео или описание вашей вечерней рутины, если это полезно.",
      supportContactTitle: "Свяжитесь с нами",
      supportContactText: "Напишите в службу поддержки, описав проблему или идею, связанную с укладыванием.",
      supportContactEmail: "smfedorov.iosdev@gmail.com",
      supportMetaTime: "Отвечаем в течение двух рабочих дней.",
      supportMetaLanguages: "Поддержка доступна на английском, испанском и русском языках."
    },
    de: {
      supportBadge: "Braucht ihr Einschlafhilfe?",
      supportTitle: "GlowLab AI Support",
      supportLead: "Finde schnelle Lösungen, Einschlaftipps oder kontaktiere das Team direkt.",
      supportCard1Title: "Wenn die Nanas stumm bleiben",
      supportCard1Body: "Bring den Ton zurück, bevor dein Baby aufwacht.",
      supportCard1Step1: "Stelle sicher, dass das Gerät nicht stumm ist und die Lautstärke über 50% liegt.",
      supportCard1Step2: "Öffne GlowLab AI, pausiere die Nana, warte drei Sekunden und starte erneut.",
      supportCard1Step3: "Starte dein Gerät neu, wenn auch andere Apps keinen Ton haben.",
      supportCard2Title: "Premium-Nanas wiederherstellen",
      supportCard2Body: "Nutze den App-Store-Kaufverlauf, um frühere Käufe zu aktivieren.",
      supportCard2Step1: "Öffne GlowLab AI -> Einstellungen -> Premium.",
      supportCard2Step2: "Tippe auf \"Käufe wiederherstellen\" und bestätige mit deiner Apple-ID.",
      supportCard2Step3: "Stelle sicher, dass du mit derselben Apple-ID angemeldet bist wie beim ursprünglichen Kauf.",
      supportCard3Title: "Neue Babyschlafsounds vorschlagen",
      supportCard3Body: "Dein Feedback hilft uns, bessere Inhalte für die Nacht zu bauen.",
      supportCard3Step1: "Sag uns, welche Geräusche oder Melodien dein Baby am besten beruhigen.",
      supportCard3Step2: "Nenne dein Gerätemodell und die iOS-Version als Kontext.",
      supportCard3Step3: "Füge ein kurzes Video oder Notizen zu eurer Abendroutine bei, wenn das hilft.",
      supportContactTitle: "Kontaktiere uns",
      supportContactText: "Schreibe dem Support-Team eine Beschreibung des Einschlaf-Problems oder deiner Idee.",
      supportContactEmail: "smfedorov.iosdev@gmail.com",
      supportMetaTime: "Wir antworten innerhalb von zwei Werktagen.",
      supportMetaLanguages: "Support verfügbar auf Englisch, Spanisch und Russisch."
    },
    it: {
      supportBadge: "Serve aiuto per la nanna?",
      supportTitle: "Supporto GlowLab AI",
      supportLead: "Trova soluzioni rapide, consigli per la nanna o contatta il team.",
      supportCard1Title: "Se le ninne nanne sono mute",
      supportCard1Body: "Riporta l'audio prima che il piccolo si svegli.",
      supportCard1Step1: "Assicurati che il dispositivo non sia in silenzioso e che il volume superi il 50%.",
      supportCard1Step2: "Apri GlowLab AI, metti in pausa la ninna nanna, attendi tre secondi e riproduci di nuovo.",
      supportCard1Step3: "Riavvia il dispositivo se l'audio manca anche in altre app.",
      supportCard2Title: "Ripristina le ninne nanne Premium",
      supportCard2Body: "Usa la cronologia degli acquisti App Store per sbloccare gli acquisti esistenti.",
      supportCard2Step1: "Apri GlowLab AI -> Impostazioni -> Premium.",
      supportCard2Step2: "Tocca \"Ripristina acquisti\" e conferma con l'Apple ID.",
      supportCard2Step3: "Verifica di aver effettuato l'accesso con lo stesso Apple ID dell'acquisto iniziale.",
      supportCard3Title: "Suggerisci suoni per il sonno del bebè",
      supportCard3Body: "Il tuo feedback ci aiuta a creare contenuti migliori per la notte.",
      supportCard3Step1: "Dicci quali rumori o melodie calmano di più il tuo bambino.",
      supportCard3Step2: "Indica il modello del dispositivo e la versione di iOS per contesto.",
      supportCard3Step3: "Allega un breve video o note sulla tua routine della nanna se può essere utile.",
      supportContactTitle: "Contattaci",
      supportContactText: "Invia al supporto una descrizione del problema o dell'idea legata alla nanna.",
      supportContactEmail: "smfedorov.iosdev@gmail.com",
      supportMetaTime: "Rispondiamo entro due giorni lavorativi.",
      supportMetaLanguages: "Supporto disponibile in inglese, spagnolo e russo."
    },
    fr: {
      supportBadge: "Besoin d'aide pour le coucher ?",
      supportTitle: "Support GlowLab AI",
      supportLead: "Trouvez des solutions rapides, des conseils pour le coucher ou contactez l'équipe.",
      supportCard1Title: "Si les berceuses sont muettes",
      supportCard1Body: "Restaurez le son avant que bébé ne se réveille.",
      supportCard1Step1: "Vérifiez que l'appareil n'est pas en mode silencieux et que le volume dépasse 50%.",
      supportCard1Step2: "Ouvrez GlowLab AI, mettez la berceuse en pause, attendez trois secondes puis relancez.",
      supportCard1Step3: "Redémarrez l'appareil si le son manque aussi dans d'autres apps.",
      supportCard2Title: "Restaurer les berceuses Premium",
      supportCard2Body: "Utilisez l'historique d'achats App Store pour réactiver vos achats.",
      supportCard2Step1: "Ouvrez GlowLab AI -> Réglages -> Premium.",
      supportCard2Step2: "Touchez \"Restaurer les achats\" et confirmez avec votre identifiant Apple.",
      supportCard2Step3: "Assurez-vous d'être connecté avec le même identifiant Apple que lors de l'achat.",
      supportCard3Title: "Proposer des sons pour le sommeil de bébé",
      supportCard3Body: "Vos retours nous aident à créer un meilleur contenu pour le coucher.",
      supportCard3Step1: "Dites-nous quels bruits ou mélodies apaisent le mieux votre bébé.",
      supportCard3Step2: "Précisez le modèle de l'appareil et la version d'iOS pour le contexte.",
      supportCard3Step3: "Ajoutez une courte vidéo ou des notes sur votre routine du soir si cela aide.",
      supportContactTitle: "Contactez-nous",
      supportContactText: "Envoyez au support une description du problème ou de l'idée liée au coucher.",
      supportContactEmail: "smfedorov.iosdev@gmail.com",
      supportMetaTime: "Nous répondons sous deux jours ouvrables.",
      supportMetaLanguages: "Support disponible en anglais, espagnol et russe."
    }
  },
  copyright: {
    en: {
      copyrightBadge: "Brand guidelines",
      copyrightTitle: "GlowLab AI Copyright Notice",
      copyrightLead: "Understand how to reference GlowLab AI assets in press, reviews, and promotions.",
      copyrightAppTitle: "1. Ownership",
      copyrightAppText: "GlowLab AI, including all code, design elements, visuals, sounds, and documentation, is owned by the GlowLab AI team. All rights are reserved unless you receive written permission stating otherwise.",
      copyrightAssetsTitle: "2. Screenshots and media",
      copyrightAssetsText: "Official screenshots, iconography, and promotional graphics may be used for editorial coverage of GlowLab AI as long as the assets are not altered beyond simple resizing or cropping.",
      copyrightUsageTitle: "3. Permitted uses",
      copyrightUsageItem1: "Share GlowLab AI publicly with clear attribution.",
      copyrightUsageItem2: "Publish reviews, tutorials, or educational content using original screenshots.",
      copyrightUsageItem3: "Embed the GlowLab AI app icon when linking to our official App Store listing.",
      copyrightRestrictionsTitle: "4. Restrictions",
      copyrightRestrictionsText: "You may not sell GlowLab AI assets, use them to imply partnership, or remix them into competing applications. Do not change colors, add overlays, or place the brand in misleading contexts.",
      copyrightNoticeTitle: "5. Trademarks and acknowledgements",
      copyrightNoticeText: "GlowLab AI, the GlowLab AI logo, and related marks are trademarks of the GlowLab AI team. Apple, iPhone, and Apple Watch are trademarks of Apple Inc. and are mentioned for context only.",
      copyrightContactTitle: "6. Contact",
      copyrightContactText: "Request additional permissions or report misuse via email:",
      copyrightContactEmail: "smfedorov.iosdev@gmail.com",
      copyrightContactResponse: "Include links or reference materials so we can respond quickly."
    },
    es: {
      copyrightBadge: "Guía de marca",
      copyrightTitle: "Aviso de derechos de autor de GlowLab AI",
      copyrightLead: "Conoce cómo referenciar los recursos de GlowLab AI en prensa, reseñas y promociones.",
      copyrightAppTitle: "1. Titularidad",
      copyrightAppText: "GlowLab AI, incluido el código, los elementos de diseño, los visuales, los sonidos y la documentación, pertenece al equipo de GlowLab AI. Todos los derechos están reservados salvo permiso escrito en contrario.",
      copyrightAssetsTitle: "2. Capturas y material gráfico",
      copyrightAssetsText: "Las capturas oficiales, iconos y gráficos promocionales pueden usarse para cobertura editorial de GlowLab AI siempre que solo se redimensionen o recorten de forma sencilla.",
      copyrightUsageTitle: "3. Usos permitidos",
      copyrightUsageItem1: "Compartir GlowLab AI públicamente con una atribución clara.",
      copyrightUsageItem2: "Publicar reseñas, tutoriales o contenido educativo con capturas originales.",
      copyrightUsageItem3: "Incluir el icono de la app al enlazar a la ficha oficial en App Store.",
      copyrightRestrictionsTitle: "4. Restricciones",
      copyrightRestrictionsText: "No puedes vender los recursos de GlowLab AI, insinuar asociaciones ni reutilizarlos en apps competidoras. No cambies los colores ni coloques la marca en contextos engañosos.",
      copyrightNoticeTitle: "5. Marcas y reconocimientos",
      copyrightNoticeText: "GlowLab AI, su logotipo y las marcas relacionadas son propiedad del equipo GlowLab AI. Apple, iPhone y Apple Watch son marcas de Apple Inc. y se mencionan solo como referencia.",
      copyrightContactTitle: "6. Contacto",
      copyrightContactText: "Solicita permisos adicionales o informa sobre usos indebidos por correo:",
      copyrightContactEmail: "smfedorov.iosdev@gmail.com",
      copyrightContactResponse: "Incluye enlaces o materiales de referencia para que podamos responder rápido."
    },
    ru: {
      copyrightBadge: "Руководство по бренду",
      copyrightTitle: "Уведомление об авторских правах GlowLab AI",
      copyrightLead: "Узнайте, как использовать материалы GlowLab AI в публикациях, обзорах и промо.",
      copyrightAppTitle: "1. Правообладатель",
      copyrightAppText: "GlowLab AI, включая код, дизайн, визуалы, звуки и документацию, принадлежит команде GlowLab AI. Все права защищены, если иное не согласовано письменно.",
      copyrightAssetsTitle: "2. Скриншоты и медиа",
      copyrightAssetsText: "Официальные скриншоты, иконки и промо-графику можно использовать в редакционных материалах о GlowLab AI при условии, что изменения ограничиваются размером и кадрированием.",
      copyrightUsageTitle: "3. Разрешенное использование",
      copyrightUsageItem1: "Публиковать информацию о GlowLab AI с указанием источника.",
      copyrightUsageItem2: "Размещать обзоры, инструкции и обучающие материалы с оригинальными скриншотами.",
      copyrightUsageItem3: "Использовать иконку приложения при ссылке на официальную страницу в App Store.",
      copyrightRestrictionsTitle: "4. Ограничения",
      copyrightRestrictionsText: "Запрещено продавать материалы GlowLab AI, намекать на партнерство или перерабатывать их для конкурирующих приложений. Не изменяйте цвета и не используйте бренд в вводящем в заблуждение контексте.",
      copyrightNoticeTitle: "5. Товарные знаки",
      copyrightNoticeText: "GlowLab AI, логотип GlowLab AI и связанные обозначения являются товарными знаками команды GlowLab AI. Apple, iPhone и Apple Watch - товарные знаки Apple Inc. и упоминаются только для контекста.",
      copyrightContactTitle: "6. Контакты",
      copyrightContactText: "Запросите дополнительные разрешения или сообщите о нарушении по email:",
      copyrightContactEmail: "smfedorov.iosdev@gmail.com",
      copyrightContactResponse: "Добавьте ссылки или материалы, чтобы мы ответили быстрее."
    },
    de: {
      copyrightBadge: "Markenrichtlinien",
      copyrightTitle: "Urheberrechtshinweis zu GlowLab AI",
      copyrightLead: "Erfahre, wie du GlowLab AI in Presse, Reviews und Promotions referenzieren darfst.",
      copyrightAppTitle: "1. Eigentum",
      copyrightAppText: "GlowLab AI mit seinem Code, Design, Visuals, Sounds und der Dokumentation gehört dem GlowLab-AI-Team. Alle Rechte bleiben vorbehalten, sofern keine schriftliche Erlaubnis vorliegt.",
      copyrightAssetsTitle: "2. Screenshots und Medien",
      copyrightAssetsText: "Offizielle Screenshots, Icons und Promo-Grafiken dürfen für redaktionelle Beiträge über GlowLab AI verwendet werden, solange nur einfaches Zuschneiden oder Skalieren erfolgt.",
      copyrightUsageTitle: "3. Erlaubte Nutzung",
      copyrightUsageItem1: "GlowLab AI öffentlich mit klarer Quellenangabe teilen.",
      copyrightUsageItem2: "Reviews, Tutorials oder Lerninhalte mit Original-Screenshots veröffentlichen.",
      copyrightUsageItem3: "Das App-Icon einbinden, wenn auf den offiziellen App-Store-Link verwiesen wird.",
      copyrightRestrictionsTitle: "4. Einschränkungen",
      copyrightRestrictionsText: "Es ist untersagt, GlowLab-AI-Assets zu verkaufen, Partnerschaften vorzutäuschen oder sie in konkurrierenden Apps zu verwenden. Ändere keine Farben und platziere die Marke nicht in irreführenden Kontexten.",
      copyrightNoticeTitle: "5. Marken und Hinweise",
      copyrightNoticeText: "GlowLab AI, das GlowLab-AI-Logo und verwandte Kennzeichen sind Marken des GlowLab-AI-Teams. Apple, iPhone und Apple Watch sind Marken von Apple Inc. und werden nur als Referenz genannt.",
      copyrightContactTitle: "6. Kontakt",
      copyrightContactText: "Fordere zusätzliche Genehmigungen an oder melde Missbrauch per E-Mail:",
      copyrightContactEmail: "smfedorov.iosdev@gmail.com",
      copyrightContactResponse: "Füge Links oder Referenzen bei, damit wir schnell reagieren können."
    },
    it: {
      copyrightBadge: "Linee guida del brand",
      copyrightTitle: "Avviso sul copyright di GlowLab AI",
      copyrightLead: "Scopri come citare le risorse di GlowLab AI in articoli, recensioni e promozioni.",
      copyrightAppTitle: "1. Titolarità",
      copyrightAppText: "GlowLab AI, compresi codice, design, visual, suoni e documentazione, è di proprietà del team GlowLab AI. Tutti i diritti sono riservati salvo autorizzazione scritta.",
      copyrightAssetsTitle: "2. Screenshot e media",
      copyrightAssetsText: "Screenshot ufficiali, icone e grafica promozionale possono essere usati per copertura editoriale di GlowLab AI purché le modifiche si limitino a ridimensionamento o ritaglio.",
      copyrightUsageTitle: "3. Usi consentiti",
      copyrightUsageItem1: "Condividere GlowLab AI pubblicamente con chiara attribuzione.",
      copyrightUsageItem2: "Pubblicare recensioni, tutorial o contenuti educativi con screenshot originali.",
      copyrightUsageItem3: "Inserire l'icona dell'app quando si collega alla pagina ufficiale su App Store.",
      copyrightRestrictionsTitle: "4. Limitazioni",
      copyrightRestrictionsText: "Non è consentito vendere le risorse di GlowLab AI, suggerire partnership o riutilizzarle in app concorrenti. Non modificare i colori né usare il brand in contesti fuorvianti.",
      copyrightNoticeTitle: "5. Marchi registrati",
      copyrightNoticeText: "GlowLab AI, il logo GlowLab AI e i marchi correlati sono marchi del team GlowLab AI. Apple, iPhone e Apple Watch sono marchi di Apple Inc. e vengono citati solo come riferimento.",
      copyrightContactTitle: "6. Contatti",
      copyrightContactText: "Richiedi permessi aggiuntivi o segnala abusi via email:",
      copyrightContactEmail: "smfedorov.iosdev@gmail.com",
      copyrightContactResponse: "Includi link o materiali di riferimento per una risposta rapida."
    },
    fr: {
      copyrightBadge: "Guide de marque",
      copyrightTitle: "Avis sur les droits d'auteur de GlowLab AI",
      copyrightLead: "Découvrez comment mentionner les ressources GlowLab AI dans la presse, les avis et les promotions.",
      copyrightAppTitle: "1. Propriété",
      copyrightAppText: "GlowLab AI, son code, son design, ses visuels, ses sons et sa documentation appartiennent à l'équipe GlowLab AI. Tous droits réservés sauf autorisation écrite.",
      copyrightAssetsTitle: "2. Captures et médias",
      copyrightAssetsText: "Vous pouvez utiliser les captures, icônes et visuels officiels pour parler de GlowLab AI, à condition de ne faire que des recadrages ou redimensionnements simples.",
      copyrightUsageTitle: "3. Usages autorisés",
      copyrightUsageItem1: "Partager GlowLab AI publiquement avec attribution claire.",
      copyrightUsageItem2: "Publier critiques, tutoriels ou contenus pédagogiques avec des captures originales.",
      copyrightUsageItem3: "Intégrer l'icône de l'app en renvoyant vers la fiche officielle sur l'App Store.",
      copyrightRestrictionsTitle: "4. Restrictions",
      copyrightRestrictionsText: "Il est interdit de vendre les ressources GlowLab AI, de suggérer un partenariat ou de les réutiliser dans des apps concurrentes. Ne modifiez pas les couleurs et n'utilisez pas la marque dans un contexte trompeur.",
      copyrightNoticeTitle: "5. Marques et mentions",
      copyrightNoticeText: "GlowLab AI, son logo et les marques associées appartiennent à l'équipe GlowLab AI. Apple, iPhone et Apple Watch sont des marques d'Apple Inc. mentionnées uniquement à titre de référence.",
      copyrightContactTitle: "6. Contact",
      copyrightContactText: "Demandez des autorisations supplémentaires ou signalez un usage abusif par e-mail :",
      copyrightContactEmail: "smfedorov.iosdev@gmail.com",
      copyrightContactResponse: "Ajoutez des liens ou documents pour que nous puissions répondre rapidement."
    }
  }
};

const heroScreenshots = {
  en: [
    "assets/Phone/english_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.42.52.png",
    "assets/Phone/english_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.42.14.png",
    "assets/Phone/english_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.41.54.png"
  ],
  es: [
    "assets/Phone/spanish_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.46.17.png",
    "assets/Phone/spanish_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.46.30.png",
    "assets/Phone/spanish_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.46.42.png"
  ],
  ru: [
    "assets/Phone/russian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.36.55.png",
    "assets/Phone/russian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.37.22.png",
    "assets/Phone/russian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.37.46.png"
  ],
  de: [
    "assets/Phone/deutsch_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.51.01.png",
    "assets/Phone/deutsch_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.51.21.png",
    "assets/Phone/deutsch_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.51.46.png"
  ],
  it: [
    "assets/Phone/italian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.48.25.png",
    "assets/Phone/italian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.48.37.png",
    "assets/Phone/italian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.48.47.png"
  ],
  fr: [
    "assets/Phone/french_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.54.20.png",
    "assets/Phone/french_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.54.37.png",
    "assets/Phone/french_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.54.48.png"
  ]
};

const screenshotSources = {
  phone: {
    en: [
      "assets/Phone/english_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.41.54.png",
      "assets/Phone/english_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.42.14.png",
      "assets/Phone/english_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.42.34.png",
      "assets/Phone/english_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.42.45.png",
      "assets/Phone/english_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.42.52.png",
      "assets/Phone/english_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.43.00.png",
      "assets/Phone/english_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.43.10.png"
    ],
    es: [
      "assets/Phone/spanish_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.46.17.png",
      "assets/Phone/spanish_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.46.30.png",
      "assets/Phone/spanish_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.46.42.png",
      "assets/Phone/spanish_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.46.55.png",
      "assets/Phone/spanish_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.47.02.png",
      "assets/Phone/spanish_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.47.09.png",
      "assets/Phone/spanish_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.47.16.png"
    ],
    ru: [
      "assets/Phone/russian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.36.55.png",
      "assets/Phone/russian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.37.22.png",
      "assets/Phone/russian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.37.46.png",
      "assets/Phone/russian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.38.04.png",
      "assets/Phone/russian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.38.27.png",
      "assets/Phone/russian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.38.42.png",
      "assets/Phone/russian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.39.09.png"
    ],
    de: [
      "assets/Phone/deutsch_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.51.01.png",
      "assets/Phone/deutsch_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.51.21.png",
      "assets/Phone/deutsch_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.51.46.png",
      "assets/Phone/deutsch_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.51.54.png",
      "assets/Phone/deutsch_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.52.00.png",
      "assets/Phone/deutsch_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.52.07.png",
      "assets/Phone/deutsch_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.52.13.png"
    ],
    it: [
      "assets/Phone/italian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.48.25.png",
      "assets/Phone/italian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.48.37.png",
      "assets/Phone/italian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.48.47.png",
      "assets/Phone/italian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.48.59.png",
      "assets/Phone/italian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.49.07.png",
      "assets/Phone/italian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.49.13.png",
      "assets/Phone/italian_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.49.20.png"
    ],
    fr: [
      "assets/Phone/french_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.54.20.png",
      "assets/Phone/french_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.54.37.png",
      "assets/Phone/french_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.54.48.png",
      "assets/Phone/french_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.54.56.png",
      "assets/Phone/french_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.55.02.png",
      "assets/Phone/french_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.55.08.png",
      "assets/Phone/french_phone/Simulator Screenshot - iPhone 17 Pro - 2025-10-15 at 21.55.14.png"
    ]
  },
  watch: {
    en: [
      "assets/Watch/english_watch/Frame 57.jpg",
      "assets/Watch/english_watch/Frame 58.jpg"
    ],
    es: [
      "assets/Watch/spanish_watch/Frame 63.jpg",
      "assets/Watch/spanish_watch/Frame 64.jpg"
    ],
    ru: [
      "assets/Watch/russian_watch/Frame 55.jpg",
      "assets/Watch/russian_watch/Frame 56.jpg"
    ],
    de: [
      "assets/Watch/deutsch_watch/Frame 59.jpg",
      "assets/Watch/deutsch_watch/Frame 60.jpg"
    ],
    it: [
      "assets/Watch/italian_watch/Frame 61.jpg",
      "assets/Watch/italian_watch/Frame 62.jpg"
    ],
    fr: [
      "assets/Watch/french_watch/Frame 65.jpg",
      "assets/Watch/french_watch/Frame 66.jpg"
    ]
  },
  ipad: {
    en: [
      "assets/iPad/english_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.02.12.png",
      "assets/iPad/english_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.02.22.png",
      "assets/iPad/english_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.02.37.png",
      "assets/iPad/english_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.02.51.png",
      "assets/iPad/english_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.03.02.png",
      "assets/iPad/english_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.03.11.png",
      "assets/iPad/english_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.03.16.png"
    ],
    es: [
      "assets/iPad/spanish_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.04.10.png",
      "assets/iPad/spanish_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.04.20.png",
      "assets/iPad/spanish_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.04.29.png",
      "assets/iPad/spanish_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.04.43.png",
      "assets/iPad/spanish_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.04.50.png",
      "assets/iPad/spanish_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.04.59.png",
      "assets/iPad/spanish_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.05.06.png"
    ],
    ru: [
      "assets/iPad/russian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 21.59.35.png",
      "assets/iPad/russian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 21.59.47.png",
      "assets/iPad/russian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 21.59.59.png",
      "assets/iPad/russian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.00.11.png",
      "assets/iPad/russian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.00.21.png",
      "assets/iPad/russian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.00.28.png",
      "assets/iPad/russian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.00.35.png"
    ],
    de: [
      "assets/iPad/deutsch_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.08.53.png",
      "assets/iPad/deutsch_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.09.05.png",
      "assets/iPad/deutsch_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.09.16.png",
      "assets/iPad/deutsch_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.09.28.png",
      "assets/iPad/deutsch_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.09.36.png",
      "assets/iPad/deutsch_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.09.42.png",
      "assets/iPad/deutsch_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.09.47.png"
    ],
    it: [
      "assets/iPad/italian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.06.34.png",
      "assets/iPad/italian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.06.44.png",
      "assets/iPad/italian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.06.57.png",
      "assets/iPad/italian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.07.10.png",
      "assets/iPad/italian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.07.17.png",
      "assets/iPad/italian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.07.23.png",
      "assets/iPad/italian_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.07.28.png"
    ],
    fr: [
      "assets/iPad/french_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.10.45.png",
      "assets/iPad/french_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.10.55.png",
      "assets/iPad/french_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.11.06.png",
      "assets/iPad/french_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.11.16.png",
      "assets/iPad/french_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.11.24.png",
      "assets/iPad/french_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.11.29.png",
      "assets/iPad/french_ipad/Simulator Screenshot - iPad Pro 11-inch (M4) - 2025-10-15 at 22.11.41.png"
    ]
  }
};

const platformVideos = {
  phone: "assets/Phone/lamp_iphone.mp4",
  watch: "assets/Watch/lamp_watch.mp4",
  ipad: "assets/iPad/lamp_ipad.mp4"
};

Object.entries(platformVideos).forEach(([platform, videoSrc]) => {
  const langMap = screenshotSources[platform];
  if (!langMap || !videoSrc) return;
  Object.keys(langMap).forEach((lang) => {
    const list = langMap[lang];
    if (!Array.isArray(list)) return;
    langMap[lang] = [videoSrc, ...list.filter((item) => item !== videoSrc)];
  });
});

const screenshotPlatformOrder = [
  { key: "phone", titleKey: "screenshotsPhoneTitle" },
  { key: "watch", titleKey: "screenshotsWatchTitle" },
  { key: "ipad", titleKey: "screenshotsIpadTitle" }
];

const screenshotAltLabels = {
  phone: "iPhone",
  watch: "Apple Watch",
  ipad: "iPad"
};

let currentLanguage = "en";
let currentTranslations = {};
let currentPlatform = "phone";

const supportedLanguages = ["en", "es", "ru", "de", "it", "fr"];

function getDefaultLanguage() {
  const stored = window.localStorage.getItem("glowlab-language");
  if (stored && supportedLanguages.includes(stored)) {
    return stored;
  }
  const browser = navigator.language ? navigator.language.slice(0, 2).toLowerCase() : "en";
  return supportedLanguages.includes(browser) ? browser : "en";
}

function mergeTranslations(lang, page) {
  const fallbackCommon = translations.common.en;
  const localeCommon = translations.common[lang] || {};
  const fallbackPage = translations[page]?.en || {};
  const localePage = translations[page]?.[lang] || {};
  return { ...fallbackCommon, ...fallbackPage, ...localeCommon, ...localePage };
}

function updateHeroImages(lang) {
  const sources = heroScreenshots[lang] || heroScreenshots.en;
  if (!sources) return;
  const heroNodes = document.querySelectorAll("[data-hero-image]");
  heroNodes.forEach((img, index) => {
    const fallbackSrc = sources[Math.min(index, sources.length - 1)];
    if (!fallbackSrc) return;
    if (img.getAttribute("src") !== fallbackSrc) {
      img.src = fallbackSrc;
    }
  });
}

function renderScreenshotGroups(lang, translationsBundle) {
  const tabsContainer = document.querySelector("[data-screenshot-tabs]");
  const panelContainer = document.querySelector("[data-screenshot-panel]");
  if (!tabsContainer || !panelContainer) return;

  const available = screenshotPlatformOrder
    .map(({ key, titleKey }) => {
      const sources =
        (screenshotSources[key] && (screenshotSources[key][lang] || screenshotSources[key].en)) ||
        [];
      if (!sources.length) {
        return null;
      }
      const title = translationsBundle[titleKey] || screenshotAltLabels[key] || "Screenshots";
      return { key, title, sources };
    })
    .filter(Boolean);

  if (!available.length) {
    tabsContainer.innerHTML = "";
    panelContainer.innerHTML = "";
    return;
  }

  if (!available.some(({ key }) => key === currentPlatform)) {
    currentPlatform = available[0].key;
  }

  tabsContainer.innerHTML = "";

  available.forEach(({ key, title }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `screenshot-tab${key === currentPlatform ? " is-active" : ""}`;
    button.dataset.tab = key;
    button.textContent = title;
    button.addEventListener("click", () => {
      if (currentPlatform === key) return;
      currentPlatform = key;
      tabsContainer
        .querySelectorAll(".screenshot-tab")
        .forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === key));
      renderPanel();
    });
    tabsContainer.appendChild(button);
  });

  function renderPanel() {
    panelContainer.innerHTML = "";
    const current = available.find(({ key }) => key === currentPlatform);
    if (!current) return;

    const grid = document.createElement("div");
    grid.className = "screenshot-grid";

    current.sources.forEach((src, index) => {
      const isVideo = /\.mp4$/i.test(src);
      if (isVideo) {
        const video = document.createElement("video");
        video.preload = "metadata";
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        video.controls = true;
        video.src = src;
        video.setAttribute("aria-label", `${current.title} demo video`);
        grid.appendChild(video);
      } else {
        const img = document.createElement("img");
        img.loading = "lazy";
        img.decoding = "async";
        img.src = src;
        img.alt = `${current.title} screenshot ${index + 1} - GlowLab AI`;
        grid.appendChild(img);
      }
    });

    panelContainer.appendChild(grid);
  }

  renderPanel();
}

function applyLanguage(lang, page) {
  const merged = mergeTranslations(lang, page);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    const value = merged[key];
    if (value) {
      element.textContent = value;
    }
  });

  currentLanguage = lang;
  currentTranslations = merged;
  updateHeroImages(lang);
  renderScreenshotGroups(lang, merged);
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "home";
  const picker = document.querySelector('[data-role="language-picker"]');
  const initialLang = getDefaultLanguage();

  if (picker) {
    picker.value = initialLang;
    picker.addEventListener("change", (event) => {
      const lang = event.target.value;
      window.localStorage.setItem("glowlab-language", lang);
      applyLanguage(lang, page);
    });
  }

  applyLanguage(initialLang, page);
});
