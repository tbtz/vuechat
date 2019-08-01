<template>
    <input v-model="message" v-on:keyup.enter="sendMessage" placeholder="type your message"/>
</template>

<script>
    export default {
        data() {
            return {
                message: '',
            };
        },
        methods: {
            sendMessage: function () {
                if (this.message.length > 0) {
                    this.onSend(this.message);
                    this.message = '';
                }
            }
        },
        props: ['onSend']
    };
</script>

<style scoped>
    input {
        border-radius: 9999px;
        border: 1px solid #ccc;
        outline: 0;
        padding: 6px 14px;
        font-size: inherit;
    }
</style>