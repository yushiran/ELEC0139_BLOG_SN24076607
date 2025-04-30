<template>
  <span class="reference" @click="showReference">
    [{{ referenceNumber }}]
  </span>
</template>

<script setup>
import { getReference, getReferenceNumber } from '../utils/referenceManager';
import { ref, computed } from 'vue';

const props = defineProps({
  citationKey: {
    type: String,
    required: true
  }
});

const reference = ref(null);
const referenceNumber = computed(() => getReferenceNumber(props.citationKey));

function showReference() {
  const key = props.citationKey;
  reference.value = getReference(key);
  console.log('Reference data:', reference.value);
  if (reference.value && reference.value.entryTags) {
    alert(`Reference ${referenceNumber.value}: ${reference.value.entryTags.title} by ${reference.value.entryTags.author}`);
  } else {
    alert('Reference not found or entryTags missing!');
  }
}
</script>

<style scoped>
.reference {
  color: var(--primary-color);
  cursor: pointer;
  text-decoration: underline;
}
</style>