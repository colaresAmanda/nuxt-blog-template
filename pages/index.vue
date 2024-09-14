<template>
  <section class="grid grid-cols-12 gap-16">
    <!-- Main article area -->
    <article class="col-span-7 flex flex-col gap-4">
      <!-- Wrap the image with RouterLink to make it clickable -->
      <RouterLink to="/post/1" class="group">
        <img
          class="h-auto max-w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A well-organized competition scoreboard"
        />
      </RouterLink>
      <div class="flex flex-col gap-2">
        <!-- Category -->
        <p class="text-primary-500 text-sm font-bold">Management Tips</p>
        <!-- Article link with hover effect -->
        <RouterLink to="/post/2" class="group cursor-pointer">
          <h1
            class="font-bold text-2xl group-hover:text-primary-500 transition cursor-pointer"
          >
            How to Manage Scores Efficiently in Competitions
          </h1>
          <p class="group-hover:text-neutral-500 transition cursor-pointer">
            Learn the key strategies to keep your competition scores organized
            and up-to-date with minimal effort.
          </p>
        </RouterLink>
      </div>
    </article>

    <!-- Sidebar with additional articles -->
    <aside class="col-span-5 flex flex-col gap-8">
      <!-- Article 1 -->
      <article
        class="flex flex-col justify-between p-4 gap-4 hover:bg-neutral-100 rounded-sm transition cursor-pointer"
      >
        <RouterLink to="/post/3" class="group">
          <h2
            class="font-semibold hover:text-primary-500 transition cursor-pointer"
          >
            Top 5 Challenges in Organizing a National Competition
          </h2>
          <p class="text-primary-500 text-sm font-bold">Event Management</p>
        </RouterLink>
      </article>

      <!-- Article 2 with image -->
      <article
        class="flex gap-4 p-4 hover:bg-neutral-100 rounded-sm transition cursor-pointer"
      >
        <RouterLink to="/post/4" class="group flex justify-between">
          <div class="flex flex-col justify-between">
            <h3
              class="font-semibold text-sm hover:text-primary-500 transition cursor-pointer"
            >
              The Importance of Fair Play in Competitive Sports
            </h3>
            <p class="text-primary-500 text-sm font-bold">Ethics in Sports</p>
          </div>
          <!-- Make image clickable -->
          <img
            class="h-32 aspect-[3/4] object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            src="https://images.unsplash.com/photo-1604652716188-e226685e94ca?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A referee explaining fair play rules"
          />
        </RouterLink>
      </article>

      <!-- Article 3 with image -->
      <article
        class="flex gap-4 p-4 hover:bg-neutral-100 rounded-sm transition cursor-pointer"
      >
        <RouterLink to="/post/4" class="group flex justify-between">
          <div class="flex flex-col justify-between">
            <h3
              class="font-semibold text-sm hover:text-primary-500 transition cursor-pointer"
            >
              Maximizing Team Participation in Competitive Events
            </h3>
            <p class="text-primary-500 text-sm font-bold">Team Dynamics</p>
          </div>
          <!-- Make image clickable -->
          <img
            class="h-32 aspect-[3/4] object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A group of participants working together in a competition"
          />
        </RouterLink>
      </article>
    </aside>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'IndexPage',
  components: {
    RouterLink,
  },
  // Nuxt head method for adding meta tags
  head() {
    return {
      title:
        'Blog | ScoreSync - Gerenciador de competições',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Learn key strategies to efficiently manage competition scores and keep them organized with minimal effort. Improve your competition management skills now.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'competition management, score management, competition tips, event organization, efficient scoring system',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'How to Manage Scores Efficiently in Competitions | Management Tips',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Learn key strategies to efficiently manage competition scores and keep them organized with minimal effort. Improve your competition management skills now.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content:
            'How to Manage Scores Efficiently in Competitions | Management Tips',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Learn key strategies to efficiently manage competition scores and keep them organized with minimal effort. Improve your competition management skills now.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
    }
  },
})
</script>
