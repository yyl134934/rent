import React, {useEffect} from "react";
import 'swiper/css/swiper.css';
import styled from "styled-components";
import HouseImagePreview from "./HouseImagePreview";
import Header from "../layout/Header";
import HouseIntroduction from "./HouseIntroduction";
import RentInfo from "./RentInfo";
import RoomMateInfo from "./RoomMateInfo";
import HouseNavigation from "./HouseNavigation";
import RightHouseDetailInfo from "./RightHouseDetailInfo";
import RightHouseAdminSideFix from "./RightHouseAdminSideFix";
import DistrictIntroduction from "./DistrictIntrodction";
import RoundService from "./RoundService";
import UserRights from "./UserRights";
import RecommendHouse from "./RecommendHouse";
import {Sticky, StickyContainer} from 'react-sticky';
import {useDispatch, useSelector} from "react-redux";
import {getHouseById} from "../../store/redux/house.redux";
import Footer from "../layout/Footer";
import {useHistory} from "react-router";
import StorageUtil from "@utils/storage";
import {setLoginModalCallback} from "@store/redux/common.redux";
import {Spin} from "antd";

export const BROWSER_HISTORY_KEY = "BROWSER_HISTORY";

const HouseDetail = (props) => {


    const loading = useSelector(state => state.house.loading);

    const houseId = props.match.params.houseId;

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        let houseIdList = StorageUtil.get(BROWSER_HISTORY_KEY);
        if(houseIdList && houseIdList instanceof Array){
            houseIdList.unshift(houseId);
            const set = new Set(houseIdList);
            houseIdList = Array.from(set.values());
            if(houseIdList.length > 3){
                houseIdList.pop();
            }
        }else{
            houseIdList = [houseId];
        }
        StorageUtil.set(BROWSER_HISTORY_KEY, houseIdList);
    }, [houseId]);

    useEffect(() => {
        dispatch(setLoginModalCallback (() => dispatch(getHouseById(houseId, history))));
        dispatch(getHouseById(houseId, history));
    }, []);


    return (
        <Spin spinning={loading}>
            <div style={loading ? {height: "100vh", overflowY: "hidden"} : {}}>
                    <Header fixed={false} showCity={false}/>
                    <Container>
                        <HouseBodyContainer>
                            <LeftInfoContainer>
                                {/* 房屋图片预览 */}
                                <HouseImagePreview/>
                                {/*导航栏*/}
                                <HouseNavigation/>
                                {/*房屋简介*/}
                                <HouseIntroduction/>
                                {/*租约信息*/}
                                <RentInfo/>
                                {/*室友信息*/}
                                <RoomMateInfo/>
                                {/*小区简介*/}
                                <DistrictIntroduction/>
                            </LeftInfoContainer>
                            <RightInfoContainer>
                                <RightHouseDetailInfo/>
                                <StickyContainer style={{flex: 1}}>
                                    <Sticky  disableCompensation={true} topOffset={-80}>
                                        {({
                                              style,
                                              isSticky,
                                          }) => (
                                            <div style={{...style}}>
                                                {/*预约看房*/}
                                                <RightHouseAdminSideFix isSticky={isSticky} />
                                            </div>
                                        )}
                                    </Sticky>
                                </StickyContainer>
                            </RightInfoContainer>
                        </HouseBodyContainer>
                        {/*周边配套*/}
                        <RoundService/>
                        {/*用户权益*/}
                        <UserRights/>
                        {/*推荐房源*/}
                        <RecommendHouse/>
                    </Container>
                    <Footer/>
            </div>
        </Spin>
    )
};


const Container = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    width: 1152px;
    box-sizing: border-box;
    position: relative;
   .title{
        display: flex;
        font-weight: 700;
        font-size: 24px;
        position: relative;
        color: rgba(0,0,0,.85);
        line-height: 32px;
        margin: 16px 0;
   }
`;
const HouseBodyContainer = styled.div`
    display: flex;
    box-sizing: border-box;
`;

const LeftInfoContainer = styled.div`
     width: 764px;
    .nav-container{
        margin-top: 60px;
    }
`;

const RightInfoContainer = styled.div`
    margin-left: 30px;
    width: 358px;
    display: flex;
    flex-direction: column;
    .price{
        color: #51c6cf;
        margin-top: 10px;
        font-size: 28px;
        display: flex;
        align-items: center;
        .icon{
            font-size: 32px;
            letter-spacing: -3px;
        }
        .number{
            margin-left: -2px;
            font-size: 35px;
        }
    }
`;

export default HouseDetail;
