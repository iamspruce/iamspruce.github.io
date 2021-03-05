let themeOpener = document.querySelector('.js-theme-opener');
let themeClosers = document.querySelectorAll('.js-theme-close');

themeOpener.addEventListener('click', () => {
    const theme = document.querySelector('.c-theme');
    const bgOverlay = document.querySelector('.bg-overlay');
    theme.classList.add('active');
    bgOverlay.classList.add('active');
    document.documentElement.classList.add('active');
});

themeClosers.forEach((btn) => {
    btn.addEventListener('click', () => {
    const theme = document.querySelector('.c-theme');
    const bgOverlay = document.querySelector('.bg-overlay');
    theme.classList.remove('active');
    bgOverlay.classList.remove('active');
    document.documentElement.classList.remove('active');
    })
})
let themeFonts = document.querySelectorAll('.c-theme__button--font');
let themeColors = document.querySelectorAll('.c-theme__color');
let themeBg = document.querySelectorAll('.c-theme__bg');
class Theme {
    constructor(button,name,property) {
        this.islocalStorage = function() {
            try {
                localStorage.setItem("test", "testing");
                localStorage.removeItem("test");
                return true;
            } catch (error) {
                return false
            } 
        };
        this.eachBtn = button;
        this.name = name;
        this.property = property;
        this.eachBtn.forEach((btn) => {
            const btnTag = btn;
            const btnTags = this.eachBtn;
            const btnVal = btn.value;
            const btnName = this.name;
            const btnProp = this.property;
            btn.addEventListener('click', () => this.useTheme(btnVal,btnName,btnProp,btnTag,btnTags))
        });
        this.removeActive = (btn) => {
            const btnTag = this.eachBtn;
            btn.addEventListener('click', remove(btnTag))
        }
    }
    useTheme(btnVal,btnName,btnProp,btnTag,btnTags) {
        if (this.islocalStorage) {
            this.remove(btnTags);
            btnTag.classList.add('active');
            let buttonVal = btnVal;            
            let buttonName = btnName;
            localStorage.setItem(buttonName, buttonVal);
            let storedItem = localStorage.getItem(btnName);
            if (storedItem == "Dim" || storedItem == "Default" || storedItem == "Light Out") {
                document.documentElement.setAttribute('data-theme',btnVal)
            } else {
            document.documentElement.style.setProperty(btnProp,btnVal)            
            }
        }
        }
        remove(btnTag) {
            btnTag.forEach(btn => {
                btn.classList.remove('active')
            });
        }
}



if (window.CSS && CSS.supports('color', 'var(--i-support')) {
    new Theme(themeFonts,'font-size','--font-size');
    new Theme(themeColors,'color','--primary');
    new Theme(themeBg,'bg','--bg');
};

