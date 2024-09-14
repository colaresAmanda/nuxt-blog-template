<script lang="ts" setup>
definePageMeta({
  middleware: "guest",
});

const form = ref({
  username: "",
  password: "",
});

const isLoading = ref(false);  // Added isLoading state
const { signIn } = useAuth();
const router = useRouter();

async function handleLogin() {
  try {
    isLoading.value = true;  // Set loading state to true
    await signIn("credentials", form.value);
    router.push({ name: "index" });
  } catch (e) {
    console.error("Login failed", e);
  } finally {
    isLoading.value = false;  // Reset loading state
  }
}
</script>

<template>
  <section class="pt-16 flex justify-center items-center ">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8 py-16">
      <!-- Page title -->
      <h2 class="text-2xl font-bold text-center mb-12">Welcome back</h2>
      
      <!-- Login form -->
      <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
        <!-- Username -->
        <div>
          <label for="username" class="block text-sm font-semibold text-neutral-700 mb-2">Username</label>
          <input
            type="text"
            id="username"
            v-model="form.username"
            placeholder="Enter your username"
            class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
            required
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-semibold text-neutral-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            placeholder="Enter your password"
            class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
            required
          />
        </div>

        <!-- Submit button -->
        <button
          type="submit"
          class="w-full bg-primary-500 text-white py-3 rounded-full font-bold hover:bg-primary-600 transition duration-300 cursor-pointer"
          :disabled="isLoading"  <!-- Disable button when loading -->
        >
          <span v-if="isLoading">Logging in...</span>
          <span v-else>Log In</span>  <!-- Show appropriate button text -->
        </button>
      </form>

      <!-- Forgot password link -->
      <div class="mt-4 text-center">
        <RouterLink to="/forgot-password" class="text-sm text-primary-500 hover:underline">Forgot your password?</RouterLink>
      </div>

      <!-- Sign up link -->
      <div class="mt-4 text-center">
        <p class="text-sm text-neutral-500">Don't have an account? 
          <RouterLink to="/register" class="text-primary-500 hover:underline">Sign up</RouterLink>
        </p>
      </div>
    </div>
  </section>
</template>

<style>
/* Custom styles, if necessary */
</style>
