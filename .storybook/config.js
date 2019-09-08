import { addParameters, configure } from "@storybook/react"
import { themes } from '@storybook/theming';
import { action } from "@storybook/addon-actions"
import { setConsoleOptions } from '@storybook/addon-console';
import '../src/assets/scss/variables.scss'
import '../src/assets/scss/mixins.scss'
import '../src/assets/scss/storybook.scss'

addParameters({
  options: {
    theme: themes.dark,
  },
});

setConsoleOptions({
  panelExclude: []
});

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
configure(loadStories, module)
