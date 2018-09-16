 <template>
<div class="submitted">
      <h1>{{message}}</h1>
      <button @click="newPost">Add new post</button>
      <img src='../../assets/afterSend.png'>
    </div>
</template>

<script>
export default {
  props: {
    message: String
  },
  methods: {
    newPost () {
      this.$store.dispatch('newPost')
    }
  }
}
</script>

<style scoped>
.submitted {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}
button {
  padding: 10px;
  outline: none;
  font-size: 25px;
  border-radius: 8px;
  background-color: rgba(255, 198, 190, 0.4);
  margin-right: 10px;
  padding-bottom: 20px;
  height: 60px;
  width: 170px;
}
 button:hover {
   transition: .5s linear;
   background-color: rgba(255, 250, 249, 0.8)
}

</style>
