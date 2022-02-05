<template>
  <div v-if="shown">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper" @click="shown = false">
          <div class="modal-container" @click.stop>

            <div class="modal-header">
              <slot name="header">Default title</slot>
              <button type="button" class="modal-close-btn close" @click="shown = false" style="outline: none;">
                <span>&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <slot name="body">Default body</slot>
            </div>

            <div class="modal-footer d-flex">
              <slot name="footer">
                Default footer
                <button @click="shown = false">Cancel</button>
                <button @click="onOkClick">OK</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shown: false,
    };
  },
  methods: {
    show () {
      this.shown = true;
    },
    onOkClick () {
      this.$emit('okClick', {});
      this.shown = false;
    },
  },
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 320px;
  margin: 0 auto;
  background: #fff;
  color: #000;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-close-btn span {
  font-weight: 500;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}
</style>