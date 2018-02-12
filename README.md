# KA Beta Server Fix

This is a script for the [Tamper Monkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) plugin which automatically adds `&pfail=1` to the end of kissanime pages that load video. For some users (incuding myself) it significantly reduces buffering duration and buffering frequency. If you also experience random buffering after pausing or moving forwards/backwards in the video timeline, then this script may help.

---
## Installation

To install this script on your computer, follow these steps:

* Install [Tamper Monkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) (a tool for editing and running user scripts in your browser).
* Click on the Tamper Monkey icon (top right) and select **Dashboard**.
* Click the **Utilities** tab.
* Copy the script url `https://raw.githubusercontent.com/JoshuaCarter/tamper-monkey-ka-beta-fix/master/ka-beta-fix.js` (or open the `ka-beta-fix.js` on github, click **Raw** and copy the url from the browser).
* Paste the url into the **URL** field on the Tamper Monkey Utilties page.
* Click **Import** (a new page will show load showing you information about the script).
* Click **Install**.

The script will now be installed and should automatically run on relevant kissanime pages. Tamper Monkey will automatically download updates to the script; if you don't want this, either change your Tamper Monkey settings or uninstall my script, create your own script and copy/paste my script's content into yours, etc.

---
### How It Works
The script runs on pages that match the following url patterns:

* `http:// [any] kissanime.ru/ [any] &s=beta`
* `http:// [any] kissanime.ru/ [any] &s=default`

This means that the script should only run on kissanime.ru pages that load video using the beta server (`&s=beta`) or the user's default server choice (`&s=default`). The latter is needed for those who have the beta server set as their default. If your default server isn't set to Beta, this script may impact your default video server's performance (currently untested).

When a matching url is detected, this script will add `&pfail=1` to the end of the url and automatically reload the page. For example:

* Default url:&nbsp; `http://kissanime.ru/Anime/Mushishi/Episode-001?id=2920&s=default`
* After script: `http://kissanime.ru/Anime/Mushishi/Episode-001?id=2920&s=default&pfail=1`

---
### Support
You can log issues/requests here on github or contact me via joshua.carter.dev@gmail.com
