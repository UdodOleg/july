a = [{
    primitive_variables: { 
        string: 'Hello World',
        undef: undefined,
        bool: true,
        num: 25
    },
    linked_variables: {
        object: {
            status: true,
            comment: '...'
        },
        array: [1,2,3,4]
    },
    comment: 'Разместил  4 примитивных типа и ссылочные типы переменных яваскрипт'
}, {
    primitive_variables: { 
        string: 'Hello World2',
        undef: undefined,
        bool: true,
        num: 26
    },
    linked_variables: {
        object: {
            status: true,
            comment: '...2'
        }, 
        array: [1,2,3,4]
    },
    comment: 'Разместил 4(2) примитивных типа и ссылочные типы переменных яваскрипт'
}];
console.log(a[1]['linked_variables']['object']);