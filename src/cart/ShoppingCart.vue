<template>
  <div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th class="robot-title">Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td class="robot-title">{{robot.head.title}}</td>
            <td class="cost">{{robot.cost | currency('eur')}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <h2 class="saleItems">You saved money on these robots:</h2>
      <table>
        <thead>
          <tr>
            <th class="robot-title">Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cartSaleItems" :key="index">
            <td class="robot-title">{{robot.head.title}}</td>
            <td class="cost">{{robot.cost | currency('eur')}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// It's shared globally in main.js
// import currencyFilter from "../shared/currency-filter";

export default {
  name: "Cart",
  // It's shared globally in main.js
  // filters: {
  //   currency: currencyFilter
  // },
  computed: {
    cart() {
      // Get data from VUEX Store
      return this.$store.state.robots.cart;
    },
    cartSaleItems() {
      return this.$store.getters["robots/cartSaleItems"];
    }
  }
};
</script>

<style scoped>
td,
th {
  padding: 5px;
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}
.saleItems {
  margin-top: 50px;
  font-size: 19px;
  color: red;
}
</style>