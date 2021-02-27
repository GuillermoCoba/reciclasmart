<template>
   <div>
  <b-navbar  fixed="top" toggleable="lg" class="dany" type="dark" :variant="diseño">
    <b-navbar-brand href="#">RECICLASMART</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" >
          <router-link style="color: white!important" to="/">Inicio</router-link>
        </b-nav-item>
        <b-nav-item href="#" >
          <router-link style="color: white!important" to="/About">Donar</router-link>
        </b-nav-item>
        
         <b-nav-item href="#" >
          <router-link style="color: white!important" to="/status">Consultar Status</router-link>
        </b-nav-item>
        <b-nav-item href="#" >
          <router-link v-if="diseño == 'dark'" style="color: white!important" to="/donaciones">Donaciones</router-link>
        </b-nav-item>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Admin</em>
          </template>
         <b-dropdown-item  v-if="diseño != 'dark'" v-b-modal.modal-1>Iniciar Sesion</b-dropdown-item>
         <b-dropdown-item  v-if="diseño == 'dark'" @click="diseño = 'success',form.usuario='',form.pass='',$router.push('/'),cerrar()">Cerrar Sesion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

    <b-modal v-if="diseño != 'dark'" :hide-footer=true   id="modal-1" title="Administrador">
       <b-form @submit="onSubmit"  >
      <b-form-group
        id="input-group-1"
        label="Usuario"
        label-for="input-1"
       
      >
        <b-form-input
          id="input-1"
          v-model="form.usuario"
          type="text"
          required
          placeholder="Escribe Usuario"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.pass"
          type="password"
          required
          placeholder="Escribe Contraseña"
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Enviar</b-button>
     
    </b-form>
     
  </b-modal>
</div>
</template>

<script>
  export default {
      created(){
        this.comprobar()
      },
    data() {
      return {
        form: {
         usuario:'',
         pass:''
        },
        usuario:'admin',
        pass:'123456',
        show: true,
        diseño:''
      }
    },
    methods: {
     
      onSubmit(evt) {
        evt.preventDefault()
        if (this.form.usuario == this.usuario && this.form.pass == this.pass) {
          this.diseño='dark'
          localStorage.setItem('user', 'ok');
          this.comprobar()
        }else{
          alert('DATOS INCORRECTOS')
        }
      },
      comprobar(){
         var user = localStorage.getItem('user');
          
        if (user == 'ok') {
            this.diseño = 'dark'
         } else {
            this.diseño = 'success'
         }
      },
      cerrar(){
        localStorage.setItem('user', 'null')
       
        this.comprobar()
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
      computed:{
       
      },
      watch: {
    // whenever question changes, this function will run
   
  }
  }
</script>

<style>
 

</style>s