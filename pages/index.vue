<template>
  <div>
    <nuxt-link :to="switchLocalePath('en')">Change to English</nuxt-link>
    <nuxt-link :to="switchLocalePath('fr')">Passer en Francais</nuxt-link>
    <p>here is the i18n string {{ $t('helloWorld') }}</p>
  </div>
</template>
