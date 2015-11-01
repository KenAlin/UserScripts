// ==UserScript==
// @name           First EP of the season
// @description    Highlight first EP of a new anime in animeultima (calendar view only)
// @author         KévinS_
// @require        http://wave-it.fr/ressources/require.user.js
// @include        *animeultima.io/ajax.php*
// @version		   1.0.1
// ==/UserScript==

// Coloration
function color(filterFunction) {
    $$('a').filter(filterFunction).setStyle('background-color', '#EDB92E');
    $$('a').filter(filterFunction).setStyle('color', 'black');
    $$('a').filter(filterFunction).setStyle('border', '1px solid lightgray');
    $$('a').filter(filterFunction).setStyle('padding', '2px');
}

// C'est parti !
color(function(el) {return el.get('text').search(/Episode 1$/i)>0 ;});
