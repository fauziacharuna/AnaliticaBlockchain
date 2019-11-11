var app = new Vue({
    el: '#vueform',
    data: {
      nomorSertifikat: '',
      jenisAset: '',
      daerahBanjir: '',
      bentukTanah: '',
      letakTanah: '',
      langitudeV: '',
      longitudeV: '',
      luasTanah: '',
      luasBangunan: '',
      lebarJalan: '',
      frontage: '',
      rcnTerdepresiasi: '',
      elevasi: '',
      alamatAset: '',
      gambarAsset: '',
      AJB: ''
    },
    methods: {
        unggah: function(e) {
            e.preventDefault();
            axios.post('http://localhost:8089/add', {
                legalitas: this.nomorSertifikat,
                jenisAset: this.jenisAset,
                alamatAset: this.alamatAset,
                luasTanah: this.luasTanah,
                luasBangunan: this.luasBangunan,
                bentukTanah: this.bentukTanah,
                lebarJalan: this.lebarJalan,
                frontage: this.frontage,
                letakTanah: this.letakTanah,
                elevasi: this.elevasi,
                daerahBanjir: this.daerahBanjir,
                RCNterdepresiasi: this.rcnTerdepresiasi,
                koordinat: {
                    long: this.longitudeV,
                    lat: this.langitudeV

                },
                gambarAset: this.gambarAsset,
                AJB: this.AJB
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error.respon);
              });
        }

    },
  })
var cardApp = new Vue({
  el: "#vuecard",
  data: {
    info: null
  },
  methods: {
    get: async function() {
      return axios
      .get('http://localhost:8089/get')
      .then(response => response.data);
    }
  },
  async created(){
    this.info = await this.get();
  }
})
var tableApp = new Vue({
  el: '#tableCardVue',
  info:{
    card: null
  },
  methods: {
    get: async function(){
      return axios
      .get('http://localhost:8089/get')
      .then(response => response.info);
    }
  }
})

