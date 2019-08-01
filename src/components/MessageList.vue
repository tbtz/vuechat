<template>
    <ul>
        <li
                v-for="message in messages"
                :class="{'mine': message.user === user}"
        >
            <span>{{message.user}}</span>
            {{ message.message }}
        </li>
    </ul>
</template>

<script>
    export default {
        props: [
            'messages',
            'user'
        ]
    }
</script>

<style scoped lang="scss">
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        overflow-y: scroll;

        li {
            align-self: flex-start;

            margin-bottom: 10px;
            border-radius: 15px;
            padding: 7px 15px;
            color: #333;
            background: #eee;
            margin-left: 2px;
            position: relative;
            word-break: break-all;
            margin-right: 50px;

            &:last-child {
                margin-bottom: 0;
            }

            span {
                width: 50px;
                display: block;
                font-size: 0.8em;
                color: #aaa;
                position: absolute;
                top: 0;
                left: calc(100%);
                padding: 0 0 0 5px;
                text-align: left;
            }

            &:before {
                content: '';
                width: 0;
                height: 0;
                border-style: solid;
                border-color: transparent;
                border-width: 10px 10px 0 0;
                border-right-color: #eee;

                position: absolute;
                left: -2px;
                bottom: 2px;
            }

            &.mine {
                align-self: flex-end;
                color: #fff;
                background: #3c6bff;
                margin-right: 2px;
                margin-left: 50px;

                span {
                    right: calc(100%);
                    left: auto;
                    padding: 0 5px 0 0;
                    text-align: right;
                }

                &:before {
                    border-width: 10px 0 0 10px;
                    border-left-color: #3c6bff;
                    left: auto;
                    right: -2px;
                }
            }
        }
    }
</style>