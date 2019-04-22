<template>
  <div>
      <h1>Products</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Product</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>

                <tr v-for="product in products" :key="product._id">
                  <td>{{ product.title }}</td>
                  <td>{{ product.body }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: product._id }}" class="btn btn-primary">Edit</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deletePost(product._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          products: [{
            _id: 1,
            title: 'Mehmet',
            body: 'Description'
          }]
        }
      },
      created() {
      let uri = 'http://localhost:4000/posts';
      this.axios.get(uri).then(response => {
        this.products = response.data;
      });
    },
    methods: {
      deletePost(id)
      {
        let uri = `http://localhost:4000/posts/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.posts.splice(this.posts.indexOf(id), 1);
        });
      }
    }
  }
</script>