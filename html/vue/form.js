Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBj0cBWFJNW7rt7ra1cvtZBPtvwRur6byU',
    libraries: 'places'
  },
});
document.addEventListener('DOMContentLoaded', function() {
  Vue.component('google-map', VueGoogleMaps.Map);
  Vue.component('google-marker', VueGoogleMaps.Marker);
  new Vue({
    el: '#transactionform',
    data: {
      center: {
        lat: 10.0,
        lng: 10.0
      },
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
      latLng: {
        lat: 10.0,
        lng: 10.0
      },
      hubungan: '',
      jenisLegalitas: '',
      nama: '',
      telepon: '',
      tahun: '',
      tahunRenovasi: '',
      nilaiTanah: '',
      place: null,
      description: '',
    },
    methods: {
        mark: function(titik) {
          this.latLng = {
            lat: titik.latLng.lat(),
            lng: titik.latLng.lng()
          }
          console.log(this.latLng);
        },
        setDescription(description) {
          this.description = description;
        },
        setPlace(place) {
          this.place = place;
          this.center = {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          };
          this.latLng = {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        },
        usePlace() {
          if (this.place) {
            this.latLng = {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng(),
            }
            this.place = null;
          }
        },
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
                  lat: this.latLng.lat,
                  long: this.latLng.lng
                },
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
  });
  new Vue({
    el: '#appraisal',
    data: {
      center: {
        lat: 10.0,
        lng: 10.0
      },
      nomorSertifikat: '',
      jenisAset: '',
      daerahBanjir: '',
      bentukTanah: '',
      letakTanah: '',
      luasTanah: '',
      luasBangunan: '',
      lebarJalan: '',
      frontage: '',
      rcnTerdepresiasi: '',
      elevasi: '',
      alamatAset: '',
      gambarAsset: '',
      latLng: {
        lat: 10.0,
        lng: 10.0
      },
      jenisLegalitas: '',
      nilaiTanah: '',
      adjustment: {
        "time": 0,
        "landDocument": 0,
        "landArea": 0,
        "location": 0,
        "soilForm": 0,
        "frontage": 0,
        "lebarJalan": 0,
        "bentukTanah": 0
      },
      pembobotan: 0,
      place: null,
      description: '',
    },
    methods: {
        mark: function(titik) {
          this.latLng = {
            lat: titik.latLng.lat(),
            lng: titik.latLng.lng()
          }
          console.log(this.latLng);
        },
        setDescription(description) {
          this.description = description;
        },
        setPlace(place) {
          this.place = place;
          this.center = {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          };
          this.latLng = {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        },
        usePlace() {
          if (this.place) {
            this.latLng = {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng(),
            }
            this.place = null;
          }
        },
        unggah: function(e) {
            e.preventDefault();
            axios.post('http://localhost:8089/appraisal', {
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
                  lat: this.latLng.lat,
                  long: this.latLng.lng
                },
                jenisLegalitas: this.jenisLegalitas,
                nilaiTanah: this.nilaiTanah,
                adjustment: this.adjustment,
                pembobotan: this.pembobotan
              })
              .then(function (response) {
                console.log(response)
              })
              .catch(function (error) {
                console.log(error.respon);
              });
        },
        findPembanding: function(e) {
          e.preventDefault();
          axios.get('http://localhost:8089/pembanding?lat='+this.latLng.lat+'&long='+this.latLng.lon)
          .then(res => {
            console.log(res);
            window.location = "#tab_3"
          })
        }
    },
  });
});
// var cardApp = new Vue({
//   el: "#vuecard",
//   data: {
//     info: null
//   },
//   methods: {
//     get: async function() {
//       return axios
//       .get('http://localhost:8089/get')
//       .then(response => response.data);
//     }
//   },
//   async created(){
//     this.info = await this.get();
//     console.log(info)
//   }
// })
// var tableApp = new Vue({
//   el: '#tableCardVue',
//   info:{
//     card: null
//   },
//   methods: {
//     get: async function(){
//       return axios
//       .get('http://localhost:8089/get')
//       .then(response => response.info);
//     }
//   }
// })

