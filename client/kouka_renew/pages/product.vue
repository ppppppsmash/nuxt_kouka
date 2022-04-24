<template>
  <div style="padding-top:112px;">
    <article>
    <div class="title">
      <h1><small>恒佳株式会社</small>主要取扱商品</h1>
    </div>
    <!--title-->
    <div class="contents">
      <div class="contents-style">
        <div style="display:none">
          <p>非表示時テキスト</p>
        </div>
        <div style="display:">
          <p class="text-align--right margin-bottom--10">2022年4月22日現在</p>
          <p class="text-align--right margin-bottom--0 tenant"><span class="tbl-supple"></span>恒佳株式会社</p>
          <table class="align-middle th-top txt-ss js-scroll-table" summary="主要取扱商品">
            <thead>
              <tr>
                <th class="text-align--center width-50" scope="col"></th>
                <th class="text-align--center width-270" scope="col">商品名</th>
                <th class="text-align--center width-270" scope="col">メーカー</th>
              </tr>
            </thead>
            <tbody>
              
              <tr class="highlight"  v-for="(product, index) in products" :key="index">
                <td class="text-align--center" celljoin="blank">{{product.id}}</td>
                <td class="text-align--left"><NuxtLink :to="'/product_detail?id='+product.id">{{product.name}}</NuxtLink></td>
                <td class="text-align--left">{{product.maker}}</td>
              </tr>
              
            </tbody>
          </table>
          <!-- <table class="indent-table cont-margin">
            <tbody>
              
              <tr>
                <th scope="row">（注1）</th>
                <td> 「賃貸面積」には、事務所等として賃貸借を行っている面積のみを記載し、倉庫や駐車場等として賃貸している面積及び当該テナントに対するレジデンスの賃貸面積は含みません。</td>
              </tr>
              
              <tr>
                <th scope="row"></th>
                <td></td>
              </tr>
              
            </tbody>
          </table> -->
        </div>
      </div>
      <!--contents-style-->
    </div>
    <!--contents-->
  </article>

    <div class="topic-path">
      <ol>
        <li><NuxtLink to="/">ホーム</NuxtLink></li>
        <li><NuxtLink to="/product">取扱商品</NuxtLink></li>
      </ol>
    </div>
    <!--topic-path-->
  </div>
</template>

<script>
// import Vue from 'vue'

// export default Vue.extend({
//   async created(){
//     const ALBUM_API = "https://jsonplaceholder.typicode.com/albums"
//     const albums = await this.$axios.$get(ALBUM_API)
//     console.log("createdでALBUM_APIをGET:",albums);
//   }
// })
export default {
    data() {
      return {
      }
    },
    async asyncData({ $axios, $config }) {
      const res = await $axios.$get('/json/product.json');
      //const res = await $axios.$get(`${process.env.BASE_URL}/json/product.json`);
      return {
        products: res.products
      }
    }
  }
</script>
