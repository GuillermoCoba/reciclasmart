<template>
  <div>
    
     <br><br><br>
    <b-container class="bv-example-row">
    
  <b-row class="mt-4">
    <b-col style="border: solid 3px" class="p-4">
        <h2>Datos Generales</h2>
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
          placeholder="Escriba Nombre"
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
          placeholder="Escriba la calle"
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
          placeholder="Escriba numero"
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
          placeholder="Escriba entidad"
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
          placeholder="Escriba CP"
          maxlength="5"
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
          placeholder="Escriba Alcaldia"
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
          placeholder="Escriba la colonia"
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
          placeholder="Escriba E-mail"
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
          type="text"
          required
          placeholder="Escriba Telefono"
          maxlength="10"
        ></b-form-input>


        
      </b-form-group>
         </b-col>
          <b-col md="6">
            <b-form-textarea
      id="textarea"
      
      v-model="form.material"
      placeholder="Describa el material que desea donar "
      rows="3"
      max-rows="4"
      required
    ></b-form-textarea>
            <!--
              <b-form-group id="input-group-3" label="Material a Donar" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.material"
          :options="material"
          required
        ></b-form-select>
          </b-form-group>

            -->
             
    
          </b-col>
            
        </b-row>
          
          <b-row>
           <b-col md="6">
             <b-form-group id="input-group-3" label="Cantidad a Donar" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.cantidad"
          :options="cantidad"
          required
        ></b-form-select>
          </b-form-group>
    
          </b-col>
        </b-row>
     
       
      

      <b-button class="mt-4" size="lg" type="submit" variant="primary">Enviar</b-button>
      
      
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
          cantidad:null
        },
        material: [{ text: 'Elija Material a Donar', value: null },'Alumnio','Vidrio','PET','PEBD','BOPP','PEAD'],
        cantidad: [{ text: 'Elija Cantidad a Donar', value: null },'10 KG','50 KG','100 KG','200 KG','1000 KG','>1000 KG'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
       
        db.collection("peticiones").add({
          nombre:this.form.nombre,
          calle:this.form.calle,
          numero:this.form.numero,
          entidad:this.form.entidad,
          cp:this.form.cp,
          alcaldia:this.form.alcaldia,
          colonia:this.form.colonia,
          email:this.form.email,
          telefono:this.form.telefono,
          peticion:'',
          recado:'',
          recogio:false,
          material:this.form.material,
          cantidad:this.form.cantidad
})
.then((docRef)=> {
    this.showAlert(docRef.id)
    this.form.nombre = ''
    this.form.calle = ''
    this.form.numero=''
    this.form.entidad='Ciudad de Mexico'
    this.form.cp = ''
    this.form.alcaldia = ''
    this.form.colonia = ''
    this.form.email = ''
    this.form.telefono = ''
    this.form.material =null
    this.form.cantidad = null
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