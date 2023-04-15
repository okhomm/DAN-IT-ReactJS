const data = [
        {
            id: 1,
            header: 'Do you want to delete this file?',
            closeButton: true,
            text: 'Once you delete this file, it won\`t be possible to undo this action. Are you sure you want to delete it?',
            background: '#e74c3c',
            actions: [
                {
                    id: 1,
                    backgroundColor: '#b3382c',
                    text: 'Ok'
                },
                {
                    id: 2,
                    backgroundColor: '#b3382c',
                    text: 'Cansel'
                },
            ]
        },
        {
            id: 2,
            header: 'This is modal 2',
            closeButton: false,
            text: 'Modal 2 main text',
            background: 'orange',
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