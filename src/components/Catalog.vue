<template>
<div class="row top">
	<div class="col-12">	
		<h1>Уличные тренажеры</h1>
		<p class="info">
			Специализированные тренажеры для занятий на воздухе, отличаются износоустойчивостью, надежностью, универсальностью, безопасностью. При изготовлении учитываются особенности эксплуатации в различных погодных условиях.
		</p>
	</div>
</div>
<div class="row products">
	<div class="col-3" v-for="item in products" v-bind:key="item.name">	
		<a :href="item.href">
			<img :src="item.img" alt="">
			<p class="name">{{item.name}}</p>
			<div class="price">{{item.price}}&nbsp;<span>руб.</span></div>
		</a>
	</div>
</div>
</template>

<script>
export default {
  name: 'Catalog',
  data() {
	  return {
		  products: [
			  {name: 'Тренажер уличный №17', href: "/#/product/1", img: require('../assets/17-2.png'), price: '9 000'},
			  {name: 'Тренажер уличный №18', href: "/#/product/2", img: require('../assets/18-md.png'), price: '23 200'},
			  {name: 'Тренажер уличный №19', href: "/#/product/3", img: require('../assets/19-md.png'), price: '23 200'},
			  {name: 'Тренажер уличный №20', href: "/#/product/4", img: require('../assets/20-md.png'), price: '23 200'},
			  {name: 'Тренажер уличный №21', href: "/#/product/5", img: require('../assets/21-md.png'), price: '23 200'},
			  {name: 'Тренажер уличный №22', href: "/#/product/6", img: require('../assets/22-md.png'), price: '42 050'},
			  {name: 'Тренажер уличный №23', href: "/#/product/7", img: require('../assets/23-md.png'), price: '33 350'},
			  {name: 'Тренажер уличный №24', href: "/#/product/8", img: require('../assets/24-md.png'), price: '10 500'}
		  ],
		  publicPath: process.env.BASE_URL
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    max-width: 100%;
}
h1 {
    font-family: "rodchenkocondcregular", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 24px;
    color: #faa31f;
    line-height: normal;
    font-weight: bold;
    text-align: left;
}
.info {
    text-align: justify;
    line-height: 1.5;
    text-indent: 50px;
}
.col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.products {
    text-align: center;
    margin-top: 23px;
    margin-bottom: 7px;
}
.row {
    padding-left: 20px;
    padding-right: 20px;
}
.row, .row-ex-3 {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.products .col-3 {
    -ms-flex: 0 0 calc((100% - 3*20px)/4);
    flex: 0 0 calc((100% - 3*20px)/4);
    max-width: calc((100% - 3*20px)/4);
    margin-right: 20px;
    margin-bottom: 20px;
}
.products .col-3:nth-of-type(4n+4) {
    margin-right: 0;
}
.products a {
    text-decoration: none;
    border: 1px solid #eaeaea;
    display: block;
    color: #333333;
}
.products .name {
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    padding: 10px 0;
    background: rgba(244,244,244, 0.5);
    margin: 10px 0;
}
.products .price {
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 15px;
}
.price span {
    font-size: initial;
    font-weight: initial;
}
</style>