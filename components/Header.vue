<template>
  <header class="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
    <nav class="py-4">
      <ul class="flex justify-between items-center">
        <!-- Logo with RouterLink -->
        <li>
          <RouterLink to="/" class="rounded-full cursor-pointer">
            <img src="../public/logo.svg" alt="ScoreSync logo" class="h-10 transition-transform duration-300 hover:scale-105" />
          </RouterLink>
        </li>

        <!-- Call to action button with hover and transition effects -->
        <li>
          <a
            href="https://colaresamanda.github.io/score-sync-landing-page/"
            target="_blank"
            class="text-sm font-bold bg-primary-500 px-6 py-3 text-neutral-50 rounded-full transition-transform duration-300 hover:bg-primary-600 hover:scale-105 cursor-pointer"
          >
            Testar o ScoreSync
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
