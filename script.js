
    document.addEventListener('DOMContentLoaded', function () {
        const unitSelections = document.querySelectorAll('.unit-selection');
        const totalPriceElement = document.getElementById('total-price');

        unitSelections.forEach((selection) => {
            selection.addEventListener('change', function () {
                document.querySelectorAll('.dropdown-section').forEach(section => section.classList.remove('active'));

                const target = this.dataset.target;
                if (target) {
                    document.getElementById(target).classList.add('active');
                }

                const price = this.dataset.price;
                totalPriceElement.textContent = `$${price} USD`;
            });
        });
    });