<template>
  <div id="app">
    <h1 v-bind:class=[className.title1,className.title2]>{{ title }}</h1>
    <input type="text" name="newItem" v-model='newItem' @keyup.enter='addItem'>
    <ul v-bind:class='className.list'>
      <li v-for='item in items' v-text='item.label' :class='{finished : item.isFinished}' @click='toggelFinished(item)'></li>
    </ul>
  </div>
</template>

<script>
import Store from './store';
export default {
  data () {
    return {
      title : 'This is a todo list',
      items : Store.get('todo_list'),
      newItem:'',
      className: {
        title1 : 'title1',
        title2 : 'title2',
        list : 'list'
      }
    }
  },
  watch : {
    items : {
      handler : function (items) {
        Store.save('todo_list', items);
      },
      deep : true
    }
  },
  methods : {
    toggelFinished : function (item) {
      item.isFinished = !item.isFinished;
    },
    addItem : function () {
      var newItem = {
        label : this.newItem,
        isFinished : false
      };
      this.items.push(newItem);
      this.newItem = '';
    }
  }
}
</script>

<style>
*{
  user-select: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finished {
  text-decoration: line-through;
}
</style>
