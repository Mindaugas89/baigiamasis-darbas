import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { PATHS } from "../routes/consts";
import { createClient } from "../api/clients";
import styles from "./Login.module.scss";



const NewClient = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await createClient(values);
      navigate(PATHS.Home);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <h1>Add new client</h1>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            age: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.field}>
                <FormField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div className={styles.field}>
                <FormField
                  label="Surname"
                  name="surname"
                  type="text"
                  placeholder="Surname"
                />
              </div>
              <div className={styles.field}>
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className={styles.field}>
                <FormField
                  label="Age"
                  name="age"
                  type="string"
                  placeholder="Age"
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                Add new Client
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default NewClient;