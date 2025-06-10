<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="p-8 bg-white rounded shadow-md w-full max-w-sm">
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
                <Button label="Register" type="submit" class="w-full" :loading="loading" />
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

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const success = ref('')
const loading = ref(false)

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
    } catch (e) {
        error.value = e.message
    } finally {
        loading.value = false
    }
}
</script>

<style scoped></style>
