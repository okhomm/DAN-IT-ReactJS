const data = [
        {
            id: 1,
            header: 'This is modal 1',
            closeButton: true,
            text: 'Modal 1 main text',
            actions: [
                {
                    id: 1,
                    backgroundColor: 'blue',
                    text: 'Ok'
                },
                {
                    id: 2,
                    backgroundColor: 'red',
                    text: 'Cansel'
                },
            ]
        },
        {
            id: 2,
            header: 'This is modal 2',
            closeButton: true,
            text: 'Modal 2 main text',
            actions: [
                {
                    id: 1,
                    backgroundColor: 'pink',
                    text: 'Ok',
                    onClick: '1'
                },
                {
                    id: 2,
                    backgroundColor: 'gray',
                    text: 'Cansel',
                    onClick: '2'
                },
            ]
        }
];

export default data;