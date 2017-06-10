import './imports.js';
import $ from 'jquery';

console.log('Starting WebScraper...');

$(document).ready(function () {
    $('ul.catlist > li > table * tr')
        .append('<td class="column-actions"><button name="copy">Copy</button></td>');
});

