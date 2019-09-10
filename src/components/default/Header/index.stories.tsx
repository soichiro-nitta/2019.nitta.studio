import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'

import Header from './'

const components = storiesOf('Base', module)
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('Header', () => <Header siteTitle={text('siteTitle', 'Nitta.Studio')} />)
