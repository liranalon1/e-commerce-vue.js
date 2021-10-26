<template>
    <div id="allItems" class="flex" v-if="!cartIsActive && !productInfoIsActive">
        
        <div class="filter-wrap">
            <h2>Brand</h2>
            <ul>
                <li v-for="(item,index) in productsList" :key="index">
                    <label>
                        <input type="checkbox" @change="updateCustomList(item.brand)" :checked="item.isActive">
                        <i></i>
                        <span>{{item.brand}}</span>
                    </label>
                </li>
            </ul>
        </div>

        <div class="items-wrap flex">
            <div v-for="(item,index) in customList" :key="index" class="item-wrap flex">
                <div v-for="product in item.products" :key="product.name" class="item" @click="showProductInfo(); selectedProduct(product)">
                    <div class="thumbnail flex flex-column" :class="{'out-of-stock':product.inStock == 0}">
                        <img class="group list-group-image" :src="product.images[0]">
                        <div class="bottom">
                            <h4>{{ product.name }}</h4>
                            <p class="subTitle">{{ product.description }}</p>
                            <br>
                            <div class="row flex flex-row align-center space-between">
                                <div>
                                    <p class="itemPrice">{{ product.price | currency }}</p>
                                </div>
                                <div class="flex flex-row align-center">
                                    <div class="number-in-stock" :class="{ few: product.inStock < 10, none: product.inStock == 0 }">
                                        {{ product.inStock }} in stock
                                    </div>
                                    <button class="btn btn-success" @click.stop="addProductToCart(product)" :disabled="product.inStock == 0">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div v-else-if="productInfoIsActive">
        <product-info
            :product="product"
            :cart="cart"
            :cartTotal="cartTotal"
            :showProductInfo="showProductInfo"
            :productInfoIsActive="productInfoIsActive">
        </product-info>
    </div>

    <div v-else>
        <cart 
            :cart="cart"
            :cartTotal="cartTotal">
        </cart>
    </div>
</template>

<script>
    import Cart from './Cart.vue';
    import ProductInfo from './ProductInfo.vue';

    export default {
        props: ['productsList','showCart','cartIsActive','cart','cartTotal','showProductInfo','productInfoIsActive','productInfoIsActive'],
        components:{
            Cart: Cart,
            ProductInfo: ProductInfo
        },
        data(){
            return{
               product: null,
               customList: this.productsList,
            }
        },

        computed: {
        
        },
        
        methods: {
            updateCustomList:function(brand){
                console.log('productsList' + JSON.stringify(this.customList));
                for(let i in this.productsList){
                    if(this.productsList[i].brand === brand){
                        this.productsList[i].isActive = !this.productsList[i].isActive
                        console.log(brand);
                                            
                        this.customList = this.productsList.filter( i => i.isActive === true );
                    }
                }
            },
            addProductToCart: function(product){
                var cartItem = this.getCartItem(product);
                if(cartItem != null){
                    cartItem.quantity++;
                }else{
                    this.cart.items.push({
                        product: product,
                        quantity: 1
                    });
                }

                product.inStock--;
            },
            getCartItem: function(product){
                for (var i = 0; i < this.cart.items.length; i++){
                    if( this.cart.items[i].product.name === product.name ){
                        return this.cart.items[i];
                    }
                    //  return null;
                }
            },
            selectedProduct: function(item){
                console.log('product' + JSON.stringify(item));
                this.product = item;
            }
        },

        filters: {
            currency: function(value) {
                var formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                });
                
                return formatter.format(value);
            }
        }        
    }
</script>

<style lang="scss" scoped>
    #allItems{
        margin: 1.25rem 0;

        /* filter */
        .filter-wrap{
            width: 15.625rem;
            margin: 0.625rem 0.625rem 0.625rem 0;
            padding: 0.9375rem;
            border: 1px solid #ddd;
            background: #fff;
            h2{
                font-weight: 700;
                margin-bottom: 10px;
            }
            label{
                position: relative;
                display: flex;
                align-items: center;
                margin-bottom: 5px;
                cursor: pointer;
                input[type="checkbox"]{
                    position: absolute;
                    z-index: 1;
                    opacity: 0;
                }
                i{
                    position: absolute;
                    left: 0;
                    background: #fff;
                    height: 16px;
                    width: 16px;
                    border: 1px solid #ddd;
                    border-radius: 3px;
                }
                input[type="checkbox"]:checked + i{
                    background: #31b3a4;
                    border:none;
                    &:after{
                        content: '';
                        position: absolute;
                        z-index: 1;
                        width: 10px;
                        height: 5px;
                        background: transparent;
                        bottom: 7px;
                        left: 3px;
                        border: 2px solid #fff;
                        border-top: none;
                        border-right: none;
                        -webkit-transform: rotate(-48deg);
                        transform: rotate(-48deg);
                    }
                }
            }
            span{
                margin-left: 25px;
            }
        }

        /* items */
        .items-wrap{
            flex-wrap: wrap; 
            justify-content: space-between; 
            width: 100%;

            .item-wrap{
                flex-wrap: wrap; 
                justify-content: space-between; 
                width: 100%;
            }
            
            .item{
                max-width: 340px;
                width:100%;
                .thumbnail {
                    justify-content: space-between; height: calc(100% - 1.25rem); padding: 0.9375rem; margin: 0.625rem; background-color: #fff; border: 1px solid #ddd; border-radius: 5px; transition: 0.1s ease-in-out; cursor: pointer;
                    &:hover{transform: scale(1.01);box-shadow: 0px 0px 13px -10px #000;}
                    &.out-of-stock, &.out-of-stock:hover{ transform: scale(1); box-shadow: none;}
                }
                img { display: block; max-width: 100%; height: 15.625rem; padding: 0.625rem; margin: 0 auto;}
                .bottom{
                    /*height: 7.8125rem;*/
                    h4{font-size: 1.125rem;margin-bottom: 0.3125rem;font-weight: 700;text-align: center;}
                    .subTitle{ /* height: 3.375rem; */ text-align: center; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
                    p.itemPrice {
                        font-size:1.3125rem;
                        font-weight:700;
                        color: #E0A14F;
                    }
                    .number-in-stock {
                        margin-right: 0.625rem; 
                        &.few { color: #E0A14F; }
                        &.none {color: #FF004E;}
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        #allItems{
            margin: 0.625rem 0;
            justify-content: center;
            .item img { height: 9.375rem; }
        }
    }
</style>