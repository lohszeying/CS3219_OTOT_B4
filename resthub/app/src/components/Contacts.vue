<template>
    <div class="container">
        <h2>Contacts</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>User Id</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in contacts" :key="item._id">
                  <td>{{ item._id }}</td>
                  <td>{{ item.name }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Contacts',
        props: ['contacts']
     }
</script>