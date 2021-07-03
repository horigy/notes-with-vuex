export default {
    state: {
        notes: [
            {
                title: 'First Note',
                descr: 'Description for first note',
                status: 'yellow',
                show: true,
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Second Note',
                descr: 'Description for second note',
                status: 'red',
                show: true,
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Third Note',
                descr: 'Description for third note',
                status: '',
                show: true,
                date: new Date(Date.now()).toLocaleString()
            }
        ]
    },
    mutations: {
        SETNOTE (state, note) {
            state.notes.push({
                title: note.title,
                descr: note.descr,
                status: note.status,
                show: true,
                date: new Date(Date.now()).toLocaleString()
            })
        },
        REMOVENOTE (state, index) {
            state.notes.splice(index, 1)
        }
    },
    actions: {},
    getters: {
        GETNOTES (state) {
            return state.notes
        },
    }
}