<script lang="ts">
import { store } from "./store"
import { supabase } from "./supabase"
import Auth from "./components/Auth.vue"
import Profile from "./components/Profile.vue"

export default {
  components: {
    Auth,
    Profile,
  },

  setup() {
    const authUser = supabase.auth.user();

    if (authUser) {
      store.user = authUser;
    }

    supabase.auth.onAuthStateChange((_, session) => {
      store.user = session?.user ?? null
    })

    return {
      store,
    }
  },
}
</script>

<template>
  <div class="container">
    <Profile v-if="store.user" />
    <Auth v-else />
  </div>
</template>
