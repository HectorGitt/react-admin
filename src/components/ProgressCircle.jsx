import {Box, useTheme} from "@mui/material";
import {tokens} from "../theme";

const ProgressCircle = ({progress = '0.75', size='40'}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = 360 * progress;

    return (
        <Box
            sx={{
                background: `
                radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                conic-gradient(transparent ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                ${colors.greenAccent[500]}
                `,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',

            }}
         />
    );

}

export default ProgressCircle;