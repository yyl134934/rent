import request from '@/utils/request';

/**
 * 地区与地铁接口
 */
const AddressApi = {
    /**
     * 获取所有支持的城市列表
     */
    getSupportCities(){
        return request({
            url:  `/address/support/cities`,
            method: 'get',
            noJweToken: true
        });
    },
    /**
     * 获取城市下的所有区县
     */
    getSupportRegions(cityEnName:string){
        return request({
            url:  `/address/support/regions/${cityEnName}`,
            method: 'get',
            noJweToken: true
        });
    },
    /**
     * 获取城市下的所有地铁线路
     */
    getSupportSubways(cityEnName:string){
        return request({
            url:  `/address/support/subways/${cityEnName}`,
            method: 'get',
            noJweToken: true
        });
    },
    /**
     * 获取城市下的所有地铁线路
     */
    getSupportSubwayStations(subwayLineId:string){
        return request({
            url:  `/address/support/subwayStations/${subwayLineId}`,
            method: 'get',
            noJweToken: true
        });
    }
}

export default AddressApi;
