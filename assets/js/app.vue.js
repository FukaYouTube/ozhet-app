new Vue({
    el: '#app',
    
    data(){
        return {
            isOpenSidebar: false,
            isOpenImageModel: false,
            isOpenModel1: false,
            isOpenModel2: false,
            selection_category_e: 1,
            selection_type_e: 3,
            selection_type_schema_main: 0,
        }
    },

    methods: {
        closeSidebar(event){
            if(!event.path.map(e => e.className).find(e => e === 'burger-icon' || e === 'sidebar-menu' || e === 'image' || e === 'slider' || e === 'top-block-open-model' || e === 'bottom-block-open-model')){
                this.isOpenSidebar = false
                this.isOpenImageModel = false
                this.isOpenModel1 = false
                this.isOpenModel2 = false
            }
        }
    }
})