/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";

export default function Page({ children }) {
    return <div>{children}</div>;
}

Page.propTypes = {
    children: PropTypes.any,
};
