import React from "react";

export default function useForceUpdate() {
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = React.useState(0);
    return () => setValue(value => ++value);
}