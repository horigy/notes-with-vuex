<template>
    <div class="notes">
        <div class="note" :class="{full: !grid}" v-for="(note, index) in notes" :key="index">
            <div class="note-wrapper" :class="note.status">
                <div class="note-header">
                    <p v-show="note.show" v-on:click="note.show = !note.show">{{note.title}}</p>
                    <input class="title-input" type="text" v-show="!note.show" v-on:keyup.enter="updateNote(index, note)" v-model="note.title" placeholder="note.title">
                    <p style="cursor: pointer" @click="removeNote(index)">x</p>
                </div>
                <div class="note-body">
                    <p>{{note.descr}}</p>
                    <span>{{note.date}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true
        },
        grid: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        removeNote(index) {
            this.$store.commit('REMOVENOTE', index)
        },
        updateNote(index, note) {
            this.$store.commit('REMOVENOTE', index)
            this.$store.commit('SETNOTE', note)
        }
    }
}
</script>

<style lang="scss">
    .notes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 40px 0;
    }
    .note {
        width: 45%;

        margin-bottom: 20px;
        background-color: #fff;
        &.full {
            width: 100%;
        }
    }
    .note-wrapper {
        padding: 18px 20px;
    }
    .note-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1 {
            font-size: 32px;
        }
        p {
            font-size: 22px;
            color: rgb(17, 28, 185);
        }
        svg {
            margin-right: 12px;
            color: #999;
            &.active {
                color: rgba(10, 10, 202, 0.836);
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }
    .title-input {
        margin-bottom: 0;
        padding: 10px 20px;
        width: auto;
    }
    .note-body {
        p {
            margin: 20px 0;
        }
        span {
            font-size: 14px;
            color: #999;
        }
    }
    .yellow {
        background-color: rgb(197, 180, 29);
    }
    .red {
        background-color: rgba(209, 37, 37, 0.849);
    }
</style>