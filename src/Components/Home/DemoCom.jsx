/* eslint-disable react/prop-types */


const DemoCom = (props) => {
  return (
    <div>DemoCom
        <p>this is from appjs file : {props.heading}</p>
        <p>this is from HOC file : {props.hocProp}</p>
    </div>
  )
}

export default DemoCom