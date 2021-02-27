<template>
  <div>
      <b-container fluid style="margin-top:5%;"  class="bv-example-row">
        <b-row>
            <h1>Donaciones</h1>
        </b-row>
     <b-row>
         <b-table bordered striped hover :fields="fields" :items="items">
              <template v-slot:cell(folio)="data">
                  {{data.item.key}}
             </template>
             <template v-slot:cell(e-mail)="data">
                  {{data.item.email}}
             </template>
              <template   v-slot:cell(material)="data">
                 <b-button @click="mirar(data.item.material)" variant="info">Visualizar</b-button>
             </template>
             <template v-slot:cell(cantidad a donar)="data">
                  {{data.item.cantidad}}
             </template>
             <template v-slot:cell(status)="data">
                <div v-if=" data.item.peticion == '' || data.item.peticion == 'pendiente'">
                    Pendiente
                </div>
                <div v-if=" data.item.peticion == 'aceptado'">
                    Aceptada
                </div>
                <div v-if=" data.item.peticion == 'rechazado'">
                    Rechazada
                </div>
             </template>
              <template v-slot:cell(cstatus)="data">
                     <b-button variant="primary" @click="modificar(data.item)">Modificar</b-button>
             </template>
             <template v-slot:cell(eliminar)="data">
                     <b-button variant="danger" @click="borrar(data.item)">Borrar</b-button>
             </template>
             <template v-slot:cell(donativo)="data">
                     <div v-if="data.item.recogio == false">
                        No
                     </div>
                     <div v-if="data.item.recogio != false">
                        Si
                     </div>
             </template>
              <template v-slot:cell(donativor)="data">
                     
                        <b-button :disabled="data.item.peticion == '' || data.item.peticion == 'pendiente' || data.item.peticion == 'rechazado' " @click="modificar2(data.item)" variant="secondary">Modificar</b-button>
                     
                     
             </template>
         </b-table>
     </b-row>
     
    </b-container>
     <b-modal :hide-footer=true ref="my-modal" id="modal-1" title="STATUS">
         <b-form @submit="onSubmit" >
    

    

      <b-form-group id="input-group-4">
        <b-form-radio v-model="form.checked" name="some-radios" value="pendiente">Pendiente</b-form-radio>
        <b-form-radio v-model="form.checked" name="some-radios" value="aceptado">Aceptada</b-form-radio>
        <b-form-radio v-model="form.checked" name="some-radios" value="rechazado">Rechazada</b-form-radio>
      </b-form-group>
      <b-form-textarea
      id="textarea"
      
      v-model="form.recado"
      :placeholder="form.recado"
      rows="3"
      max-rows="4"
      
      
    ></b-form-textarea>
      <b-button class="mt-4"   type="submit" variant="primary">Modificar</b-button>
      
    </b-form>
  </b-modal>
   <b-modal :hide-footer=true ref="my-modal2" title="ELIMINAR">
         <b-form @submit="onSubmit2" >
             
             <h4>¿Seguro que desea eliminar la donacion?</h4>
             <br>
            <h4>Folio: {{llave}}</h4>


      <b-button class="mt-3" style="right:10px;" type="submit" variant="danger">Eliminar</b-button>
      
    </b-form>
  </b-modal>
   <b-modal  size="lg" id="modal-tall" scrollable :hide-footer=true ref="my-modal3" title="Material">
        
            <p  style="word-break: break-all;font-size:1.5rem" class="my-4" >  {{material}}</p>
          
        
  </b-modal>
  </div>
</template>

<script>
import {db} from '@/firebase'
  export default {
      name:'donaciones',
    data() {
      return {
          form: {
          recado:'',
          checked: ''
        },
          fields: ['folio', 'nombre', 'calle','numero','entidad','cp','alcaldia','colonia','e-mail','telefono',
          {key: 'material', label: 'Material a Donar' },
          {key: 'cantidad', label: 'Cantidad a Donar' },
          'status',
          {key: 'cstatus', label: 'Cambiar Status' },
          {key: 'donativo', label: 'Donativo Recolectado' },
          {key: 'donativor', label: 'Modificar Donativo Recolectado' }
          ,'eliminar'],
        items:[],
        status:'',
        llave:'',
        material:''
      }
    },
    created(){
       db.collection("peticiones")
       .onSnapshot((query)=>{
           this.items=[]
           query.forEach(doc => {
               var x= doc.data()
               x.key = doc.id
                this.items.push(x)
           });
       })
        
    },
    methods:{
      mirar(item){
        this.$refs['my-modal3'].show()
        this.material= item
      },
        onSubmit(evt) {
        evt.preventDefault()
        db.collection("peticiones").doc(this.llave).update({peticion:this.form.checked,recado:this.form.recado})
        .then(()=>{
            this.$refs['my-modal'].hide()
        })
      },
      onSubmit2(evt) {
        evt.preventDefault()
        db.collection("peticiones").doc(this.llave).delete()
        .then(()=>{
            this.$refs['my-modal2'].hide()
        })
      },
        modificar(item){
            
            if (item.peticion == '' || item.peticion =='pendiente') {
                this.status = 'pendiente'
               
            }
             if (item.peticion == 'aceptado') {
                this.status = 'aceptado'
               
            }
             if (item.peticion == 'rechazado') {
                this.status = 'rechazado'
               
            }
             this.form.checked=this.status 
                this.llave= item.key
                this.form.recado=item.recado
            this.$refs['my-modal'].show()
        },
        modificar2(item){
          db.collection("peticiones").doc(item.key).update({recogio: !item.recogio})
        },
        borrar(item){
             this.$refs['my-modal2'].show()
             this.llave = item.key
           
            
        }
    }
  }
</script>