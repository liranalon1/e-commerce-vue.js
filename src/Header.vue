<template>
    <header>
      <nav class="flex flex-row align-center space-between">
        <h1><a class="mainTitle" href="/"><strong>Headphones Store</strong></a></h1>
        <div class="cart-info">
            <div class="cart-info-inner" v-if="!cartIsActive">
                <button class="cartBtn" @click="showCart()">
                    <svg width="31px" height="25px" viewBox="0 -31 512.00026 512" xmlns="http://www.w3.org/2000/svg"><path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"/><path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/><path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/></svg> 
                    <span class="cart-count">{{ cart.items.length }}</span>
                </button>
                <span class="stats">Total {{ cartTotal | currency }}</span>
            </div>
            <span class="backToShop" v-else @click="showCart()">Back To Shop</span>
        </div>
      </nav>
    </header>
</template>

<script>
    export default {
        props: ['showCart','cartIsActive','cart','cartTotal'],
        
        data() {
            return {

            };
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
    header{
        position: sticky; z-index: 1; top: 0; padding: 0.9375rem 0.938rem; color: #fff; background-color: #222a3c;
        nav{
            justify-content: space-between;
            h1{ 
                position: relative;
                font-size: 1.25rem;
            
                &:after{
                    content: '';
                    position: absolute;
                    top: -5px;
                    margin-left: 12px;
                    width: 30px;
                    height: 229px;
                    background: url(/images/logo.png) no-repeat top center/100%;
                }
            }
            .cart-info{
                .cart-info-inner{display:flex; align-items: center;}
                .stats {margin-left: 0.9375rem;}
            }
            .cartBtn {
                position: relative;outline: none;display: flex;
                svg {
                    path {fill: #fff;}
                }
                .cart-count { position: absolute; z-index: 0; display: flex; align-items: center; justify-content: center; top: -0.375rem; right: -0.375rem; width: 1.0625rem; height: 1.0625rem; background: #31b3a4; border-radius: 50%; color: #fff; font-size: 0.75rem; }
            }
            .backToShop{
                cursor: pointer;
                &:before{content:'< ';}
            }
        }
    }

    @media (max-width: 480px) {
    
    }
</style>
