var Btn = React.createClass({
    onClick: function(e) {
      var parent = React.findDOMNode(this);
      var ripple = React.findDOMNode(this.refs.ripple);
      parent.classList.remove("btn-animate");
      d = Math.max(parent.offsetWidth, parent.offsetHeight);
          ripple.style.height = d + "px";
      ripple.style.width = d + "px";
      
      x = e.pageX - parent.offsetLeft - d/2;
        y = e.pageY - parent.offsetTop - d/2;
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      parent.classList.add("btn-animate");
      console.log("Right here?")
    },
    
    render: function() {
      return (
        <button onClick={this.onClick}>
          Dat Button
          <div ref="ripple"className="ripple"></div>
        </button>
      );
    }
  });
  
  
  React.render(
    <Btn/>, document.getElementById('test')
  );