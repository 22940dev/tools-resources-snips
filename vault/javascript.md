---
id: 7fa13109-2af3-4e97-bea4-241646173a56
title: JavaScript
desc: ''
updated: 1612392113551
created: 1612392113551
---
```js
// Click on buttons in a page
// https://twitter.com/brian_lovin/status/1240662440666222597

let buttons = document.getElementsByClassName("unfollow");

for (let [i, v] of [...buttons].entries()) {
  setTimeout(() => {
    buttons[i].click();
  }, i * 500);
}
```

```js
// Go to specific URL
window.location.href = "https://www.google.com";
```

```js
// Speed up video playback. Put in console of open page.
$("video").playbackRate = 2;
```

```js
// click on all the expand buttons on https://github.com/
var inputs = document.querySelectorAll("svg[aria-label=Expand]");
var buttons = Array.from(inputs).map((e) => e.parentElement.parentElement);
buttons.forEach((b) => b.click());
```

