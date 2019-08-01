<template>
    <article>
        <h1 v-if="socket">Welcome {{user}}!</h1>
        <MessageList :messages="messages" :user="user"/>
        <ChatInput :onSend="sendMessage"/>
        <div v-if="!socket">Loader</div>
    </article>
</template>

<script>
    import MessageList from "./MessageList.vue";
    import ChatInput from "./ChatInput.vue";
    import io from 'socket.io-client';

    export default {
        components: {
            ChatInput,
            MessageList
        },
        data() {
            return {
                messages: [],
                socket: io('localhost:1337')
            };
        },
        mounted() {
            this.socket.on('message', (data) => {
                this.messages = [...this.messages, data];
            });
        },
        methods: {
            sendMessage: function (message) {
                this.socket.emit('message', {
                    user: this.user,
                    message
                });

                this.message = '';
            }
        },
        props: ['user']
    };
</script>

<style scoped>
    article {
        display: flex;
        flex-direction: column;

        width: 300px;
        height: 500px;
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }

    h1 {
        color: #d63500;
        margin: 0;
        font-weight: normal;
        font-size: 20px;
    }

    ul {
        flex: 1;
        padding: 20px 0;
    }
</style>