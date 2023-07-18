<script setup>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import SideBar from "../components/SideBar/SideBar.vue";
import MainLayout from "../components/main/MainLayout.vue";
</script>
<template>
  <Header />
  <SideBar />
  <MainLayout>
    <router-view></router-view>
  </MainLayout>
  <Footer />
</template>
<style></style>
