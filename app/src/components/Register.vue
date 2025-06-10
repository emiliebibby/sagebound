<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="p-8 rounded shadow-md w-full max-w-sm">
            <div class="text-2xl font-bold mb-6 text-center">Register</div>
            <form @submit.prevent="register">
                <div class="mb-4">
                    <InputText v-model="email" type="email" placeholder="Email" class="w-full" />
                </div>
                <div class="mb-4">
                    <Password v-model="password" placeholder="Password" toggleMask inputClass="w-full" class="w-full" />
                </div>
                <div class="mb-6">
                    <Password v-model="confirmPassword" placeholder="Confirm Password" toggleMask inputClass="w-full" class="w-full" />
                </div>
                <Button label="Register" type="submit" class="w-full mb-2" :loading="loading" />
                <Button label="Back to Login" class="w-full p-button-secondary" @click.prevent="goToLogin" />
                <p v-if="error" class="text-red-500 text-sm mt-4 text-center">{{ error }}</p>
                <p v-if="success" class="text-green-500 text-sm mt-4 text-center">{{ success }}</p>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const success = ref('')
const loading = ref(false)
const router = useRouter()

const register = async () => {
    error.value = ''
    success.value = ''
    if (password.value !== confirmPassword.value) {
        error.value = 'Passwords do not match.'
        return
    }
    loading.value = true
    try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        success.value = 'Registration successful! You can now log in.'
        email.value = ''
        password.value = ''
        confirmPassword.value = ''
        router.push({ name: 'Home' }) // Redirect to home after successful registration
    } catch (e) {
        error.value = e.message
    } finally {
        loading.value = false
    }
}

const goToLogin = () => {
    router.push({ name: 'Login' })
}
</script>

<style scoped></style>
