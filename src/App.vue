<template>
  <div id="app">

    <headerNav 
        :cart="cart"
        :cartTotal="cartTotal"
        :showCart="showCart"
        :cartIsActive="cartIsActive">
    </headerNav>

      <div class="container">
          <br>
          <products 
            :productsList="productsList"
            :cart="cart"
            :cartTotal="cartTotal"
            :showCart="showCart"
            :cartIsActive="cartIsActive"
            :productInfoIsActive="productInfoIsActive"
            :showProductInfo="showProductInfo">
          </products>
      </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
        cartIsActive: false,
        productInfoIsActive: false,
        productsList: [
          {
            brand:'Sony',
            isActive: true,
            products:[
              {
                  name: 'Sony WH-1000XM4',
                  images: [
                    'images/products/headphones/Sony/WH_1000XM4/01_WH_1000XM4.jpg',
                    'images/products/headphones/Sony/WH_1000XM4/02_WH_1000XM4.jpg',
                    'images/products/headphones/Sony/WH_1000XM4/03_WH_1000XM4.jpg',
                  ],
                  description: 'Sony WH-1000XM4 Noise Cancelling Wireless Headphones',
                  price: 280,
                  inStock: 5
              },
              {
                  name: 'Sony WH-CH510',
                  images: [
                    'images/products/headphones/Sony/WH_CH510/01_WH_CH510.jpg',
                    'images/products/headphones/Sony/WH_CH510/02_WH_CH510.jpg',
                    'images/products/headphones/Sony/WH_CH510/03_WH_CH510.jpg',
                  ],
                  description: 'Sony WH-CH510 Wireless Bluetooth Headphones with Mic',
                  price: 34.99,
                  inStock: 13
              },
              {
                  name: 'Sony MDR-ZX110',
                  images: [
                    'images/products/headphones/Sony/MDR_ZX110/01_MDR_ZX110.jpg',
                    'images/products/headphones/Sony/MDR_ZX110/02_MDR_ZX110.jpg',
                    'images/products/headphones/Sony/MDR_ZX110/03_MDR_ZX110.jpg',
                  ],
                  description: 'Sony MDR-ZX110 Overhead Headphones',
                  price: 49,
                  inStock: 50
              },
              {
                  name: 'Sony MDR-XB550AP',
                  images: [
                    'images/products/headphones/Sony/MDR_XB550AP/01_MDR_XB550AP.jpg',
                    'images/products/headphones/Sony/MDR_XB550AP/02_MDR_XB550AP.jpg',
                    'images/products/headphones/Sony/MDR_XB550AP/03_MDR_XB550AP.jpg',
                  ],
                  description: 'Sony MDR-XB550AP Extrabass Headphones',
                  price: 149,
                  inStock: 42
              },
              {
                  name: 'Sony MDRZX110P AE',
                  images: [
                    'images/products/headphones/Sony/MDRZX110P.AE/01_MDRZX110P.AE.jpg',
                    'images/products/headphones/Sony/MDRZX110P.AE/02_MDRZX110P.AE.jpg',
                  ],
                  description: 'Sony MDRZX110P.AE- Stereo Headphones, Powerful Sound - Pink.',
                  price: 9.99,
                  inStock: 0
              },
              {
                  name: 'Sony MDREX15LPB_AE',
                  images: [
                    'images/products/headphones/Sony/MDREX15LPB.AE/01_MDREX15LPB.AE.jpg',
                    'images/products/headphones/Sony/MDREX15LPB.AE/02_MDREX15LPB.AE.jpg',
                    'images/products/headphones/Sony/MDREX15LPB.AE/03_MDREX15LPB.AE.jpg',
                  ],
                  description: 'Sony In-Ear Headphones',
                  price: 9,
                  inStock: 81
              }
            ]
          },

          {
            brand:'Sennheiser',
            isActive: true,
            products:[
              {
                  name: 'Sennheiser MOMENTUM 3 WIRELESS',
                  images: [
                    'images/products/headphones/Sennheiser/MOMENTUM_3_WIRELESS/01_MOMENTUM_3_WIRELESS.jpg',
                    'images/products/headphones/Sennheiser/MOMENTUM_3_WIRELESS/02_MOMENTUM_3_WIRELESS.jpg',
                    'images/products/headphones/Sennheiser/MOMENTUM_3_WIRELESS/03_MOMENTUM_3_WIRELESS.jpg',
                  ],
                  description: 'Sennheiser Momentum 3 Wireless Noise Cancelling Headphones',
                  price: 295,
                  inStock: 5
              },
               {
                  name: 'Sennheiser CX 150BT',
                  images: [
                    'images/products/headphones/Sennheiser/CX_150BT/01_CX_150BT.jpg',
                    'images/products/headphones/Sennheiser/CX_150BT/02_CX_150BT.jpg',
                    'images/products/headphones/Sennheiser/CX_150BT/03_CX_150BT.jpg',
                  ],
                  description: 'Sennheiser CX 150BT Wireless Headphones with Necklet',
                  price: 55,
                  inStock: 12
              },
              {
                  name: 'Sennheiser HD 450BT Wh',
                  images: [
                    'images/products/headphones/Sennheiser/HD_450BT_Wh/01_HD_450BT_Wh.jpg',
                    'images/products/headphones/Sennheiser/HD_450BT_Wh/02_HD_450BT_Wh.jpg',
                    'images/products/headphones/Sennheiser/HD_450BT_Wh/03_HD_450BT_Wh.jpg',
                  ],
                  description: 'Sennheiser HD 450BT Wireless Headphones, with active noise cancellation',
                  price: 89,
                  inStock: 31
              },
            ]
          },

          {
            brand:'Bose',
            isActive: true,
            products:[
              {
                  name: 'Bose MOMENTUM 3 WIRELESS',
                  images: [
                    'images/products/headphones/Sennheiser/MOMENTUM_3_WIRELESS/01_MOMENTUM_3_WIRELESS.jpg',
                    'images/products/headphones/Sennheiser/MOMENTUM_3_WIRELESS/02_MOMENTUM_3_WIRELESS.jpg',
                    'images/products/headphones/Sennheiser/MOMENTUM_3_WIRELESS/03_MOMENTUM_3_WIRELESS.jpg',
                  ],
                  description: 'Sennheiser Momentum 3 Wireless Noise Cancelling Headphones',
                  price: 295,
                  inStock: 5
              },
               {
                  name: 'Bose CX 150BT',
                  images: [
                    'images/products/headphones/Sennheiser/CX_150BT/01_CX_150BT.jpg',
                    'images/products/headphones/Sennheiser/CX_150BT/02_CX_150BT.jpg',
                    'images/products/headphones/Sennheiser/CX_150BT/03_CX_150BT.jpg',
                  ],
                  description: 'Sennheiser CX 150BT Wireless Headphones with Necklet',
                  price: 55,
                  inStock: 12
              },
              {
                  name: 'Bose HD 450BT Wh',
                  images: [
                    'images/products/headphones/Sennheiser/HD_450BT_Wh/01_HD_450BT_Wh.jpg',
                    'images/products/headphones/Sennheiser/HD_450BT_Wh/02_HD_450BT_Wh.jpg',
                    'images/products/headphones/Sennheiser/HD_450BT_Wh/03_HD_450BT_Wh.jpg',
                  ],
                  description: 'Sennheiser HD 450BT Wireless Headphones, with active noise cancellation',
                  price: 89,
                  inStock: 31
              },
            ]
          },
        ],
        cart:{
            items: []
        },
    }
  },

  methods: {
    showCart: function(){
      this.productInfoIsActive = false;
      this.cartIsActive = !this.cartIsActive;
    },
    showProductInfo: function(){
      this.productInfoIsActive = !this.productInfoIsActive;
    },
  },

  computed: {
      cartTotal: function(){
          let total = 0;
          this.cart.items.forEach(function(item){
              total += item.quantity * item.product.price;
          });

          return total;
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