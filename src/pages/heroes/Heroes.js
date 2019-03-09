import React from 'react';
import axios from "axios";
import './Heroes_module.scss';

export class Heroes extends React.Component {
  state = {
    heroes:[]
  }
  render() {
    return (
      <ul className="img-box">
        {
          this.state.heroes.map(hero =>(
            <li key={hero.hero_id} className="row align-items-center m-0">
              <div className="col-1 py-2">
                <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'} alt={hero.name} className="img-fluid rounded-circle" style={{width: '100%'}} />
              </div>
              <span className="col">{hero.name}</span>
            </li>
          )
        )}
      </ul>
    );
  }

  componentDidMount(){
    this.getHeroes();
  }

  getHeroes = async () => {
    const response = await axios.get('http://eastflag.co.kr:8080/api/heroes');
    this.setState({heroes: response.data});
    console.log(response);
  }

}


