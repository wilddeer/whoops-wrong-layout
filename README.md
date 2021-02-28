# 🤬 Whoops, wrong layout!

A tiny library that fixes incorrectly selected layout if a field you type to only accepts English letters, e.g. cardholder name field.

[Check out the demo](https://grumpy.blog/en/whoops,_wrong_layout!/)

## Installation

```
npm install whoops-wrong-layout
```

Or just grab the file and do whatever you want with it.

## Usage

```js
const whoopsWrongLayout = require('whoops-wrong-layout');
const input = document.querySelector('.js-card-name');

whoopsWrongLayout(input);
```

## Quirks

- Corrects the letters as you type them on your **physical** keyboard:
    - won’t change what’s already in the field,
    - won’t mess with pasted text,
    - won’t change anything typed from a touch screen (you won’t be typing in the wrong layout from your phone anyway).
- Works with any layout, but will only correct letters that are not in the English alphabet:
    - won’t mess with [Dvorak](https://en.wikipedia.org/wiki/Dvorak_keyboard_layout) or [Colemak](https://en.wikipedia.org/wiki/Colemak) users (give’em a break, they’re already pretty messed up 🙃),
    - won’t mess with layouts that contain Engish letters in non-standard positions (like German, for instance).
- Only corrects letters, doesn’t do anything with numbers, punctuation or any other symbols.
- Doesn’t work in Internet Explorer, but also doesn’t break anything.

## Alternatives to consider

[Convert Layout](https://github.com/ai/convert-layout) by Andrey Sitnik – a different approach to the same problem.

## License

[MIT](LICENSE)
