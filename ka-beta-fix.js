// ==UserScript==
// @name         Kiss Anime Beta Server Fix
// @namespace    Khada
// @version      0.5
// @description  Auto add "&pfail=1" to KA vid urls ending in "&s=beta" or "&s=default".
// @author       khadakuraki@gmail.com
// @match        http://*kissanime.ru/*&s=beta
// @match        http://*kissanime.ru/*&s=default
// @exclude      http://*kissanime.ru/*&pfail=1
// @grant        none
// @homepageURL  https://github.com/JoshuaCarter/tamper-monkey-ka-beta-fix
// @downloadURL  https://raw.githubusercontent.com/JoshuaCarter/tamper-monkey-ka-beta-fix/master/ka-beta-fix.js
// @supportURL   https://github.com/JoshuaCarter/tamper-monkey-ka-beta-fix/issues
// ==/UserScript==

(function() {
    'use strict';

    //reload page with same url + "&pfail=1"
    window.location.replace(window.location.href + "&pfail=1");
})();
