import React from "react";

function Post(props){
  const postStyles = {
    display: 'grid',
    'grid-template-columns': '60px 1fr',
    'padding-bottom': '25px'
  }
  const subPicStyles = {
    backgroundColor: props.color,
    width: '40px',
    height: '40px',
    'margin-top': '15px'
  }
  const h4Style = {
    margin: '10px 0px 0px'
  }
  const pStyle = {
    margin: '5px 0px 10px',
    'font-size': '14px'
  }
  const HrBuilder = () => {
    if (props.double) {
      return (
        <div>
          <hr/>
          <h4 style={h4Style}>{props.user}</h4>
        </div>);
    } else {
      return <div></div>;
    }
  }
  return (
    <div className="post" style={postStyles}>
      <div className='sub-pic' style={subPicStyles}></div>
      <div>
        <h4 style={h4Style}>{props.user}</h4>
        <p style={pStyle}>{props.content}</p>
        <HrBuilder/>
      </div>
    </div>
  );
}

export default Post;
