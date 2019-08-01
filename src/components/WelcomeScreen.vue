<template>
    <article>
        <h1>Join the chat!</h1>
        <input
                autofocus
                v-model="userName"
                placeholder="What's your name?"
                v-on:keyup.enter="handleClick"
        >
        <button v-on:click="handleClick">Enter</button>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                userName: ''
            }
        },
        methods: {
            handleClick() {
                if (this.userName.length > 0) {
                    this.onEnter(this.userName)
                }
            }
        },
        props: ['onEnter']
    };
</script>

<style scoped>
    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }

    h1 {
        color: #d63500;
        margin: 10px;
    }

    input, button {
        font-size: inherit;
        outline: 0;
    }

    input {
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 9999px;
        padding: 8px 14px;
        text-align: center;
    }

    button {
        color: #3c6bff;
        border: 0;
        padding: 10px;
    }
</style>