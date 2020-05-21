window.addEventListener('load', colorPicke);

function colorPicke() {
    let r, g, b;
    let box = document.querySelector('.box-color');
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.type === 'range') {
            switch (input.id) {
                case 'red': r = input.value; break;
                case 'green': g = input.value; break;
                default: b = input.value; break;
            }
            let rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            box.style.backgroundColor = rgb;
            document.querySelector('span').innerHTML = rgb;
            input.addEventListener('input', colorPicke);
        } else {
            switch (input.name) {
                case 'red': input.value = r; break;
                case 'green': input.value = g; break;
                default: input.value = b; break;
            }
        }
    });
}