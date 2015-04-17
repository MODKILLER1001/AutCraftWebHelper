// ==UserScript==
// @name         AutCraft Web Helper
// @namespace    http://mantrasoftware.net/
// @version      0.7
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

// Fishbans checking
var field = $("div[hash|='bs9bnytb9d'] .input-data");
var username = field.html();

GM_xmlhttpRequest({
  method: "GET",
  url: "http://api.fishbans.com/bans/" + username,
  onload: function(data) {
    var parsed = $.parseJSON(data.responseText);

    field.append("<br>");

    if (parsed.success) {
      field.append("<br>Ban information provided by <a target=\"_blank\" href=\"http://fishbans.com/u/" + username + "\">Fishbans</a>.");
      field.append("<br>>> <a target=\"_blank\" href=\"http://mcbans.com/player/" + username + "\">MCBans</a>: " + parsed.bans.service.mcbans.bans);
      if (parsed.bans.service.mcbans.bans != 0) {
        $.each(parsed.bans.service.mcbans.ban_info, function(index, value) {
          field.append("<br>>>>> " + index + ": <strong>" + value + "</strong>");
        });
      }
      field.append("<br>>> <a target=\"_blank\" href=\"http://mcbouncer.com/u/" + username + "\">MCBouncer</a>: " + parsed.bans.service.mcbouncer.bans);
      if (parsed.bans.service.mcbouncer.bans != 0) {
        $.each(parsed.bans.service.mcbouncer.ban_info, function(index, value) {
          field.append("<br>>>>> " + index + ": <strong>" + value + "</strong>");
        });
      }
      field.append("<br>>> MCBlockit: " + parsed.bans.service.mcblockit.bans);
      if (parsed.bans.service.mcblockit.bans != 0) {
        $.each(parsed.bans.service.mcblockit.ban_info, function(index, value) {
          field.append("<br>>>>> " + index + ": <strong>" + value + "</strong>");
        });
      }
      field.append("<br>>> <a target=\"_blank\" href=\"http://minebans.com/view_player.html?player_uuid=" + parsed.bans.uuid + "\">MineBans</a>: " + parsed.bans.service.minebans.bans);
      if (parsed.bans.service.minebans.bans != 0) {
        $.each(parsed.bans.service.minebans.ban_info, function(index, value) {
          field.append("<br>>>>> " + index + ": <strong>" + value + "</strong>");
        });
      }
      field.append("<br>>> <a target=\"_blank\" href=\"http://www.glizer.net/usrnotes/index.php?data=" + username + "\">Glizer</a>: " + parsed.bans.service.glizer.bans);
      if (parsed.bans.service.glizer.bans != 0) {
        $.each(parsed.bans.service.glizer.ban_info, function(index, value) {
          field.append("<br>>>>> " + index + ": <strong>" + value + "</strong>");
        });
      }
    } else {
      field.append("<br>>> <a target=\"_blank\" href=\"http://fishbans.com/u/" + username + "\">Fishbans</a> returned <strong>\"" + parsed.error + "\"</strong> error.");
      field.append("<br>>> <a target=\"_blank\" href=\"http://mcbans.com/player/" + username + "\">MCBans</a>");
      field.append("<br>>> <a target=\"_blank\" href=\"http://mcbouncer.com/u/" + username + "\">MCBouncer</a>");
    }

    field.append("<br><br><strong>Other Useful Links</strong>");
    field.append("<br>>> <a target=\"_blank\" href=\"http://minecraftnames.com/lookup.php?account=" + username + "\">Minecraft Name Lookup</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"http://minecraft-skin-viewer.com/player/" + username + "\">Minecraft Skin Viewer</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=" + username + "\">Google (username)</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=%22" + username + "%22 youtube\">Google (YouTube)</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=%22" + username + "%22 minecraft\">Google (Minecraft)</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=%22" + username + "%22 ban\">Google (Ban)</a>");
    field.append("<br>>> <a target=\"_blank\" href=\"https://www.google.com.au/#newwindow=1&q=%22" + username + "%22 minecraft ban\">Google (Minecraft + Ban)</a>");
  }
});
