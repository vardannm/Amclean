import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        brand: "CleanClean",
        links: {
          home: "Home",
          about: "About",
          services: "Services",
          partners: "Partners",
          contact: "Contact"
        }
      },
      hero: {
        title: "Professional Office Cleaning in Armenia",
        subtitle: "We provide top-quality cleaning services for your business needs",
        buttonText: "Get a Quote",
        serviceButton: "View our services"
      },
      about: {
        title: "About Us",
        description1: "CleanClean is dedicated to providing exceptional office cleaning services throughout Armenia. With years of experience and a passionate team, we ensure your workspace remains spotless and professional.",
        description2: "Our mission is to create healthy, clean environments that boost productivity and leave lasting impressions.",
        valuesTitle: "Our Values",
        values: [
          "Quality Service",
          "Eco-friendly Products",
          "Professional Team",
          "Customer Satisfaction"
        ]
      },
      services: {
        title: "Our Services",
        backToServices: "Back to Services",
        items: {
          dailyCleaning: {
            title: "Daily Cleaning",
            description: "Regular office maintenance",
            subOptions: {
              deskCleaning: { title: "Desk Cleaning", description: "Wiping down desks and surfaces" },
              trashRemoval: { title: "Trash Removal", description: "Emptying bins and waste management" }
            }
          },
          deepCleaning: {
            title: "Deep Cleaning",
            description: "Thorough cleaning services",
            subOptions: {
              floorScrubbing: { title: "Floor Scrubbing", description: "Deep cleaning of floors" },
              upholsteryCleaning: { title: "Upholstery Cleaning", description: "Cleaning furniture fabrics" }
            }
          },
          windowCleaning: {
            title: "Window Cleaning",
            description: "Crystal clear windows",
            subOptions: {
              interiorWindows: { title: "Interior Windows", description: "Cleaning inside windows" },
              exteriorWindows: { title: "Exterior Windows", description: "Cleaning outside windows" }
            }
          },
          carpetCleaning: {
            title: "Carpet Cleaning",
            description: "Professional carpet care",
            subOptions: {
              steamCleaning: { title: "Steam Cleaning", description: "Hot water extraction method" },
              stainRemoval: { title: "Stain Removal", description: "Targeted stain treatment" }
            }
          }
        }
      },
      serviceDetail: {
        extraInfo: "Contact us today to schedule this service for your office!",
        bookNow: "Book Now"
      },
      partners: {
        title: "Our Partners",
        items: [
          { name: "ARARAT BANK" },
          { name: "UNIBANK" },
          { name: "PROJECT INTER-INVEST" }
        ]
      },
      contact: {
        title: "Contact Us",
        buttonText: "Send Message",
        form: {
          name: "Your Name",
          email: "Your Email",
          phone: "Your Phone",
          message: "Your Message",
          success: "Thank you! Your message has been sent.",
          error: "There was an error sending your message. Please try again."
        }
      },
      footer: {
        rights: "All rights reserved.",
        links: {
          privacyPolicy: "Privacy Policy",
          termsOfService: "Terms of Service"
        }
      }
    }
  },
  hy: {
    translation: {
      navbar: {
        brand: "CleanClean",
        links: {
          home: "Գլխավոր",
          about: "Մեր մասին",
          services: "Ծառայություններ",
          partners: "Գործընկերներ",
          contact: "Հետադարձ կապ"
        }
      },
      hero: {
        title: "Հայաստանում գրասենյակների մասնագիտական մաքրություն",
        subtitle: "Մենք տրամադրում ենք բարձրորակ մաքրման ծառայություններ Ձեր բիզնեսի համար",
        buttonText: "Հաշվարկել արժեքը",
        serviceButton: "Դիտեք մեր ծառայությունները"
      },
      about: {
        title: "Մեր մասին",
        description1: "CleanClean-ը նվիրված է Հայաստանում գրասենյակների բացառիկ մաքրություն ապահովելուն: Տարիների փորձով և նվիրված թիմով մենք երաշխավորում ենք Ձեր աշխատավայրի անբիծ և պրոֆեսիոնալ տեսքը:",
        description2: "Մեր առաքելությունն է ստեղծել առողջ, մաքուր միջավայրեր, որոնք բարձրացնում են արտադրողականությունը և թողնում մնայուն տպավորություն:",
        valuesTitle: "Մեր արժեքները",
        values: [
          "Որակյալ ծառայություն",
          "Էկո-բարեկամական արտադրանք",
          "Պրոֆեսիոնալ թիմ",
          "Հաճախորդների գոհունակություն"
        ]
      },
      services: {
        title: "Մեր ծառայությունները",
        backToServices: "Հետ ծառայություններին",
        items: {
          dailyCleaning: {
            title: "Ամենօրյա մաքրություն",
            description: "Գրասենյակի կանոնավոր սպասարկում",
            subOptions: {
              deskCleaning: { title: "Գրասեղանների մաքրություն", description: "Գրասեղանների և մակերեսների սրբում" },
              trashRemoval: { title: "Աղբի հեռացում", description: "Աղբամանների դատարկում և թափոնների կառավարում" }
            }
          },
          deepCleaning: {
            title: "Խորը մաքրություն",
            description: "Հիմնավոր մաքրման ծառայություններ",
            subOptions: {
              floorScrubbing: { title: "Հատակի մաքրում", description: "Հատակի խորը մաքրություն" },
              upholsteryCleaning: { title: "Կահույքի մաքրություն", description: "Կահույքի գործվածքների մաքրում" }
            }
          },
          windowCleaning: {
            title: "Պատուհանների մաքրություն",
            description: "Բյուրեղյա մաքուր պատուհաններ",
            subOptions: {
              interiorWindows: { title: "Ներքին պատուհաններ", description: "Ներսի պատուհանների մաքրում" },
              exteriorWindows: { title: "Արտաքին պատուհաններ", description: "Դրսի պատուհանների մաքրում" }
            }
          },
          carpetCleaning: {
            title: "Գորգերի մաքրություն",
            description: "Գորգերի պրոֆեսիոնալ խնամք",
            subOptions: {
              steamCleaning: { title: "Գոլորշիով մաքրում", description: "Տաք ջրով արդյունահանման մեթոդ" },
              stainRemoval: { title: "Բծերի հեռացում", description: "Թիրախային բծերի մշակում" }
            }
          }
        }
      },
      serviceDetail: {
        extraInfo: "Կապվեք մեզ հետ այսօր՝ Ձեր գրասենյակի համար այս ծառայությունը պլանավորելու համար:",
        bookNow: "Ամրագրել հիմա"
      },
      partners: {
        title: "Մեր գործընկերները",
        items: [
          { name: "ԱՐԱՐԱՏ ԲԱՆԿ" },
          { name: "ՅՈՒՆԻԲԱՆԿ" },
          { name: "ՊՐՈՅԵԿՏ ԻՆՏԵՐ-ԻՆՎԵՍՏ" }
        ]
      },
      contact: {
        title: "Հետադարձ կապ",
        buttonText: "Ուղարկել հաղորդագրություն",
        form: {
          name: "Անուն",
          email: "Էլ․ փոստ",
          phone: "Հեռախոս",
          message: "Հաղորդագրություն",
          success: "Շնորհակալություն։ Ձեր հաղորդագրությունը ուղարկված է։",
          error: "Սխալ է տեղի ունեցել։ Խնդրում ենք փորձել կրկին։"
        }
      },
      footer: {
        rights: "Բոլոր իրավունքները պաշտպանված են:",
        links: {
          privacyPolicy: "Գաղտնիության քաղաքականություն",
          termsOfService: "Ծառայությունների պայմաններ"
        }
      }
    }
  },
  ru: {
    translation: {
      navbar: {
        brand: "CleanClean",
        links: {
          home: "Главная",
          about: "О нас",
          services: "Услуги",
          partners: "Партнеры",
          contact: "Контакты"
        }
      },
      hero: {
        title: "Профессиональная уборка офисов в Армении",
        subtitle: "Мы предоставляем высококачественные услуги уборки для вашего бизнеса",
        buttonText: "Рассчитать стоимость",
        serviceButton: "Посмотрите наши услуги"
      },
      about: {
        title: "О нас",
        description1: "CleanClean стремится предоставлять исключительные услуги по уборке офисов по всей Армении. Благодаря многолетнему опыту и преданной команде мы гарантируем, что ваше рабочее место останется безупречным и профессиональным.",
        description2: "Наша миссия — создавать здоровую, чистую среду, которая повышает производительность и оставляет неизгладимое впечатление.",
        valuesTitle: "Наши ценности",
        values: [
          "Качественное обслуживание",
          "Экологичные продукты",
          "Профессиональная команда",
          "Удовлетворение клиентов"
        ]
      },
      services: {
        title: "Наши услуги",
        backToServices: "Вернуться к услугам",
        items: {
          dailyCleaning: {
            title: "Ежедневная уборка",
            description: "Регулярное обслуживание офиса",
            subOptions: {
              deskCleaning: { title: "Уборка столов", description: "Протирка столов и поверхностей" },
              trashRemoval: { title: "Удаление мусора", description: "Очистка мусорных корзин и управление отходами" }
            }
          },
          deepCleaning: {
            title: "Глубокая уборка",
            description: "Тщательные услуги уборки",
            subOptions: {
              floorScrubbing: { title: "Чистка полов", description: "Глубокая уборка полов" },
              upholsteryCleaning: { title: "Чистка обивки", description: "Чистка тканей мебели" }
            }
          },
          windowCleaning: {
            title: "Мойка окон",
            description: "Кристально чистые окна",
            subOptions: {
              interiorWindows: { title: "Внутренние окна", description: "Чистка внутренних окон" },
              exteriorWindows: { title: "Наружные окна", description: "Чистка наружных окон" }
            }
          },
          carpetCleaning: {
            title: "Чистка ковров",
            description: "Профессиональный уход за коврами",
            subOptions: {
              steamCleaning: { title: "Паровая чистка", description: "Метод извлечения горячей воды" },
              stainRemoval: { title: "Удаление пятен", description: "Целевая обработка пятен" }
            }
          }
        }
      },
      serviceDetail: {
        extraInfo: "Свяжитесь с нами сегодня, чтобы запланировать эту услугу для вашего офиса!",
        bookNow: "Забронировать сейчас"
      },
      partners: {
        title: "Наши партнеры",
        items: [
          { name: "Арарат Банк" },
          { name: "Юнибанк", description: "Поддержка местного бизнеса" },
          { name: "ПРОЕКТ ИНТЕР-ИНВЕСТ", description: "Поставщик экологичных технологий" }
        ]
      },
      contact: {
        title: "Связаться с нами",
        buttonText: "Отправить сообщение",
        form: {
          name: "Ваше имя",
          email: "Ваш email",
          phone: "Ваш телефон",
          message: "Ваше сообщение",
          success: "Спасибо! Ваше сообщение отправлено.",
          error: "Произошла ошибка. Пожалуйста, попробуйте еще раз."
        }
      },
      footer: {
        rights: "Все права защищены.",
        links: {
          privacyPolicy: "Политика конфиденциальности",
          termsOfService: "Условия обслуживания"
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'hy', 'ru'],
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;