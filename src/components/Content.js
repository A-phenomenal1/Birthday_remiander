import React, { useState } from "react";

import "./style.css";
import Button from "./Button";
import Details from "./Details";
import Modal from "./Modal";
import mypic from "../assets/mypic.jpg";
import mypic1 from "../assets/mypic1.jpeg";
import mypic2 from "../assets/mypic2.jpeg";
import mypic3 from "../assets/mypic3.jpeg";
import mypic5 from "../assets/mypic5.jpeg";
import mypic4 from "../assets/mypic4.jpeg";
import mypic6 from "../assets/mypic6.jpeg";

function Content() {
  const people = [
    { name: "Nitesh Kumar", dob: "2000-08-09", imgsrc: mypic },
    { name: "Larry Littel", dob: "1997-03-21", imgsrc: mypic1 },
    { name: "sean Walse", dob: "1998-12-03", imgsrc: mypic2 },
    { name: "Hester Hogan", dob: "1995-08-14", imgsrc: mypic6 },
    { name: "John Dackie", dob: "2001-11-03", imgsrc: mypic3 },
    { name: "Brettie Yarg", dob: "2000-06-17", imgsrc: mypic5 },
  ];
  const imgs = [mypic, mypic1, mypic2, mypic3, mypic4, mypic5, mypic6];
  const [count, setCount] = useState(people.length);
  const [birthdayPerson, setBirthdayPerson] = useState(people);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const handleTrash = (name) => {
    const updatedperson = birthdayPerson.filter(
      (person) => person.name !== name
    );
    setBirthdayPerson([...updatedperson]);
    setCount(birthdayPerson.length - 1);
  };

  const handleSubmit = () => {
    if (name !== "" && dob !== "") {
      birthdayPerson.push({
        name: name,
        dob: dob,
        imgsrc: imgs[Math.floor(Math.random() * imgs.length)],
      });
      setBirthdayPerson([...birthdayPerson]);
      hideAddPerson();
      setCount(birthdayPerson.length);
      setName("");
      setDob("");
    }
  };

  const addPerson = () => {
    setShowModal(true);
  };

  const hideAddPerson = () => {
    setShowModal(false);
  };

  const clearAll = () => {
    setBirthdayPerson([]);
    setCount("0");
  };

  const calcDays = (birthday) => {
    let date = birthday.slice(birthday.length - 2, birthday.length);
    let month = birthday.slice(birthday.length - 5, birthday.length - 3);
    let d = new Date();
    let currDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    let bdayDate = new Date(currDate.getFullYear(), month - 1, date);
    console.log(currDate.getTime(), bdayDate.getTime());
    if (currDate.getTime() === bdayDate.getTime()) return 0;
    else if (currDate.getTime() > bdayDate.getTime())
      bdayDate.setFullYear(bdayDate.getFullYear() + 1);
    let diff = bdayDate.getTime() - currDate.getTime();
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
  };

  birthdayPerson.sort((a, b) => {
    return calcDays(a.dob) - calcDays(b.dob);
  });

  return (
    <>
      <div className="modal-title title block col-xs-6">
        {count} Upcoming Birthdays
      </div>
      {birthdayPerson.map((person) => (
        <Details
          key={person.name}
          name={person.name}
          dob={person.dob}
          imgsrc={person.imgsrc}
          onClick={() => handleTrash(person.name)}
          leftDays={calcDays(person.dob)}
        />
      ))}

      <div className="btn-container">
        <Button
          onClick={addPerson}
          btnName="Add-On"
          color="springgreen"
          iconName="plus"
        />
        <Button
          onClick={clearAll}
          btnName="Clear"
          color="tomato"
          iconName="trash"
        />
      </div>
      <Modal show={showModal} onClick={handleSubmit} closeModal={hideAddPerson}>
        <div className="detailFeed">
          <div className="picture">
            <i className="fas fa-user"></i>
          </div>
          <div className="details">
            <div className="fieldName">Name</div>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="inputField"
            />

            <div className="fieldName">Birthday Date</div>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="inputField"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Content;
