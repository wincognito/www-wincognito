<template>
    <div>
        <nuxt-content :document="content"></nuxt-content>
    </div>
</template>

<script>
export default {
    props: [
        'contentpath'
    ],
    data: function(){
        return {
            content: null
        }
    },
    async fetch() {
        this.content = await this.$content(this.contentpath).fetch()
    }
}
</script>

