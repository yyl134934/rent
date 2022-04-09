import React, {useEffect} from "react";
import styled from "styled-components";
import Swiper from "swiper"
import "swiper/css/swiper.css"
const Footer = () => {

    useEffect(() => {
        new Swiper ('.friend-link .swiper-container', {
            // 轮播图的方向，也可以是vertical方向
            direction:'vertical',
            loop: true,
            // 自动播放时间
            autoplay:true,
            // 播放的速度
            speed:2000,
            // 这样，即使我们滑动之后， 定时器也不会被清除
            autoplayDisableOnInteraction : false,
        });
    }, []);

    return (
        <Container>
            <div className="area">
                <div className="top-item">
                    <div className="left-list">
                        <div className="item">
                            <div className="title">关于我们</div>
                            <a href="#">房屋租赁系统</a>
                        </div>
                        <div className="item">
                            <div className="title">Github</div>
                            <a href="#">房屋租赁系统</a>
                        </div>
                        <div className="item">
                            <div className="title">关注我们</div>
                            <a href="#">房屋租赁系统</a>
                        </div>
                    </div>
                    <div className="right-code">
                    </div>
                </div>
            </div>
        </Container>
    )
};

const Container = styled.div`
    padding: 20px 0px;
    line-height: 20px;
    border-top: solid 1px #ccc;
    font-size: 14px;
    p{
        color: #000;
        font-size: 12px;
    }
    .area{
        width: 1000px;
        margin: 0px auto;
        .top-item{
            display: flex;
           .left-list{
                width: 700px;
                display: flex;
                .item{
                    flex: 1;
                    .title{
                        font-weight: bold;
                        line-height: 35px;
                    }
                    a{
                        display: block;
                        font-size: 12px;
                        line-height: 24px;
                        transition: all .2s ease-in;
                        color: #000;
                        &:hover{
                            margin-left: 10px;
                            color: #51c6cf;
                            cursor: pointer;
                        }
                    }
                }
           }
           .right-code{
                display: flex;
                width: 300px;
                flex-direction: row-reverse;
                .img{
                    img{
                        width: 100px;
                        height: 100px;
                    }
                    text-align: center;
                    margin-left: 20px;
                }
                p{
                    font-size: 12px;
                    color: #000;
                }
           }
        }
        .friend-link{
            border-top: solid 1px #eee;
            border-bottom: solid 1px #eee;
            line-height: 47px;
            height: 47px;
            overflow: hidden;
            margin: 13px auto;
            display: flex;
            color: #000;
            font-size: 12px;
             .swiper-container{
                 margin-left: 0;
                 margin-right: 0;
                 .swiper-slide{
                    a{
                        color: #000;
                        margin: 0 5px;
                        cursor: pointer;
                        &:hover{
                            color: #51c6cf;
                        }
                    }
                 }
            }
        }
        .footer-bottom{
            height: 38px;
        }
    }
`;

export default Footer;
