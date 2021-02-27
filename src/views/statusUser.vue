<template>
  <div>
    
     
    <b-container class="bv-example-row">
    
  <b-row class="mt-4">
    <b-col style="border: solid 3px;margin-top:70px;" class="p-4">
        <h2>Ingrese Folio de Seguimiento </h2>
       <b-form @submit="onSubmit"  v-if="show">
        <b-row>
           <b-col md="12">
            <b-form-group
        id="input-group-1"
        label="Folio:"
        label-for="input-1"
    
        
      >
        <b-form-input
          id="input-1"
          v-model="folio"
          type="text"
          required
          placeholder="Escriba Folio"
        ></b-form-input>
      </b-form-group>
         </b-col>
         
     
        </b-row>
       
          
     
       
      

      <b-button class="mr-4" size="lg" type="submit" variant="primary">Enviar</b-button>
      
      
    </b-form>
    <b-form @submit="onSubmit"  v-if="show">
        <b-row>
           <b-col md="6">
            <b-form-group
        id="input-group-1"
        label="Nombre:"
        label-for="input-1"
    
        
      >
        <b-form-input
          id="input-1"
          v-model="form.nombre"
          type="text"
          required
          
          disabled
        ></b-form-input>
      </b-form-group>
         </b-col>
         
     
         <b-col md="6">
            <b-form-group
        id="input-group-1"
        label="Calle:"
        label-for="input-1"
    
        
      >
        <b-form-input
          id="input-1"
          v-model="form.calle"
          type="text"
          required
          disabled
        ></b-form-input>
      </b-form-group>
         </b-col>
        </b-row>

  <b-row>
           <b-col md="6">
            <b-form-group
        id="input-group-1"
        label="Número:"
        label-for="input-1"
    
        
      >
        <b-form-input
          id="input-1"
          v-model="form.numero"
          type="text"
          required
          
          disabled
        ></b-form-input>
      </b-form-group>
         </b-col>
         
     
         <b-col md="6">
            <b-form-group
        id="input-group-1"
        label="Entidad:"
        label-for="input-1"
    
        
      >
        <b-form-input
          id="input-1"
          v-model="form.entidad"
          type="text"
          required
          disabled
        ></b-form-input>
      </b-form-group>
         </b-col>
        </b-row>

  <b-row>
           <b-col md="6">
            <b-form-group
        id="input-group-1"
        label="CP:"
        label-for="input-1"
    
        
      >
        <b-form-input
          id="input-1"
          v-model="form.cp"
          type="text"
          required
          
          disabled
        ></b-form-input>
      </b-form-group>
         </b-col>
         
     
         <b-col md="6">
            <b-form-group
        id="input-group-1"
        label="Alcaldia:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.alcaldia"
          type="text"
          required
          disabled
        ></b-form-input>
      </b-form-group>
         </b-col>
        </b-row>


        <b-row>
         <b-col md="6">
            <b-form-group
        id="input-group-1"
        label="Colonia:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.colonia"
          type="text"
          required
          disabled
        ></b-form-input>
      </b-form-group>
         </b-col>



           <b-col md="6">
            <b-form-group
        id="input-group-1"
        label="E-mail:"
        label-for="input-1"
    
        
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
         disabled
        ></b-form-input>
      </b-form-group>
         </b-col>
         
     
        
        </b-row>
        <b-row>
           <b-col md="6">
            <b-form-group
        id="input-group-1"
        label="Telefono:"
        label-for="input-1"
    
        
      >
        <b-form-input
          id="input-1"
          v-model="form.telefono"
          type="number"
          required
          disabled
        ></b-form-input>
      </b-form-group>
         </b-col>
            <b-col md="6">
<b-form-textarea
      id="textarea"
      
      v-model="form.material"
      placeholder="Material "
      rows="3"
      max-rows="4"
      disabled
    ></b-form-textarea>
              <!--

 <b-form-group
        id="input-group-1"
        label="Material:"
        label-for="input-1"
    
        
      >
        <b-form-input
          id="input-1"
          v-model="form.material"
          type="text"
          required
          disabled
        ></b-form-input>
      </b-form-group>
              -->
           


         </b-col>
           <b-col md="6">
            <b-form-group
        id="input-group-1"
        label="Cantidad:"
        label-for="input-1"
    
        
      >
        <b-form-input
          id="input-1"
          v-model="form.cantidad"
          type="text"
          required
          disabled
        ></b-form-input>
      </b-form-group>
         </b-col>
        </b-row>
          
     
        <b-alert class="mt-4" :variant="color" show>{{mensaje}}</b-alert>
        <b-alert class="mt-4" :variant="color" show>{{form.recado}}</b-alert>
      

     
      
      
    </b-form>
    </b-col>
 
  </b-row>
</b-container>
   
   
  </div>
</template>

<script>
import {db} from '@/firebase'
  export default {
    data() {
      return {
        form: {
           nombre:'',
          calle:'',
          numero:'',
          entidad:'Ciudad de Mexico',
          cp:'',
          alcaldia:'',
          colonia:'',
          email: '',
          telefono:'',
          material:null,
          cantidad:null,
          recado:'-'
        },
        folio:'',
        color:'info',
        mensaje:'-',
        material: [{ text: 'Elija Material a Donar', value: null },'Alumnio','Vidrio','PET','PEBD','BOPP','PEAD'],
        cantidad: [{ text: 'Elija Cantidad a Donar', value: null },'10 KG','50 KG','100 KG','200 KG','1000 KG','>1000 KG'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
    this.form.nombre = ''
    this.form.calle =''
    this.form.numero =''
    this.form.entidad =''
    this.form.cp =''
    this.form.alcaldia =''
    this.form.colonia =''
    this.form.email = ''
    this.form.telefono = ''
    this.form.material =''
    this.form.cantidad = ''
    this.form.recado = ''
     this.color= 'info'
     this.mensaje= '-'
        evt.preventDefault()
       
       db.collection("peticiones").doc(this.folio).get()
.then((docRef)=> {
    //console.log(docRef.data())
    
    this.form.nombre = docRef.data().nombre
    this.form.calle = docRef.data().calle
    this.form.numero = docRef.data().numero
    this.form.entidad = docRef.data().entidad
    this.form.cp = docRef.data().cp
    this.form.alcaldia = docRef.data().alcaldia
    this.form.colonia = docRef.data().colonia
    this.form.email = docRef.data().email
    this.form.telefono = docRef.data().telefono
    this.form.material =docRef.data().material
    this.form.cantidad = docRef.data().cantidad
     this.form.recado = docRef.data().recado
    if (docRef.data().peticion== "" || docRef.data().peticion== "pendiente" ) {
        this.mensaje= 'Peticion Pendiente'
        this.color= 'warning'
    }
    if (docRef.data().peticion== "aceptado") {
        this.mensaje= 'Peticion Aceptada'
        this.color= 'success'
    }
    if (docRef.data().peticion== "rechazado") {
        this.mensaje= 'Peticion Rechazada'
        this.color= 'danger'
    }
})
.catch(()=>{
  alert('Folio No Valido');
})


      },
      showAlert(folio) {
                // Use sweetalert2
                this.$swal.fire(
       'Folio de Seguimiento Unico:',
       folio,
      'success'
)
            }
    },
    components:{
      
    }
  }
</script>

<style >
  
</style>