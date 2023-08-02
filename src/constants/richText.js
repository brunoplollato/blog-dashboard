export const modules = {
  toolbar: [
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    ['clean'], // remove formatting button
  ],
  history: {
    delay: 2000,
    maxStack: 500,
    userOnly: true,
  },
};

export const formats = [
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
