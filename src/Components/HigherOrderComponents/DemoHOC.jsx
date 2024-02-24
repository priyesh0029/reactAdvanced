/* eslint-disable react/display-name */


const DemoHOC = (WrappedComponent) => {
        return (props)=> {
            const modifiedProps={
                ...props,
                hocProp :"this is the additional info from modified props"
            }
            return <WrappedComponent {...modifiedProps}/>
        }
}

export default DemoHOC