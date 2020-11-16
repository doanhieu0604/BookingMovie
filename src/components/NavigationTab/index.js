import React, { Component } from 'react'

export default class NavigationTab extends Component {
    render() {
        const {item} = this.props;
        
     
              return (
                <ul className="nav nav-tabs navigation__tab" role="tablist">
                <li key={item} className="nav-item" role="presentation">
                  <a
                    className="nav-link" 
                    // id="lichChieu-tab"
                    data-toggle="tab"
                    href={`#${item[0]}`}
                    role="tab"
                  >
                    {item[1]}
                  </a>
                </li>
                </ul>
              );
            }
     
    }


