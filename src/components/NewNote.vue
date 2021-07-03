<template>
    <div class="new-note">
        <div class="new-note-head">
            <div class="new-note-title">
                <label>Title</label>
                <input v-model="note.title" type="text">
            </div>
            <div class="new-note-radio">
                <div class="note-radio">
                    <label>Important</label>
                    <input type="radio" value="yellow" v-model="note.status">
                </div>
                <div class="note-radio">
                    <label>High Priority</label>
                    <input type="radio" value="red" v-model="note.status">
                </div>
            </div>
        </div>

        <label>Description</label>
        <textarea v-model="note.descr"></textarea>
        <button class="btn btnPrimary" @click="addNote">New note</button>
    </div>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true
        }
    },
    methods: {
        addNote() {
            this.$emit('addNote', this.note)
        }
    }
}
</script>

<style lang="scss">
    .new-note {
        text-align: center;
    }
    .new-note-head {
        display: flex;
        flex-direction: row;
    }
    .new-note-title {
        flex: auto;
    }
    .new-note-radio {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-end;
    }
    .note-radio {
        padding: 0 30px;
    }
    .btn {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>