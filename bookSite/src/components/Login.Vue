<template>
    <div class="login">
        <input type="text" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <button>Войти</button>
        <router-link to="Registration">Создать новый аккаунт</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login(){
            
        }
    },
}
</script>

<style>

</style>