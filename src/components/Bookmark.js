import React from 'react';

export default class Bookmark extends React.Component {
  constructor() {
      super();
      const tempBookMark = [];
      this.state = {
          show: false,
          tempBookMark
      }
  }
    componentDidMount() {
        Object.entries(this.props.bookmarks).map(([key, value], i) => {
            return(this.timeoutId = setTimeout(() => {
                this.state.tempBookMark.push({
                    name: value.name,
                    link: value.link,
                    image: value.image,
                    category: value.category
                });
                console.log(key);
                this.setState({show: true});
            }, 100 * (i + 1)))
        });  
    }

    componentWillUnmount() {
        if(this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
    
    renderDiv() {
        return this.state.tempBookMark.map((temp, index) => (
            <div key={index} className={this.state.show ? 'grid-item' : null}>
                <div className="center">
                    <a href={temp.link}>
                        <img className="img-bookmark" src={temp.image} alt=""/>
                        <br></br>
                        <br></br>
                        <h6>{temp.name}</h6>
                    </a>
                </div>
            </div>
        ))
    }

    render() {
        return(
            <div className="grid-container">
                {this.renderDiv()}
            </div>
        )
    }
}