import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useHistory } from "react-router-dom";
function fun(value, history) {
    if (value === 0) {
        history.push("/");
    } else if (value === 1) {
        history.push("/movies");
    } else if (value === 2) {
        history.push("/series");
    } else if (value === 3) {
        history.push("/search");
    }else if (value === 4) {
        history.push("/wishlist");
    }
}

const Footer = () => {
    const history = useHistory();
    let value = 0;
    return (
        <BottomNavigation value={value} showLabels className="header"
            onChange={(event, newValue) => {
                fun(newValue, history);
            }} >
            <BottomNavigationAction className="btn-site" label="Codeforces" />
            <BottomNavigationAction className="btn-site" label="Codechef"  />
            <BottomNavigationAction className="btn-site" label="Leetcode" />
            <BottomNavigationAction className="btn-site" label="Atcoder" />
        </BottomNavigation>
    );
} 

export default Footer;