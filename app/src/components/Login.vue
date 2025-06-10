<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="p-8 rounded shadow-md w-full max-w-sm">
            <div class="text-2xl font-bold mb-6 text-center">Login</div>
            <form @submit.prevent="login">
                <div class="mb-4">
                    <InputText v-model="email" type="email" placeholder="Email" class="w-full" />
                </div>
                <div class="mb-6">
                    <Password v-model="password" placeholder="Password" toggleMask inputClass="w-full" class="w-full" />
                </div>
                <Button label="Login" type="submit" class="w-full mb-2" :loading="loading" />
                <Button label="Register" class="w-full p-button-secondary" @click.prevent="goToRegister" />
                <p v-if="error" class="text-red-500 text-sm mt-4 text-center">{{ error }}</p>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const router = useRouter()

const login = async () => {
    error.value = ''
    loading.value = true
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        // Redirect or show success
    } catch (e) {
        error.value = e.message
    } finally {
        loading.value = false
    }
}

const goToRegister = () => {
    router.push({ name: 'Register' })
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
