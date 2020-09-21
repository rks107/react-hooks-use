import React, { Component } from 'react';

class User extends Component {
    render() {
        const {name, username, email, phone, website, address, company} = this.props.user;
        const { street, city, zipcode} = address;
        const company_name = company.name;
      return (
        <div className='user'>
          <div className='user__details'>
            <p style={style.horizonatalRow}>
              Name: <span> {name} </span>&nbsp;&nbsp; @ <span>{username}</span>
            </p>
            <p>
              Email: <span>{email}</span>
            </p>
            <p>
              Phone: <span>{phone}</span>
            </p>
            <p>
              Website: <span>{website}</span>
            </p>
            <p>
              Company: <span>{company_name}</span>
            </p>
            <div>
              <p>
                Address: <span>{street}</span>
                <span>
                  {city} - {zipcode}
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    }
}


const style = {
    'horizonatalRow':{
        'display': 'flex',
        'justifyContent': 'spaceBetween'
    }
}

export default User;