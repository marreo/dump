import 'bootstrap';
import 'chart.js';
import fontawesome from '@fortawesome/fontawesome';
import {faTwitterSquare, faRedditSquare} from '@fortawesome/fontawesome-free-brands';
import {faEnvelopeSquare} from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faTwitterSquare);
fontawesome.library.add(faRedditSquare);
fontawesome.library.add(faEnvelopeSquare);

$(document).ready(function () {
    $(document).on('click', 'label.btn', function() { $('#btnVote').prop('disabled', false); })

    var dates = ['2017-06-30', '2017-12-31',
    '2018-06-30', '2018-12-31',
    '2019-06-30', '2019-12-31',
    '2020-06-30', '2020-12-31',
    '2021-06-30', '2021-12-31',
    '2022-06-30', '2022-12-31',
    '2023-06-30', '2023-12-31',
    '2024-06-30', '2024-12-31',
    '2025-06-30', '2025-12-31',
    ];

    var now = new Date();
    now.setHours(0,0,0,0);
    dates.forEach(function(item, index, array) {
        var date = new Date(item)
        date.setHours(0,0,0,0);
        if (now > date) {
            $('#btn-v' + (index + 1)).prop('disabled', true);
            $('#btn-v' + (index + 1)).parent().addClass('disabled');
        }
    });
});