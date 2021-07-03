<template>
  <div class="wrapper">

    <!-- <header></header> -->

    <div class="wrapper-content">
      <section>
        <div class="container">

          <!-- message -->
          <message v-if="message" :message="message"></message>

          <!-- new note -->
          <newNote :note="note" @addNote="addNote"/>

          <!-- title -->
          <div class="note-header" style="margin: 20px 0">

            <h1>{{ title }}</h1>

            <!-- search -->
            <p>{{search}}</p>
            <search :value="search" placeholder="Find your note" @search="search = $event"/>

            <!-- icons-controls -->
            <div class="icons">
              <svg :class="{active: grid}" @click="grid = true" style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{active: !grid}" @click="grid = false" style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>

          <!-- note list -->
          <notes :notes="notesFilter" :grid="grid" />

        </div>
      </section>
    </div>

    <!-- <footer></footer> -->

  </div>
</template>



<script>
import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
import search from '@/components/Search.vue'
export default {
  components: {
    message: message,
    newNote: newNote,
    notes: notes,
    search: search
  },
  data () {
    return {
      title: 'Notes App',
      message: null,
      grid: true,
      search: '',
      note: {
        title: '',
        descr: '',
        status: '',
        show: true
      },

    }
  },
  computed: {
    notesFilter() {
      let array = this.$store.getters.GETNOTES
      let search = this.search
      if(!search) {
        return array
      }
      search = search.trim().toLowerCase();
      array = array.filter(function(item) {
        if(item.title.toLowerCase().indexOf(search) !== -1) {
          return item
        }
      });
      return array
    }
  },
  methods: {

    addNote () {
      if (this.note.title === '') {
        this.message = 'title can`t be blank'
        return false
      }
      this.$store.commit('SETNOTE', this.note)
      this.message = null
      this.note.title = ''
      this.note.descr = ''
      this.note.status = ''
      this.note.show = true
    }
  }

}
</script>

<style>
</style>
