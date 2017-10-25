import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from '@mockingbot/button'
import Switch from '@mockingbot/switch'

import Modal from './index'

export default class ModalAndOpener extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { isOpen: props.isOpen }
  }

  static propTypes = {
    opener: PropTypes.any,
    openerType: PropTypes.string,
    buttonType: PropTypes.oneOf(['primary', 'regular', 'text']),
    isOpen: PropTypes.bool,
  }

  static defaultProps = {
    isOpen: false,
    opener: '',
    openerType: 'button',
    buttonType: 'regular',
  }

  open = () => this.setState({ isOpen: true })
  close = () => this.setState({ isOpen: false })
  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

  componentWillReceiveProps({ isOpen: willBeOpen }) {
    const { isOpen } = this.state

    if (!isOpen && willBeOpen) {
      this.open()
    } else if (isOpen && !willBeOpen) {
      this.close()
    }
  }

  render() {
    const { opener, openerType, buttonType, icon, isOpen: _, ...props } = this.props
    const { isOpen } = this.state


    return [
      /* Opener */
      (
        openerType === 'switch'
        ? (
          <Switch
            key="opener"
            isChecked={isOpen}
            onChange={this.toggle}
          >
            { opener }
          </Switch>
        )
        : openerType === 'button'
        ? (
          <Button
            key="opener"
            type={buttonType}
            icon={icon}
            onClick={this.open}
          >
            { opener }
          </Button>
        )
        : React.createElement(
          openerType,
          { key: 'opener', onClick: this.open },
          opener,
        )
      ),

      /* Modal */
      <Modal key="modal" isOpen={isOpen} onClose={this.close} {...props} />,
    ]
  }
}
