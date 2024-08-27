import reactCSS from "reactcss";
import { SketchPicker, ColorResult, RGBColor } from "react-color";
import { Component, CSSProperties } from "react";

interface SketchExampleState {
  displayColorPicker: boolean;
  color: RGBColor;
}

class SketchExample extends Component<
  Record<string, never>,
  SketchExampleState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: {
        r: 255,
        g: 192,
        b: 203,
        a: 1,
      },
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color: ColorResult) => {
    this.setState({ color: color.rgb });
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        } as CSSProperties, 
        popover: {
          position: "absolute",
          zIndex: 2,
        } as CSSProperties, 
        cover: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        } as CSSProperties,
      },
    });

    return (
      <div>
        <h2>Sketch Example</h2>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker && (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default SketchExample;
