import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { blueTheme } from "./blueTheme"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ blueTheme }>
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}