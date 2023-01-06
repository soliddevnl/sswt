<template>
  <LoginPage/>
</template>

<script setup lang="ts">
import {createClient, provideClient} from "@urql/vue";
import LoginPage from "~/src/features/authentication/pages/LoginPage.vue";
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const client = createClient({
  url: 'http://localhost:3000/graphql',
  fetchOptions: () => {
    const token = 'auth_token'
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
});

provideClient(client);



</script>