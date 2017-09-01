import React from 'react'
import PropTypes from 'prop-types'
import { Carousel, Layout, Breadcrumb,Row,Col,Button } from 'antd'
const Item = Breadcrumb.Item
import { Link, NavLink, withRouter } from 'react-router-dom'
import SampleArrow from '../../components/SampleArrow'
const { Content } = Layout
import './auction.less'

const auctionMap = {
  '/auction': '拍卖',
  '/auction/types': '拍卖分类',
  '/auction/send': '我要送拍',
  '/auction/broadcast': '通知公告',
}
// import meetingBg from '../../../image/auction/画卷.png'
import recommendBg from '../../../image/auction/bg.png'
// import goodImg from '../../../image/auction/good.jpg'
import hotImg from '../../../image/auction/今日热拍.png'
import hLeft from '../../../image/auction/h-left.png'
import hCenter from '../../../image/auction/h-center.png'
import hRight from '../../../image/auction/h-right.png'

// const imageDir = ''
import l1  from '../../../image/连体钞/l1.jpg'
import l2 from '../../../image/连体钞/l2.jpg'
import l3 from '../../../image/连体钞/l3.jpg'
import l4 from '../../../image/连体钞/l4.jpg'
import x1 from '../../../image/熊猫币/x1.jpg'
import x2 from '../../../image/熊猫币/x2.jpg'
import x3 from '../../../image/熊猫币/x3.jpg'
import x4 from '../../../image/熊猫币/x4.jpg'

import f1 from '../../../image/复制币/f1.jpg'
import f2 from '../../../image/复制币/f2.jpg'

import li1 from '../../../image/年车/li1.jpg'
import li2 from '../../../image/年车/li2.jpg'
import li3 from '../../../image/年车/li3.jpg'

import lo2 from '../../../image/龙钞/lo2.jpg'
import d1 from '../../../image/大3/d1.jpg'
import a1 from '../../../image/奥运钞/a1.jpg'

import b3 from '../../../image/b3.jpg'
const records = {
  to:[l1,l2,l3,l4,x1,x2,x3,x4],
  goo:[f2,f1,li1,li2,li3],
}
const tempGoods = [{
  img:b3,
  title:'枣红一角',
  time:'暂未开拍',
  price:'￥5800',
},{
  img:lo2,
  title:'千禧龙钞',
  time:'暂未开拍',
  price:'￥1700',
},{
  img:d1,
  title:'第三套人民币大全套26枚',
  time:'暂未开拍',
  price:'￥18000',
},{
  img:a1,
  title:'香港奥运钞四连体',
  time:'暂未开拍',
  price:'￥2500',
}]
export class AuctionComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { location, isMode } = this.props

    const pathSnippets = location.pathname.split('/').filter(i => i)
    const breadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return (
        <Item key={url}>
          <Link to={url}>
            {auctionMap[url]}
          </Link>
        </Item>
      )
    })
    return (
      <div>
        <Carousel
          className="top-item"
          draggable
          pauseOnHover
          autoplay
        >
          <div style={{ backgroundImage: 'url("http://oow7renvm.bkt.clouddn.com/cyd2.jpg")' }}></div>
          <div style={{ backgroundImage: 'url("http://odp22tnw6.bkt.clouddn.com/banner1.jpg")' }}></div>
          <div style={{ backgroundImage: 'url("http://odp22tnw6.bkt.clouddn.com/banner2.jpg")' }}></div>
        </Carousel>
        <Content className="cyd-content-wrapper">
          <div className="sub-auction-item item-wrapper">
            <NavLink exact to="/auction">拍卖首页</NavLink>
            <NavLink to="/auction/types">拍品分类</NavLink>
            <NavLink to="/auction/send">我要送拍</NavLink>
            <NavLink to="/auction/broadcast">通知公告</NavLink>
          </div>
          <div className="path-list-wrapper">
            <div>当前位置：</div>
            <Breadcrumb separator=">">
              {breadcrumbItems}
            </Breadcrumb>
          </div>
          <div className="item-wrapper" style={{ textAlign: 'center', lineHeight: '260px', fontSize: '24px', border: '1px solid #000', background: 'white' }}>
            公开征集
          </div>
          
          <div className="item-wrapper">
            <div style={{ borderBottom: '1px solid #000' }}>
                <div style={{ float: 'left' }}><strong style={{ fontSize: 26 }}>专场拍卖</strong></div>
                <div style={{ float: 'right' }}><Link to="/auction/types"><strong style={{ fontSize: 26, color: '#000' }}>更多&gt;&gt;&gt;</strong></Link></div>
                <div style={{ clear: 'both' }}></div>
            </div>
            <div style={{height:160,position:'relative'}}>
            <div style={{position:'absolute',height:'166px',left:0,top:-3,zIndex:100}}>
              <img src={hLeft} style={{height:'100%'}}/>
            </div>
            <div className="h-center" style={{backgroundImage:`url(${hCenter})`}}>
              <Carousel
                slidesToShow={5}
                autoplay
                swipeToSlide
                arrows={!isMode}
                prevArrow={<SampleArrow type="left" />}
                nextArrow={<SampleArrow type="right" />}
                vertical={isMode}
                draggable={!isMode}
                dots={false}>
                {records['to'].map((value,index) => (
                  <div style={{ padding: 9 }} key={`to-${index}`}>
                    <div className="bg-center" style={{ backgroundImage: `url(${value})`, height: 140 }} />
                  </div>
                ))}
              </Carousel>
            </div>
            <div style={{position:'absolute',height:'166px',right:0,top:-3,zIndex:100}}>
              <img src={hRight} style={{height:'100%'}}/>
            </div>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="bg-center" style={{ backgroundImage: `url(${recommendBg})` }}>
              <div style={{ borderBottom: '1px solid #000' }}>
                <div style={{ float: 'left' }}><strong style={{ fontSize: 26 }}>精品推荐</strong></div>
                <div style={{ float: 'right' }}><Link to="/auction/types"><strong style={{ fontSize: 26, color: '#000' }}>更多&gt;&gt;&gt;</strong></Link></div>
                <div style={{ clear: 'both' }}></div>
              </div>
              <div style={{ padding: 20 }}>
                <Carousel
                  slidesToShow={5}
                  autoplay
                  swipeToSlide
                  arrows={!isMode}
                  prevArrow={<SampleArrow type="left" />}
                  nextArrow={<SampleArrow type="right" />}
                  vertical={isMode}
                  draggable={!isMode}
                  dots={false}>
                  {records.goo.map((value,index)=>(
                    <div style={{ padding: 20 }} key={`goo${index}`}>
                      <div className="bg-center" style={{ backgroundImage: `url(${value})`, height: 160 }} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="bg-center" style={{backgroundImage:`url(${hotImg})`,height:80}}/>
            <Row gutter={20} style={{marginTop:20}}>
              {tempGoods.map((value,index)=>{
                return (
                  <Col span={12} key={index}>
                    <Row gutter={20}>
                      <Col span={12}>
                        <img src={value.img} style={{width:'100%'}}/>
                      </Col>
                      <Col span={12}>
                        <h1 style={{lineHeight:'56px'}}>{value.title}</h1>
                        <div style={{fontSize:20,marginTop:20,lineHeight:'36px'}} >
                          <p>倒计时：{value.time}</p>
                          <p>起始价：{value.price}</p>
                        </div>
                        <div style={{marginTop:'20px'}}>
                          <Button size={'large'} disabled>立即竞拍</Button>
                        </div>
                      </Col>
                    </Row>
                    
                  </Col>
                )
              })}
            </Row>
          </div>
        </Content>

      </div>
    )
  }
}

AuctionComponent.defaultProps = {
  isMode: false,
}
AuctionComponent.propTypes = {
  isMode: PropTypes.bool.isRequired,
  location: PropTypes.string,
}

export default withRouter(AuctionComponent)