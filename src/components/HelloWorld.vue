<template>

  <div class="hello">
      
       
      <carrusel/>
    
    <b-container class="mt-4 bv-example-row">
  <b-row>
    <b-col style="font-size:1.5rem;">

      <h1 id="#mision">Misión</h1>
    <h3 style="text-align:justify;">Recuperar residuos de envases y empaques post consumo de nuestros asociados por medio de educación ambiental para integrarlos al ciclo del reciclaje, además de adoptar y fomentar desde temprana edad el cuidado y sustentabilidad del medio ambiente.</h3>
    </b-col>
    <b-col style="font-size:1.5rem;">
    <img
            
            width="560"
            height="560"
            src="https://cdn.pixabay.com/photo/2012/04/28/18/37/earth-43930_960_720.png"  >    
    </b-col>
    </b-row>
    <br><br>
    <a name="vision"/>
    <b-row>
    <b-col style="font-size:1.5rem;">
    <img
            
            width="560"
            height="560"
            src="https://cdn.pixabay.com/photo/2018/04/16/09/12/factory-3323978_960_720.png"  >    
    </b-col>

    <b-col style="font-size:1.5rem;">
      
      <h1>Visión</h1>
      <h3 style="text-align:justify;">
 Ser una organización líder en México para lograr la sustentabilidad de los envases y empaques y la correcta gestión de sus residuos post consumo, fomentando hábitos responsables de manejo y reciclaje en los ciudadanos y contribuir al desarrollo sustentable.
      </h3>
    </b-col>
  </b-row>
<br><br>

  <b-row class="mt-5">
    <b-col md="6">
       <b-card-group deck>
      <b-card img-height="400px" img-src="https://cdn.pixabay.com/photo/2013/04/01/21/48/can-99329_960_720.png" img-alt="Card image" img-top>
        <b-card-text>
          <b-button variant="success" size="lg">
             <router-link style="text-decoration: none;color: white!important" to="/About">Donar</router-link>
          </b-button>
        </b-card-text>
      </b-card>

      
    </b-card-group>
    </b-col>
    <b-col md="6">
       <b-card-group deck>
      <b-card img-height="400px" img-src="https://cdn.pixabay.com/photo/2018/08/07/17/19/clipboard-3590228_960_720.png" img-alt="Card image" img-top>
        <b-card-text>
          <b-button variant="success" size="lg">
             <router-link style="text-decoration: none;color: white!important" to="/status">Consultar Status de Donación</router-link>
          </b-button>
        </b-card-text>
      </b-card>

      
    </b-card-group>
    </b-col>
  </b-row>
  
 </b-container>
  
    
  </div>
</template>

<script>
import carrusel from '@/components/carrusel.vue'
//import navbarverde from '@/components/navbarverde.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    carrusel
    //navbarverde
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #1dd683 ;
}
.dany{
 background-color: #0ad178 !important;
}
</style>
