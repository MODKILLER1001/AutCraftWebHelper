// ==UserScript==
// @name         AutCraft Web Helper
// @namespace    http://mantrasoftware.net/
// @version      0.3
// @description  Changes various parts of the AutCraft website to make things a little easier.
// @author       Rodney Beck <denney@mantrasoftware.net>
// @match        http://www.autcraft.com/dashboard/applications/detail/id/*
// @match        http://autcraft.com/dashboard/applications/detail/id/*
// @grant        none
// @require      http://code.jquery.com/jquery-2.1.3.min.js
// @updateURL    https://raw.githubusercontent.com/Denney/AutCraftWebHelper/master/AutCraft.user.js
// @downloadURL  https://raw.githubusercontent.com/Denney/AutCraftWebHelper/master/AutCraft.user.js
// @license      GPLv3
// ==/UserScript==

// Add some helpful links to the applications page.
var field = $("div[hash|='bs9bnytb9d'] .input-data");
var username = field.html();

field.append("<br>>> <a target=\"_blank\" href=\"http://mcbans.com/player/" + username + "\">MCBans</a>");
field.append("<br>>> <a target=\"_blank\" href=\"http://mcbouncer.com/u/" + username + "\">MCBouncer</a>");
field.append("<br>>> <a target=\"_blank\" href=\"http://minecraft-skin-viewer.com/player/" + username + "\">Minecraft Skin Viewer</a>");
field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=" + username + "\">Google (username)</a>");
field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=" + username + " youtube\">Google (YouTube)</a>");
field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=" + username + " minecraft\">Google (Minecraft)</a>");
field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=" + username + " ban\">Google (Ban)</a>");
field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=" + username + " minecraft ban\">Google (Minecraft + Ban)</a>");