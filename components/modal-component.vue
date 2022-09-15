<template>
    <div class="modal fade portfolio-modal" role="dialog" tabindex="-1" :id="id" v-bind="$attrs">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="container">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    props: ['id']
}
</script>

<style>

</style>