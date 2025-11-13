https://rozetka.com.ua/
вводимо ‘mx master 4’ в поле пошуку > input[data-testid="search-suggest-input”] 
Натискаємо > button[data-testid="search-suggest-submit"]
Додаємо до кошика вибраний товар > article[data-goods-id="546538227"] button[class="class="buy-button goods-tile__buy-button d-flex"]
З’являється сповіщення > //span[@class='notification__text' and text()=' Товар додано до кошика ']
Натискаємо кнопку ‘Відкрити корзину’ в сповіщенні > //button[@aria-label="Відкрити корзину" and text()=' Відкрити ']
Або кнопку в хедері > button[data-testid="header-cart-btn"]
З’являється модальне вікно > div[data-testid="modal-content"]
Очікуємо побачити доданий у кошик товар > li[class="cart-list__item"]

https://rozetka.com.ua/
Вводимо ‘ps 5 pro’ в поле пошуку >  input[data-testid="search-suggest-input”]
Натискаємо > button[data-testid="search-suggest-submit"]
Додаємо в список бажаного вибраний товар > article[data-goods-id="477458454"] button[class="wishlist-button js-wish-button"]
З’являється сповіщення > div[class="notification__wrapper notification__wrapper--success"]
Натискаємо на іконку в хедері > a[title="Списки бажань"]
Очкуємо побачити доданий товар у списках бажаного > div[class="wishlists"]

https://comfy.ua/
Натискаємо на категорію > //div[normalize-space(text())="Телевізори"]
Вибираємо фільтр(1): //a[@title="Телевізори Samsung"]
Вибираємо фільтр(2): //a[contains(@class, "general-filter-item") and contains(normalize-space(.), "100''")] 
