import React,{Component} from 'react'
import {Icon,Button,Modal} from 'antd'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import dayjs from 'dayjs'
import screenfull from 'screenfull'
import {createDeleteUserInfoAtion, reqWeather} from '../../../api'
import { createDeleteUserInfoAction } from '../../../redux/action_creators/login_action'

@connect(
  state => ({userInfo:state.userInfo}),
  {deleteUser:createDeleteUserInfoAction}
)

@withRouter
class Header extends Component{

  state = {
    isFull:false,
    date:dayjs().format('YYYY年 MM月DD日 HH:mm:ss'),
    weatherInfo:{}
  }

  getWeather = async()=>{
    let weather = await reqWeather()
    this.setState({weatherInfo:weather})
  }

  componentDidMount(){
    screenfull.connect('change', () => {
      let isfull = !this.state.isFull
      this.setState
    });
    this.timeID = setInterval(() => {
      this.setState({date:dayjs().format('YYYY年 MM月DD日 HH:mm:ss')})
    }, 1000)
    this.getWeather()
  }

  componentWillUnmount(){
    clearInterval(this.timeID)
  }


  render(){
    let {isFull,weatherInfo} = this.state
    let {user} = this.props.userInfo
    return (
      <header className="header">
        <div className="header-top">
           <Button onClick={this.fullScreen}>
             <Icon type={isFull ? 'fullscreen-exit':'fullscreen'}/>
           </Button>
           <span className="username">欢迎，{user.username}</span>
           <Button onClick={this.logOut}>退出登录</Button>
        </div>
        <div className="header-botton">
          <div className="header-botton-left">
            {this.props.location.pathname}
          </div>
          <div className="header-botton-right">
            {this.state.date}
            <img src={weatherInfo.dayPictureUrl} alt="天气信息"/>
            {weatherInfo.weather}&nbsp;&nbsp;&nbsp;温度：{weatherInfo.temperature}
          </div>
        </div>
      </header>
    )
  }
}
export default Header