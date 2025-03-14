import React from 'react'
import { locations} from "../Main/data";
import ItemContact from './ItemContact';

const Contacts = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-2  xl:gird xl:grid-cols-2 ">

    <section className="flex flex-col gap-2 lg:gap-4 xl:gap-8 ">
      {locations.map((item, i) => {
        return <ItemContact key={i} links={item} />;
      })}
    </section>
  </div>
  )
}

export default Contacts
