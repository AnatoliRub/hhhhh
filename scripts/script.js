window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;




let lastKeyPressed = 0;

let lang = 'ru'

let isShiftPress = true
let isAudio = true
let isCaps = false
let isShift = false
let isSpeech = false

const keyLayouts = {
    'ru': [
        {
            small: 'ё',
            shift: 'Ё',
            code: 'Backquote',
        },
        {
            small: '1',
            shift: '!',
            code: 'Digit1',
        },
        {
            small: '2',
            shift: '"',
            code: 'Digit2',
        },
        {
            small: '3',
            shift: '№',
            code: 'Digit3',
        },
        {
            small: '4',
            shift: ';',
            code: 'Digit4',
        },
        {
            small: '5',
            shift: '%',
            code: 'Digit5',
        },
        {
            small: '6',
            shift: ':',
            code: 'Digit6',
        },
        {
            small: '7',
            shift: '?',
            code: 'Digit7',
        },
        {
            small: '8',
            shift: '*',
            code: 'Digit8',
        },
        {
            small: '9',
            shift: '(',
            code: 'Digit9',
        },
        {
            small: '0',
            shift: ')',
            code: 'Digit0',
        },
        {
            small: '-',
            shift: '_',
            code: 'Minus',
        },
        {
            small: '=',
            shift: '+',
            code: 'Equal',
        },
        {
            small: '\\',
            shift: '/',
            code: 'Backslash',
        },
        {
            small: 'Backspace',
            shift: null,
            code: 'Backspace',
        },
        {
            small: 'Hide',
            shift: null,
            code: 'Tab',
        },
        {
            small: 'й',
            shift: 'Й',
            code: 'KeyQ',
        },
        {
            small: 'ц',
            shift: 'Ц',
            code: 'KeyW',
        },
        {
            small: 'у',
            shift: 'У',
            code: 'KeyE',
        },
        {
            small: 'к',
            shift: 'К',
            code: 'KeyR',
        },
        {
            small: 'е',
            shift: 'Е',
            code: 'KeyT',
        },
        {
            small: 'н',
            shift: 'Н',
            code: 'KeyY',
        },
        {
            small: 'г',
            shift: 'Г',
            code: 'KeyU',
        },
        {
            small: 'ш',
            shift: 'Ш',
            code: 'KeyI',
        },
        {
            small: 'щ',
            shift: 'Щ',
            code: 'KeyO',
        },
        {
            small: 'з',
            shift: 'З',
            code: 'KeyP',
        },
        {
            small: 'х',
            shift: 'Х',
            code: 'BracketLeft',
        },
        {
            small: 'ъ',
            shift: 'Ъ',
            code: 'BracketRight',
        },
        {
            small: 'Audio',
            shift: null,
            code: 'Delete',
        },
        {
            small: 'CapsLock',
            shift: null,
            code: 'CapsLock',
        },
        {
            small: 'ф',
            shift: 'Ф',
            code: 'KeyA',
        },
        {
            small: 'ы',
            shift: 'Ы',
            code: 'KeyS',
        },
        {
            small: 'в',
            shift: 'В',
            code: 'KeyD',
        },
        {
            small: 'а',
            shift: 'А',
            code: 'KeyF',
        },
        {
            small: 'п',
            shift: 'П',
            code: 'KeyG',
        },
        {
            small: 'р',
            shift: 'Р',
            code: 'KeyH',
        },
        {
            small: 'о',
            shift: 'О',
            code: 'KeyJ',
        },
        {
            small: 'л',
            shift: 'Л',
            code: 'KeyK',
        },
        {
            small: 'д',
            shift: 'Д',
            code: 'KeyL',
        },
        {
            small: 'ж',
            shift: 'Ж',
            code: 'Semicolon',
        },
        {
            small: 'э',
            shift: 'Э',
            code: 'Quote',
        },
        {
            small: 'Enter',
            shift: null,
            code: 'Enter',
        },
        {
            small: 'Shift',
            shift: null,
            code: 'ShiftLeft',
        },
        {
            small: 'я',
            shift: 'Я',
            code: 'KeyZ',
        },
        {
            small: 'ч',
            shift: 'Ч',
            code: 'KeyX',
        },
        {
            small: 'с',
            shift: 'С',
            code: 'KeyC',
        },
        {
            small: 'м',
            shift: 'М',
            code: 'KeyV',
        },
        {
            small: 'и',
            shift: 'И',
            code: 'KeyB',
        },
        {
            small: 'т',
            shift: 'Т',
            code: 'KeyN',
        },
        {
            small: 'ь',
            shift: 'Ь',
            code: 'KeyM',
        },
        {
            small: 'б',
            shift: 'Б',
            code: 'Comma',
        },
        {
            small: 'ю',
            shift: 'Ю',
            code: 'Period',
        },
        {
            small: '.',
            shift: ',',
            code: 'Slash',
        },
        {
            small: '/',
            shift: '|',
            code: 'IntlBackslash',
        },

        {
            small: 'en\\ru ',
            shift: null,
            code: 'enru',
        },
        {
            small: '◄',
            shift: null,
            code: 'ArrowLeft',
        },

        {
            small: '►',
            shift: null,
            code: 'ArrowRight',
        },
        {
            small: 'Speech',
            shift: null,
            code: 'Speech',
        },
        {
            small: ' ',
            shift: null,
            code: 'Space',
        },

    ],
    'en': [
        {
            small: '`',
            shift: '~',
            code: 'Backquote',
        },
        {
            small: '1',
            shift: '!',
            code: 'Digit1',
        },
        {
            small: '2',
            shift: '@',
            code: 'Digit2',
        },
        {
            small: '3',
            shift: '#',
            code: 'Digit3',
        },
        {
            small: '4',
            shift: '$',
            code: 'Digit4',
        },
        {
            small: '5',
            shift: '%',
            code: 'Digit5',
        },
        {
            small: '6',
            shift: '^',
            code: 'Digit6',
        },
        {
            small: '7',
            shift: '&amp;',
            code: 'Digit7',
        },
        {
            small: '8',
            shift: '*',
            code: 'Digit8',
        },
        {
            small: '9',
            shift: '(',
            code: 'Digit9',
        },
        {
            small: '0',
            shift: ')',
            code: 'Digit0',
        },
        {
            small: '-',
            shift: '_',
            code: 'Minus',
        },
        {
            small: '=',
            shift: '+',
            code: 'Equal',
        },
        {
            small: '\\',
            shift: '|',
            code: 'Backslash',
        },
        {
            small: 'Backspace',
            shift: null,
            code: 'Backspace',
        },
        {
            small: 'Tab',
            shift: null,
            code: 'Tab',
        },
        {
            small: 'q',
            shift: 'Q',
            code: 'KeyQ',
        },
        {
            small: 'w',
            shift: 'W',
            code: 'KeyW',
        },
        {
            small: 'e',
            shift: 'E',
            code: 'KeyE',
        },
        {
            small: 'r',
            shift: 'R',
            code: 'KeyR',
        },
        {
            small: 't',
            shift: 'T',
            code: 'KeyT',
        },
        {
            small: 'y',
            shift: 'Y',
            code: 'KeyY',
        },
        {
            small: 'u',
            shift: 'U',
            code: 'KeyU',
        },
        {
            small: 'i',
            shift: 'I',
            code: 'KeyI',
        },
        {
            small: 'o',
            shift: 'O',
            code: 'KeyO',
        },
        {
            small: 'p',
            shift: 'P',
            code: 'KeyP',
        },
        {
            small: '[',
            shift: '{',
            code: 'BracketLeft',
        },
        {
            small: ']',
            shift: '}',
            code: 'BracketRight',
        },
        {
            small: 'Delete',
            shift: null,
            code: 'Delete',
        },
        {
            small: 'CapsLock',
            shift: null,
            code: 'CapsLock',
        },
        {
            small: 'a',
            shift: 'A',
            code: 'KeyA',
        },
        {
            small: 's',
            shift: 'S',
            code: 'KeyS',
        },
        {
            small: 'd',
            shift: 'D',
            code: 'KeyD',
        },
        {
            small: 'f',
            shift: 'F',
            code: 'KeyF',
        },
        {
            small: 'g',
            shift: 'G',
            code: 'KeyG',
        },
        {
            small: 'h',
            shift: 'H',
            code: 'KeyH',
        },
        {
            small: 'j',
            shift: 'J',
            code: 'KeyJ',
        },
        {
            small: 'k',
            shift: 'K',
            code: 'KeyK',
        },
        {
            small: 'l',
            shift: 'L',
            code: 'KeyL',
        },
        {
            small: ';',
            shift: ':',
            code: 'Semicolon',
        },
        {
            small: '’',
            shift: '”',
            code: 'Quote',
        },
        {
            small: 'Enter',
            shift: null,
            code: 'Enter',
        },
        {
            small: 'Shift',
            shift: null,
            code: 'ShiftLeft',
        },
        {
            small: 'z',
            shift: 'Z',
            code: 'KeyZ',
        },
        {
            small: 'x',
            shift: 'X',
            code: 'KeyX',
        },
        {
            small: 'c',
            shift: 'C',
            code: 'KeyC',
        },
        {
            small: 'v',
            shift: 'V',
            code: 'KeyV',
        },
        {
            small: 'b',
            shift: 'B',
            code: 'KeyB',
        },
        {
            small: 'n',
            shift: 'N',
            code: 'KeyN',
        },
        {
            small: 'm',
            shift: 'M',
            code: 'KeyM',
        },
        {
            small: ',',
            shift: '&lt;',
            code: 'Comma',
        },
        {
            small: '.',
            shift: '>',
            code: 'Period',
        },
        {
            small: '/',
            shift: '&gt;',
            code: 'Slash',
        },
        {
            small: '/',
            shift: '|',
            code: 'IntlBackslash',
        },
        {
            small: '▲',
            shift: null,
            code: 'ArrowUp',
        },
        {
            small: 'Shift',
            shift: null,
            code: 'ShiftRight',
        },
        {
            small: 'Ctrl',
            shift: null,
            code: 'ControlLeft',
        },
        {
            small: 'Win',
            shift: null,
            code: 'Win',
        },
        {
            small: 'Alt',
            shift: null,
            code: 'AltLeft',
        },
        {
            small: ' ',
            shift: null,
            code: 'Space',
        },
        {
            small: 'en\\ru ',
            shift: null,
            code: 'enru',
        },
        {
            small: 'Alt',
            shift: null,
            code: 'AltRight',
        },
        {
            small: '◄',
            shift: null,
            code: 'ArrowLeft',
        },
        {
            small: '▼',
            shift: null,
            code: 'ArrowDown',
        },
        {
            small: '►',
            shift: null,
            code: 'ArrowRight',
        },
        {
            small: 'Ctrl',
            shift: null,
            code: 'ControlRight',
        },
    ]
}

function createHTMLStructure() {

    let keyLayout = keyLayouts[lang]

    let main = document.createElement('main')
    main.classList.add('main')
    document.body.appendChild(main)


    let input = document.createElement('textarea')
    input.classList.add('input')
    input.setAttribute('placeholder', 'Click here. ^.^,')
    input.setAttribute('rows', 5)
    input.setAttribute('cols', 50)
    input.setAttribute('spellcheck', false)
    input.setAttribute('autocorrect', 'off')
    input.addEventListener('click', () => {
        input.removeAttribute('placeholder')
        let elem = document.querySelector('.keyboard')
        elem.style.transform = 'scale(1.0)';
    })
    main.appendChild(input)

    let keyboard = document.createElement('div')
    keyboard.classList.add('keyboard')
    main.appendChild(keyboard)

    let en = document.createElement('audio')
    en.setAttribute('src', './audio/en.wav')
    en.setAttribute('data-key', 'changed_valueen')
    main.appendChild(en)

    let ru = document.createElement('audio')
    ru.setAttribute('src', './audio/ru.wav')
    ru.setAttribute('data-key', 'changed_valueru')
    main.appendChild(ru)

    let shiftl = document.createElement('audio')
    shiftl.setAttribute('src', './audio/shift.wav')
    shiftl.setAttribute('data-key', 'ShiftLeft')
    main.appendChild(shiftl)

    let shiftr = document.createElement('audio')
    shiftr.setAttribute('src', './audio/shift.wav')
    shiftr.setAttribute('data-key', 'ShiftRight')
    main.appendChild(shiftr)

    let enter = document.createElement('audio')
    enter.setAttribute('src', './audio/enter.wav')
    enter.setAttribute('data-key', 'Enter')
    main.appendChild(enter)

    let caps = document.createElement('audio')
    caps.setAttribute('src', './audio/capslock.wav')
    caps.setAttribute('data-key', 'CapsLock')
    main.appendChild(caps)

    let backspace = document.createElement('audio')
    backspace.setAttribute('src', './audio/backspace.wav')
    backspace.setAttribute('data-key', 'Backspace')
    main.appendChild(backspace)

    let space = document.createElement('audio')
    space.setAttribute('src', './audio/space.wav')
    space.setAttribute('data-key', 'Space')
    main.appendChild(space)

    let keyboardKeys = document.createElement('div')
    keyboardKeys.classList.add('keyboard__keys')
    keyboard.appendChild(keyboardKeys)


    keyLayout.forEach(element => {
        let key = document.createElement('div')
        key.classList.add('keyboard__key')
        key.setAttribute('data', `${element.code}`)

        if (element.code.match(/enru/)) {
            key.textContent = `${lang}`
        } else {
            key.textContent = `${element.small}`
        }

        if (element.code.match(/[0-9]/)) {
            key.classList.add('key__number')
        } else if (element.code.match(/Del|Backsp|Tab|Caps|ShiftL|ShiftR|Enter|Contr|Win|Alt|enru/)) {
            key.classList.add('key__func')
        } else if (element.small.match(/[a-zA-Zа-яА-ЯёЁ]/) && !element.small.match(/Spee/)) {
            key.classList.add('key__letter')
        }

        if (element.code.match(/Spee/)) {
            key.addEventListener('click', () => {
            isSpeech == false ? isSpeech = true : isSpeech = false
            isSpeech ? (key.classList.add('active')) : (key.classList.remove('active'))

            if (key.classList.contains('active')) {
            let rec = new SpeechRecognition();
            rec.continuous = true
            const locale = (lang === 'en') ? 'en-US' : 'ru-RU';
            rec.lang = locale

            rec.addEventListener("result", function (e) {
            console.log('fsdfsd')
            let text = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

            let cursorpos = input.selectionStart;

            let left = input.value.slice(0, cursorpos)

            let right = input.value.slice(cursorpos)
            input.value = `${left}${text}${right}`
            let pos = cursorpos + text.split('').length
            input.setSelectionRange(pos, pos)
            input.focus()
            });
            rec.start();

            } else {
            rec.stop();
            rec = undefined;
            }

            })
            }

        if (element.code.match(/ArrowLeft/)) {
            key.classList.add('ArrowLeft')
            key.addEventListener('click', () => {

                let cursorpos = input.selectionStart;
                console.log(cursorpos)
                let left = input.value.slice(0, cursorpos)
                let right = input.value.slice(cursorpos)
                let pos = cursorpos - 1 >= 0 ? cursorpos - 1 : 0;
                input.setSelectionRange(pos, pos)
                input.focus()

                let enter = document.querySelectorAll('audio')
                if (lang == 'ru') {
                    enter.forEach(el => {
                        if ((el.getAttribute('data-key') == 'changed_valueru') && isAudio == true) {
                            el.currentTime = 0
                            el.play()
                        }
                    });
                } else {
                    if (isAudio) {
                        enter.forEach(el => {
                            if (el.getAttribute('data-key') == 'changed_valueen') {
                                el.currentTime = 0
                                el.play()
                            }
                        });
                    }
                }
            })
        }

        if (element.code.match(/ArrowRight/)) {
            key.classList.add('ArrowRight')
            key.addEventListener('click', () => {


                let cursorpos = input.selectionStart;
                console.log(cursorpos)
                let left = input.value.slice(0, cursorpos)
                let right = input.value.slice(cursorpos)
                let pos = cursorpos += 1
                input.setSelectionRange(pos, pos)
                input.focus()


                let enter = document.querySelectorAll('audio')
                if (lang == 'ru') {
                    enter.forEach(el => {
                        if ((el.getAttribute('data-key') == 'changed_valueru') && isAudio == true) {
                            el.currentTime = 0
                            el.play()
                        }
                    });
                } else {
                    if (isAudio) {
                        enter.forEach(el => {
                            if (el.getAttribute('data-key') == 'changed_valueen') {
                                el.currentTime = 0
                                el.play()
                            }
                        });
                    }
                }
            })
        }



        if (element.code.match(/Del/)) {
            key.addEventListener('click', () => {
                input.focus()
                isAudio == true ? (isAudio = false) : (isAudio = true)
                if (!isAudio) {
                    key.classList.add('active')
                } else {
                    key.classList.remove('active')
                }
            })
        }

        if (element.code == 'Space') {
            key.classList.add('key__space')
            key.addEventListener('click', () => {
                let cursorpos = input.selectionStart;
                let left = input.value.slice(0, cursorpos)
                let right = input.value.slice(cursorpos)
                input.value = `${left} ${right}`
                let pos = cursorpos + 1
                input.setSelectionRange(pos, pos)
                input.focus()
                let enter = document.querySelectorAll('audio')
                enter.forEach(el => {
                    if (el.getAttribute('data-key') == element.code && isAudio) {
                        el.addEventListener('loadeddata',() => {
                            el.currentTime = 0
                            el.play()
                        })
                        el.currentTime = 0
                        el.play()
                    }
                });
            })
        }

        if (element.shift != null) {
            key.classList.add('changed__value')
            let keySub = document.createElement('div')
            keySub.classList.add('key__info')
            keySub.textContent = `${element.shift}`
            key.appendChild(keySub)
            key.addEventListener('click', () => {

                let cursorpos = input.selectionStart;
                let left = input.value.slice(0, cursorpos)
                let right = input.value.slice(cursorpos)
                input.value = `${left}${key.textContent[0]}${right}`
                let pos = cursorpos + 1
                input.setSelectionRange(pos, pos)
                input.focus()

                let enter = document.querySelectorAll('audio')
                if (lang == 'ru') {
                    enter.forEach(el => {
                        if ((el.getAttribute('data-key') == 'changed_valueru') && isAudio) {
                            el.currentTime = 0
                            el.play()
                        }
                    });
                } else {
                    if (isAudio) {
                        enter.forEach(el => {
                            if (el.getAttribute('data-key') == 'changed_valueen') {
                                el.currentTime = 0
                                el.play()
                            }
                        });
                    }
                }
            }
            )
        }

        if (element.code.match(/enru/)) {
            key.addEventListener('click', () => {
                input.focus()
                lang == 'ru' ? (lang = 'en', key.textContent = lang) : (lang = 'ru', key.textContent = lang)
                let changedLayout = document.querySelectorAll('.keyboard__key')

                re = /&amp;|&lt;|&gt;/gi;
                for (let i = 0; i < changedLayout.length; i++) {

                    if (changedLayout[i].classList.contains('key__number') || changedLayout[i].classList.contains('key__letter')) {
                        if (changedLayout[i].innerHTML.match(re)) {
                            let s = changedLayout[i].innerHTML.replace(re, '&').split('')
                            //console.log(s)
                            s[0] = `${keyLayouts[lang][i].small}`
                            s[24] = `${keyLayouts[lang][i].shift}`
                            changedLayout[i].innerHTML = s.join('')
                        } else {
                            let s = changedLayout[i].innerHTML.split('')

                            s[0] = `${keyLayouts[lang][i].small}`
                            s[24] = `${keyLayouts[lang][i].shift}`

                            changedLayout[i].innerHTML = s.join('')
                        }
                    }

                }

            })
        }
        if (element.code == 'Enter') {
            key.addEventListener('click', () => {

                let cursorpos = input.selectionStart;
                let left = input.value.slice(0, cursorpos)
                let right = input.value.slice(cursorpos)
                input.value = `${left}\n${right}`
                let pos = cursorpos + 1
                input.setSelectionRange(pos, pos)
                input.focus()

                let enter = document.querySelectorAll('audio')
                enter.forEach(el => {
                    if (el.getAttribute('data-key') == element.code && isAudio) {
                        el.currentTime = 0
                        el.play()
                    }
                });
            })
        }
        if (element.code == 'Tab') {
            key.addEventListener('click', () => {
                keyboard.style.transform = 'scale(0.0)'
                input.value = ''
                input.setAttribute('placeholder', 'Click here. ^.^,')
            })
        }
        if (element.code == 'Backspace') {
            key.addEventListener('click', () => {

                let cursorpos = input.selectionStart;
                let left = input.value.slice(0, cursorpos)
                let right = input.value.slice(cursorpos)
                input.value = `${left.slice(0, -1)}${right}`
                let pos = cursorpos - 1
                input.setSelectionRange(pos, pos)
                input.focus()

                let enter = document.querySelectorAll('audio')
                enter.forEach(el => {
                    if (el.getAttribute('data-key') == element.code && isAudio) {
                        el.currentTime = 0
                        el.play()
                    }
                });
            })

        }

        if (element.code == 'ShiftLeft' || element.code == 'ShiftRight') {

            key.addEventListener('click', () => {
                input.focus()
                let reorder = document.querySelectorAll('.changed__value')
                isShift == false ? isShift = true : isShift = false
                isShift ? key.classList.add('active') : key.classList.remove('active')

                for (let i = 0; i < reorder.length; i++) {
                    re = /&gt;|&lt;|&amp;/gi;
                    let a = reorder[i].textContent.split('')
                    let s = reorder[i].innerHTML.replace(re, '&').split('')
                    s[0] = a[1]
                    s[24] = a[0]
                    reorder[i].innerHTML = s.join('')
                }
                let enter = document.querySelectorAll('audio')
                enter.forEach(el => {
                    if ((el.getAttribute('data-key') == element.code) && isAudio) {
                        el.currentTime = 0
                        el.play()
                    }
                });
            })
        }
        if (element.code == 'CapsLock') {

            key.addEventListener('click', () => {
                input.focus()

                let keyLetter = document.querySelectorAll('.key__letter')

                isCaps == false ? isCaps = true : isCaps = false
                isCaps ? key.classList.add('active') : key.classList.remove('active')
                re = /&gt;|&lt;|&amp;/gi;

                for (let i = 0; i < keyLetter.length; i++) {
                    let a = keyLetter[i].textContent.split('')
                    let s = keyLetter[i].innerHTML.replace(re, '&').split('')
                    s[0] = a[1]
                    s[24] = a[0]
                    keyLetter[i].innerHTML = s.join('')

                }

                let enter = document.querySelectorAll('audio')
                enter.forEach(el => {
                    if (el.getAttribute('data-key') == element.code && isAudio) {
                        el.currentTime = 0
                        el.play()
                    }
                });
            })
        }

        if (element.code.match(/Del|Backsp|Tab|Caps|ShiftL|Spee/)) {
            key.classList.add('keyboard__key_wide')
        }

        if (element.code.match(/Enter|ShiftR/)) {
            key.classList.add('keyboard__key_wideL')
        }

        if (element.code.match(/Space/)) {
            key.classList.add('keyboard__key_wideXL')
        }

        keyboardKeys.appendChild(key)
    });
}

createHTMLStructure()

document.addEventListener('keydown', (e) => {
    e.preventDefault()
    let changedButton = document.querySelectorAll('.changed__value')
    let input = document.querySelector('.input')

    let ArrowRight = document.querySelector('.ArrowRight')
    let ArrowLeft = document.querySelector('.ArrowLeft')

    if (e.code == 'ArrowRight' && ArrowRight.getAttribute('data') == 'ArrowRight') {
        let cursorpos = input.selectionStart;
        let left = input.value.slice(0, cursorpos)
        let right = input.value.slice(cursorpos)
        let pos = cursorpos += 1
        input.setSelectionRange(pos, pos)

        let enter = document.querySelectorAll('audio')
                if (lang == 'ru') {
                    enter.forEach(el => {
                        if ((el.getAttribute('data-key') == 'changed_valueru') && isAudio == true) {
                            el.currentTime = 0
                            el.play()
                        }
                    });
                } else {
                    if (isAudio) {
                        enter.forEach(el => {
                            if (el.getAttribute('data-key') == 'changed_valueen') {
                                el.currentTime = 0
                                el.play()
                            }
                        });
                    }
                }
    }

    if (e.code == 'ArrowLeft' && ArrowLeft.getAttribute('data') == 'ArrowLeft' && isShiftPress == true) {
        let cursorpos = input.selectionStart;
        let left = input.value.slice(0, cursorpos)
        let right = input.value.slice(cursorpos)
        let pos = cursorpos - 1 >= 0 ? cursorpos - 1 : 0;
        input.setSelectionRange(pos, pos)
        input.focus()

        let enter = document.querySelectorAll('audio')
                if (lang == 'ru') {
                    enter.forEach(el => {
                        if ((el.getAttribute('data-key') == 'changed_valueru') && isAudio == true) {
                            el.currentTime = 0
                            el.play()
                        }
                    });
                } else {
                    if (isAudio) {
                        enter.forEach(el => {
                            if (el.getAttribute('data-key') == 'changed_valueen') {
                                el.currentTime = 0
                                el.play()
                            }
                        });
                    }
                }
    }

    changedButton.forEach(element => {
        if (e.code == element.getAttribute('data')) {
            element.classList.add('active')

            let cursorpos = input.selectionStart;
            let left = input.value.slice(0, cursorpos)
            let right = input.value.slice(cursorpos)
            input.value = `${left}${element.textContent.split('')[0]}${right}`
            let pos = cursorpos + 1
            input.setSelectionRange(pos, pos)
            input.focus()

            let enter = document.querySelectorAll('audio')
            if (lang == 'ru') {
                enter.forEach(el => {
                    if ((el.getAttribute('data-key') == 'changed_valueru') && isAudio) {
                        el.currentTime = 0
                        el.play()
                    }
                });
            } else {
                if (isAudio) {
                    enter.forEach(el => {
                        if (el.getAttribute('data-key') == 'changed_valueen') {
                            el.currentTime = 0
                            el.play()
                        }
                    });
                }
            }
        }
    })

    let keyspace = document.querySelector('.key__space')
    if (e.code == 'Space' && keyspace.getAttribute('data') == 'Space') {
        keyspace.classList.add('active')
        let cursorpos = input.selectionStart;
        let left = input.value.slice(0, cursorpos)
        let right = input.value.slice(cursorpos)
        input.value = `${left} ${right}`
        let pos = cursorpos + 1
        input.setSelectionRange(pos, pos)
        input.focus()
        let enter = document.querySelectorAll('audio')
        enter.forEach(el => {
            if ((el.getAttribute('data-key') == 'Space') && isAudio) {
                el.currentTime = 0
                el.play()
            }
        });
    }

    let funcButton = document.querySelectorAll('.key__func')
    funcButton.forEach(elem => {

        if (e.code == 'Enter' && elem.getAttribute('data') == 'Enter') {
            elem.classList.add('active')

            let cursorpos = input.selectionStart;
            let left = input.value.slice(0, cursorpos)
            let right = input.value.slice(cursorpos)
            input.value = `${left}\n${right}`
            let pos = cursorpos + 1
            input.setSelectionRange(pos, pos)
            input.focus()

            let enter = document.querySelectorAll('audio')
            enter.forEach(el => {
                if ((el.getAttribute('data-key') == e.code) && isAudio) {
                    el.currentTime = 0
                    el.play()
                }
            });
        }

        if (e.code == 'Backspace' && elem.getAttribute('data') == 'Backspace') {
            elem.classList.add('active')

            let cursorpos = input.selectionStart;
            let left = input.value.slice(0, cursorpos)
            let right = input.value.slice(cursorpos)
            input.value = `${left.slice(0, -1)}${right}`
            let pos = cursorpos - 1
            input.setSelectionRange(pos, pos)
            input.focus()


            let enter = document.querySelectorAll('audio')
            enter.forEach(el => {
                if ((el.getAttribute('data-key') == e.code) && isAudio) {
                    el.play()
                }
            });
        }

        if (e.code == 'CapsLock' && elem.getAttribute('data') == 'CapsLock') {
            isCaps == false ? isCaps = true : isCaps = false
            isCaps ? elem.classList.add('active') : elem.classList.remove('active')
            let keyLetter = document.querySelectorAll('.key__letter')
            re = /&gt;|&lt;|&amp;/gi;

            for (let i = 0; i < keyLetter.length; i++) {
                let a = keyLetter[i].textContent.split('')
                let s = keyLetter[i].innerHTML.replace(re, '&').split('')
                s[0] = a[1]
                s[24] = a[0]
                keyLetter[i].innerHTML = s.join('')

            }

            let enter = document.querySelectorAll('audio')
            enter.forEach(el => {
                if ((el.getAttribute('data-key') == e.code) && isAudio) {
                    el.currentTime = 0
                    el.play()
                }
            });
        }

        if (((e.code == 'ShiftLeft' && elem.getAttribute('data') == 'ShiftLeft') || (e.code == 'ShiftRight' && elem.getAttribute('data') == 'ShiftRight')) && isShiftPress == true) {
            elem.classList.add('active')
            let reorder = document.querySelectorAll('.changed__value')

            for (let i = 0; i < reorder.length; i++) {
                re = /&gt;|&lt;|&amp;/gi;
                let a = reorder[i].textContent.split('')
                let s = reorder[i].innerHTML.replace(re, '&').split('')
                s[0] = a[1]
                s[24] = a[0]
                reorder[i].innerHTML = s.join('')
            }
            let enter = document.querySelectorAll('audio')
            enter.forEach(el => {
                if ((el.getAttribute('data-key') == e.code) && isAudio) {
                    el.play()
                }
            });

            isShiftPress = false
        }
    })
})

document.addEventListener('keyup', (e) => {
    let changedButton = document.querySelectorAll('.changed__value')
    let funcButton = document.querySelectorAll('.key__func')

    changedButton.forEach(element => {
        if (e.code == element.getAttribute('data')) {
            element.classList.remove('active')
        }
    })

    funcButton.forEach(elem => {
        if (e.code == 'Enter' && elem.getAttribute('data') == 'Enter') {
            elem.classList.remove('active')
        }
        if (e.code == 'Backspace' && elem.getAttribute('data') == 'Backspace') {
            elem.classList.remove('active')
        }

        if (((e.code == 'ShiftLeft' && elem.getAttribute('data') == 'ShiftLeft') || (e.code == 'ShiftRight' && elem.getAttribute('data') == 'ShiftRight')) && isShiftPress == false) {
            let reorder = document.querySelectorAll('.changed__value')
            elem.classList.remove('active')
            for (let i = 0; i < reorder.length; i++) {
                re = /&gt;|&lt;|&amp;/gi;
                let a = reorder[i].textContent.split('')
                let s = reorder[i].innerHTML.replace(re, '&').split('')
                s[0] = a[1]
                s[24] = a[0]
                reorder[i].innerHTML = s.join('')
            }
            isShiftPress = true
        }

        let keyspace = document.querySelector('.key__space')
        if (e.code == 'Space' && keyspace.getAttribute('data') == 'Space') {
            keyspace.classList.remove('active')
        }
    })
})

window.addEventListener('DOMContentLoaded', () => {
    let elem = document.querySelector('.keyboard')
    elem.style.transform = 'scale(0.0)';
})
