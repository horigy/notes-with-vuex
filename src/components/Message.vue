<template>
    <div class="message">
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
            default: 'default message'
        }
    }
}
</script>

<style lang="scss" scoped>
    .message {
        padding: 20px;
        text-align: center;
    }
    p {
        color: rgb(202, 27, 27);
    }
</style>