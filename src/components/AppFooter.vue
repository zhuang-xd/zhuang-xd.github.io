<script setup>
const today = new Date();
const currentDate = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, '0'),
  String(today.getDate()).padStart(2, '0'),
].join('-');
</script>

<template>
  <section class="footer">
    <footer>
      <span class="footer__copyright">© 2018 ~ {{ currentDate }} Zhuang Xiao Dong. All rights reserved.</span>
      <span class="footer__copyright">contact email: xiaodong.zhuang@hotmail.com</span>
    </footer>
  </section>
</template>
