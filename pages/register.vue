<script lang="ts" setup>
const form = ref({
  email: "",
  username: "",
  password: "",
});

const isLoading = ref(false);
const router = useRouter();

async function handleFormSubmit() {
  try {
    isLoading.value = true;
    await useFetch("/api/auth/register", {
      method: "POST",
      body: form.value,
    });

    router.push({
      name: "login",
    });
  } catch (e: any) {
    console.log("Registration failed", e);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <section class="pt-16 flex justify-center items-center">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8 py-16">
      <!-- Page title -->
      <h2 class="text-2xl font-bold text-center mb-12">Create an account</h2>
      
      <!-- Registration form -->
      <form @submit.prevent="handleFormSubmit" class="flex flex-col gap-4">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-semibold text-neutral-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
            required
          />
        </div>

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
          :disabled="isLoading"
        >
          <span v-if="isLoading">Registering...</span>
          <span v-else>Sign Up</span>
        </button>
      </form>

      <!-- Login link -->
      <div class="mt-4 text-center">
        <p class="text-sm text-neutral-500">Already have an account? 
          <RouterLink to="/login" class="text-primary-500 hover:underline">Log in</RouterLink>
        </p>
      </div>
    </div>
  </section>
</template>

<style>
/* Custom styles, if necessary */
</style>
