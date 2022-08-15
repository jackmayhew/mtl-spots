
import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { Stack, Button, ButtonGroup } from "@chakra-ui/react";

function upload() {
  const [form, setForm] = useState({ title: "", category: "", location: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorss, setErrorss] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createNote();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createNote = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/spots/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setIsSubmitting(false);
      // router.push("/upload");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let errs = validate();
    // setErrors(errs);
    createNote();
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const validate = () => {
  //   let err = {};

  //   if (!form.title) {
  //     err.title = "Title is required";
  //   }
  //   if (!form.description) {
  //     err.description = "Description is required";
  //   }

  //   return err;
  // };

  return (
    <div>
      <h1>Create Note</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="category"
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="location"
            onChange={handleChange}
          />

          {isSubmitting ? (
            <Button
              type="submit"
              isLoading
              loadingText="Submitting"
              colorScheme="teal"
              variant="outline"
            >
              Submit
            </Button>
          ) : (
            <Button
              type="submit"
              loadingText="Submitting"
              colorScheme="teal"
              variant="outline"
            >
              Submit
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}

export default upload;
