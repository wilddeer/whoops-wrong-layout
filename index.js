module.exports = function whoopsWrongLayout (input) {
    input.addEventListener('keydown', function (event) {
        if (
            !event.altKey &&
            !event.ctrlKey &&
            !event.metaKey &&
            !/^[a-z]$/i.test(event.key) &&
            /^Key[A-Z]$/.test(event.code)
        ) {
            event.preventDefault();

            var char = event.code[event.code.length - 1];
            if (!event.shiftKey) {
                char = char.toLowerCase();
            }

            document.execCommand('insertText', false, char);
        }
    });
}
