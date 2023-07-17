function calculator() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.bnc-clear'),


        start() {
            this.btnClick();
            this.pressEnter();
        },

        btnClick() {
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.delNum();
                }

                if (el.classList.contains('btn-equal')) {
                    this.count();
                }
            });
        },

        btnToDisplay(value) {
            this.display.value += value; 
        },

        clearDisplay() {
            this.display.value = '';
        },

        delNum() {
            this.display.value = this.display.value.slice(0,-1)
        },

        count() {
            let count = this.display.value;

            try {
                count = eval(count);

                if (!count) {
                    alert('Invalid count');
                    return;
                }

                this.display.value = String(count);
            } catch (error) {
                alert('Invalid Count')
            }
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.count();
                }
            });
        }
    };
}

const calc = calculator();
calc.start(); 