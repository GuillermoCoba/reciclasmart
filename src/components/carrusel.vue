<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="6000"
      controls
      indicators
      background="#ababab"
        

      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
   

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="w-100 d-block"
            width="1180"
            height="857"
            src="https://cdn.pixabay.com/photo/2018/08/07/04/21/alternative-3589051_960_720.png"
            alt="image slot"
            style="background: rgba(0, 0, 0, 0.8); filter:brightness(0.5);"
          >
        </template>
        <h2 style="position:absolute; bottom: 300px; font-weight: bold; color:white;">El reciclaje es un proceso cuyo objetivo es convertir desechos en nuevos productos o en materia prima para su posterior utilización.

</h2>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="w-100 d-block"
             width="1180"
            height="857"
            src="https://cdn.pixabay.com/photo/2017/08/06/01/56/bulb-2587637_960_720.jpg"
            alt="image slot"
            style="background: rgba(0, 0, 0, 0.8); filter:brightness(0.5);"

          >
        </template>
         <h2 style="position:absolute; bottom: 300px; font-weight: bold; color:white;">Gracias al reciclaje se previene el desuso de materiales potencialmente útiles, se reduce el consumo de nueva materia prima, además de reducir el uso de energía, la contaminación del aire (a través de la incineración) y del agua (a través de los vertederos), así como también disminuir las emisiones de gases de efecto invernadero en comparación con la producción de plásticos.

</h2>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="w-100 d-block"
             width="1180"
            height="857"
            src="https://cdn.pixabay.com/photo/2019/07/23/17/19/trash-4358272_960_720.jpg"
            alt="image slot"
             style="background: rgba(0, 0, 0, 0.8); filter:brightness(0.5);"
          >
        </template>
         <h2 style="position:absolute; bottom: 300px; font-weight: bold; color:white;">El reciclaje es un componente clave en la reducción de desechos contemporáneos y es el tercer componente de las 3R («Reducir, Reutilizar y Reciclar»).

</h2>
      </b-carousel-slide>


      
    </b-carousel>

  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
       onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<style>

</style>