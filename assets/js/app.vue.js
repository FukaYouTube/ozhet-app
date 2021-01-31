new Vue({
    el: '#app',
    
    data(){
        return {
            isOpenSidebar: false,
            selection_category_e: 1,
            selection_type_e: 3,
            selection_type_schema_main: 0
        }
    },

    methods: {
        closeSidebar(event){
            if(!event.path.map(e => e.className).find(e => e === 'burger-icon' || e === 'sidebar-menu')){
                this.isOpenSidebar = false
            }
        }
    }
})