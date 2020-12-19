class Zoom {
    constructor(config) {
        const { zoomHandler, node, align } = config || {};
        this._zoomHandler = zoomHandler;
        this.align = align || ['bottom', 'right'];
        this._clickHandler = this._clickHandler.bind(this);

        this._createMarkup(node || document.body);
        this._initStyles();
    }

    _createMarkup(node) {
        const plusButton = document.createElement('div');
        plusButton.innerText = '+';
        plusButton.classList.add('zoomer-plus-button', 'zoomer-button', 'noselect');
        plusButton.addEventListener('click', this._clickHandler)

        const minusButton = document.createElement('div');
        minusButton.innerText = '-';
        minusButton.classList.add('zoomer-minus-button', 'zoomer-button', 'noselect');
        minusButton.addEventListener('click', this._clickHandler)

        const wrapper = document.createElement('div');
        wrapper.appendChild(plusButton);
        wrapper.appendChild(minusButton);
        wrapper.classList.add('zoomer-wrapper', ...this.align);
        node.appendChild(wrapper);
    }

    _clickHandler(event) {
        if (this._zoomHandler) {
            const res = Number(event.target.innerText + 1)
            this._zoomHandler(res);
        }
    }

    _initStyles() {
        const sheet = (() => {
            const style = document.createElement("style");
            style.appendChild(document.createTextNode(""));
            document.head.appendChild(style);
            return style.sheet;
        })();

        ``.split('}').map((str) => str + '}').slice(0, -1).forEach((style, index) => {
            sheet.insertRule(style, index);
        });
    }
}