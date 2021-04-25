<template>
    <div id="blog">    
        <GenericPage class="" :page="page" :paging="paging" :pageSize="pageSize" :translateTitle="translateTitle"/>
  
    </div>
</template>


<style >

</style>

<script>

import GenericPage from '@/components/GenericPage.vue'

export default 
{
    name: "genericPage",
    components: {GenericPage},

    data() 
    {
        return {
        page: "Home",
        pageSize: 1,
        paging: false,
        translateTitle: false
        }
    },
    metaInfo() {
        return {
            title: 'noSpoon Media - ' + this.page,
            meta:[
                {
                    name: "noSpoon Media",
                    content: "Powerful educational solutions"
                }
            ]
      }
    },
    methods:{

    },
    computed: {

    },
    created(){

    },
}


</script>


