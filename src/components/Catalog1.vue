<template>
	<div class="col-3">	
		<a :href="product.href">
			<img :src="product.img" alt="">
			<p class="name">{{product.name}}</p>
			<div class="price">{{product.price}}&nbsp;<span>руб.</span></div>
		</a>
	</div>
</template>

<script>
export default {
    name: 'Catalog1',
    props: ['product','key']
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