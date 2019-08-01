<template>
    <main>
        <WelcomeScreen v-if="!user" :onEnter="enterChat"/>
        <Chat v-if="user" :user="user"/>
    </main>
</template>

<script>
    import Chat from "./components/Chat.vue";
    import WelcomeScreen from "./components/WelcomeScreen.vue";

    export default {
        components: {
            Chat,
            WelcomeScreen
        },
        data() {
            return {
                user: null
            }
        },
        methods: {
            enterChat(userName) {
                this.user = userName
            }
        }
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        margin: 0;
        background: #fafafa;

        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100%;
    }
</style>