<template>
<a :href="href" v-bind="$attrs"><slot name="default"></slot>
    <slot name="icon"><i class="fa fa-external-link"></i></slot>
</a>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
svg {
  min-width: 1.2em;
  width: 1.2em;
}
</style>