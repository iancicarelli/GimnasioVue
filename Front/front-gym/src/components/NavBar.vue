<template>
    <v-layout class="overflow-visible" style="height: 56px;">
      <v-bottom-navigation v-model="value" color="teal" grow>
        
        <v-btn to="/home">
          <House />
          Inicio
        </v-btn>
  
       
        <v-btn to="/schedule">
          <Calendar />
          Horarios
        </v-btn>
  
       
        <v-btn to="/account">
          <User />
          Cuenta
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </template>
  
  <script>
  import { House, Calendar, User } from 'lucide-vue-next'; 
  
  export default {
    data() {
      return {
        value: 1,
      };
    },
    components: {
      House, 
      Calendar, 
      User, 
    },
  };
  </script>
  