import React, { useState } from "react";
import Head from "next/head";
import utilStyles from "@/styles/Utilities.module.css";
import styles from "@/styles/Contact.module.css";

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
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h1 className={`${utilStyles.headFont} ${styles.contactHeading}`}>Contact Us</h1>
        <div className={styles.field}>
          <label className={utilStyles.headFont} htmlFor="fname">
            Name:{" "}
          </label>
          <input
            className={`${utilStyles.textFont} ${styles.inputTag}`}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your Name.."
          />
        </div>
        <div className={styles.field}>
          <label className={utilStyles.headFont} htmlFor="age">
            Age:{" "}
          </label>
          <input
            className={`${utilStyles.textFont} ${styles.inputTag}`}
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={handleChange}
            placeholder="Your Age.."
          />
        </div>
        <div className={styles.field}>
          <label className={utilStyles.headFont} htmlFor="country">
            Email:{" "}
          </label>
          <input
            className={`${utilStyles.textFont} ${styles.inputTag}`}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your Email.."
          />
        </div>

        <div className={styles.field}>
          <label className={utilStyles.headFont} htmlFor="age">
            Contact No:{" "}
          </label>
          <input
            className={`${utilStyles.textFont} ${styles.inputTag}`}
            type="number"
            id="phone"
            name="phone"
            value={number}
            onChange={handleChange}
            placeholder="Your Number.."
          />
        </div>
        <div className={styles.field}>
          <label className={utilStyles.headFont} htmlFor="desc">
            Want to tell Something:{" "}
          </label>
          <textarea
            className={`${utilStyles.textFont} ${styles.inputTag}`}
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
            placeholder="Write something.."
          ></textarea>
        </div>

        <input className={styles.btn} type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Contact;
