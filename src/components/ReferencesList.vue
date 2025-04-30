<template>
  <div class="references-list">
    <h2>References</h2>
    <ol>
      <li v-for="reference in references" :key="reference.citationKey">
        <span v-if="reference.entryTags.author">{{ reference.entryTags.author }}. </span>
        <span v-if="reference.entryTags.title"><strong>{{ reference.entryTags.title }}</strong>. </span>
        <span v-if="reference.entryTags.journal">{{ reference.entryTags.journal }}. </span>
        <span v-if="reference.entryTags.year">{{ reference.entryTags.year }}. </span>
        <span v-if="reference.entryTags.doi">DOI: <a :href="`https://doi.org/${reference.entryTags.doi}`" target="_blank">{{ reference.entryTags.doi }}</a>.</span>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { getAllReferences } from '../utils/referenceManager';
import { ref, onMounted } from 'vue';

const references = ref([]);

onMounted(() => {
  references.value = getAllReferences();
});
</script>

<style scoped>
.references-list {
  margin-top: 2rem;
  padding: 1rem;
  background-color: var(--content-background);
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.75rem var(--shadow-color);
}

.references-list h2 {
  margin-bottom: 1rem;
  color: var(--heading-color);
}

.references-list ol {
  padding-left: 1.5rem;
}

.references-list li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}
</style>