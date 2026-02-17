function initTabs(tabsContainer) {
    const tabNavigation = tabsContainer.querySelector('.tab__navigation');
    const tabContents = tabsContainer.querySelector('.tab__contents');

    if (!tabNavigation || !tabContents) {
        console.warn('Неверная структура вкладок:', tabsContainer);
        return;
    }

    const tabs = Array.from(tabNavigation.children); 
    const contents = Array.from(tabContents.children); 

    tabNavigation.addEventListener('click', (event) => {
        const clickedTab = event.target.closest('.tab');

        if (!clickedTab || clickedTab.classList.contains('tab_active')) {
            return;
        }

        const index = tabs.indexOf(clickedTab);

        if (index === -1) return;

        tabs.forEach(tab => tab.classList.remove('tab_active'));

        contents.forEach(content => content.classList.remove('tab__content_active'));

        clickedTab.classList.add('tab_active');

        if (contents[index]) {
            contents[index].classList.add('tab__content_active');
        } else {
            console.warn('Нет контента для вкладки с индексом', index);
        }
    });
}