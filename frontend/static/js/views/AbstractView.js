
//default view (all other views will inherit the traits)
export default class {
    constructor() {

    }
//what you see on tab
    setTitle(title) {
        document.title = title;
    }
    
//future html, that will be loaded into each js page respectively
    async getHtml() {
        return "";
    }
}