
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        brand: "AmClean",
        links: {
          home: "Home",
          about: "About",
          services: "Services",
          contact: "Contact"
        }
      },
      hero: {
        title: "Professional Office Cleaning in Armenia",
        subtitle: "We provide top-quality cleaning services for your business needs",
        buttonText: "Get a Quote"
      },
      about: {
        title: "About Us",
        description1: "AmClean is dedicated to providing exceptional office cleaning services throughout Armenia. With years of experience and a passionate team, we ensure your workspace remains spotless and professional.",
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
          { name: "EcoClean Supplies", description: "Sustainable cleaning products" },
          { name: "Armenian Business Network", description: "Local business support" },
          { name: "GreenTech Solutions", description: "Eco-friendly tech provider" }
        ]
      },
      contact: {
        title: "Contact Us",
        buttonText: "Send Message"
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
        brand: "AmClean",
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
        buttonText: "Հաշվարկել արժեքը"
      },
      about: {
        title: "Մեր մասին",
        description1: "AmClean-ը նվիրված է Հայաստանում գրասենյակների բացառիկ մաքրություն ապահովելուն: Տարիների փորձով և նվիրված թիմով մենք երաշխավորում ենք Ձեր աշխատավայրի անբիծ և պրոֆեսիոնալ տեսքը:",
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
              stainRemoval: { title: "Հաշմանդամի հեռացում", description: "Թիրախային բծերի մշակում" }
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
          { name: "ԷկոՔլին Սուփլայս", description: "Կայուն մաքրման միջոցներ" },
          { name: "Հայկական Բիզնես Ցանց", description: "Տեղական բիզնեսի աջակցություն" },
          { name: "ԳրինԹեք Լուծումներ", description: "Էկո-բարեկամական տեխնոլոգիաների մատակարար" }
        ]
      },
      contact: {
        title: "Հետադարձ կապ",
        buttonText: "Ուղարկել հաղորդագրություն"
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
        brand: "AmClean",
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
        buttonText: "Рассчитать стоимость"
      },
      about: {
        title: "О нас",
        description1: "AmClean стремится предоставлять исключительные услуги по уборке офисов по всей Армении. Благодаря многолетнему опыту и преданной команде мы гарантируем, что ваше рабочее место останется безупречным и профессиональным.",
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
          { name: "ЭкоКлин Сапплайс", description: "Экологичные средства для уборки" },
          { name: "Армянская Бизнес Сеть", description: "Поддержка местного бизнеса" },
          { name: "ГринТек Решения", description: "Поставщик экологичных технологий" }
        ]
      },
      contact: {
        title: "Связаться с нами",
        buttonText: "Отправить сообщение"
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
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;