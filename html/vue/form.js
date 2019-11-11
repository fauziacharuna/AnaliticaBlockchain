
import * as VueGoogleMaps from "vue2-google-maps";
import Map from './map.vue'
var map = new Vue ({
  el:'#maps',
  render: h => (Map)
})
var app = new Vue({
    el: '#transactionform',
    data: {
      nomorSertifikat: '',
      jenisAset: '',
      daerahBanjir: '',
      bentukTanah: '',
      letakTanah: '',
      koordinat: ' ',
      luasTanah: '',
      luasBangunan: '',
      lebarJalan: '',
      frontage: '',
      rcnTerdepresiasi: '',
      elevasi: '',
      alamatAset: '',
      gambarAsset: '',
      // AJB: '',
      hubungan: '',
      jenisLegalitas: '',
      nama: '',
      telepon: '',
      tahun: '',
      tahunRenovasi: '',
      nilaiTanah: ''

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
                koordinat: this.koordinat,
                gambarAset: this.gambarAsset,
                hubungan: this.hubungan,
                jenisLegalitas: this.jenisLegalitas,
                nama: this.nama,
                telepon: this.telepon,
                tahun: this.tahun,
                tahunRenovasi: this.tahunRenovasi,
                nilaiTanah: this.nilaiTanah

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
    console.log(info)
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

