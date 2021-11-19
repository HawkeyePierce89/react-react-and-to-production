import React from "react";
import classNames from "classnames/bind";

import styles from "./style.less";

const cx = classNames.bind(styles);

const Component = ({ data = "Hello!" }) => <div className={cx("root")}>{data}</div>;

export default React.memo(Component);
