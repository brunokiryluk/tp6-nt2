export default {
  name: "src-componentes-formulario",
  components: {},
  props: [],
  data() {
    return {
      url: 'https://60a163f0d2855b00173b20b0.mockapi.io/api/v1/users',
      formData: this.getInicialData(),
      formState: {},
      nombreLengthMin: 3,
      nombreLengthMax: 15,
      edadMin: 18,
      edadMax: 120,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getInicialData() {
      return {
        nombre: "",
        edad: "",
        email: "",
      };
    },
    async postUsersAxios(user) {
      try {
        let res = await this.axios.post(this.url, user, {'content-type':'application/json'});
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    enviar() {
      //SPREAD Operator
      console.log({ ...this.formData });
      this.postUsersAxios(this.formData)
      //Borro la información despues de enviarla
      this.formData = this.getInicialData();
      this.formState._reset();
    },
  },
};
