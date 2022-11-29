<template>
  <div class="bg-1">
    <div class="dark:text-white flex font-sans">
      <div class="flex-none w-48 h-72 relative">
        <img
          src="https://netflux-bus.oss-cn-beijing.aliyuncs.com/resources/sku/netflix_product.jpg"
          alt=""
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <form class="flex-auto p-6">
        <div class="flex flex-wrap">
          <h1 class="flex-auto text-xl font-semibold">
            {{ product.title }}
          </h1>
          <div class="text-xl text-primary font-semibold">
            ¥{{ product.default_price }}
          </div>
          <div class="w-full flex-none text-sm font-medium mt-2">
            可长期续费不换号、不限观看区域
          </div>
        </div>
        <div
          class="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200"
        >
          <div
            v-for="(items, key) in product.sku"
            :key="key"
            class="space-x-2 flex text-sm"
          >
            <label v-for="item in items" :key="item.id">
              <input
                class="sr-only peer"
                name="size"
                type="radio"
                :value="item.id"
                v-model="product.default_price"
                checked
              />
              <div
                class="w-16 h-9 rounded-lg flex items-center justify-center peer-checked:font-semibold peer-checked:bg-gray-900 peer-checked:text-white"
              >
                {{ item.title }}
              </div>
            </label>
          </div>
        </div>
        <div class="flex space-x-4 mb-6 text-sm font-medium">
          <div class="flex-auto flex space-x-4">
            <button
              class="h-10 px-6 font-semibold rounded-md text-white bg-primary"
              @click="joinTeam"
            >
              {{ $t('buy') }}
            </button>
          </div>
        </div>
        <p class="text-sm text-gray-700">Team no: {{ teamId }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    spuId: {
      type: Number,
      required: true,
    },
    teamId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    product: {},
  }),
  async fetch() {
    const result = await this.$axios.$get(`/api/product/spu/${this.spuId}`)
    if (result.code == 20000) {
      this.product = result.data
    } else {
      console.log(this.result)
      this.$message.error(result.error)
    }
  },
  methods: {
    async joinTeam(spuId) {
      const result = await this.$axios.$get(`/api/team/join/${teamId}`)
      console.log("result",result)
    },
  },
}
</script>
