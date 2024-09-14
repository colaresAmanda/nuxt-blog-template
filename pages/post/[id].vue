<template>
  <section class="grid grid-cols-12 gap-16">
    <!-- Main content area -->
    <article class="col-span-8 flex flex-col gap-8">
      <!-- Article details and content -->
      <div class="flex flex-col gap-2">
        <!-- Header with category and date -->
        <div class="flex gap-2 text-sm">
          <p class="text-primary-500 font-bold hover:text-primary-700 transition">
            <NuxtLink to="/category/management-tips">Management Tips</NuxtLink>
          </p>
          <span class="text-sm text-neutral-500">-</span>
          <p class="text-sm text-neutral-500">10 de setembro de 2024</p>
        </div>
        <!-- Article title -->
        <h1 class="font-bold text-2xl">
          How to Manage Scores Efficiently in Competitions
        </h1>
        <!-- Article summary -->
        <p>
          Learn the key strategies to keep your competition scores organized and
          up-to-date with minimal effort.
        </p>
      </div>
      <!-- Author Info -->
      <div class="flex gap-2 items-center">
        <img
          class="h-12 w-12 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1604652716188-e226685e94ca?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="John Doe - Author Profile Picture"
        />
        <div class="text-sm">
          <h3 class="font-bold">
            <NuxtLink to="/author/john-doe" class="hover:text-primary-500 transition">John Doe</NuxtLink>
          </h3>
          <p class="text-neutral-500">
            Seasoned professional specializing in competition management
          </p>
        </div>
      </div>
      <!-- Article image with alt text -->
      <img
        class="h-auto max-w-full"
        src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Strategies to Manage Competition Scores Efficiently"
      />
      <div class="flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, harum
          eligendi! Qui soluta perferendis enim. Temporibus, sapiente doloribus.
          Quas ab vel et illum voluptas esse sequi in ipsum, sunt laborum?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt sit
          architecto ullam iste repellat voluptatum quam aut alias nisi eum
          cumque porro assumenda hic, libero placeat officia excepturi
          aspernatur sequi.
        </p>

        <h2 class="text-2xl font-bold">Subtitle</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          voluptate aperiam labore voluptatum rerum repellendus amet nulla
          voluptates eligendi sint. Quia optio odit illo saepe inventore id
          blanditiis accusantium modi.
        </p>
      </div>
    </article>

    <!-- Sidebar area -->
    <aside class="col-span-4 flex flex-col gap-8">
      <!-- Sharing options -->
      <div
        class="flex items-center justify-between border-b border-neutral-200 py-4"
      >
        <p class="text-sm text-neutral-500 font-bold">Share</p>
        <!-- Social media or sharing icons -->
        <div class="flex gap-4">
          <a href="#" class="group">
            <Icon name="carbon:logo-instagram" class="h-6 w-6 text-neutral-500 group-hover:text-primary-500 transition" />
          </a>
          <a href="#" class="group">
            <Icon name="carbon:logo-facebook" class="h-6 w-6 text-neutral-500 group-hover:text-primary-500 transition" />
          </a>
          <a href="#" class="group">
            <Icon name="carbon:logo-twitter" class="h-6 w-6 text-neutral-500 group-hover:text-primary-500 transition" />
          </a>
          <a href="#" class="group">
            <Icon name="carbon:logo-linkedin" class="h-6 w-6 text-neutral-500 group-hover:text-primary-500 transition" />
          </a>
        </div>
      </div>
    </aside>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ArticlePage',
  head() {
    return {
      title: 'How to Manage Scores Efficiently in Competitions | Management Tips',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Learn the key strategies to keep your competition scores organized and up-to-date with minimal effort.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'competition management, score management, competition tips, event organization, efficient scoring system'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'How to Manage Scores Efficiently in Competitions'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Learn key strategies for efficient competition score management.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'How to Manage Scores Efficiently in Competitions'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Learn key strategies for efficient competition score management.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
    }
  }
})
</script>
