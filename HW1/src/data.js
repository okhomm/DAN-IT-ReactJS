const data = [
        {
            id: 1,
            header: 'Do you want to delete this file?',
            closeButton: true,
            text: 'Once you delete this file, it won\`t be possible to undo this action. Are you sure you want to delete it?',
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
            header: 'Do you like React.js?',
            closeButton: false,
            text: 'Tell me, do you like studying  React.js?',
            actions: [
                {
                    id: 1,
                    backgroundColor: '#666666',
                    text: 'Yes',
                },
                {
                    id: 2,
                    backgroundColor: '#333333',
                    text: 'Yes, I like!',
                },
            ]
        }
];

export default data;