import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        id: "outlined-number",
        label: "Number",
        type: "number",
        size: "small",  // TextField의 크기를 small로 설정
      },
      styleOverrides: {
        root: {
          marginTop: "20px",  // 스타일 오버라이드: marginTop을 설정
        },
      },
      props: {
        InputLabelProps: {
          shrink: true,  // 레이블을 항상 축소된 상태로 설정
        },
      },
    },
  },
});


