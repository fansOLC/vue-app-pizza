import fetch from './config'
export default {

    /**
     * 登录
     * @param {object} params 
     * @returns 
     */
    login(params) {
        return fetch.fetchPost('/login', params);
    },


    /**
     * 添加新pizza
     * @param {object} params 
     * @returns 
     */
    addPizza(params) {
        return fetch.fetchPost('/addPizza', params);
    },

    /**
     * 查询pizza
     * @param {object} params 
     * @returns 
     */
    searchPizza(params) {
        return fetch.fetchGet('/searchPizza', params);
    },

    /**
     * 删除pizza
     * @param {object} params 
     * @returns 
     */
    deletePizza(params) {
        return fetch.fetchGet('/deletePizza', params);
    }
}