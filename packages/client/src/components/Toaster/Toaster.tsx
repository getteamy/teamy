import React from "react"
import ReactDOM from "react-dom"

import { PoseGroup } from "react-pose"
import styled from "styled-components"
import uuid from "uuid"

import Toast, { ToastProps } from "./Toast"

interface ToasterInterface {
  show(props: ToastProps): string
  dismiss(key: string): void
}

type ToastOptions = ToastProps & { key: string }

interface ToasterState {
  toasts: any
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 999;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  margin: 32px 32px 0;
  box-sizing: border-box;
`

class Toaster extends React.PureComponent<any, ToasterState>
  implements ToasterInterface {
  public static create(container = document.body): ToasterInterface {
    const containerElement = document.createElement("div")
    container.appendChild(containerElement)
    const toaster = ReactDOM.render(<Toaster />, containerElement) as Toaster
    return toaster
  }

  public state = {
    toasts: []
  }

  public show({ message, timeout, onDismiss }: ToastProps) {
    const key = uuid.v4()
    this.setState({
      toasts: [{ message, timeout, onDismiss, key }, ...this.state.toasts]
    })
    return key
  }

  public dismiss = (key: string) => {
    this.setState({
      toasts: this.state.toasts.filter(
        (toast: ToastOptions) => toast.key !== key
      )
    })
  }

  public render() {
    return (
      <Container>
        {this.state.toasts.map((toast: ToastOptions) => (
          <Toast
            {...toast}
            key={toast.key}
            onDismiss={() => this.dismiss(toast.key)}
          />
        ))}
      </Container>
    )
  }
}

export default Toaster
