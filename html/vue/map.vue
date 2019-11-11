<template>
    <div>
        <h2>Your Address</h2>

        <vue-google-autocomplete
            ref="address"
            id="map"
            classname="form-control"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
            country="sg"
        >
        </vue-google-autocomplete>
    </div>
</template>
<script>
    export default {
        name: 'Map',
    }
</script>