<template>
  <span v-html="renderedMath"></span>
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
      displayMode: false
    });
  } catch (error) {
    console.error('KaTeX rendering error:', error);
    return `<span style="color: red;">[Math Error: ${error.message}]</span>`;
  }
});
</script>