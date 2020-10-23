<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Edit Contact</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">ID</label>
                        <input type="text" class="form-control" v-model="id" name="id" id="id" placeholder="ID" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" v-model="name" name="name" id="name" placeholder="Name" />
                    </div>
                </div>
                <button type="button" @click='editContact()' class="btn btn-danger">Edit</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'DeleteContact',
  data() {
    return {
      id: '',
      name: '',
    }
  },
  methods: {
      editContact() {
          const payload = {
                id: this.id,
                name: this.name
          }
          this.$emit('editContact', payload)
          this.clearForm();
      },
      clearForm() {
          this.id = "";
          this.name = "";
      }
  }
}
</script>