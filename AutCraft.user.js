// ==UserScript==
// @name         AutCraft Web Helper
// @namespace    http://mantrasoftware.net/
// @version      0.10
// @description  Changes various parts of the AutCraft website to make things a little easier.
// @author       Rodney Beck (Forked and maintained by Mmpf and MODKILLER1001) <denney@mantrasoftware.net>
// @match        http://www.autcraft.com/dashboard/applications/detail/id/*
// @match        http://autcraft.com/dashboard/applications/detail/id/*
// @match        http://www.autcraft.com/dashboard/applications/application?app_id=*
// @match        http://autcraft.com/dashboard/applications/application?app_id=*
// @grant        GM_xmlhttpRequest
// @require      http://code.jquery.com/jquery-2.1.3.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @updateURL    https://raw.githubusercontent.com/MODKILLER1001/AutCraftWebHelper/master/AutCraft.user.js
// @downloadURL  https://raw.githubusercontent.com/MODKILLER1001/AutCraftWebHelper/master/AutCraft.user.js
// @license      GPLv3
// ==/UserScript==

function addAdditionalLinks(jnode) {
    // IP address checking
    var ip = $("div.details-avatar").clone();
    ip.children().remove();
    ip = ip.text().trim();
    $("div.details-avatar").append(" >> <a target=\"_blank\" href=\"http://whatismyipaddress.com/ip/" + ip + "\">What's My IP Address</a>");

    // Links
    var field = $("div[hash|='bs9bnytb9d'] .input-data");
    var username = field.html();

    field.append("<br>>> <a target=\"_blank\" href=\"http://mcbans.com/player/" + username + "\">MCBans</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"http://mcbouncer.com/u/" + username + "\">MCBouncer</a>");

    field.append("<br><br><strong>Other Useful Links</strong>");
    field.append("<br>>> <a target=\"_blank\" href=\"http://namemc.com/name?" + username + "\">NameMC Lookup (previous name owners and previous names)</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"http://namemc.com/profile?" + username + "\">NameMC Profile (more in depth info about that player)</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"http://minecraftnames.com/lookup.php?account=" + username + "\">Minecraft Name Lookup</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"http://minecraft-skin-viewer.com/player/" + username + "\">Minecraft Skin Viewer</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com/#newwindow=1&q=" + username + "\">Google (username)</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com/#newwindow=1&q=%22" + username + "%22 youtube\">Google (YouTube)</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com/#newwindow=1&q=%22" + username + "%22 minecraft\">Google (Minecraft)</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com/#newwindow=1&q=%22" + username + "%22 ban\">Google (Ban)</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com/#newwindow=1&q=%22" + username + "%22 minecraft ban\">Google (Minecraft + Ban)</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com/#newwindow=1&q=%22" + username + "%22 4chan\">Google (4chan)</a>");
}

waitForKeyElements("div.app_inner_user", addAdditionalLinks);
