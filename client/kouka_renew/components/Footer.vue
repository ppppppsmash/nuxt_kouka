<!-- Please remove this file from your project -->
<template>
<div>
  <p class="bt-pagetop"><a href="#pagetop">トップへ戻る</a></p>
  <footer>
    <nav class="footer__navigation">
      <ul class="footer__navigation-link">
        <li><NuxtLink to="/about">執行役員メッセージ</NuxtLink></li>
        <li><NuxtLink to="/business">主要事業</NuxtLink></li>
        <li><NuxtLink to="/product">取扱商品</NuxtLink></li>
        <li><NuxtLink to="/about">会社概要</NuxtLink></li>
        <li><NuxtLink to="/about">組織図</NuxtLink></li>
      </ul>
    </nav>
    <!--footer__navigation-->
    <nav class="sub-footer__navigation">
      <ul>
        <li><NuxtLink to="/maintenance">お問い合わせ</NuxtLink></li>
        <li><NuxtLink to="/maintenance">リンク集</NuxtLink></li>
      </ul>
    </nav>
    <!--footer__navigation-->
    <p class="copyright"><small><span>©</span> Kouka Corporation All Rights Reserved</small></p>
  </footer>
</div>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>
