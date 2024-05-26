const accordionItems = document.querySelectorAll(".accordion-item");
        accordionItems.forEach(item => {
            const title = item.querySelector(".accordion-title");
            title.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
        const accordionContents = document.querySelectorAll(".accordion-content");
        accordionContents.forEach(item => {
            const title = item.querySelector(".sub-class-title");
            title.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
