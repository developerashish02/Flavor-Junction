import { useFormik } from "formik";


const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = "Required";
    } else if (!values.firstName.length > 15) {
        errors.firstName = "Must be 15 charactes or less";
    }

    if (!values.lastName) {
        errors.lastName = "Required";
    } else if (!values.lastName.length > 20) {
        errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    return errors;
};

const SignUpPage = () => {
    // use formik hook
    const formik = useFormik({
        // initial values
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
        },
        // submission function
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));

        },
    });


    return (
        <>
            <form className="sign-up" onSubmit={formik.handleSubmit}>
                {/* email */}
                <div className="email">
                    <label htmlFor="email">Email Address </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div style={{ color: "red" }}> {formik.errors.email}</div>
                    ) : null}
                </div>

                {/* first name */}
                <div className="first__name">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formik.values.firstName}
                        id="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {formik.touched.firstName && formik.errors.firstName && (
                        <div style={{ color: "red" }}> {formik.errors.firstName}</div>
                    )}
                </div>

                <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        id="lastName"
                        onBlur={formik.handleBlur}
                    />

                    {formik.touched.lastName && formik.errors.lastName && (
                        <div style={{ color: "red" }}> {formik.errors.lastName} </div>
                    )}
                </div>

                <button type="submit" disabled={!formik.isValid}  >Submit</button>
            </form>
        </>
    );
};

export default SignUpPage;
