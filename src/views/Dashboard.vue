 <!-- <script setup>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import SiteBar from "../components/SideBar/SiteBar.vue";
import MainLayout from "../components/main/MainLayout.vue";
</script>

<template>
  <Header />
  <SiteBar />

  <MainLayout>
    <router-view></router-view>
  </MainLayout>
  <Footer />
</template>
<style></style> 
 -->
 <template>

  <Header/>
  
  <Sidebar/>
  
  <main-layout>
     <router-view></router-view>
  </main-layout>
  
  </template>
  
  <script setup>
  import Header from '../components/Header/Header.vue';
  import Sidebar from '../components/SideBar/SideBar.vue';
  import MainLayout from '../components/Main/MainLayout.vue'
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>