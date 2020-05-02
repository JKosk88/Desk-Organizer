<template>
  <div class="root text-center mt-3">
    <div class="image-container">
      <img src="../assets/person.png" alt="user icon" class="img-fluid"/>
    </div>
    <div v-for="(item, index) in currency_items" :key="`item-${index}`" class="currency-item">
      {{item.name}}
      <span>{{item.value}} zł</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'CurrencyComponent',
  data() {
    return {
      currency_items: [
        {
          name: 'EUR',
          value: null,
        },
        {
          name: 'GBP',
          value: null,
        },
        {
          name: 'USD',
          value: null,
        },
        {
          name: 'NOK',
          value: null,
        },
        {
          name: 'SEK',
          value: null,
        },
        {
          name: 'CHF',
          value: null,
        },
      ]
    };
  },
  mounted () {
    for(let key in this.currency_items) {
      axios.get(`http://api.nbp.pl/api/exchangerates/rates/a/${this.currency_items[key].name}/?format=json`)
      .then(response => this.currency_items[key].value = response.data.rates[0].mid.toFixed(2))
      .catch(err => console.log(err));
    }
  }
}
</script>

<style scoped>
.root {
  width: 20%;
}
.image-container {
  margin: 0 auto;
  max-width: 40%;
}
</style>
