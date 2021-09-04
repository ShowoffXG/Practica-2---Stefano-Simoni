let app = {};

app = (() => {
    let self = {};
    let spawn;
    self.button = (n, spawn) => {
        while (spawn.firstChild) {
            spawn.removeChild(spawn.lastChild);
        }
        for (let index = 0; index < n; index++) {
            let button = document.createElement('button');
            button.innerHTML = 'Boton';
            button.className = "btn m-3 btn-dark btn-lg";
            spawn.appendChild(button);
        }
    }

    return self;
    })();