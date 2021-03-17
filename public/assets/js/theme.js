let themeOpener = document.querySelector('.js-theme-opener'),
    themeClosers = document.querySelectorAll('.js-theme-close'),
    lastFocus,
    theme = document.querySelector('.c-theme'),
    bgOverlay = document.querySelector('.bg-overlay');

    // to show our modal
themeOpener.addEventListener( 'click', function( e ) {
    lastFocus = document.activeElement;
    theme.setAttribute('tabindex', '1');
    theme.focus();
    theme.classList.add('active');
    bgOverlay.classList.add('active');
    document.documentElement.classList.add('active');
    focusRestrict(theme)
  });
  
  // to close our modal
  themeClosers.forEach(btn => {
    btn.addEventListener( 'click', function( e ) {
    theme.classList.remove('active');
    bgOverlay.classList.remove('active');
    document.documentElement.classList.remove('active');
    lastFocus.focus();
    })
  });



  function modalClose ( e ) {
    if ( !e.keyCode || e.keyCode === 27 ) {
        lastFocus.focus();
        document.querySelector('.c-theme').classList.remove('active');
        document.querySelector('.bg-overlay').classList.remove('active');
        document.documentElement.classList.remove('active');
    }
  }
  
  document.addEventListener('keydown', modalClose);

function focusRestrict ( event ) {
    document.addEventListener('focus', function( event ) {
      if ( theme && !theme.contains( event.target ) ) {
        event.stopPropagation();
        theme.focus();
      }
    }, true);
  }
  
  
let themeFonts = document.querySelectorAll('.c-theme__button--font');
let themeColors = document.querySelectorAll('.c-theme__color');
let themeBg = document.querySelectorAll('.c-theme__bg');
  
  themeFonts.forEach((btn,index) => {
    if (index == themeFonts.length -1) {
        btn.setAttribute('tabindex', 0);
      } else {
        btn.setAttribute('tabindex', -1); 
      } 
      let val = document.querySelector('.js-theme_color--labels');
      let nextVal = val.firstElementChild;
    btn.addEventListener('keydown', (e) => {
        if (e.keyCode == 9) {
            e.preventDefault();
            btn.setAttribute('tabindex', -1);
            let nextEl = btn.previousElementSibling;
            if (btn.previousElementSibling != null) {
              nextEl.setAttribute('tabindex', 0);
              nextEl.focus();
            } else {
              let firstEl = document.querySelector('.c-theme__button--fonts').lastElementChild;
              firstEl.setAttribute('tabindex',0);
              nextVal.focus();
            }
        }
    })
       
  })

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

