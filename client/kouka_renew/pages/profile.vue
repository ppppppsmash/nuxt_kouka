<template>
  <div style="padding-top:112px;">
    <article>
      <div class="title">
        <h1><small>恒佳株式会社</small>会社概要</h1>
      </div>
      <!--title-->
      <div class="contents">
        <div class="contents-style">
          
          <div class="portfolio-table-warp">
            <table summary="商品リスト">
              <tbody>
                <tr>
                  <th scope="row" >名称</th>
                  <td>恒佳株式会社</td>
                </tr>
                <tr>
                  <th scope="row" >資本金の額</th>
                  <td>500万円</td>
                </tr>
                <tr>
                  <th scope="row" >設立</th>
                  <td>平成24年7月24日</td>
                </tr>
                <tr>
                  <th scope="row" >従業員人数</th>
                  <td>6人</td>
                </tr>
                <tr>
                  <th scope="row" >管理薬剤師</th>
                  <td>恩田　乾次郎</td>
                </tr>
                <tr>
                  <th scope="row" >医薬品登録販売者</th>
                  <td>恩田　乾次郎</td>
                </tr>
                <tr>
                  <th scope="row" >主要取引銀行</th>
                  <td>みずほ銀行　千葉銀行</td>
                </tr>
                <tr>
                  <th scope="row" >取引先</th>
                  <td>(株)建林松鶴堂<br>
                    (株)コーワリミテッド<br>
                    (株)ボーテサンテラボラトリーズ<br>
                    (株)ピーエス<br>
                    美意識(株)<br>
                    (株)ハッピーバース</td>
                </tr>
              </tbody>
            </table>
          </div>


          <!-- <h3><span>MAP</span></h3>
          <GmapMap
          :center="{lat:35.7334623, lng:139.7084551}"
          :zoom="17"
          map-type-id="roadmap"
          style="width: 100%; height: 500px"
          >
          <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position" />
          </GmapMap> -->
        </div>
        <!--contents-style-->
      </div>
      <!--contents-->
    </article>

    <div class="topic-path">
      <ol>
        <li><NuxtLink to="/">ホーム</NuxtLink></li>
        <li><NuxtLink to="/profile">会社概要</NuxtLink></li>
      </ol>
    </div>
    <!--topic-path-->

  </div>
</template>

<script>
export default {
  name:'Profile',
  data() {
    return {
      markers: [
        {
          position: {
            lat:35.7334623,
            lng:139.7084551
          },
          title: 'title'
        }
      ]
    }
  }
}



</script>
