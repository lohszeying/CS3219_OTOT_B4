<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Delete Contact</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">ID</label>
                        <input type="text" class="form-control" v-model="id" name="id" id="id" placeholder="ID" />
                    </div>
                </div>
                <button type="button" @click='deleteContact()' class="btn btn-danger">Delete</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CreateContact',
  data() {
    return {
      id: '',
    }
  },
  methods: {
      deleteContact() {
          const payload = {
              id: this.id,
          }
          this.$emit('deleteContact', payload)
          this.clearForm();
      },
      clearForm() {
          this.id = "";
      }
  }
}
</script>