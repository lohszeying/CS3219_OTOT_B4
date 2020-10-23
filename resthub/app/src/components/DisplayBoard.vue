<template>
    <div class="display-board">
        <h4>Contacts Created</h4>
        <div class="number">
        {{numberOfContacts}}
        </div>
        <div class="btn">
            <button @click='getAllContacts()' type="button" class="btn btn-warning">Get all Contacts</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: ['numberOfContacts'],
        methods: {
            getAllContacts() {
                this.$emit('getAllContacts')
            }
        }
    }
</script>