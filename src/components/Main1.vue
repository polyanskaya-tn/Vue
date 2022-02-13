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
    <Catalog1 v-for="item in products" v-bind:product="item" v-bind:key="item.name" />
</div>
</template>

<script>
import Catalog1 from './Catalog1.vue'

export default {
  name: 'Main1',
  components: {
    Catalog1
  },
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
		  ]
	  }
  }
}
</script>

<style scoped>
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
</style>