"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formats = exports.modules = void 0;
exports.modules = {
    toolbar: [
        [{ header: 1 }, { header: 2 }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        ['clean'], // remove formatting button
    ],
    history: {
        delay: 2000,
        maxStack: 500,
        userOnly: true,
    },
};
exports.formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'background',
    'color',
    'font',
    'code',
    'size',
    'script',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'blockquote',
    'align',
    'code-block',
    'direction',
    'formula',
    'video',
];
