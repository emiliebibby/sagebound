<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="p-8 rounded shadow-md w-full max-w-sm">
            <div class="text-2xl font-bold mb-6 text-center">Reset Password</div>
            <form @submit.prevent="resetPassword">
                <div class="mb-4">
                    <InputText v-model="email" type="email" placeholder="Email" class="w-full" />
                </div>
                <div class="mb-4">
                    <Password v-model="password" placeholder="Password" toggleMask inputClass="w-full" class="w-full" />
                </div>
                <Button label="Send Reset Email" type="submit" class="w-full" :loading="loading" />
                <p v-if="error" class="text-red-500 text-sm mt-4 text-center">{{ error }}</p>
                <p v-if="success" class="text-green-500 text-sm mt-4 text-center">{{ success }}</p>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Password from 'primevue/password'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase'

const email = ref('')
const password = ref('')
const error = ref('')
const success = ref('')
const loading = ref(false)

const resetPassword = async () => {
    error.value = ''
    success.value = ''
    loading.value = true
    try {
        await sendPasswordResetEmail(auth, email.value)
        success.value = 'Password reset email sent!'
        email.value = ''
    } catch (e) {
        error.value = e.message
    } finally {
        loading.value = false
    }
}
</script>

<style scoped></style>
