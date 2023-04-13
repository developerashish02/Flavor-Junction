
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";


const Shimmer = () => {
    return <Stack spacing={1}>
        <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>;
};

export default Shimmer;
