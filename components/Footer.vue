<template>
  <footer>
    <!-- Social media section -->
    <div class="flex items-center gap-16 border-b border-neutral-200 py-4">
      <p class="text-sm text-neutral-500 font-bold">Follow us</p>
      <!-- Social media icons with hover effects and links -->
      <div class="flex gap-4">
        <a href="https://www.instagram.com" target="_blank" class="group">
          <Icon name="carbon:logo-instagram" class="h-5 w-5 text-neutral-900 transition-colors duration-300 group-hover:text-primary-500 cursor-pointer" />
        </a>
        <a href="https://www.facebook.com" target="_blank" class="group">
          <Icon name="carbon:logo-facebook" class="h-5 w-5 text-neutral-900 transition-colors duration-300 group-hover:text-primary-500 cursor-pointer" />
        </a>
        <a href="https://www.twitter.com" target="_blank" class="group">
          <Icon name="carbon:logo-twitter" class="h-5 w-5 text-neutral-900 transition-colors duration-300 group-hover:text-primary-500 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" class="group">
          <Icon name="carbon:logo-linkedin" class="h-5 w-5 text-neutral-900 transition-colors duration-300 group-hover:text-primary-500 cursor-pointer" />
        </a>
      </div>
    </div>

    <!-- Navigation section -->
    <nav class="py-4">
      <ul class="flex justify-between items-center">
        <!-- Logo -->
        <li>
          <RouterLink to="/" class="rounded-full cursor-pointer">
            <img
              src="../public/logo.svg"
              alt="ScoreSync logo"
              class="h-10 transition-transform duration-300 hover:scale-105"
            />
          </RouterLink>
        </li>

        <!-- Footer links with hover and cursor effects -->
        <div class="flex gap-8 items-center">
          <li>
            <RouterLink to="/about" class="text-xs text-neutral-700 font-semibold hover:text-primary-500 transition-colors duration-300 cursor-pointer">
              O que é o ScoreSync?
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/pricing" class="text-xs text-neutral-700 font-semibold hover:text-primary-500 transition-colors duration-300 cursor-pointer">
              Preços do ScoreSync
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/blog" class="text-xs text-neutral-700 font-semibold hover:text-primary-500 transition-colors duration-300 cursor-pointer">
              Sobre o Blog
            </RouterLink>
          </li>
        </div>
      </ul>
    </nav>
  </footer>
</template>
