/*для стрелки вверх*/
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        // удалим у кнопки класс btn-up_hide
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        // добавим к кнопке класс btn-up_hide
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        // при прокрутке содержимого страницы
        window.addEventListener('scroll', () => {
            // определяем величину прокрутки
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
            scrollY > 400 ? this.show() : this.hide();
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
            // переместим в начало страницы
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();





/*для списка фильтр*/
const response = {
    "pokedata": [
        {
            "id": "1",
            "name": "Метида",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Metis.jpg/100px-Metis.jpg",
            "rasmer":"60×40×34",
            "massa": "≈3, 6⋅10<sup>16",
            "orbitperiod": "+7ч4м29с",
            "year": 1979,
            "group": "Амальтея",
        },
        {
            "id": "2",
            "name": "Адрастея",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adrastea.jpg/100px-Adrastea.jpg",
            "rasmer": "20×16×14",
            "massa": "≈2⋅10<sup>15",
            "orbitperiod": "+7ч9м30с",
            "year": 1979,
            "group": "Амальтея",
        },
        {
            "id": "3",
            "name": "Амальтея",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Amalthea_Mond.jpg/100px-Amalthea_Mond.jpg",
            "rasmer": "250×146×128",
            "massa": "2,08⋅10<sup>18",
            "orbitperiod": "+11ч57м23с",
            "year": 1892,
            "group": "Амальтея",
        },
        {
            "id": "4",
            "name": "Фива",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Thebe.jpg/100px-Thebe.jpg",
            "rasmer": "116×98×84",
            "massa": "≈4,3⋅10<sup>17",
            "orbitperiod": "+16ч11м17с",
            "year": 1979,
            "group": "Амальтея"
        },
        {
            "id": "5",
            "name": "Ио",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Io_highest_resolution_true_color.jpg/100px-Io_highest_resolution_true_color.jpg",
            "rasmer": "3643",
            "massa": "8,9⋅10<sup>22",
            "orbitperiod": "+1,77",
            "year": 1610,
            "group": "Галилеевы спутники"
        },
        {
            "id": "6",
            "name": "Европа",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Europa-moon.jpg/100px-Europa-moon.jpg",
            "rasmer": "3122",
            "massa": "4,8⋅10<sup>22",
            "orbitperiod": "+3,55",
            "year": 1610,
            "group": "Галилеевы спутники"
        },
        {
            "id": "7",
            "name": "Ганимед",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ganymede_g1_true.jpg/100px-Ganymede_g1_true.jpg",
            "rasmer": "5262",
            "massa": "1,5⋅10<sup>23",
            "orbitperiod": "+7,15",
            "year": 1610,
            "group": "Галилеевы спутники"
        },
        {
            "id": "8",
            "name": "Каллисто",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Callisto.jpg/100px-Callisto.jpg",
            "rasmer": "4821",
            "massa": "1,1⋅10<sup>23",
            "orbitperiod": "+16,69",
            "year": 1610,
            "group": "Галилеевы спутники"
        }
    ]
}
const response2 = {
    "pokedata2": [
        {
            "id": "9",
            "name": "Фемисто",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/S_2000_J_1.jpg/100px-S_2000_J_1.jpg",
            "rasmer": "9",
            "massa": "6,9⋅10<sup>14",
            "orbitperiod": "+129,87",
            "year": "1975" + "," + "2000",
            "group": "Фемисто",
        },
        {
            "id": "10",
            "name": "Леда",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Leda_WISE-W3.jpg/100px-Leda_WISE-W3.jpg",
            "rasmer": "18",
            "massa": "1,1⋅10<sup>16",
            "orbitperiod": "+241,75",
            "year": 1974,
            "group": "Гималия",
        },
        {
            "id": "11",
            "name": "Гималия",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Himalia_from_New_Horizons.jpg",
            "rasmer": "160",
            "massa": "4.2⋅10<sup>18",
            "orbitperiod": "+250,37",
            "year": 1904,
            "group": "Гималия",
        },
        {
            "id": "12",
            "name": "Эрса",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ersa_CFHT_precovery_2003-02-24.png/100px-Ersa_CFHT_precovery_2003-02-24.png",
            "rasmer": "3",
            "massa": "?",
            "orbitperiod": "?",
            "year": 2018,
            "group": "Гималия",
        },
        {
            "id": "13",
            "name": "Пандия",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Pandia_CFHT_precovery_2003-02-28.png/100px-Pandia_CFHT_precovery_2003-02-28.png",
            "rasmer": "3",
            "massa": "?",
            "orbitperiod": "?",
            "year": 2017,
            "group": "Гималия",
        },
        {
            "id": "14",
            "name": "Лиситея",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Lysithea2.jpg/100px-Lysithea2.jpg",
            "rasmer": "38",
            "massa": "6,3⋅10<sup>16",
            "orbitperiod": "+259,89",
            "year": 1938,
            "group": "Гималия",
        },
        {
            "id": "15",
            "name": "Элара",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Elara2-LB1-mag17.jpg/100px-Elara2-LB1-mag17.jpg",
            "rasmer": "78",
            "massa": "8,7⋅10<sup>17",
            "orbitperiod": "+261,14",
            "year": 1905,
            "group": "Гималия",
        },
        {
            "id": "16",
            "name": "Дия",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Dia-Jewitt-CFHT_image-crop.png/100px-Dia-Jewitt-CFHT_image-crop.png",
            "rasmer": "4",
            "massa": "9,0⋅10<sup>13",
            "orbitperiod": "+287,93",
            "year": 2000 + 2012,
            "group": "Гималия",
        },
        {
            "id": "17",
            "name": "Карпо",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Carpo_CFHT_2003-02-25.gif/100px-Carpo_CFHT_2003-02-25.gif",
            "rasmer": "3",
            "massa": "4,5⋅10<sup>13",
            "orbitperiod": "+458,62",
            "year": 2003,
            "group": "Карпо",
        },
        {
            "id": "18",
            "name": "Валетудо",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Valetudo_CFHT_precovery_2003-02-28_annotated.gif/100px-Valetudo_CFHT_precovery_2003-02-28_annotated.gif",
            "rasmer": "1",
            "massa": "?",
            "orbitperiod": "?",
            "year": 2017,
            "group": "Валетудо",
        },
        {
            "id": "19",
            "name": "S/2003 J 12",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2003_J_12_Gladman_CFHT_crop.gif/100px-2003_J_12_Gladman_CFHT_crop.gif",
            "rasmer": "1",
            "massa": "1,5⋅10<sup>12",
            "orbitperiod": "−533,3",
            "year": 2003,
            "group": "Ананке",
        },
        {
            "id": "20",
            "name": "Эвпорие",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Euporie-discovery-CFHT-annotated.gif/100px-Euporie-discovery-CFHT-annotated.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−538,78",
            "year": 2001,
            "group": "Ананке",
        },
        {
            "id": "21",
            "name": "Евфеме",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Eupheme_CFHT_2003-02-25_annotated.gif/500px-Eupheme_CFHT_2003-02-25_annotated.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−561,52",
            "year": 2003,
            "group": "Ананке",
        },
        {
            "id": "22",
            "name": "S/2003 J 18",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2003_J_18_CFHT_recovery_annotated.gif/100px-2003_J_18_CFHT_recovery_annotated.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−569,73",
            "year": 2003,
            "group": "Ананке",
        },
        {
            "id": "23",
            "name": "S/2011 J 1",
            "foto": "",
            "rasmer": "2",
            "massa": "?",
            "orbitperiod": "−580,7",
            "year": 2011,
            "group": "Карме",
        },
        {
            "id": "24",
            "name": "S/2010 J 2",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2010_J_2_CFHT_discovery_annotated.gif/100px-2010_J_2_CFHT_discovery_annotated.gif",
            "rasmer": "1",
            "massa": "?",
            "orbitperiod": "−588,82",
            "year": 2010,
            "group": "Ананке",
        },
        {
            "id": "25",
            "name": "Тельксиное",
            "foto": "",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−597,61",
            "year": 2003,
            "group": "Ананке",
        },
        {
            "id": "26",
            "name": "Эванте",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Euanthe-discovery-CFHT-annotated.gif/100px-Euanthe-discovery-CFHT-annotated.gif",
            "rasmer": "3",
            "massa": "4,5⋅10<sup>13",
            "orbitperiod": "−598,09",
            "year": 2001,
            "group": "Ананке",
        },
        {
            "id": "27",
            "name": "Гелике",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Helike_CFHT_2003-02-25.gif/100px-Helike_CFHT_2003-02-25.gif",
            "rasmer": "4",
            "massa": "9,0⋅10<sup>13",
            "orbitperiod": "−601,40",
            "year": 2003,
            "group": "Ананке",
        },
        {
            "id": "28",
            "name": "Ортозие",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Orthosie-discovery-CFHT-annotated.gif/100px-Orthosie-discovery-CFHT-annotated.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−602,62",
            "year": 2001,
            "group": "Ананке",
        },
        {
            "id": "29",
            "name": "S/2017 J 7",
            "foto": "",
            "rasmer": "2",
            "massa": "?",
            "orbitperiod": "−602,77",
            "year": 2017,
            "group": "Ананке",
        },
        {
            "id": "30",
            "name": "S/2016 J 1",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/2016_J_1_CFHT_2003-02-26_annotated.gif/500px-2016_J_1_CFHT_2003-02-26_annotated.gif",
            "rasmer": "1",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−603,83",
            "year": 2016,
            "group": "Ананке",
        },
        {
            "id": "31",
            "name": "S/2017 J 3",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2017_J_3_CFHT_2003-12-25_annotated.gif/440px-2017_J_3_CFHT_2003-12-25_annotated.gif",
            "rasmer": "2",
            "massa": "?",
            "orbitperiod": "−605,76",
            "year": 2017,
            "group": "Ананке",
        },
        {
            "id": "32",
            "name": "Иокасте",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Iocaste-Jewitt-CFHT-annotated.gif/100px-Iocaste-Jewitt-CFHT-annotated.gif",
            "rasmer": "5",
            "massa": "1,9⋅10<sup>14",
            "orbitperiod": "−609,43",
            "year": 2000,
            "group": "Ананке",
        },
        {
            "id": "33",
            "name": "S/2003 J 16",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/archive/8/86/20210115235905%212003_J_16_CFHT_recovery_crop.gif/120px-2003_J_16_CFHT_recovery_crop.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−610,36",
            "year": 2003,
            "group": "Ананке",
        },
        {
            "id": "34",
            "name": "Праксидике",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Praxidike-Jewitt-CFHT-annotated.gif/100px-Praxidike-Jewitt-CFHT-annotated.gif",
            "rasmer": "7",
            "massa": "4,3⋅10<sup>14",
            "orbitperiod": "−613,90",
            "year": 2000,
            "group": "Ананке",
        },
        {
            "id": "35",
            "name": "Гарпалике",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Harpalyke_%28moon%29.png/548px-Harpalyke_%28moon%29.png",
            "rasmer": "4",
            "massa": "1,2⋅10<sup>14",
            "orbitperiod": "−624,54",
            "year": 2000,
            "group": "Ананке",
        },
        {
            "id": "36",
            "name": "Мнеме",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mneme_Discovery_Image.jpg/100px-Mneme_Discovery_Image.jpg",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−627,48",
            "year": 2003,
            "group": "Ананке",
        },
        {
            "id": "37",
            "name": "Гермиппе",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Hermippe-discovery.gif/100px-Hermippe-discovery.gif",
            "rasmer": "4",
            "massa": "9,0⋅10<sup>13",
            "orbitperiod": "−629,81",
            "year": 2001,
            "group": "Ананке",
        },
        {
            "id": "38",
            "name": "Тионе",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Thyone-discovery-CFHT-annotated.gif/100px-Thyone-discovery-CFHT-annotated.gif",
            "rasmer": "4",
            "massa": "9,0⋅10<sup>13",
            "orbitperiod": "−639,80",
            "year": 2001,
            "group": "Ананке",
        },
        {
            "id": "39",
            "name": "S/2017 J 9",
            "foto": "",
            "rasmer": "3",
            "massa": "?",
            "orbitperiod": "−640,90",
            "year": 2017,
            "group": "Ананке",
        },
        {
            "id": "40",
            "name": "Ананке",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ananké.jpg/100px-Ananké.jpg",
            "rasmer": "28",
            "massa": "3,0⋅10<sup>16",
            "orbitperiod": "−642,02",
            "year": 1951,
            "group": "Ананке",
        },
        {
            "id": "41",
            "name": "Герсе",
            "foto": "",
            "rasmer": "3",
            "massa": "1,5⋅1013",
            "orbitperiod": "−672,75",
            "year": 2003,
            "group": "Карме",
        },
        {
            "id": "42",
            "name": "Этне",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Aitne-discovery-CFHT-annotated.gif/100px-Aitne-discovery-CFHT-annotated.gif",
            "rasmer": "2",
            "massa": "4,5⋅1013",
            "orbitperiod": "−679,64",
            "year": 2001,
            "group": "Карме",
        },
        {
            "id": "43",
            "name": "S/2017 J 6",
            "foto": "",
            "rasmer": "2",
            "massa": "?",
            "orbitperiod": "?",
            "year": 2017,
            "group": "Пасифе",
        },
        {
            "id": "44",
            "name": "Кале",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kale-discovery-CFHT-annotated.gif/100px-Kale-discovery-CFHT-annotated.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−685,32",
            "year": 2001,
            "group": "Карме",
        },
        {
            "id": "45",
            "name": "Тайгете",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Taygete-Jewitt-CFHT-annotated.gif/100px-Taygete-Jewitt-CFHT-annotated.gif",
            "rasmer": "5",
            "massa": "1,6⋅1014",
            "orbitperiod": "−686,67",
            "year": 2000,
            "group": "Карме",
        },
        {
            "id": "46",
            "name": "S/2003 J 19",
            "foto": "",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−699,12",
            "year": 2003,
            "group": "Карме",
        },
        {
            "id": "47",
            "name": "Халдене",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Chaldene-Jewitt-CFHT-annotated.gif/100px-Chaldene-Jewitt-CFHT-annotated.gif",
            "rasmer": "4",
            "massa": "7,5⋅10<sup>13",
            "orbitperiod": "−699,33",
            "year": 2000,
            "group": "Карме",
        },
        {
            "id": "48",
            "name": "Филофросине",
            "foto": "",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−699,682",
            "year": 2003,
            "group": "Пасифе",
        },
        {
            "id": "49",
            "name": "S/2003 J 10",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/2003_J_10_Gladman_CFHT_crop.gif/100px-2003_J_10_Gladman_CFHT_crop.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−700,13",
            "year": 2003,
            "group": "Карме",
        },
        {
            "id": "50",
            "name": "S/2003 J 23",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/S2003j23ccircle.gif/100px-S2003j23ccircle.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−700,54",
            "year": 2003,
            "group": "Пасифе",
        },
        {
            "id": "51",
            "name": "Эриноме",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Erinome-Jewitt-CFHT-annotated.gif/100px-Erinome-Jewitt-CFHT-annotated.gif",
            "rasmer": "3",
            "massa": "4,5⋅10<sup>13",
            "orbitperiod": "−711,96",
            "year": 2000,
            "group": "Карме",
        },
        {
            "id": "52",
            "name": "Аойде",
            "foto": "",
            "rasmer": "4",
            "massa": "9,0⋅10<sup>13",
            "orbitperiod": "−714,66",
            "year": 2003,
            "group": "Пасифе",
        },
        {
            "id": "53",
            "name": "Каллихоре",
            "foto": "",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13",
            "orbitperiod": "−717,81",
            "year": 2003,
            "group": "Карме",
        },
        {
            "id": "54",
            "name": "S/2017 J 5",
            "foto": "",
            "rasmer": "2",
            "massa": "?",
            "orbitperiod": "?",
            "year": 2017,
            "group": "Карме",
        },
        {
            "id": "55",
            "name": "S/2017 J 8",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2017_J_8_CFHT_precovery_annotated.gif/100px-2017_J_8_CFHT_precovery_annotated.gif",
            "rasmer": "1",
            "massa": "?",
            "orbitperiod": "?",
            "year": 2017,
            "group": "Карме",
        },
        {
            "id": "56",
            "name": "Калике",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Kalyke-Jewitt-CFHT-annotated.gif/100px-Kalyke-Jewitt-CFHT-annotated.gif",
            "rasmer": "5",
            "massa": "1,9⋅10<sup>14",
            "orbitperiod": "−721,02",
            "year": 2000,
            "group": "Карме",
        },
        {
            "id": "57",
            "name": "Карме",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Carmé.jpg",
            "rasmer": "46",
            "massa": "1,3⋅10<sup>17</sup>",
            "orbitperiod": "−721,82",
            "year": 1938,
            "group": "Карме",
        },
        {
            "id": "58",
            "name": "Каллирое",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/S1999j1.jpg/100px-S1999j1.jpg",
            "rasmer": "7",
            "massa": "8,7⋅10<sup>14</sup>",
            "orbitperiod": "−722,62",
            "year": 1999,
            "group": "Пасифе",
        },
        {
            "id": "59",
            "name": "Эвридоме",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Eurydome-discovery-CFHT-annotated.gif/100px-Eurydome-discovery-CFHT-annotated.gif",
            "rasmer": "3",
            "massa": "4,5⋅10<sup>13</sup>",
            "orbitperiod": "−723,36",
            "year": 2001,
            "group": "Пасифе",
        },
        {
            "id": "60",
            "name": "/2017 J 2",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2017_J_2_CFHT_2003-02-26.gif/100px-2017_J_2_CFHT_2003-02-26.gif",
            "rasmer": "2",
            "massa": "?",
            "orbitperiod": "?",
            "year": 2017,
            "group": "Карме",
        },
        {
            "id": "61",
            "name": "S/2011 J 2",
            "foto": "",
            "rasmer": "1",
            "massa": "?",
            "orbitperiod": "−726,8",
            "year": 2011,
            "group": "Пасифе",
        },
        {
            "id": "62",
            "name": "Пазифее",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Pasithee-discovery-CFHT-annotated.gif/100px-Pasithee-discovery-CFHT-annotated.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13</sup>",
            "orbitperiod": "−726,93",
            "year": 2001,
            "group": "Карме",
        },
        {
            "id": "63",
            "name": "S/2010 J 1",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/2010_J_1_CFHT_image.gif/100px-2010_J_1_CFHT_image.gif",
            "rasmer": "2",
            "massa": "?",
            "orbitperiod": "−724,34",
            "year": 2010,
            "group": "Карме",
        },
        {
            "id": "64",
            "name": "Коре",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kore_s2003j14movie_circled.gif/100px-Kore_s2003j14movie_circled.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13</sup>",
            "orbitperiod": "−776,02",
            "year": 2003,
            "group": "Пасифе",
        },
        {
            "id": "65",
            "name": "Киллене",
            "foto": "",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13</sup>",
            "orbitperiod": "−731,10",
            "year": 2003,
            "group": "Пасифе",
        },
        {
            "id": "66",
            "name": "Эвкеладе",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Eukelade_s2003j1movie_arrow.gif/100px-Eukelade_s2003j1movie_arrow.gif",
            "rasmer": "4",
            "massa": '9,0⋅10<sup>13</sup>',
            "orbitperiod": "−735,20",
            "year": 2003,
            "group": "Карме",
        },
        {
            "id": "67",
            "name": "S/2017 J 1",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/2017_J_1_CFHT_precovery_annotated.gif/100px-2017_J_1_CFHT_precovery_annotated.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13</sup>",
            "orbitperiod": "−735,21",
            "year": 2017,
            "group": "Пасифе",
        },
        {
            "id": "68",
            "name": "S/2003 J 4",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/2003_J_4_Gladman_CFHT_crop.gif/100px-2003_J_4_Gladman_CFHT_crop.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13</sup>",
            "orbitperiod": "−739,29",
            "year": 2003,
            "group": "Пасифе",
        },
        {
            "id": "69",
            "name": "Пасифе",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pasiphaé.jpg/100px-Pasiphaé.jpg",
            "rasmer": "58",
            "massa": "3,0⋅10<sup>17</sup>",
            "orbitperiod": "−741,09",
            "year": 1908,
            "group": "Пасифе",
        },
        {
            "id": "70",
            "name": "Гегемоне",
            "foto": "",
            "rasmer": "3",
            "massa": "4,5⋅10<sup>13</sup>",
            "orbitperiod": "−745,50",
            "year": 2003,
            "group": "Пасифе",
        },
        {
            "id": "71",
            "name": "Архе",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bigs2002j1barrow.png/100px-Bigs2002j1barrow.png",
            "rasmer": "3",
            "massa": "4,5⋅10<sup>13</sup>",
            "orbitperiod": "−746,19",
            "year": 2002,
            "group": "Карме",
        },
        {
            "id": "72",
            "name": "Исоное",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Isonoe-Jewitt-CFHT-annotated.gif/100px-Isonoe-Jewitt-CFHT-annotated.gif",
            "rasmer": "4",
            "massa": "7,5⋅10<sup>13</sup>",
            "orbitperiod": "−750,13",
            "year": 2000,
            "group": "Карме",
        },
        {
            "id": "73",
            "name": "S/2003 J 9",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/2003_J_9_Gladman_CFHT_crop.gif/100px-2003_J_9_Gladman_CFHT_crop.gif",
            "rasmer": "1",
            "massa": "1,5⋅10<sup>12</sup>",
            "orbitperiod": "−752,84",
            "year": 2003,
            "group": "Карме",
        },
        {
            "id": "74",
            "name": "Эйрене",
            "foto": "",
            "rasmer": "4",
            "massa": "9,0⋅10<sup>13</sup>",
            "orbitperiod": "−758,34",
            "year": 2003,
            "group": "Карме",
        },
        {
            "id": "75",
            "name": "Синопе",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sinopé.jpg/100px-Sinopé.jpg",
            "rasmer": "38",
            "massa": "7,5⋅10<sup>16</sup>",
            "orbitperiod": "−762,33",
            "year": 1914,
            "group": "Пасифе",
        },
        {
            "id": "76",
            "name": "Спонде",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Sponde-discovery-CFHT-annotated.gif/100px-Sponde-discovery-CFHT-annotated.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13</sup>",
            "orbitperiod": "−771,60",
            "year": 2001,
            "group": "Пасифе",
        },
        {
            "id": "77",
            "name": "Автоное",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Autonoe-discovery-CFHT-annotated.gif/100px-Autonoe-discovery-CFHT-annotated.gif",
            "rasmer": "4",
            "massa": "9,0⋅10<sup>13</sup>",
            "orbitperiod": "−772,17",
            "year": 2001,
            "group": "Пасифе",
        },
        {
            "id": "78",
            "name": "Мегаклите",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Megaclite-Jewitt-CFHT-annotated.gif/100px-Megaclite-Jewitt-CFHT-annotated.gif",
            "rasmer": "6",
            "massa": "2,1⋅10<sup>14</sup>",
            "orbitperiod": "−792,44",
            "year": 2000,
            "group": "Пасифе",
        },
        {
            "id": "79",
            "name": "S/2003 J 2",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2003_J_2_Gladman_CFHT_crop.gif/100px-2003_J_2_Gladman_CFHT_crop.gif",
            "rasmer": "2",
            "massa": "1,5⋅10<sup>13</sup>",
            "orbitperiod": "−1077,02",
            "year": 2003,
            "group": "Пасифе",
        },
        {
            "id": "80",
            "name": "S/2003 J 24",
            "foto": "",
            "rasmer": "3",
            "massa": "?",
            "orbitperiod": "−715,4",
            "year": 2003 ,
            "group": "Карме",
        }
    ]
}


var tableContent1, tableButtons1;
var tableContent2, tableButtons2;

const createRow = (obj) => {
    const row = document.createElement("tr");
    const objKeys = Object.keys(obj);
    objKeys.map((key) => {
        const cell = document.createElement("td");
        cell.setAttribute("data-attr", key);
        if (key == "foto") {
            const img = document.createElement("img");
            img.setAttribute('src', obj[key]);
            img.alt = obj[""];
            img.style.width = "80px"; //изменение размера изображения
            cell.appendChild(img);
        } else {
            cell.innerHTML = obj[key];
        }
        row.appendChild(cell);
    });
    return row;
};

const getTableContent = (data, tableContent) => {
    data.map((obj) => {
        const row = createRow(obj);
        tableContent.appendChild(row);
    });
};

const sortData = (data, param, direction, tableContent) => {
    tableContent.innerHTML = '';
    const sortedData =
        direction == "asc"
            ? [...data].sort(function (a, b) {
                if (a[param] < b[param]) {
                    return -1;
                }
                if (a[param] > b[param]) {
                    return 1;
                }
                return 0;
            })
            : [...data].sort(function (a, b) {
                if (b[param] < a[param]) {
                    return -1;
                }
                if (b[param] > a[param]) {
                    return 1;
                }
                return 0;
            });

    getTableContent(sortedData, tableContent);
};

const resetButtons = (event, tableButtons) => {
    [...tableButtons].map((button) => {
        if (button !== event.target) {
            button.removeAttribute("data-dir");
        }
    });
};

window.addEventListener("load", () => {
    tableContent1 = document.getElementById("table-content");
    tableButtons1 = document.querySelectorAll(".data-table th button");
    getTableContent(response.pokedata, tableContent1);

    [...tableButtons1].map((button) => {
        button.addEventListener("click", (e) => {
            resetButtons(e, tableButtons1);
            if (e.target.getAttribute("data-dir") == "desc") {
                sortData(response.pokedata, e.target.id, "desc", tableContent1);
                e.target.setAttribute("data-dir", "asc");
            } else {
                sortData(response.pokedata, e.target.id, "asc", tableContent1);
                e.target.setAttribute("data-dir", "desc");
            }
        });
    });

    tableContent2 = document.getElementById("table-content2");
    tableButtons2 = document.querySelectorAll(".data-table2 th button");
    getTableContent(response2.pokedata2, tableContent2);

    [...tableButtons2].map((button) => {
        button.addEventListener("click", (e) => {
            resetButtons(e, tableButtons2);
            if (e.target.getAttribute("data-dir") == "desc") {
                sortData(response2.pokedata2, e.target.id, "desc", tableContent2);
                e.target.setAttribute("data-dir", "asc");
            } else {
                sortData(response2.pokedata2, e.target.id, "asc", tableContent2);
                e.target.setAttribute("data-dir", "desc");
            }
        });
    });
});