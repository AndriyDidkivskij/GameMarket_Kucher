// // Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')

//Визначення масиву товарів
// let itemsArray = [
//     'Газонокосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газонокосарка 44',
//     'Електричний тример 111',
//     'Електрична газонокосарка 33',
//     'Акумуляторний оприскувач 13 N',
//     'Газонокосарка 45',
//     'Електричний тример 112',
//     'Електрична газонокосарка 34',
//     'Акумуляторний оприскувач 14 N',
//     // 'Газонокосарка 430',
//     // 'Електричний тример 130',
//     // 'Електрична газонокосарка 320',
//     // 'Акумуляторний оприскувач 12 E',
// ]

// let itemsArray = [
//     {
//         firstName: "Віталій",
//         lastName: "Шатківський",
//         age: 43,
//         subject: "Інформатика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
//         email: "pzs_shvm@ztu.edu.ua",
//     },
//     {
//         firstName: "Наталія",
//         lastName: "Венцель",
//         age: 18,
//         subject: "Директор",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
//         email: "n.ventsel@ukr.net",
//     },
//     {
//         firstName: "Наталія",
//         lastName: "Кучер",
//         age: 18,
//         subject: "Фізика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg", 
//         url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
//         email: "lic_knv@ztu.edu.ua",
//     },
//     {
//         firstName: "Анжела",
//         lastName: "Лознюк",
//         age: 18,
//         subject: "Українська мова, література",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
//         email: "lic_lal@ztu.edu.ua",
//     },
//     {
//         firstName: "Ірина",
//         lastName: "Боровська-Карандюк",
//         age: 18,
//         subject: "Українська мова, література, зарубіжна література",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
//         email: "lic_bia@ztu.edu.ua",
//     },
//     {
//         firstName: "Василь",
//         lastName: "Бабій",
//         age: 18,
//         subject: "Фізична культура",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
//         email: "lic_bvd@ztu.edu.ua",
//     },
//     {
//         firstName: "Тарас",
//         lastName: "Савінков",
//         age: 18,
//         subject: "Англійська мова",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
//         email: "lic_ste@ztu.edu.ua",
//     },
//     {
//         firstName: "Вікторія",
//         lastName: "Нелипович",
//         age: 18,
//         subject: "Математика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
//         email: "lic_nvv@ztu.edu.ua",
//     },
//     {
//         firstName: "Іван",
//         lastName: "Севрук",
//         age: 18,
//         subject: "Захист України",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/sevruk-i-h/",
//         email: "lic_sih@ztu.edu.ua",
//     },
//     {
//         firstName: "Олена",
//         lastName: "Чугунова",
//         age: 18,
//         subject: "Математика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/chuhunova-olena-vasylivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/chuhunova-o-v/",
//         email: "lic_chov@ztu.edu.ua",
//     },
//     {
//         firstName: "Олена",
//         lastName: "Геча",
//         age: 18,
//         subject: "Історія",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
//         email: "lic_hoa@ztu.edu.ua",
//     },
//     {
//         firstName: "Ірина",
//         lastName: "Глібко",
//         age: 18,
//         subject: "Англійська мова",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/hlibko-iryna-anatoliyivna/",
//         email: "lic_gia@ztu.edu.ua",
//     },
// ]

let itemsArray = [
    {
        "email": "23b_bvo@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Башинська Вікторія",
        "project_name": "Dudi 3",
        "project_github": "https://github.com/ViktoriaBashinska/Phaser2stGame",
        "project_demo": "https://viktoriabashinska.github.io/Phaser2stGame/",
        "project_drive": "https://drive.google.com/drive/folders/15v_c4DzKpW5323A4wYMV2Zj7AwRkSPUE?usp=sharing",
        "project_form": "https://forms.gle/jHMQsybKdMdUHXKA7",
        "gamemarket_github": "https://github.com/ViktoriaBashinska/GameMarket_Bashynska",
        "gamemarket_demo": "https://viktoriabashinska.github.io/GameMarket_Bashynska/",
        "gamemarket_market_page": "https://viktoriabashinska.github.io/GameMarket_Bashynska/market.html",
        "gamemarket_final_page": "https://viktoriabashinska.github.io/GameMarket_Bashynska/final/final.html",
        "img_author": "Башинська.jpg",
        "img_game": ""
    },
    {
        "email": "23b_bdo@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Біденко Дмитро",
        "project_name": "виживання проти зомбаря",
        "project_github": "https://github.com/dimasvoinboecvolk/Phaser2ndGame",
        "project_demo": "https://dimasvoinboecvolk.github.io/Phaser2ndGame/",
        "project_drive": "https://drive.google.com/drive/folders/18sH8j7zXJnz1Uz5bi3_uR6hss13pZhH-?usp=drive_link",
        "project_form": "https://forms.gle/RDawcnD98QcHnRZw7",
        "gamemarket_github": "https://github.com/dimasvoinboecvolk/GameMarket-bidenkko",
        "gamemarket_demo": "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/",
        "gamemarket_market_page": "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/market.html",
        "gamemarket_final_page": "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/final/final.html",
        "img_author": "Біденко.jpg",
        "img_game": ""
    },
    {
        "email": "23b_bmv@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Бовсуновського Максима",
        "project_name": "дота 2",
        "project_github": "https://github.com/maksbovs/Phaser2ndGame",
        "project_demo": "https://maksbovs.github.io/Phaser2ndGame/",
        "project_drive": "https://drive.google.com/drive/folders/1k4q30LAPEh8EpQpzamE_RYHICcYwkVG1?usp=sharing",
        "project_form": "https://forms.gle/G2WLe25CYPCQjowTA",
        "gamemarket_github": "https://github.com/maksbovs/GameMarket_Bovsunoskiy",
        "gamemarket_demo": "https://maksbovs.github.io/GameMarket_Bovsunoskiy/",
        "gamemarket_market_page": "https://maksbovs.github.io/GameMarket_Bovsunoskiy/market.html",
        "gamemarket_final_page": "https://maksbovs.github.io/GameMarket_Bovsunoskiy/final/final.html",
        "img_author": "Бовсуновський.jpg",
        "img_game": ""
    },
    {
        "email": "23b_vvi@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Волинець Владислав",
        "project_name": "Пес Патрон на завданні",
        "project_github": "https://github.com/volynets-vlad/Phaser2ndGame?authuser=0",
        "project_demo": "https://volynets-vlad.github.io/Phaser2ndGame/?authuser=0",
        "project_drive": "https://drive.google.com/drive/folders/1g2bPWq8NGqzlBAlI8rMiOYNWBIuiCMRy?usp=classroom_web&authuser=0",
        "project_form": "https://forms.gle/5DGf6yDiZLAVGu7o9?authuser=0",
        "gamemarket_github": "https://github.com/volynets-vlad/GameMarket_Volynets",
        "gamemarket_demo": "https://volynets-vlad.github.io/GameMarket_Volynets/",
        "gamemarket_market_page": "https://volynets-vlad.github.io/GameMarket_Volynets/market.html",
        "gamemarket_final_page": "https://volynets-vlad.github.io/GameMarket_Volynets/final/final.html",
        "img_author": "Волинець.jpg",
        "img_game": ""
    },
    {
        "email": "23b_gas@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Галетко Артем",
        "project_name": "",
        "project_github": "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
        "project_demo": "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
        "project_drive": "https://drive.google.com/drive/folders/1HSnDCZfuIwp7RzFXJjG2IBUhC4Gx9eyL?usp=drive_link",
        "project_form": "https://forms.gle/cz6ZfWN7UFPUgwFC7?authuser=0",
        "gamemarket_github": "https://github.com/Artem4ikGAletko/GameMarket_Haletko",
        "gamemarket_demo": "https://artem4ikgaletko.github.io/GameMarket_Haletko/",
        "gamemarket_market_page": "",
        "gamemarket_final_page": "",
        "img_author": "Галетко.jpg",
        "img_game": ""
    },
    {
        "email": "23b_gbs@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Гордійчук Богдан",
        "project_name": "Zhytomur squad Snyok",
        "project_github": "https://github.com/malintovi/Phaser2ndGame?authuser=0",
        "project_demo": "https://malintovi.github.io/Phaser2ndGame/?authuser=0",
        "project_drive": "https://drive.google.com/drive/folders/1EYhBdclLisemO0-yRcLov0Qu3VMlvaVl?usp=sharing",
        "project_form": "https://forms.gle/VaDXCem7gVuEvumQ9",
        "gamemarket_github": "https://github.com/malintovi/GameMarket_Hordiichuk",
        "gamemarket_demo": "https://malintovi.github.io/GameMarket_Hordiichuk/",
        "gamemarket_market_page": "https://malintovi.github.io/GameMarket_Hordiichuk/market.html",
        "gamemarket_final_page": "https://malintovi.github.io/GameMarket_Hordiichuk/final/final.html?authuser=0",
        "img_author": "Гордійчук.jpg",
        "img_game": ""
    },
    {
        "email": "23b_gai@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Гоцман Артем",
        "project_name": "Run_Dude",
        "project_github": "https://github.com/GOLDEN-ZTU/Phaser2ndGame",
        "project_demo": "https://golden-ztu.github.io/Phaser2ndGame/",
        "project_drive": "https://drive.google.com/drive/folders/17jcUqrZBQaD6g0UtpsljRbQN-EcUqnT2",
        "project_form": "https://forms.gle/NTmMk1yqBNhaoXzj9",
        "gamemarket_github": "https://github.com/GOLDEN-ZTU/GameMarket_Hotsman.git",
        "gamemarket_demo": "https://golden-ztu.github.io/GameMarket_Hotsman/",
        "gamemarket_market_page": "https://golden-ztu.github.io/GameMarket_Hotsman/market.html",
        "gamemarket_final_page": "https://golden-ztu.github.io/GameMarket_Hotsman/final/final.html",
        "img_author": "Гоцман.jpg",
        "img_game": ""
    },
    {
        "email": "23b_god@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Гуменюк Олег",
        "project_name": "",
        "project_github": "https://github.com/OlegGumenuk",
        "project_demo": "https://oleggumenuk.github.io/Phaser2ndGame/",
        "project_drive": "https://drive.google.com/drive/folders/10tRQ_WUvgqz0yGnm0J7WduMyziVFyoE5?usp=drive_link",
        "project_form": "https://forms.gle/iXKinscde4Cbqe6e7",
        "gamemarket_github": "https://github.com/OlegGumenuk/GameMarket_Gumenuk",
        "gamemarket_demo": "https://oleggumenuk.github.io/GameMarket_Gumenuk/",
        "gamemarket_market_page": "",
        "gamemarket_final_page": "",
        "img_author": "Гуменюк.jpg",
        "img_game": ""
    },
    {
        "email": "23b_dis@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Дєдух Ілля",
        "project_name": "kozak_battleground",
        "project_github": "https://github.com/Dyeduh/Phaser2ndGame",
        "project_demo": "https://dyeduh.github.io/Phaser2ndGame/",
        "project_drive": "https://drive.google.com/drive/folders/1ms2y6ckh0DM3u-Li5iWtKVMketXVKQEy?usp=classroom_web&authuser=5",
        "project_form": "https://docs.google.com/forms/d/e/1FAIpQLSe7zr5KaMa5DfxzbKWN0Iz5FJs6ZoEX-4Vz5MB9erOUlKl0yQ/viewform?usp=sf_link&authuser=5",
        "gamemarket_github": "https://github.com/Dyeduh/GameMarket_Dyeduh",
        "gamemarket_demo": "https://dyeduh.github.io/GameMarket_Dyeduh/",
        "gamemarket_market_page": "https://dyeduh.github.io/GameMarket_Dyeduh/market.html?authuser=0",
        "gamemarket_final_page": "https://dyeduh.github.io/GameMarket_Dyeduh/final/final.html?authuser=0",
        "img_author": "Дєдух.jpg",
        "img_game": ""
    },
    {
        "email": "23b_dao@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Дідківській Андрій",
        "project_name": "Баобаб",
        "project_github": "https://github.com/AndriyDidkivskij/Phaser2ndGame",
        "project_demo": "https://andriydidkivskij.github.io/Phaser2ndGame/",
        "project_drive": "https://drive.google.com/drive/folders/1Q65jiZ9y4uJw_kcvvC3ma3fksBzR4Btp",
        "project_form": "https://forms.gle/WNDGSsahKLzHH7LW7",
        "gamemarket_github": "https://github.com/AndriyDidkivskij/GameMarket_Didkivskij",
        "gamemarket_demo": "https://andriydidkivskij.github.io/GameMarket_Didkivskij/",
        "gamemarket_market_page": "https://andriydidkivskij.github.io/GameMarket_Didkivskij/market.html?authuser=0",
        "gamemarket_final_page": "https://andriydidkivskij.github.io/GameMarket_Didkivskij/final/final.html",
        "img_author": "Дідківський.jpg",
        "img_game": ""
    },
    {
        "email": "23b_zbv@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Заєць Богдан",
        "project_name": "",
        "project_github": "https://github.com/niccer5/Phaser1stGame",
        "project_demo": "https://niccer5.github.io/Phaser1stGame/",
        "project_drive": "https://drive.google.com/drive/folders/1NnmW02vDttgyJSTsOeB-hK3L-NuQjKr8",
        "project_form": "https://forms.gle/EcWrBsp6jhMA78Kd9",
        "gamemarket_github": "https://github.com/niccer5/-GameMarket_Zayets",
        "gamemarket_demo": "https://niccer5.github.io/-GameMarket_Zayets/",
        "gamemarket_market_page": "",
        "gamemarket_final_page": "",
        "img_author": "Заєць.jpg",
        "img_game": ""
    },
    {
        "email": "23b_kav@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Кравчук Андрій",
        "project_name": "",
        "project_github": "https://github.com/yawty1",
        "project_demo": "https://yawty1.github.io/Phaser2ndGame1/",
        "project_drive": "https://drive.google.com/drive/folders/1iTB53E5SwT1ds8PftFEwIUbkm5rPm6Ea?usp=drive_link",
        "project_form": "https://forms.gle/1n5FQ3NmUX6fWiiB6",
        "gamemarket_github": "https://github.com/yawty1/GameMarket_Kravchuk",
        "gamemarket_demo": "https://yawty1.github.io/GameMarket_Kravchuk/",
        "gamemarket_market_page": "",
        "gamemarket_final_page": "",
        "img_author": "Кравчук.jpg",
        "img_game": ""
    },
    {
        "email": "23b_kmv@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Кучер Максим",
        "project_name": "Jfr",
        "project_github": "https://github.com/KucherMaks/Phaser2ndGame?authuser=4&hl=ru",
        "project_demo": "https://kuchermaks.github.io/Phaser2ndGame/?authuser=4&hl=ru",
        "project_drive": "https://drive.google.com/drive/folders/1OGZCkFefm150MhQfef1UEbgJImuC4diT?usp=sharing",
        "project_form": "https://forms.gle/yaJ2EMs6hNbRpTTg9",
        "gamemarket_github": "https://github.com/KucherMaks/GameMarket_Kucher",
        "gamemarket_demo": "https://kuchermaks.github.io/GameMarket_Kucher/",
        "gamemarket_market_page": "https://kuchermaks.github.io/GameMarket_Kucher/market.html",
        "gamemarket_final_page": "https://kuchermaks.github.io/GameMarket_Kucher/final/final.html",
        "img_author": "Кучер.jpg",
        "img_game": ""
    },
    {
        "email": "23b_lkm@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Лавренко Каріна",
        "project_name": "Dudi 2",
        "project_github": "https://github.com/KarinaLavrenko/Phaser2stGame?authuser=0",
        "project_demo": "https://karinalavrenko.github.io/Phaser2stGame/?authuser=0",
        "project_drive": "https://drive.google.com/drive/folders/1T8N8q-PBfSBOrRVSNBdqb4bULfN1ZaE9?usp=classroom_web&authuser=0",
        "project_form": "https://forms.gle/XbBbwwGJ8kJ5tTya8?authuser=0",
        "gamemarket_github": "https://github.com/KarinaLavrenko/GameMarket_Lavrenko?authuser=0",
        "gamemarket_demo": "https://karinalavrenko.github.io/GameMarket_Lavrenko/",
        "gamemarket_market_page": "https://karinalavrenko.github.io/GameMarket_Lavrenko/market.html?authuser=0",
        "gamemarket_final_page": "https://karinalavrenko.github.io/GameMarket_Lavrenko/final/final.html?authuser=0",
        "img_author": "Лавренко.jpg",
        "img_game": ""
    }
]

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

// Перевірка існування знайденого блоку
if (itemsDiv) {
    // Вивід знайденого елементу
    // console.log(itemsDiv)

    // // Вивід значення поля знайденого елементу
    // console.log('Поле classList: ', itemsDiv.classList)
    // console.log('Поле id: ', itemsDiv.id)
    // console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    // console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    // // Додавання тексту в блок
    // itemsDiv.innerText = 'Перший Програмно доданий текст'
    // // itemsDiv.innerText = 'Другий Програмно доданий текст' 
    // itemsDiv.innerText += 'Другий Програмно доданий текст'

    // Додавання відформатованого HTML коду в блок
    // itemsDiv.innerHTML = '<div class = item></div>'
    // itemsDiv.innerHTML += '<div class = item></div>'
    // itemsDiv.innerHTML += '<div class = item></div>'
    // itemsDiv.innerHTML += '<div class = item></div>'
    // itemsDiv.innerHTML += '<div class = item></div>'

    // for (let i = 0; i < 100; i++) {
    //     itemsDiv.innerHTML += '<div class = item></div>'
    // }
    //Виведення елементів масиву
    itemsArray.forEach((item, index) => {
        // console.log(item)
        // itemsDiv.innerText += item
        // itemsDiv.innerHTML += `<div class = "item">${item}</div>`
        //Виводимо на веб сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML +=
            // `
            // <div class = "item">
            //     <h2>Вчитель №${index+1} з ${itemsArray.length}</h2>
            //     <p>${item.firstName} ${item.lastName}</p>
            //     <p>Предмет: ${item.subject}</p>
            //     <p><img src = "${item.photo}" class = "item-image"></p>
            //     <p><a href = ${item.url}" target = "_blank" class = "bonus price">Профіль</a></p>
            //     <p><a href = "mailto:${item.email}?subject=Питання&body=Доброго дня" target = "_blank" class = "price">Написати </a></p>
            // </div>
            // `

            `
        <div class="item">

                <!-- Блок назва товару -->
                <div class="item-title">${item.title}</div>

                <!-- Блок зображення товару -->
                <div class="item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>

                <!-- Блок з оплатою частинами -->
                <div class="parts-pay">
                    <div> <img src="img-market/mono-lapka.png" alt="">${item.mono}</div>
                    <div> <img src="img-market/pb.png" alt="">${item.pb}</div>
                </div>

                <!-- Блок ціни -->
                <div class="price">
                    <div> <span>${item.price_standart} </span><sup>грн</sup></div>
                    <div> <span>${item.price_discount} </span><sup>грн</sup></div>
                </div>

                <!-- Блок бонусної ціни -->
                <div class="price bonus">
                    <div>ціна за купоном</div>
                    <div><span>${item.price_coupon} </span><sup>грн</sup></div>
                </div>
            </div>
        `
    })
} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}

// //Визначення масиву товарів
// // let itemsArray = ['','','','']
// let itemsArray = [
//     'Газонокосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     // 'Газонокосарка 430',
//     // 'Електричний тример 130',
//     // 'Електрична газонокосарка 320',
//     // 'Акумуляторний оприскувач 12 E',
// ]

// //Виведення елементів масиву
// itemsArray.forEach((item) => {
//     console.log(item)
// })

// //Виведення елементів відсортованого масиву
// itemsArray.sort().forEach((item) => {
//     console.log(index + '-й елемент', item)
// })

// //Виведення в консоль масиву
// console.log(itemsArray)

// //Виведення в консоль елементів масиву
// for (let i=0; i<itemsArray.length; i++) {
//     console.log(itemsArray[i])
// }

// //Сортування масиву
// itemsArray = itemsArray.sort()

// //Виведення в консоль номерів та значень елементів масиву
// for (let i=0; i<itemsArray.length; i++) {
//     console.log(i + '-й елемент: ', itemsArray[i])
// }