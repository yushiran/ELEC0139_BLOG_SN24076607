<template>
  <div v-html="renderedMath" class="katex-display"></div>
</template>

<script setup>
import { computed } from 'vue';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const props = defineProps({
  formula: {
    type: String,
    required: true
  }
});

const renderedMath = computed(() => {
  try {
    return katex.renderToString(props.formula, {
      throwOnError: false,
      displayMode: true
    });
  } catch (error) {
    console.error('KaTeX rendering error:', error);
    return `<span style="color: red;">[Math Error: ${error.message}]</span>`;
  }
});
</script>

<style scoped>
.katex-display {
  margin: 1.5em 0;
  text-align: center;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>