
// Vue.component('map-picker', {
//   template: '<div class="latlng-picker"><div class="latlng-picker__map"></div><input type="text" class="latlng-picker__autocomplete" ref="input"></div>',
//   props: {
//     latitude: {
//       type: Number,
//       default: 55.01657628017477
//     },
//     longitude: {
//       type: Number,
//       default: -7.309233337402361
//     },
//     zoom: {
//       type: Number,
//       default: 12
//     }
//   },
//   data(){
//     return {
//       lat: this.latitude,
//       lng: this.longitude,
//     }
//   },
//   mounted(){
//     // Set coordinates
//     let myLatlng = new google.maps.LatLng(this.lat, this.lng);
//     // Options
//     let mapOptions = {
//       zoom: this.zoom,
//       center: myLatlng
//     };
//     // Apply options
//     this.map = new google.maps.Map(this.$el, mapOptions);
//     // Create search bar autocomplete
//     this.autocomplete = new google.maps.places.Autocomplete(this.$refs.input, Object.assign({
//       types: ['geocode']
//     }))
//     this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.$refs.input)
//     this.autocomplete.addListener('place_changed', this.moveMarker)
//     // Add marker
//     let marker = new google.maps.Marker({
//       position: myLatlng,
//       map: this.map
//     });
//     marker.setMap(this.map);
//     google.maps.event.addListener(this.map, "center_changed", () => {
//       let lat = this.map.getCenter().lat();
//       let lon = this.map.getCenter().lng();
//       let newLatLng = {lat: lat, lng: lon};
//       marker.setPosition(newLatLng);
//       this.$emit('locationUpdated', newLatLng)
//     });
//   },
//   methods: {
//     moveMarker () {
//       var place = this.autocomplete.getPlace()
//       var location = place.geometry && place.geometry.location
//       if (location) {
//         this.place = place
//         this.map.panTo(location)
//       }
//     }
//   }
// })

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBj0cBWFJNW7rt7ra1cvtZBPtvwRur6byU',
    libraries: 'places'
  },
});
document.addEventListener('DOMContentLoaded', function() {
  Vue.component('google-map', VueGoogleMaps.Map);
  Vue.component('google-marker', VueGoogleMaps.Marker);
  // Vue.component('ground-overlay', VueGoogleMaps.MapElementFactory({
  //   mappedProps: {
  //     'opacity': {}
  //   },
  //   props: {
  //     'source': {type: String},
  //     'bounds': {type: Object},
  //   },
  //   events: ['click', 'dblclick'],
  //   name: 'groundOverlay',
  //   ctr: () => google.maps.GroundOverlay,
  //   ctrArgs: (options, {source, bounds}) => [source, bounds, options],
  // }));
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

