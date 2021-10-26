<template>
    <div id="InnerProduct">
        <!-- item -->
        <div class="item">
            <div class="productImages">
                <ul>
                    <li v-for="(productImages, index) in product.images" :key="productImages" @mouseenter="addHoveredClass($event, index)">
                        <img :src="productImages">
                    </li>
                </ul>
            </div>
            <div class="thumbnail flex flex-column">
                <img class="group list-group-image" :src="image" @mousemove="zoomIn($event)" @mouseout="zoomOut()">
            </div>
        </div>
        <!-- /item -->

        <!-- item info wrap -->
        <div class="item-info-wrap">

            <div id="overlayImg" @mousemove="zoomIn($event)" :style="{backgroundImage: 'url(' + image + ')', backgroundPosition: imgPosition.posX + 'px ' + imgPosition.posY + 'px' }"></div>

           <h4 class="itemName">{{product.name}}</h4> 
           <div class="itemPrice">
               <span>Price:</span> {{product.price | currency}}
            </div>
           <div class="itemInfo">
               <ul>
                    <li>Industry-leading noise cancellation, powered by our HD Noise Cancelling Processor QN1 (Disclaimer in description)</li>
                    <li>Premium sound quality - these Bluetooth headphones support High-Resolution Audio, and even compressed music files are upscaled using our evolved DSEE Extreme technology.</li>
                    <li>Speak-to-Chat automatically pauses playback when you start a conversation, Wearing Detection powers off your headphones when you're not wearing them, plus more smart features for a seamless, hands-free listening experience.</li>
                    <li>With multipoint connection, your Sony headphones can be paired with two Bluetooth devices at the same time</li>
                    <li>30 hours battery life (with Noise Cancelling on) plus fast charging (10 min charge for 5 hours playback)2 (Disclaimer in description)</li>
                    <li>New software update available on the 7th August</li>
               </ul>
           </div>    
        </div>    
        <!-- /item info wrap -->
    </div>
</template>

<script>
    export default{
        props: ['product','cart','cartTotal','showProductInfo'],

        data(){
            return{
                imgPosition: {
                  posX: Number,
                  posY: Number,
                },
                image: this.product.images[0]
            }
        },
       
        computed: {
            
        },

        methods:{
            zoomIn: function(event) {
                let img = document.querySelector('.thumbnail img');
                document.querySelector("#overlayImg").style.display = 'block';
                let posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
                let posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
                this.imgPosition.posX = -posX;
                this.imgPosition.posY = -posY;
                // this.imgPosition.posX = (-posX * 2);
                // this.imgPosition.posY = (-posY * 2);
            },

            zoomOut: function() {
                document.querySelector("#overlayImg").style.display = "none";
            },

            addHoveredClass: function (e, index) {
                let elem = document.querySelectorAll('.productImages li');
                for(let i = 0; i < elem.length; i++){
                    if(elem[i].classList.contains('hovered')){
                        elem[i].classList.remove("hovered");
                    }
                }
                e.target.classList.add("hovered");
                
                this.image = this.product.images[index];
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
    #overlayImg{
        display: none;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-repeat:no-repeat;
    }

    #InnerProduct{
        display: flex;
        // justify-content: space-between;
        width: 100%;
        margin: 1.25rem 0;

        .item{
            display: flex;
            max-width: 40%;
            width: 100%;

            .productImages{
                ul{
                    li{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 40px;
                        height: 40px;
                        background-color: #fff;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        margin: 0 20px 10px 0;
                        overflow: hidden;

                        &.hovered{
                            transform: scale(1.05);
                            box-shadow: 0px 0px 13px -5px #222a3c;
                            border: 1px solid #222a3c;
                        }
                    }
                }
            }

            .thumbnail {
                justify-content: space-between;
                padding: 0.9375rem;
                background-color: #fff;
                border: 1px solid #ddd;
                border-radius: 5px;
                transition: 0.1s ease-in-out;
            }
            img { display: block; max-width: 100%; padding: 0.625rem; margin: 0 auto; cursor: pointer;}
        }

        .item-info-wrap{
            position: relative;
            margin-left: 40px;

            .itemName{
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 20px;
            }
            .itemPrice{
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 20px;
                color: #E0A14F;

                span{
                    font-size: initial;
                    color: initial;
                }
            }
            .itemInfo{
                ul{
                    list-style: inherit;
                    text-indent: -18px;
                    padding-left: 18px;
                    list-style: inherit;

                    li{
                        padding-left: 18px;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        
    }
</style>