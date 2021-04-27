import 'styled-components'
import { MyTheme } from './'

declare module 'styled-components' {
	export type DefaultTheme = MyTheme
}