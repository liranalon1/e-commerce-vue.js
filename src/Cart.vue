<template>
    <div id="cart">
        <table v-if="cart.items.length > 0" class="table table-striped">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item,index) in cart.items" :key="index">
                    <td>{{ item.product.name }}</td>

                    <td class="quantityWrap">
                        {{ item.quantity }} &nbsp;
                        <button class="btn btn-success" @click="increaseQuantity(item)" :disabled="item.product.inStock == 0">+</button>
                        <button class="btn btn-danger" @click="decreaseQuantity(item)">-</button>
                    </td>

                    <td>{{ item.quantity * item.product.price | currency }}</td>
                </tr>

                <tr>
                    <td class="text-right" colspan="2">
                        <strong>Subtotal</strong>
                    </td>

                    <td>{{ cartTotal | currency }}</td>
                </tr>

                <tr>
                    <td class="text-right" colspan="2">
                        <strong>Taxes</strong>
                    </td>

                    <td>{{ taxAmount | currency }}</td>
                </tr>

                <tr class="totalStyle">
                    <td class="text-right" colspan="2">
                        <strong>Grand total</strong>
                    </td>

                    <td>{{ cartTotal + taxAmount | currency }}</td>
                </tr>

                <tr>
                    <td colspan="2"></td>
                    <td><button class="btnTotal btn btn-success" @click="checkout()">Checkout</button></td>
                </tr>
            </tbody>
        </table>

        <p v-else>Your cart is currently empty.</p>
    </div>    
</template>

<script>
    export default{
        props: ['cart','cartTotal'],

        data(){
            return{
                
            }
        },

        computed: {
            taxAmount: function(){
                return ((this.cartTotal * 10) / 100);
            }
        },

        methods:{
            increaseQuantity: function(cartItem){
                cartItem.product.inStock--;
                cartItem.quantity++;
            },
            decreaseQuantity: function(cartItem){
                cartItem.quantity--;
                cartItem.product.inStock++;
                if(cartItem.quantity == 0){
                    this.removeItemFromCart(cartItem);
                }
            },
            removeItemFromCart: function(cartItem){
                var index = this.cart.items.indexOf(cartItem);
                if(index != -1){
                    this.cart.items.splice(index, 1);
                }
            },
            checkout: function(){
                if (confirm('Are you sure that you want to purchase these products?')) {
                    this.cart.items.forEach(function(item){
                        item.product.inStock += item.quantity
                    })

                    this.cart.items = [];
                }
            },
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
    #cart{
        margin: 1.25rem 0;
        h2{ font-size: 2.25rem; margin-bottom: 1.25rem; }
        .quantityWrap{
            display: flex; justify-content: space-between; max-width: 110px;
            &:first-of-type{ border: none;}
            .btn{max-height: 28px;margin: 0 2px;}
        }
        .totalStyle{font-size:1.25rem;font-weight: 700;}
        .btnTotal:hover{animation-name: pulse; -webkit-animation-name: pulse; animation-duration: 1.5s; -webkit-animation-duration: 1.5s; animation-iteration-count: infinite; -webkit-animation-iteration-count: infinite;}
    }

    @media (max-width: 480px) {
        #cart{
            margin: 0.625rem 0;
        }
    }
</style>
