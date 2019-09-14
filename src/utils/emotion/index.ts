import styled, { CreateStyled } from '@emotion/styled'
import sizes, { SizesTypes } from '~/utils/emotion/sizes'
import globalStyles from '~/utils/emotion/globalStyles'

type ThemeTypes = {
  sizes: SizesTypes
}

export const theme: ThemeTypes = {
  sizes
}

export { globalStyles }

export default styled as CreateStyled<ThemeTypes>
