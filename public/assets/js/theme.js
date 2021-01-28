
const themeBtn = document.querySelector('.js-theme-btn');
themeBtn.addEventListener('click', (e) => {
    const themeWrapper = document.querySelector('.section-theme');
    themeWrapper.classList.toggle('active')
});

const themeClose = document.querySelector('.js-close-theme');
themeClose.addEventListener('click', (e) => {
    const themeWrapper = document.querySelector('.section-theme');
    themeWrapper.classList.remove('active')
});

   
class CustomTheme {
    constructor() {
        this.islocalStorage = function() {
            try {
                localStorage.setItem("test", "testing");
                localStorage.removeItem("test");
                return true;
            } catch (error) {
                return false
            }
           
        };

        this.schemeBtns = document.querySelectorAll('.js-theme-color');
        this.schemeBtns.forEach((btn) => {
            const btnVal = btn.value;
            btn.addEventListener('click', () => this.themeScheme(btnVal))
        });

        this.fontBtns = document.querySelectorAll('.js-font-btn');
        this.fontBtns.forEach((btn) => {
            const btnVal = btn.value;
            const btnTag = btn;
            btn.addEventListener('click', () => this.themeFont(btnVal, btnTag))
        });

        this.switchBtn = document.querySelector('.js-theme-toggle');
        const clicked = this.switchBtn;
        this.switchBtn.addEventListener('click', () => this.themePosition(clicked))
    }

    themeScheme(btnVal) {
        document.documentElement.setAttribute('data-theme', btnVal);
        if (this.islocalStorage) {
            localStorage.setItem('theme-name', btnVal);
        }
    };
    
    themeFont(btnVal,btnTag) {
        document.documentElement.style.setProperty('--font-size', `${btnVal}px`);
        if (this.islocalStorage) {
            localStorage.setItem('font-size', btnVal);
        }
        ;
        if (btnVal == localStorage.getItem('font-size')) {
            removeActive();
            btnTag.classList.add('active');
    }
};

    themePosition(clicked) {
    if (clicked.getAttribute('aria-checked') == 'true') {
        clicked.setAttribute('aria-checked', 'false');
        document.documentElement.style.setProperty('--position', 'static');
        document.documentElement.style.setProperty('--top-margin', '0px');
        if (this.islocalStorage) {
            localStorage.setItem('position', 'static');
        }

    } else {
        clicked.setAttribute('aria-checked', 'true');
        document.documentElement.style.setProperty('--position', 'fixed');
        document.documentElement.style.setProperty('--top-margin', '96px');
        if (this.islocalStorage) {
            localStorage.setItem('position', 'fixed');
        }
    }

    }
}

function removeActive() {
    const btns = document.querySelectorAll('.js-font-btn');
    btns.forEach((btn) => {
        btn.classList.remove('active');
    })
}

if (window.CSS && CSS.supports('color', 'var(--i-support')) {
    new CustomTheme()
};

    


