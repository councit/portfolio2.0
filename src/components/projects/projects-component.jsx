import React, { useState } from 'react';
import './projects.css';

//BootStrap
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';

function ControlledTabs() {
  const [key, setKey] = useState('Crwn-Clothing');

  return (
    <Tabs
      id='controlled-tab-example'
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className='tabs-wrapper'
    >
      <Tab eventKey='Crwn-Clothing' title='Crwn-Clothing'>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nemo ab
          ut neque impedit aliquam, ea ullam iure exercitationem perspiciatis
          enim, at culpa debitis dicta vero ipsa accusantium. Laboriosam ut
          dolorum, mollitia molestiae deleniti laborum placeat veritatis sed
          iure odio delectus ex accusamus expedita exercitationem ipsam velit
          nulla accusantium, cum est qui. Ipsa modi in nihil harum animi magni
          minus non omnis, commodi voluptatibus quo natus corrupti numquam
          quidem. Minus sit sunt, praesentium repellendus beatae quae
          perspiciatis deserunt aperiam sint ipsam, porro dignissimos placeat id
          illo libero blanditiis recusandae explicabo voluptates error quam
          illum? Dignissimos, consequuntur aspernatur. Assumenda, voluptatem
          cupiditate!
        </p>
        <Image src='https://picsum.photos/200/300'></Image>
      </Tab>
      <Tab eventKey='Digi-Check' title='Digi-Check'>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nemo ab
          ut neque impedit aliquam, ea ullam iure exercitationem perspiciatis
          enim, at culpa debitis dicta vero ipsa accusantium. Laboriosam ut
          dolorum, mollitia molestiae deleniti laborum placeat veritatis sed
          iure odio delectus ex accusamus expedita exercitationem ipsam velit
          nulla accusantium, cum est qui. Ipsa modi in nihil harum animi magni
          minus non omnis, commodi voluptatibus quo natus corrupti numquam
          quidem. Minus sit sunt, praesentium repellendus beatae quae
          perspiciatis deserunt aperiam sint ipsam, porro dignissimos placeat id
          illo libero blanditiis recusandae explicabo voluptates error quam
          illum? Dignissimos, consequuntur aspernatur. Assumenda, voluptatem
          cupiditate!
        </p>
        <Image src='https://picsum.photos/200/300'></Image>
      </Tab>
      <Tab eventKey='Lead-Generator' title='Lead Generator'>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nemo ab
          ut neque impedit aliquam, ea ullam iure exercitationem perspiciatis
          enim, at culpa debitis dicta vero ipsa accusantium. Laboriosam ut
          dolorum, mollitia molestiae deleniti laborum placeat veritatis sed
          iure odio delectus ex accusamus expedita exercitationem ipsam velit
          nulla accusantium, cum est qui. Ipsa modi in nihil harum animi magni
          minus non omnis, commodi voluptatibus quo natus corrupti numquam
          quidem. Minus sit sunt, praesentium repellendus beatae quae
          perspiciatis deserunt aperiam sint ipsam, porro dignissimos placeat id
          illo libero blanditiis recusandae explicabo voluptates error quam
          illum? Dignissimos, consequuntur aspernatur. Assumenda, voluptatem
          cupiditate!
        </p>
        <Image src='https://picsum.photos/200/300'></Image>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;
