<template>
<div class="row products">
	<div class="col-3">	
		<a href="/product/outdoor-fitness-equipment/tren-17/">
			<img src="../images/17-2.png" alt="">
			<p>Тренажер уличный №17</p>
			<div class="price">9 000&nbsp;<span>руб.</span></div>
		</a>
	</div>
	<div class="col-3">	
		<a href="/product/outdoor-fitness-equipment/tren-18/">
			<img src="../images/18-md.png" alt="">
			<p>Тренажер уличный №18</p>
			<div class="price">23 200&nbsp;<span>руб.</span></div>
		</a>
	</div>
	<div class="col-3">	
		<a href="/product/outdoor-fitness-equipment/tren-19/">
			<img src="../images/19-md.png" alt="">
			<p>Тренажер уличный №19</p>
			<div class="price">23 200&nbsp;<span>руб.</span></div>
		</a>
	</div>
	<div class="col-3">	
		<a href="/product/outdoor-fitness-equipment/tren-20/">
			<img src="../images/20-md.png" alt="">
			<p>Тренажер уличный №20</p>
			<div class="price">23 200&nbsp;<span>руб.</span></div>
		</a>
	</div>
	<div class="col-3">	
		<a href="/product/outdoor-fitness-equipment/tren-21/">
			<img src="../images/21-md.png" alt="">
			<p>Тренажер уличный №21</p>
			<div class="price">23 200&nbsp;<span>руб.</span></div>
		</a>
	</div>
	<div class="col-3">	
		<a href="/product/outdoor-fitness-equipment/tren-22/">
			<img src="../images/22-md.png" alt="">
			<p>Тренажер уличный №22</p>
			<div class="price">42 050&nbsp;<span>руб.</span></div>
		</a>
	</div>
	<div class="col-3">	
		<a href="/product/outdoor-fitness-equipment/tren-23/">
			<img src="../images/23-md.png" alt="">
			<p>Тренажер уличный №23</p>
			<div class="price">33 350&nbsp;<span>руб.</span></div>
		</a>
	</div>
	<div class="col-3">	
		<a href="/product/outdoor-fitness-equipment/tren-24/">
			<img src="../images/24-md.png" alt="">
			<p>Тренажер уличный №24</p>
			<div class="price">10 500&nbsp;<span>руб.</span></div>
		</a>
	</div>
</div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
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
.products a {
    text-decoration: none;
    border: 1px solid #eaeaea;
    display: block;
    color: #333333;
}
.products p {
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    padding: 10px 0;
    background: rgba(244,244,244, 0.5);
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