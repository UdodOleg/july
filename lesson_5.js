const button = {
    width: 200,
    text: 'Buy'
}
const redBtn = {
    ...button,
    background_color: 'red'
}
console.table(redBtn)
/* 
┌──────────────────┬────────┐
│     (index)      │ Values │
├──────────────────┼────────┤
│      width       │  200   │
│       text       │ 'Buy'  │
│ background_color │ 'red'  │
└──────────────────┴────────┘
*/