import { ThemedStyledProps } from "styled-components";

interface IPalette {
    neutral1?: string;
    neutral2?: string;
    neutral3?: string;
    neutral4?: string;
    accent1?: string;
}

interface IFonts {
    base: string;
    heading?: string;
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
    fonts: IFonts;
    fontSizes: IFontSizes;
    fontWeights: IFontWeights;
    breakpoints: IBreakpoints;
}

export const theme: ITheme = {
    palette: {
        neutral1: "#020302",
        neutral2: "#FFFFFF",
        neutral3: "#EEEEEE",
        neutral4: "#696969",
        accent1: "#EC8FFC",
    },
    fonts: {
        base: "Inter, sans-serif",
    },
    fontSizes: {
        xs: "13px",
        s: "16px",
        m: "18px",
        l: "36px",
        xl: "42px",
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
