new Vue({
    el: '#app',
    data() {
        return {
            title: 'Vuejs Todolist',
            todos: [
                {
                    text: 'Lorem ipsum',
                    done: false
                },
                {
                    text: 'Lorem ipsum',
                    done: true
                },
                {
                    text: 'Lorem ipsum',
                    done: true
                },
                {
                    text: 'Lorem ipsum',
                    done: false
                }
            ]
        }
    },
    methods: {
        turnDone (i) {
            this.todos[i].done = !this.todos[i].done;
        }
    }
})