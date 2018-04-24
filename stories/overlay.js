import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {
  Root, Icon, Switch, Overlay,
  FormLabel, FormEntry,
  InputNumber, Textarea, Input,
  RadioGroup, CheckGroup,
  Select,
  WidgetName,
} from '../components'

storiesOf('Overlay', module)
.add('Default', () => (
  <Root>
    <style>
      {`html { background-color: #eee; }`}
    </style>
    <Overlay isOpen={true} onClose={action('Overlay closed')} />
  </Root>
))
.add('Openers', () => (
  <Root>
    <style>
      {`html { background-color: #eee; }`}
    </style>

    <p>
      <Overlay
        openerType="switch"

        isOpen={true}
        title="Overlay’s Title"

        onToggle={action('Overlay toggled, `isOpen`')}
      >
        Overlay!
      </Overlay>
    </p>

    <p>
      <Overlay openerType="custom" /* Shall not display */ />

      <Overlay
        openerType="custom" opener="Custom Opener"
        onToggle={action('Overlay toggled, `isOpen`')}
      />
    </p>

    <p>
      <style scoped>
      {`p button { margin-right: 1em; }`}
      {`p button .icon { font-size: 1.2em; vertical-align: -.1em }`}
      </style>

      <Overlay
        opener="Open a Overlay"
        openerType="primary"

        isOpen={false}
        title="Overlay’s Title"

        onToggle={action('Overlay toggled, `isOpen`')}
      >
        Overlay opened with a button
      </Overlay>

      <Overlay
        opener="Open a Overlay"
        openerType="regular"

        isOpen={false}
        title="Overlay’s Title"

        onToggle={action('Overlay toggled, `isOpen`')}
      >
        Overlay opened with a button
      </Overlay>

      <Overlay
        opener="Open a Overlay"
        openerType="text"

        isOpen={false}
        title="Overlay’s Title"

        onToggle={action('Overlay toggled, `isOpen`')}
      >
        Overlay opened with a button
      </Overlay>

      <Overlay
        isOpen={false}
        opener={[<Icon key="icon" name="share" />, 'Open a Overlay']}
        openerType="text"
        title="Overlay’s Title"

        onToggle={action('Overlay toggled, `isOpen`')}
      >
        Overlay opened with a button
      </Overlay>
    </p>

    <p>
      Opening an overlay in an overlay:{' '}
      <Overlay
        openerType="switch"

        isOpen={false}
        title="Overlay’s Title"

        onToggle={action('Overlay toggled, `isOpen`')}
      >
        Give me an overlay:{' '}
        <Overlay
          openerType="switch" title="Yay!"
          onToggle={action('MiM toggled, `isOpen`')}
        >
          Overlay in an overlay is open!
        </Overlay>
      </Overlay>
    </p>
  </Root>
))