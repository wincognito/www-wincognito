<template>
<div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
  <div id="liveToast" class="toast hide" :class="toastClass" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="toast-header">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      {{ text }}
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: [
        'error',
        'text'
    ],
    methods: {
        showToast(){
            var toast = this.$refs.toast
            var toastInstance = this.$bootstrapToast.getOrCreateInstance(toast)
            toastInstance.show()
        }
    },
    computed: {
        toastClass() {
            if (this.error) {
                return "bg-danger text-white"
            }

            return "bg-success text-white"
        }
    }
}
</script>

<style>

</style>