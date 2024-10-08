
    const promoMessage = document.getElementById('promo-message');
    const movieDetailsButtons = document.querySelectorAll('.details-btn');
    const movieElements = document.getElementsByClassName('movie');

    promoMessage.onmouseover = function() {
        promoMessage.textContent = "Поспішайте, квитки закінчуються!";
    };

    promoMessage.addEventListener('mouseout', function() {
        promoMessage.textContent = "Не пропустіть нові прем'єри!";
    });

    movieDetailsButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const details = this.nextElementSibling;
            if (details.classList.contains('hidden')) {
                details.classList.remove('hidden');
                details.style.display = 'block';
            } else {
                details.classList.add('hidden');
                details.style.display = 'none';
            }
        });
    });

    for (let i = 0; i < movieElements.length; i++) {
        movieElements[i].addEventListener('click', function() {
            alert('Вибраний фільм: ' + this.querySelector('h2').textContent);
        });
    };
