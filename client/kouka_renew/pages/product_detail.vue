<template>
  <div style="padding-top:112px;">
    <article>
    <div class="title">
      <h1><small>主要取扱商品</small>{{product.name}}</h1>

    </div>
    <!--title-->
    <div class="contents">
      <div class="contents-style">
        



        <div class="portfolio-table-warp">
            <!--<h3>物件概要</h3>-->
            <table summary="商品リスト">
              <tbody>
                <tr>
                  <th scope="row" >商品名</th>
                  <td>{{product.name}}</td>
                </tr>
                <tr>
                  <th scope="row" >内容量</th>
                  <td>{{product.propertyA}}</td>
                </tr>
                <tr>
                  <th scope="row" >商品説明</th>
                  <td>{{product.propertyB}}</td>
                </tr>
                <tr>
                  <th scope="row" >お召し上がり方</th>
                  <td>{{product.propertyC}}</td>
                </tr>
                <tr>
                  <th scope="row" >使用上の注意</th>
                  <td>{{product.propertyD}}</td>
                </tr>
              </tbody>
            </table>
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
      <li>{{product.name}}</li>
    </ol>
  </div>
  <!--topic-path-->

  </div>
</template>

<script>
export default {
    data() {
      return {
        product: ''
      }
    },
    created () {
      this.initData()
      this.product = this.product[this.$route.query.id]
      
    },
    async asyncData({ $axios }) {
      const res = await $axios.$get('/json/product-detail.json');
      return {
        product: res
      }
    },
    methods: {
      initData() {
        if(!this.$route.query.id.match(/^\d+$/)) {
          throw new Error("Invalid parameter");
        }
        
      }
      
    }
  }
</script>
