<template lang="">
    <div>
        <h1>{{msg}}</h1>
        <h2>Employee Vue</h2>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Address</th>
      <th scope="col">Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    </div>
</template>
<script>
export default {
    name: 'Employee',
    data() {
        return {
            result: {}
        }
    },
    created() {
        this.EmployeeLoad();

    },
    methods: {
        EmployeeLoad() {
            var page = '/api/v1/employee';
            axios.get(page)
                .then(
                    ({ data }) => {
                        console.log(data);
                        this.result = data;
                    }
                )
        }
    },

}
</script>
<style lang="">

</style>
