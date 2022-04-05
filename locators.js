//1 - элемент с картинкой
$x('//*[@id="page"]/section[3]/div/ul/li[1]/div/div[1]/div/img')
document.querySelector('#page > section.module.module--promo > div > ul > li.media-list__item.media-list__item--1 > div > div.media__image > div > img')

//2.1 - топ нав меню - найти только первый видимый элемент 
$x('//*[@id="orb-nav-links"]//child::li[1]')
document.querySelector('#orb-nav-links > ul').firstChild

//2.2 - последний видимый элемент
$x('//*[@id="orb-nav-more"]')
document.querySelector('#orb-nav-links > ul').lastElementChild

//2.3- найти все видимые элементы
$x('//*[@id="orb-nav-links"]/ul/li[not (contains(@class, "orb-nav-hide"))]')

//2.4 - все невидимые элементы
$x('//*[contains(@class, "orb-nav-hide")]')
document.getElementsByClassName("orb-nav-hide")

//2.5 - найти нечетные элементы
document.querySelectorAll('#orb-nav-links > ul >li:nth-child(odd)')

//3-дата
$x('//*[contains(text( ), "Monday, 4 April")]')
document.getElementsByClassName('module__title')[0].childNodes[1]

//4 - кликабельный элемент поиска
$x('//*[contains(text( ), "Search BBC")]')
document.getElementById('#orbit-search-button')

//5 - лого
$x('//title[contains(text( ), "Homepage")]')
document.getElementById('#homepage-link')

//6 - новости блоком
$x('//*[@id="page"]/section[3]/div/ul')
document.getElementsByClassName('media-list')

