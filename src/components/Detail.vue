<template>
<div>Товар {{ $route.params.id }}</div>
<div class="outdoor-details">
	<div class="breadcrumbs">
		<div class="row">
			<img alt="" src="images/home.png">
			<a href="/">Главная</a> 
			<img class="arrow" src="images/breadcrumbs_arrow.png">
			<a href="/products/outdoor-fitness-equipment/">Уличные тренажеры</a> 
			<img class="arrow" src="images/breadcrumbs_arrow.png">
			<span>Тренажер уличный №01</span>
		</div>
	</div>
	<div class="row main">
		<div class="col-5 detail-img">
			<a data-fancybox="gallery" href="pictures/01.png" data-caption="Тренажер уличный №01">
				<img src="../images/01.png" alt="">
			</a>
		</div>
		<div class="col-7">	
			<h1>Тренажер уличный №01</h1>
			<p class="price">26 300&nbsp;<span>руб.</span></p>
			<p>Надежный и долговечный уличный тренажер для занятий спортом. Уличный тренажер предназначен для установки и использования в условиях агрессивной уличной среды. Он спроектирован и изготовлен так, чтобы быть безопасным и вандалоустойчивым.</p>
			<p><strong>Материалы:</strong> Основание труба профильная 100х100х3. Труба стальная (42/32 мм).Труба профильная 80х40х3. Металл СТ3 (3 мм). Заглушки пластиковые</p>
			<p><strong>Покраска:</strong> Грунт (Экспресс). Эмаль (Экспресс-ДОМ) * Краски КВИЛ</p>
			<p><strong>Особенности установки:</strong> Бетонирование (400 мм)</p>
			<p><strong>Артикул:</strong> tr-01</p>
			<p><strong>Размеры:</strong> 1120 x 650 x 1720 мм</p>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'Detail'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: #333333;
}
img {
    max-width: 100%;
}
.row, .row-ex-3 {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.row {
    padding-left: 20px;
    padding-right: 20px;
}
.col-5 {
    -ms-flex: 0 0 42%;
    flex: 0 0 42%;
    max-width: 42%;
}
.col-7 {
    -ms-flex: 0 0 58%;
    flex: 0 0 58%;
    max-width: 58%;
}
.outdoor-details .detail-img {
    /*padding-right: 23px;*/
}
h1 {
    font-family: "rodchenkocondcregular", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 36px;
    color: #faa31f;
    line-height: normal;
    font-weight: normal;
}
h1 {
    margin-top: 15px;
    margin-bottom: 35px;
}
.outdoor-details h1 {
    margin-top: 20px;
}
.outdoor-details p {
    text-align: justify;
    line-height: 1.5;
    font-size: 14px;
}
.outdoor-details .price {
    font-size: 24px;
    font-weight: bold;
}

</style>