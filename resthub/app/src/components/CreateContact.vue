<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Create Contact</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" v-model="name" name="name" id="name" placeholder="Name" />
                    </div>
                </div>
                <button type="button" @click='createContact()' class="btn btn-danger">Create</button>
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
      name: '',
    }
  },
  methods: {
      createContact() {
          const payload = {
              name: this.name,
          }
          this.$emit('createContact', payload)
          this.clearForm();
      },
      clearForm() {
          this.name = "";
      }
  }
}
</script>