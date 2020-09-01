import { ThemedStyledProps } from "styled-components";

interface IPalette {
    black: string;
    grey: string;
    white: string;
}

interface IFontSizes {
    xs?: string;
    s?: string;
    m?: string;
    l?: string;
    xl?: string;
    xll?: string;
}

interface IFontWeights {
    regular?: number;
    medium?: number;
    semiBold?: number;
    bold?: number;
}

interface IBreakpoints {
    mobile?: string;
    tablet?: string;
    desktop?: string;
}

export interface ITheme {
    palette: IPalette;
    fontSizes: IFontSizes;
    fontWeights: IFontWeights;
    breakpoints: IBreakpoints;
}

export const theme: ITheme = {
    palette: {
        black: "#020302",
        grey: "#EEEEEE",
        white: "#FFFFFF",
    },
    fontSizes: {
        xs: "13px",
        s: "16px",
        m: "18px",
        l: "20px",
        xl: "32px",
        xll: "64px",
    },
    fontWeights: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
    },
    breakpoints: {
        mobile: "768px",
        tablet: "1080px",
        desktop: "1200px",
    },
};

export type StyledProps<P = {}> = ThemedStyledProps<P, ITheme>;
