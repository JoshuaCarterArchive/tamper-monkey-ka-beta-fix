// ==UserScript==
// @name         Kiss Anime Beta Server Fix
// @namespace    Khada
// @version      0.1
// @description  Improves beta server behaviour by automatically adding "&pfail=1" to the end of KA video urls when using 's=beta' server (and 's=default' for those using beta as default).
// @author       khadakuraki@gmail.com
// @match        http://*kissanime.ru/*&s=beta
// @match        http://*kissanime.ru/*&s=default
// @exclude      http://*kissanime.ru/*&pfail=1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //reload page with same url + "&pfail=1"
    window.location.replace(window.location.href + "&pfail=1");
})();