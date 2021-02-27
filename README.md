# 🤬 Whoops, wrong layout!

A tiny library that corrects wrong layout while you type in a field that only accepts English letters, e.g. credit card name field.

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
````

## Quirks

- Only corrects the letters as you type them on your **physical** keyboard:
    - won’t change what’s already in the field,
    - won’t mess with pasted text,
    - won’t change anything typed from a touch screen (you won’t be typing in the wrong layout from your phone anyway, it’s a physical keyboard mistake).
- Works with any layout, but will only correct the letters that are not in the English alphabet:
    - won’t mess with [Dvorak](https://en.wikipedia.org/wiki/Dvorak_keyboard_layout) or [Colemak](https://en.wikipedia.org/wiki/Colemak) users (give’em a break, they are already pretty messed up 🙃),
    - won’t mess with layouts that contain Engish letters in non-standard positions (like German, for instance).
- Only corrects letters, doesn’t do anything with numbers, punctuation or any other symbols.
- Doesn’t work in Internet Explorer, but also doesn’t break anything.

## Alternatives to consider

[Convert Layout](https://github.com/ai/convert-layout) by Andrey Sitnik – different approach to the same problem.

## License

[MIT](LICENSE)
