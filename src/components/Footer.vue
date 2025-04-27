<template>
  <footer class="article-footer">
    <div class="footer-content">
      <p class="copyright">&copy; {{ new Date().getFullYear() }} - SN24076677</p>
      <div class="footer-links">
        <a href="#" class="link">References</a>
        <a href="#" class="link">Contact</a>
        <a href="#" class="link">Privacy Policy</a>
      </div>
    </div>
    <p class="disclaimer">This article is for educational purposes only and does not constitute medical advice.</p>
  </footer>
</template>

<script setup>
// Footer component
</script>
<style scoped>
.article-footer {
  margin-top: 5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-color);
  font-size: 0.9rem;
  transition: border-color 0.3s, color 0.3s;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 1rem;
}

.copyright {
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.link {
  color: var(--secondary-color);
  text-decoration: none;
  transition: color 0.2s;
}

.link:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

.disclaimer {
  font-size: 0.8rem;
  color: var(--text-color);
  opacity: 0.8;
  text-align: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--border-color);
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-links {
    width: 100%;
    justify-content: center;
  }
}
</style>