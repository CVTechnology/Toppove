import React, {Component} from 'react';
//import Link from 'next/link';
import Button from '../components/button';
import MainCard from '../components/mainCard';
import ProfileCard from '../components/profileCard';

class Index extends Component {
  render() {
    const Names = [
      {id: 1, title: '政治'},
      {id: 2, title: '料理'},
      {id: 3, title: 'スポーツ'},
    ];
    return (
      <div>
        <ProfileCard name="桂田" />
        {Names.map(Name => (
          <div className={Name.id}>
            <Button name={Name.title} />
          </div>
        ))}
        <MainCard name="桂田" />
      </div>
    );
  }
}

export default Index;
