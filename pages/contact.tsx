import React, { useState } from "react";
import Head from "next/head";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const checkValidity = () => {
    // Name Checker
    if (name.trim().length === 0) {
      alert("Invalid Name");
      return false;
    }

    // Age Checker
    if (age.length > 3 || parseInt(age) > 110 || parseInt(age) < 11) {
      alert("Invalid Age \nMin Age is 10");
      return false;
    }

    // Email Validity
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      alert("Invalid Email");
      return false;
    }

    // Mobile No Checker
    if (number.length != 10) {
      alert("Invalid Contat No");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkValidity()) {
      const jsonData = {
        name: name,
        age: age,
        "Phone-Number": number,
        email: email,
      };

      // Send data to the backend via POST
      fetch("http://localhost:3000/api/postcontact/", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(jsonData), // body data type must match "Content-Type" header
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Contact Form Submitted Successfully");
          setName("");
          setEmail("");
          setNumber("");
          setDesc("");
          setAge("");
        })
        .catch((error) => {
          alert("Form Not Submitted, Error= " + error);
        });
    }
  };

  const handleChange = (e: {
    target: { id: string; value: React.SetStateAction<string> };
  }) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "phone") {
      setNumber(e.target.value);
    } else if (e.target.id === "desc") {
      setDesc(e.target.value);
    } else if (e.target.id === "age") {
      setAge(e.target.value);
    }
  };

  return (
    <>
    <Head>
      <title>Contact</title>
    </Head>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your Name.."
          />

          <label htmlFor="age">Age: </label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={handleChange}
            placeholder="Your Age.."
          />

          <label htmlFor="country">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your Email.."
          />

          <label htmlFor="age">Contact No: </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={number}
            onChange={handleChange}
            placeholder="Your Number.."
          />

          <label htmlFor="desc">Want to tell Something</label>
          <textarea
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
            placeholder="Write something.."
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Contact;
