// ==UserScript==
// @name         Kiss Anime Beta2 Default
// @namespace    Khada
// @version      2019.03.29
// @description  Treat default server as beta2 server
// @author       joshua.carter.dev@gmail.com
// @match        *://kissanime.ru/*s=default
// @grant        none
// @run-at       document-start
// @icon         http://kissanime.ru/Content/images/favicon.ico
// @homepageURL  https://github.com/JoshuaCarterArchive/tamper-monkey-ka-beta-fix
// @supportURL   https://github.com/JoshuaCarterArchive/tamper-monkey-ka-beta-fix
// @downloadURL  https://github.com/JoshuaCarterArchive/tamper-monkey-ka-beta-fix/master/ka-beta-fix.js
// ==/UserScript==

console.log('Switching to beta2...');

(function() {
    'use strict';
    //stop window loading
    window.stop();
    // make new url for beta2 server
    let url = window.location.href.replace('s=default', 's=beta2');
    //load new url
    window.location.replace(url);
})();
