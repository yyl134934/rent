import React, { useState } from 'react';
import { Button, Form, Input, message, Spin } from 'antd';
import { login } from '@/store/redux/user.redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface Func {
  (value: string): void
}
interface Props {
  goToRegister: Func,
  limits: any
}

const LoginBlock = (props: Props) => {
  const [form] = Form.useForm();
  const { limits } = props
  const dispatch = useDispatch()
  const history = useHistory();
  const [loading, setLoading] = useState(false)

  const onFinish = values => {
    const data = JSON.parse(JSON.stringify(values))
    setLoading(true)
    dispatch(login(data)).then((res) => {
      setLoading(false)
      if (res) {
        history.push('/')
      }
    })
  };

  const checkTel = (rule, value) => {
    try {
      if (!new RegExp(limits?.phoneRegex).test(value)) {
        return Promise.reject('请检查电话是否符合规范')
      } else {
        return Promise.resolve()
      }
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const checkPwd = (rule, value) => {
    try {
      if (!new RegExp(limits?.userPasswordRegex).test(value)) {
        return Promise.reject('请检查输入密码是否符合规范')
      } else {
        return Promise.resolve()
      }
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const onFinishFailed = errorInfo => {
    message.error('请完成校验再登录')
  };

  return (<Style>
    {/* <div className="title">登录房东管理系统</div> */}
    <section className="login-block">
      {!loading ? (
        <Form
          name="basic"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="电话"
            name="phone"
            rules={[{ required: true, message: '请输入电话号码' }, { validator: checkTel }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <div className='footer-btn'>
              <Button className="plain-btn" onClick={() => props.goToRegister('register')}>
                注册
              </Button>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </div>
          </Form.Item>
        </Form>) : <Spin />}
    </section>
  </Style>)
}

const Style = styled.div`
 .ant-form-item-explain {
   text-align: left;
   font-size: 13px;
 }
 .footer-btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: auto;
    width: 100%;
  }

`
export default React.memo(LoginBlock);