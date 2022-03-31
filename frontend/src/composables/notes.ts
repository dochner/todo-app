const useNotesList = ref([])
const useNotesLoading = ref(false)

const useNotesCreate = (newNote) => {}
const useNotesGetAll = () => {}
const useNotesGetById = (id) => {}
const useNotesDeleteById = (id) => {}
const useNotesUpdateById = (id, newNote) => {}

export default function() {
  return {
    loading: useNotesLoading,
  }
}
