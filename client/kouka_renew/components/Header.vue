<template>
  <header class="global-header">
    <div class="global-header__inner">
      <div class="global-bland">
        <h1><a href="/" title="恒佳株式会社">恒佳株式会社</a></h1>
      </div>
    
    <!-- スペース -->
    <div class="spacer"></div>
    <!-- ナブアイテム(768px未満で非表示) -->
    <nav class="global-menu">
      <div class="global-menu__sub-navigation">
        <div class="global-sub-navigation__font-size">
          <p>文字サイズ</p>
          <ul>
            <li class="global-sub-navigation__font-size--small"><a href="#" title="文字サイズ小"
                onclick="setActiveStyleSheet('small'); return false;">小</a></li>
            <li class="global-sub-navigation__font-size--medium"><a href="#" title="文字サイズ中"
                onclick="setActiveStyleSheet('medium'); return false;">中</a></li>
            <li class="global-sub-navigation__font-size--large"><a href="#" title="文字サイズ大"
                onclick="setActiveStyleSheet('large'); return false;">大</a></li>
          </ul>
        </div><!-- global-sub-navigation__font-size -->
        <ul class="global-sub-navigation__language">
          <li><a href="/" title="Chinese">Chinese（仮）</a></li>
        </ul>
      </div>
      <!-- global-menu__sub-navigation -->
      <!-- ハンバーガー(768px以上で非表示) -->
    <div class="global-menu__navigation">
      <ul class="nav-list gn link-reverse">
        <li><nuxt-link to="/about" active-class="current" class="global-menu__navigation__primary" exact><span>執行役員メッセージ</span></nuxt-link></li>
        <li><nuxt-link to="/business" active-class="current" class="global-menu__navigation__primary"><span>主要事業</span></nuxt-link></li>
        <li><nuxt-link to="/product" active-class="current" class="global-menu__navigation__primary"><span>取扱商品</span></nuxt-link></li>
        <li><nuxt-link to="/profile" active-class="current" class="global-menu__navigation__primary"><span>会社概要</span></nuxt-link></li>
        <li><nuxt-link to="/organization" active-class="current" class="global-menu__navigation__primary"><span>組織図</span></nuxt-link></li>
      </ul>
    </div>
      <div class="sp-ham">
        <SideNavToggle @toggle="$emit('sidenavToggle')" />
      </div>
    </nav>
  </div>
  </header>
</template>

<style scoped>

.sp-ham {
  display: block;
  position: absolute;
  top: 63px;
  right: 20px;
  text-decoration: none;
  display: block;
  float: right;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

@media (min-width: 1200px) {
  .sp-ham {
    display: none;
  }
}


.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.the-header h1 {
	display: flex;
	align-items: center;
	height: 60px;
	margin: 50px 0 0 16px;
}
.the-header h1 a:link, .the-header a:visited {
	text-decoration: none !important;
	display: block;
	/*　Scott Kellum Method */
	overflow: hidden;
	text-indent: 100%;
	white-space: nowrap;
	z-index: 1;
}
.the-header h1 a {
	background-image: url("~assets/img/common/logo.png");
	background-repeat: no-repeat;
	background-position: 0 50%;
	background-size: 100% auto;
	height: 60px;
}

.the-header h1 a:hover {
    opacity: 1;
}



.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

/* nuxt-link-activeでアクティブクラスをハイライト */
.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #f7797d;
}</style>

<script>
import SideNavToggle from "@/components/SideNavToggle";
export default {
  name: 'Header',
  components: {
    SideNavToggle
  }
}
</script>
