// ==UserScript==
// @name         AutCraft Web Helper
// @namespace    http://mantrasoftware.net/
// @version      0.9
// @description  Changes various parts of the AutCraft website to make things a little easier.
// @author       Rodney Beck <denney@mantrasoftware.net>
// @match        http://www.autcraft.com/dashboard/applications/detail/id/*
// @match        http://autcraft.com/dashboard/applications/detail/id/*
// @grant        GM_xmlhttpRequest
// @require      http://code.jquery.com/jquery-2.1.3.min.js
// @updateURL    https://raw.githubusercontent.com/Denney/AutCraftWebHelper/master/AutCraft.user.js
// @downloadURL  https://raw.githubusercontent.com/Denney/AutCraftWebHelper/master/AutCraft.user.js
// @license      GPLv3
// ==/UserScript==

// IP address checking
var ip = $("div.details-avatar").clone();
ip.children().remove();
ip = ip.text().trim();
$("div.details-avatar").append(" >> <a target=\"_blank\" href=\"http://whatismyipaddress.com/ip/" + ip + "\">What's My IP Address</a>");

// Links
var field = $("div[hash|='bs9bnytb9d'] .input-data");
var username = field.html();

field.append("<br>>> <a target=\"_blank\" href=\"http://fishbans.com/u/" + username + "\">Fishbans</a>");
field.append("<br>>> <a target=\"_blank\" href=\"http://mcbans.com/player/" + username + "\">MCBans</a>");
field.append("<br>>> <a target=\"_blank\" href=\"http://mcbouncer.com/u/" + username + "\">MCBouncer</a>");

field.append("<br><br><strong>Other Useful Links</strong>");
field.append("<br>>> <a target=\"_blank\" href=\"http://namemc.com/s?" + username + "\">NameMC</a>");
field.append("<br>>> <a target=\"_blank\" href=\"http://minecraftnames.com/lookup.php?account=" + username + "\">Minecraft Name Lookup</a>");
field.append("<br>>> <a target=\"_blank\" href=\"http://minecraft-skin-viewer.com/player/" + username + "\">Minecraft Skin Viewer</a>");
field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=" + username + "\">Google (username)</a>");
field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=%22" + username + "%22 youtube\">Google (YouTube)</a>");
field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=%22" + username + "%22 minecraft\">Google (Minecraft)</a>");
field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=%22" + username + "%22 ban\">Google (Ban)</a>");
field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=%22" + username + "%22 minecraft ban\">Google (Minecraft + Ban)</a>");
