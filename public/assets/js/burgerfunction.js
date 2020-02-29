$(document).ready(function () {
    $('.devour').on('click', function (event) {
        event.preventDefault();

        let id = $(this).data('id');
        let newDevoured = $(this).data('newDevoured');

        let newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newDevouredState
        }).then(
            function () {
                console.log('The Burger has been Devoured', newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $('.swiper-slide').on('dblclick', function (event) {
        event.preventDefault();

        let id = this.id;
        let selection = menuSwap(id);

        let newBurger = {
            name: selection
        }

        $.ajax('api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function () {
                console.log(`Successfully added new breakfast item!`);

                location.reload();
            }
        )
        console.log(`This is my menu selection: ${selection}`)
    });


    $('.create-form').on('submit', function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            name: $('#newBurger').val().trim(),
        };

        // Send the POST request.
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function () {
                console.log('Successfully added new burger!');
                // Reload the page to get the updated list
                location.reload();

            }
        );
    });

    $('.delete').on('click', function (event) {
        let id = $(this).data('id');

        // Send the DELETE request.
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(
            function () {
                console.log('Deleted Burger: ', id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

const menuSwap = (menuId) => {
    switch (menuId) {
        case 'MenuItem1': return 'Pancakes';
        case 'MenuItem2': return 'Waffles';
        case 'MenuItem3': return 'French Toast';
        case 'MenuItem4': return 'Scrambled Eggs';
        case 'MenuItem5': return 'Bacon';
        case 'MenuItem6': return 'Orange Juice';
        case 'MenuItem7': return 'Omelette';
    }
}